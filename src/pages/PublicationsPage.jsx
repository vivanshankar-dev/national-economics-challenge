import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Book, Award, Share2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';

const PublicationsPage = () => {
  const [activeTab, setActiveTab] = useState('recognition');
  const tabsRef = useRef(null);

  const tabs = [
    { id: 'recognition', label: 'Recognition' },
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
        <meta name="description" content="The NEC Pilot Cohort Booklet — an annual publication compiling the pilot writeups of the top 5 to 8 finalists each cycle." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans pb-20">
        <div className="bg-primary py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Book className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary-foreground mb-6">Publications</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Every year, the pilot writeups of NEC's top finalists are compiled into the NEC Pilot Cohort Booklet — a published record of real student-led economic interventions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={tabsRef}>
          
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

          <AnimatePresence mode="wait">

            {activeTab === 'recognition' && (
              <motion.div key="recognition" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-foreground mb-4">How Recognition Works</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">NEC does not offer cash prizes. Recognition is based on what you built and what it produced.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-b from-yellow-50 to-white p-8 rounded-3xl border border-yellow-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-yellow-700 mb-4">1st Place</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The primary winner is selected based on the combined quality of their Stage 1 proposal and Stage 2 pilot writeup. Their work is featured as the lead entry in the NEC Pilot Cohort Booklet, and they receive full NEC/YEL certification and recognition across all NEC platforms.
                    </p>
                    <ul className="text-sm font-bold text-yellow-800 space-y-2">
                      <li>✓ Lead Booklet Feature</li>
                      <li>✓ NEC/YEL Certification</li>
                      <li>✓ Official Certificate</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-slate-100 to-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-600 mb-4">2nd and 3rd Place</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Runners-up receive full publication in the Booklet, NEC/YEL certification, and highlighted recognition across all NEC platforms. Both are credited as co-authors of the published Pilot Cohort record.
                    </p>
                    <ul className="text-sm font-bold text-slate-700 space-y-2">
                      <li>✓ Full Booklet Publication</li>
                      <li>✓ NEC/YEL Certification</li>
                      <li>✓ Official Certificate</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-3xl border border-orange-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-orange-700 mb-4">Pilot Cohort (4th to 8th)</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      All remaining pilot finalists are recognized as part of the official NEC Pilot Cohort. Their writeups are published in the Booklet alongside the top 3, and they receive NEC/YEL co-certification — a credential that reflects real community impact, not just a competition placement.
                    </p>
                    <ul className="text-sm font-bold text-orange-800 space-y-2">
                      <li>✓ Full Booklet Publication</li>
                      <li>✓ NEC/YEL Co-Certification</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'booklet' && (
              <motion.div key="booklet" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="bg-foreground text-background p-12 rounded-3xl shadow-xl order-2 lg:order-1">
                    <h2 className="text-3xl font-bold mb-6 flex items-center">
                      <Book className="mr-3 w-8 h-8 text-primary" /> The NEC Pilot Cohort Booklet
                    </h2>
                    <p className="text-lg opacity-90 leading-relaxed mb-6">
                      Published annually at the end of each competition cycle, the Booklet compiles the full pilot writeups of the top 5 to 8 finalists — documenting what each team tried, what happened, and what the evidence suggests about scaling their intervention.
                    </p>
                    <div className="space-y-4 border-t border-white/20 pt-6">
                      <h4 className="font-bold text-xl">What Is Inside</h4>
                      <ul className="space-y-3 opacity-90">
                        <li className="flex items-center">✓ Full pilot writeups from all Pilot Cohort members</li>
                        <li className="flex items-center">✓ Before and after results from each community pilot</li>
                        <li className="flex items-center">✓ Judge commentary on proposal quality and pilot execution</li>
                        <li className="flex items-center">✓ Scale-up analysis for each intervention</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <h2 className="text-4xl font-bold text-foreground mb-6">What Publication Means</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Being published in the NEC Booklet is not just recognition — it is a documented record that your economic intervention was designed, piloted, and produced real results in a real community.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start">
                        <Award className="w-8 h-8 text-primary mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-lg">A Genuine Academic Credential</h4>
                          <p className="text-sm text-muted-foreground mt-1">A published pilot writeup demonstrates applied research capability and real-world impact — something that stands apart from any standard essay competition on a university application.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start">
                        <Share2 className="w-8 h-8 text-primary mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-lg">Co-Branded With YEL</h4>
                          <p className="text-sm text-muted-foreground mt-1">The Booklet is published under co-branding with Youth Economy Lab, whose chapter network made the pilots possible. Every published author is credited alongside both NEC and YEL.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'showcase' && (
              <motion.div key="showcase" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit">
                <div className="text-center bg-secondary/30 p-12 rounded-3xl border border-secondary border-dashed">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Pilot Cohort Showcase</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    The inaugural NEC Pilot Cohort Booklet (2026 Edition) will be published at the conclusion of the first competition cycle. Check back after the final results are announced to download the full record of pilot writeups and community outcomes.
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-foreground hover:bg-foreground/90 text-background" disabled>
                          <Download className="mr-2 w-5 h-5" /> Download Vol. 1 (Coming Soon)
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Available after the 2026 cycle concludes</p>
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
