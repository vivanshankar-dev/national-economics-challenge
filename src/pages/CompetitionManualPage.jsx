import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, Calendar, BookOpen, PenTool, CheckCircle, HelpCircle, Users } from 'lucide-react';
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
        <meta name="description" content="Complete guide to the National Economics Challenge — eligibility, proposal format, pilot stage, evaluation criteria, and FAQs." />
      </Helmet>
      
      <div className="min-h-screen bg-background py-16 px-4 font-sans">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border" ref={tabsRef}>
          <div className="text-center pb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Competition Manual</h1>
            <p className="text-xl text-muted-foreground">Your complete guide to the NEC — from proposal to pilot.</p>
          </div>
          
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
              
              {activeTab === 'overview' && (
                <motion.div key="overview" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="space-y-12">
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><BookOpen className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">1. Competition Overview</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      The National Economics Challenge is an applied economics project competition open to high school and undergraduate students globally. Entrants design small-scale economic interventions for real problems in underserved communities — a tool, system, or program backed by genuine economic reasoning and a concrete pilot plan.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The competition runs in two stages. Stage 1 is open to all entrants. The top 5 to 8 proposals advance to Stage 2, where finalists run a four-week live pilot in partnership with a Youth Economy Lab chapter. All pilots are documented and published. Winners are ranked on the quality of their proposal and their pilot results.
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><CheckCircle className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">2. Eligibility</h2>
                    </div>
                    <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary space-y-4">
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <div><span className="text-foreground font-medium">High School Students: </span><span className="text-muted-foreground">Currently enrolled in Grades 9 through 12 or equivalent international systems.</span></div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <div><span className="text-foreground font-medium">Undergraduate Students: </span><span className="text-muted-foreground">Currently in their 1st or 2nd year of university studies.</span></div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <div><span className="text-foreground font-medium">Teams or Individuals: </span><span className="text-muted-foreground">Proposals may be submitted individually or in teams of up to 3 students. All members must meet eligibility requirements.</span></div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <div><span className="text-foreground font-medium">Open Globally: </span><span className="text-muted-foreground">Students from any country may participate. There are no geographic restrictions.</span></div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <div><span className="text-foreground font-medium">Free to Enter: </span><span className="text-muted-foreground">There is no participation fee. The NEC is entirely free.</span></div>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'process' && (
                <motion.div key="process" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="space-y-12">
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><Calendar className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">3. Competition Timeline</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">The full competition runs over 14 weeks from the opening of submissions to the announcement of final results.</p>
                    <div className="overflow-hidden rounded-2xl border border-border">
                      <table className="w-full text-left bg-white">
                        <thead className="bg-secondary/50">
                          <tr>
                            <th className="py-4 px-6 text-foreground font-bold border-b border-border">Week</th>
                            <th className="py-4 px-6 text-foreground font-bold border-b border-border">Activity</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {[
                            ['1 to 6', 'Submission window open — Stage 1 proposals accepted'],
                            ['7', 'Judging complete — top 5 to 8 proposals selected'],
                            ['8', 'Matching — each finalist paired with a YEL chapter'],
                            ['9 to 12', 'Pilot execution — finalists run their intervention with YEL communities'],
                            ['13', 'Results writeups submitted by all finalists'],
                            ['14', 'Final judging complete — winners announced and all writeups published'],
                          ].map(([week, activity]) => (
                            <tr key={week} className="hover:bg-muted/30 transition-colors">
                              <td className="py-4 px-6 font-bold text-primary whitespace-nowrap">{week}</td>
                              <td className="py-4 px-6 text-muted-foreground">{activity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 italic">Total duration: 14 weeks from launch to results. Specific calendar dates will be published at the start of each cycle.</p>
                  </section>

                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><PenTool className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">4. Stage 1: Proposal Format</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">Every Stage 1 proposal must address the following four components. The structure is flexible — these do not need to be separate sections — but all four must be clearly present.</p>
                    <div className="space-y-6 pl-4 border-l-2 border-primary/20">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Component 1: The Problem</h3>
                        <p className="text-muted-foreground mt-1">Identify a specific, real economic problem in an underserved community. Be precise about which community, what the problem is, why it exists, and what economic mechanism underlies it.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Component 2: The Intervention</h3>
                        <p className="text-muted-foreground mt-1">Describe your proposed solution — a tool, system, or program that directly addresses the problem. It must be concrete enough that someone reading it could understand exactly what would happen in the real world.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Component 3: The Economic Reasoning</h3>
                        <p className="text-muted-foreground mt-1">Explain why your intervention should work. What market failure or structural issue are you correcting? What is the mechanism by which your intervention produces the intended outcome? Use economic theory or evidence.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Component 4: The Pilot Plan</h3>
                        <p className="text-muted-foreground mt-1">Describe what a four-week remote pilot would look like. Who are the participants, how would they be reached, what would you measure, and what would success look like? This section is judged on realism, not scale of ambition.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Format Requirements</h3>
                        <p className="text-muted-foreground mt-1">1,500 to 2,500 words, excluding bibliography. 12pt Times New Roman or Arial, double-spaced. PDF only. Citations in APA, MLA, or Harvard, used consistently throughout.</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><Users className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">5. Stage 2: Community Pilot</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">The top 5 to 8 proposals from Stage 1 advance to the pilot stage. Each finalist is matched with a YEL chapter whose community fits their proposal's target group.</p>
                    <div className="space-y-4 pl-4 border-l-2 border-primary/20">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">What Happens in the Pilot</h3>
                        <p className="text-muted-foreground mt-1">The matched YEL chapter recruits 10 to 20 local participants and assigns a point of contact who coordinates with the finalist throughout. The finalist runs their intervention with that group over four weeks. Progress is tracked throughout, capturing both quantitative and qualitative changes. Everything runs remotely — no travel required.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Stage 2 Deliverable</h3>
                        <p className="text-muted-foreground mt-1">A short before/after writeup documenting what was tried, what happened, and what it would take to run at larger scale. Submitted at the end of Week 13.</p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'evaluation' && (
                <motion.div key="evaluation" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="space-y-12">
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><Info className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">6. Stage 1 Evaluation Criteria</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">All proposals are judged double-blind by a panel of economics professors and researchers.</p>
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
                            <td className="py-4 px-6 font-bold">Economic Reasoning</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">Correctness and depth of the economic analysis. Does the student correctly identify the market failure or structural issue and apply appropriate theory to the proposed solution?</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">40%</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-bold">Feasibility</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">Could this proposal realistically be piloted over four weeks, remotely, with 10 to 20 participants? Is the pilot plan specific, executable, and grounded in what the YEL chapter partnership can deliver?</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">30%</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-bold">Potential Impact</td>
                            <td className="py-4 px-6 text-muted-foreground text-sm">If the intervention worked, would it produce a meaningful, measurable change for the target community? Is the outcome well-defined and relevant?</td>
                            <td className="py-4 px-6 font-bold text-primary text-right">30%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><Info className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">7. Stage 2 Evaluation and Winners</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">All 5 to 8 finalists are ranked based on their pilot results and before/after writeup. Final rankings are announced in Week 14.</p>
                    <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary space-y-4 mb-6">
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-3 text-lg">1st</span>
                        <div><span className="text-foreground font-medium">Primary Winner — </span><span className="text-muted-foreground">cash prize and full NEC/YEL recognition.</span></div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-3 text-lg">2nd & 3rd</span>
                        <div><span className="text-foreground font-medium">Runners-up — </span><span className="text-muted-foreground">cash prizes and NEC/YEL recognition.</span></div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary font-bold mr-3 text-lg">4th–8th</span>
                        <div><span className="text-foreground font-medium">Pilot Cohort — </span><span className="text-muted-foreground">all receive NEC/YEL certification and have their writeup published on the NEC platform.</span></div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">Stage 2 writeups are evaluated on honesty of reporting, quality of evidence gathered during the pilot, and clarity of the scale-up analysis. A pilot that partially worked with rigorous documentation scores higher than one that overstates its results.</p>
                  </section>

                  <section className="bg-destructive/5 p-8 rounded-3xl border border-destructive/20">
                    <h2 className="text-2xl font-bold text-destructive mb-4">8. Academic Integrity</h2>
                    <p className="text-foreground font-medium mb-4">We maintain a zero-tolerance policy for academic dishonesty.</p>
                    <p className="text-muted-foreground mb-3">Plagiarism — copying text without citation or claiming others' ideas as your own — results in immediate disqualification. The use of Large Language Models to write, outline, or heavily draft your proposal is strictly prohibited; all submissions are run through AI-detection software. Submitting false or fabricated pilot data is a permanent disqualification offence; pilot outcomes are verified with the paired YEL chapter.</p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-sm font-bold text-destructive underline decoration-dotted underline-offset-4 cursor-help">
                          What happens if I violate these rules?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-sm">You will be permanently banned from future NEC events, your school may be notified, and fabricated pilot data is reported to the paired YEL chapter.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </section>
                </motion.div>
              )}

              {activeTab === 'faq' && (
                <motion.div key="faq" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="space-y-12">
                  <section>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-xl mr-4"><HelpCircle className="w-6 h-6 text-primary" /></div>
                      <h2 className="text-3xl font-bold">9. Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left text-lg font-bold">Do I need a background in economics to enter?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          No formal background is required, but you need to engage seriously with economic reasoning in your proposal. Judges are not looking for students who can recite theory — they want students who can apply economic thinking to a real problem and design something that could plausibly work. Students with practical knowledge of a community problem and the curiosity to analyze it rigorously often produce the strongest proposals.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left text-lg font-bold">What happens if my proposal is selected as a finalist?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          You will be matched with a Youth Economy Lab chapter in Week 8. A chapter member will serve as your local point of contact for the four-week pilot. You run your intervention remotely — YEL handles community access and participant recruitment. At the end of Week 13, you submit a before/after writeup. Results are published in Week 14.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left text-lg font-bold">Can I submit as a team?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          Yes. Teams of up to 3 students are permitted. All members must be listed on the submission and meet eligibility requirements. If the team advances to Stage 2, all members participate in running the pilot and all receive NEC/YEL certification upon completion.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left text-lg font-bold">What if my pilot does not produce the results I expected?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          That is fine — and in many cases valuable. Stage 2 judging specifically rewards honest, rigorous documentation over inflated results. A pilot that reports clearly on what did not work, and explains why, scores higher than one that overstates its outcomes. The goal is to learn something real.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-left text-lg font-bold">Is there a participation fee?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          No. The National Economics Challenge is entirely free to enter.
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
