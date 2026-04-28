
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Book, Award, Share2, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';

const PublicationsPage = () => {
  const [activeTab, setActiveTab] = useState('awards');
  const tabsRef = useRef(null);

  const tabs = [
    { id: 'awards', label: 'Awards System' },
    { id: 'booklet', label: 'The Booklet' },
    { id: 'showcase', label: 'Showcase' }
  ];

  const handleTabChange = (id) => {
    setActiveTab(id);
    if (tabsRef.current) {
      const yOffset = tabsRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  return (
    <>
      <Helmet>
        <title>Publications | National Economics Challenge</title>
        <meta name="description" content="Learn about the National Economics Booklet, publication criteria, and the benefits of becoming a published young scholar." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans pb-20">
        {/* Header */}
        <div className="bg-primary py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Book className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary-foreground mb-6">Publications & Awards</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Recognizing intellectual rigor and ensuring the best ideas reach the widest possible audience. Being published in the NEC is a mark of exceptional academic capability.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={tabsRef}>
          
          {/* Smooth Tabs Navigation */}
          <div className="flex overflow-x-auto hide-scrollbar justify-center mb-12 border-b border-border">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`pb-4 text-lg font-bold transition-colors relative whitespace-nowrap ${
                    activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="publications-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'awards' && (
              <motion.div
                key="awards"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-foreground mb-4">The Tiered Recognition System</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We reward excellence through cash prizes and the prestige of official academic publication.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-b from-yellow-50 to-white p-8 rounded-3xl border border-yellow-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Star className="w-24 h-24 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-700 mb-2">Grand Prize</h3>
                    <p className="text-4xl font-black text-foreground mb-4">$250</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Awarded to the single best essay of the year. The winner receives a cash prize, is featured as the lead essay in the National Economics Booklet, and is immortalized in our digital archive.
                    </p>
                    <ul className="text-sm font-bold text-yellow-800 space-y-2">
                      <li>✓ Lead Booklet Feature</li>
                      <li>✓ Official Certificate</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-slate-100 to-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-600 mb-2">Second Place</h3>
                    <p className="text-4xl font-black text-foreground mb-4">$100</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Awarded to the runner-up for outstanding scholarship. Includes full publication, a cash prize, and highlighted recognition across all NEC platforms.
                    </p>
                    <ul className="text-sm font-bold text-slate-700 space-y-2">
                      <li>✓ Full Booklet Publication</li>
                      <li>✓ Official Certificate</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-3xl border border-orange-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-orange-700 mb-2">Top 10 Finalists</h3>
                    <p className="text-4xl font-black text-foreground mb-4">Published</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The top 10 essays represent the top 1% of submissions. They are published in full in the official booklet and presented at live community workshops through our partner organisations, receiving high commendation.
                    </p>
                    <ul className="text-sm font-bold text-orange-800 space-y-2">
                      <li>✓ Full Booklet Publication</li>
                      <li>✓ Translation Eligibility</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'booklet' && (
              <motion.div
                key="booklet"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="bg-foreground text-background p-12 rounded-3xl shadow-xl order-2 lg:order-1">
                    <h2 className="text-3xl font-bold mb-6 flex items-center">
                      <Book className="mr-3 w-8 h-8 text-primary" /> The National Economics Booklet
                    </h2>
                    <p className="text-lg opacity-90 leading-relaxed mb-6">
                      Our flagship annual publication. It compiles the winning essays, extensive judge commentary, and high-quality economic data visualizations into a single, cohesive, professionally formatted volume.
                    </p>
                    <div className="space-y-4 border-t border-white/20 pt-6">
                      <h4 className="font-bold text-xl">What's Inside?</h4>
                      <ul className="space-y-3 opacity-90">
                        <li className="flex items-center">✓ Foreword by leading economics professors</li>
                        <li className="flex items-center">✓ Unabridged texts of the Top 10 Essays</li>
                        <li className="flex items-center">✓ Expert commentary on why each essay succeeded</li>
                        <li className="flex items-center">✓ Policy implication summaries</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <h2 className="text-4xl font-bold text-foreground mb-6">What Does It Mean to Be Published?</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Publication is the ultimate validation of your hard work. It transforms a homework assignment into a citable academic resource.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start">
                        <Award className="w-8 h-8 text-primary mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-lg">College Admissions Advantage</h4>
                          <p className="text-sm text-muted-foreground mt-1">A published paper demonstrates high-level research capabilities and intellectual curiosity, standing out significantly on university applications.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start">
                        <Share2 className="w-8 h-8 text-primary mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-lg">Targeted Reach</h4>
                          <p className="text-sm text-muted-foreground mt-1">Through our community outreach programme, the booklet is shared with partner organisations who bring student research directly to underprivileged communities through live workshops and guest speaker sessions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'showcase' && (
              <motion.div
                key="showcase"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="text-center bg-secondary/30 p-12 rounded-3xl border border-secondary border-dashed">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Featured Publications Showcase</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    The inaugural Volume 1: 2026 Edition is currently in progress. Check back after September 15, 2026, to download the comprehensive booklet and read the works of the world's brightest young economists.
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-foreground hover:bg-foreground/90 text-background" disabled>
                          <Download className="mr-2 w-5 h-5" /> Download Vol. 1 (Coming Soon)
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Available September 2026</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
};

export default PublicationsPage;
