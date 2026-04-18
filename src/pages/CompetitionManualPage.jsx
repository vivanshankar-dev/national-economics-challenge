
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, Calendar, BookOpen, PenTool, CheckCircle, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';

const CompetitionManualPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const tabsRef = useRef(null);

  const tabs = [
    { id: 'overview', label: 'Overview & Eligibility' },
    { id: 'process', label: 'Timeline & Process' },
    { id: 'evaluation', label: 'Evaluation & Rules' },
    { id: 'faq', label: 'FAQs' }
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
        <title>Competition Manual | National Economics Challenge</title>
        <meta name="description" content="Step-by-step guide on how the National Economics Challenge works, eligibility, rules, evaluation, and FAQs." />
      </Helmet>
      
      <div className="min-h-screen bg-background py-16 px-4 font-sans">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border" ref={tabsRef}>
          <div className="text-center pb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Competition Manual</h1>
            <p className="text-xl text-muted-foreground">Your complete guide to participating, writing, and winning.</p>
          </div>
          
          {/* Smooth Tabs Navigation */}
          <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center mb-10 border-b border-border">
            <div className="flex space-x-6 md:space-x-8 px-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`pb-4 text-sm md:text-base font-bold transition-colors relative whitespace-nowrap ${
                    activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="manual-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="text-foreground">
            <AnimatePresence mode="wait">
              
              {/* Tab 1: Overview & Eligibility */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-12"
                >
                  {/* Overview */}
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">1. Competition Overview</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The National Economics Challenge (NEC) is a premier academic essay competition. We invite students to analyze complex macroeconomic and microeconomic issues, formulate original arguments, and present their findings. Our goal is to test not just your theoretical knowledge, but your ability to apply economics to real-world scenarios clearly and persuasively.
                    </p>
                  </section>

                  {/* Eligibility */}
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">2. Eligibility Requirements</h2>
                    </div>
                    <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-primary font-bold mr-2">•</span>
                          <span className="text-foreground font-medium">High School Students:</span> 
                          <span className="text-muted-foreground ml-2">Currently enrolled in Grades 9 through 12 (or equivalent international systems).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary font-bold mr-2">•</span>
                          <span className="text-foreground font-medium">Undergraduate Students:</span> 
                          <span className="text-muted-foreground ml-2">Currently in their 1st or 2nd year of university studies.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary font-bold mr-2">•</span>
                          <span className="text-foreground font-medium">Individual Submissions:</span> 
                          <span className="text-muted-foreground ml-2">All work must be done independently. Group projects or co-authored essays are not permitted.</span>
                        </li>
                      </ul>
                    </div>
                  </section>
                </motion.div>
              )}

              {/* Tab 2: Timeline & Process */}
              {activeTab === 'process' && (
                <motion.div
                  key="process"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-12"
                >
                  {/* Timeline */}
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">3. Timeline & Important Dates</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-border p-6 rounded-2xl bg-background">
                        <p className="text-sm font-bold text-muted-foreground uppercase mb-1">Submission Deadline</p>
                        <p className="text-2xl font-bold text-destructive">August 15, 2026</p>
                        <p className="text-sm text-muted-foreground mt-2">11:59 PM UTC. Late submissions will not be accepted under any circumstances.</p>
                      </div>
                      <div className="border border-border p-6 rounded-2xl bg-background">
                        <p className="text-sm font-bold text-muted-foreground uppercase mb-1">Results Announced</p>
                        <p className="text-2xl font-bold text-primary">September 15, 2026</p>
                        <p className="text-sm text-muted-foreground mt-2">Winners and Top 10 finalists will be published on our platform and notified via email.</p>
                      </div>
                    </div>
                  </section>

                  {/* Submission Process */}
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4">
                        <PenTool className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">4. Submission Process & Guidelines</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">Follow these precise steps to ensure your essay is formatted correctly and accepted by our system.</p>
                    
                    <div className="space-y-6 pl-4 border-l-2 border-primary/20">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Step 1: Choose a Prompt</h3>
                        <p className="text-muted-foreground mt-1">Select ONE prompt from the official Prompt Bank. You may adapt the prompt to focus on a specific country, industry, or policy if relevant.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Step 2: Write & Format</h3>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-1">
                          <li><strong>Word Count:</strong> 1,200 to 1,800 words (excluding bibliography).</li>
                          <li><strong>Typography:</strong> 12pt Times New Roman or Arial, double-spaced.</li>
                          <li><strong>File Type:</strong> Export your final document as a PDF only.</li>
                          <li><strong>Citations:</strong> Use APA, MLA, or Harvard citation styles consistently.</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Step 3: Submit Online</h3>
                        <p className="text-muted-foreground mt-1">Create an account, navigate to your Dashboard, fill in your details, check the originality declaration, and upload your PDF before the deadline.</p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {/* Tab 3: Evaluation & Rules */}
              {activeTab === 'evaluation' && (
                <motion.div
                  key="evaluation"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-12"
                >
                  {/* Evaluation Criteria */}
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4">
                        <Info className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">5. Evaluation Criteria</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">Our judges review essays blindly, focusing on the following core areas:</p>
                    
                    <div className="overflow-hidden rounded-2xl border border-border">
                      <table className="w-full text-left bg-white">
                        <thead className="bg-secondary/50">
                          <tr>
                            <th className="py-4 px-6 text-foreground font-bold border-b border-border">Criteria</th>
                            <th className="py-4 px-6 text-foreground font-bold border-b border-border">Description</th>
                            <th className="py-4 px-6 text-primary font-bold border-b border-border text-right">Weight</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-bold">Economic Analysis</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">Demonstrated understanding of economic theories, models, and mechanisms.</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">30%</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-bold">Evidence & Research</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">Quality of data, historical examples, and academic literature used to back claims.</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">25%</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-bold">Originality</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">Unique perspectives, novel synthesis of ideas, or innovative policy solutions.</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">20%</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-bold">Clarity & Structure</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">Logical flow of arguments, clear thesis statement, and persuasive writing style.</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">15%</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-bold">Formatting & Citations</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">Adherence to word count, spacing, and proper academic citation standards.</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">10%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Academic Integrity */}
                  <section className="bg-destructive/5 p-8 rounded-3xl border border-destructive/20">
                    <h2 className="text-2xl font-bold text-destructive mb-4">6. Academic Integrity Rules</h2>
                    <p className="text-foreground font-medium mb-4">We maintain a zero-tolerance policy for academic dishonesty.</p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
                      <li><strong>Plagiarism:</strong> Copying text without proper citation or claiming others' ideas as your own will result in immediate disqualification.</li>
                      <li><strong>AI Generation:</strong> The use of Large Language Models (e.g., ChatGPT, Claude) to write, outline, or heavily edit your essay is strictly prohibited. All essays are run through advanced AI-detection software.</li>
                    </ul>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-sm font-bold text-destructive underline decoration-dotted underline-offset-4 cursor-help">
                          What happens if I violate these rules?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-sm">You will be permanently banned from future NEC events, and your school may be notified.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </section>
                </motion.div>
              )}

              {/* Tab 4: FAQ */}
              {activeTab === 'faq' && (
                <motion.div
                  key="faq"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-12"
                >
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4">
                        <HelpCircle className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">7. Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left text-lg font-bold">Can I submit more than one essay?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          No. To ensure fairness and focus, each participant may only submit ONE essay answering ONE prompt per competition cycle. Focus your time and energy on crafting a single exceptional piece of writing.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left text-lg font-bold">Is there a participation fee?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          No. The National Economics Challenge is entirely free to enter. We believe in democratizing access to economic education without financial barriers.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left text-lg font-bold">What formatting style should I use for citations?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          We accept APA, MLA, or Harvard citation styles. The most important thing is that you use one style consistently throughout your entire essay and provide a comprehensive bibliography at the end (which does not count towards the word limit).
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left text-lg font-bold">Do graphs or charts count towards the word count?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          No, data visualizations, charts, tables, and their direct captions do not count towards the 1,200-1,800 word limit. We highly encourage the use of relevant data to support your arguments.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionManualPage;
