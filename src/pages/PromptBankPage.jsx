import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Filter, AlertTriangle, RefreshCw } from 'lucide-react';
import PromptCard from '@/components/PromptCard';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PromptBankPage = () => {
  const { toast } = useToast();
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Inflation', 'Education', 'Labour Markets', 'Inequality', 'Development', 'Housing', 'Technology', 'Environment'];

  const fetchPrompts = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    try {
      console.log('Initiating Supabase fetch for Prompts...');
      
      const { data, error, status } = await supabase
        .from('prompts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(`❌ Supabase fetch error [Status ${status}]:`, error.message, error.details);
        throw new Error(error.message || 'Failed to fetch prompts from the database.');
      }

      console.log('✅ Successfully fetched prompts:', data?.length || 0);
      setPrompts(data || []);
      
    } catch (error) {
      console.error('❌ Error in fetchPrompts execution:', error);
      const errorMsg = error.message || 'A network or database connection error occurred.';
      setFetchError(errorMsg);
      setPrompts([]); 
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to connect to the database. Check your network.",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchPrompts();
  }, [fetchPrompts]);

  const filteredPrompts = selectedCategory === 'All'
    ? prompts
    : prompts.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Prompt Bank - National Economics Challenge</title>
        <meta name="description" content="Browse our extensive collection of economics essay prompts. Choose from topics in inflation, education, labor markets, inequality, and more." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <BookOpen className="h-20 w-20 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Prompt Bank</h1>
              <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-blue-50">
                Curated essay prompts designed to spark critical thinking and rigorous analysis. 
                Explore trade-offs, question assumptions, and apply economic theory to contemporary issues.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2 min-w-fit">
                <Filter className="h-5 w-5 text-gray-500" />
                <h2 className="text-sm font-bold uppercase text-gray-500 tracking-wider">Filter Topics:</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-emerald-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="text-center py-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                <p className="text-gray-500">Retrieving prompts from database...</p>
              </div>
            ) : fetchError ? (
              <div className="text-center py-20 bg-red-50 rounded-xl border border-red-200">
                <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Failed to Load Prompts</h3>
                <p className="text-red-600 mb-6 max-w-xl mx-auto">{fetchError}</p>
                <Button 
                  onClick={fetchPrompts}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Retry Connection
                </Button>
              </div>
            ) : (
              <>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredPrompts.map((prompt) => (
                    <motion.div key={prompt.id} variants={itemVariants} className="h-full">
                      <PromptCard prompt={prompt} />
                    </motion.div>
                  ))}
                </motion.div>

                {filteredPrompts.length === 0 && !fetchError && (
                  <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-100 mt-4">
                    <p className="text-gray-500 text-lg">No prompts found for this category.</p>
                    <button 
                      onClick={() => setSelectedCategory('All')}
                      className="mt-4 text-emerald-600 font-semibold hover:underline"
                    >
                      View all prompts
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default PromptBankPage;