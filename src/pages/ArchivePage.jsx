
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Database, Lock as LockOpen, TrendingUp, Filter, XCircle, FileText, Download } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const ArchivePage = () => {
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('submissions')
        .select(`
          *,
          prompts (
            title,
            category
          )
        `)
        .eq('status', 'approved') // Only show approved/published submissions in archive
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching archive:', error);
      toast({
        title: "Error Loading Archive",
        description: "Could not load past submissions. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedYear('All');
    setSelectedCategory('All');
    setSelectedLanguage('English');
  };

  // Derive filter options dynamically from data if needed, or hardcode typical ones
  const categories = ['All', 'Macroeconomics', 'Microeconomics', 'Policy', 'International Trade'];
  const years = ['All', '2026'];
  const languages = ['English', 'Hindi', 'Tamil', 'Malayalam'];

  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = sub.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sub.prompts?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || sub.prompts?.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || new Date(sub.created_at).getFullYear().toString() === selectedYear;
    // Assuming DB has a language field, if not, default to English for now
    const subLanguage = sub.language || 'English';
    const matchesLanguage = selectedLanguage === 'All' || subLanguage === selectedLanguage;

    return matchesSearch && matchesCategory && matchesYear && matchesLanguage;
  });

  return (
    <>
      <Helmet>
        <title>The Archive | National Economics Challenge</title>
        <meta name="description" content="Explore the open-access archive of past National Economics Challenge winning essays and student scholarship." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans pb-24">
        {/* Header */}
        <div className="bg-foreground text-background py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Database className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">The Open Archive</h1>
            <p className="text-xl max-w-2xl mx-auto text-muted">
              A permanent, fully searchable, open-access record of exceptional student scholarship. We preserve knowledge to inspire future generations.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why The Archive Matters</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Too often, brilliant student essays are graded and forgotten in a digital drawer. The Archive ensures that rigorous research lives on as a public good.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By reading past entries, new participants can understand the level of rigor required, observe evolving economic trends, and learn how to structure persuasive arguments. It is a living library of youthful economic thought.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard title="Open Access" description="Free to read, download, and reference forever without paywalls." />
              <FeatureCard title="Fully Searchable" description="Find exact essays by keyword, topic, or author." />
              <FeatureCard title="Categorized Data" description="Structured logically by macroeconomic and microeconomic themes." />
              <FeatureCard title="Tracking Trends" description="Observe how student perspectives on global crises shift over years." />
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border mb-12 sticky top-24 z-30">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center">
                <Filter className="mr-2 w-6 h-6 text-primary" /> Explore Submissions
              </h2>
              <Button variant="ghost" onClick={handleClearFilters} className="text-muted-foreground hover:text-destructive">
                <XCircle className="w-4 h-4 mr-2" /> Clear Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search titles, authors..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" 
                />
              </div>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="All">Year: All</option>
                {years.filter(y => y !== 'All').map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="All">Category: All</option>
                {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="All">Language: All</option>
                {languages.filter(l => l !== 'All').map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>
          
          {/* Results Area */}
          <div className="min-h-[400px]">
            {loading ? (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading archive database...</p>
              </div>
            ) : filteredSubmissions.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubmissions.map((sub) => (
                  <div key={sub.id} className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full mb-3">
                        {sub.prompts?.category || 'General'}
                      </span>
                      <h3 className="text-xl font-bold text-foreground line-clamp-2" title={sub.prompts?.title}>
                        {sub.prompts?.title || 'Archived Submission'}
                      </h3>
                    </div>
                    <div className="text-sm text-muted-foreground mb-6 flex-grow">
                      <p className="font-semibold text-foreground">{sub.full_name}</p>
                      <p>{sub.school}</p>
                      <p>{new Date(sub.created_at).toLocaleDateString()}</p>
                    </div>
                    <a href={sub.essay_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <FileText className="w-4 h-4 mr-2" /> Read Essay
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-border">
                <LockOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-3">No public submissions found</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  {searchTerm || selectedCategory !== 'All' 
                    ? "Try adjusting your filters or search terms."
                    : "The archive will officially populate with published essays after the culmination of the inaugural 2026 competition."}
                </p>
                {(searchTerm || selectedCategory !== 'All' || selectedYear !== 'All') && (
                  <Button onClick={handleClearFilters} variant="outline">Clear All Filters</Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchivePage;
