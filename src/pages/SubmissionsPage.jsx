import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Award, 
  AlertTriangle, 
  CheckSquare, 
  Calendar,
  Scale,
  Gavel,
  Mail,
  Menu,
  Download,
  Upload,
  Crown,
  Star,
  ChevronRight
} from 'lucide-react';
import SubmissionForm from '@/components/SubmissionForm';
import { Button } from '@/components/ui/button';

const SubmissionsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'overview', title: '1. Overview', icon: BookOpen },
    { id: 'eligibility', title: '2. Eligibility', icon: Users },
    { id: 'timeline', title: '3. Important Dates', icon: Calendar },
    { id: 'guidelines', title: '4. Essay Guidelines', icon: FileText },
    { id: 'prompts', title: '5. Prompt Selection', icon: CheckSquare },
    { id: 'submission', title: '6. Submission Process', icon: CheckSquare },
    { id: 'evaluation', title: '7. Evaluation Criteria', icon: Scale },
    { id: 'awards', title: '8. Awards & Recognition', icon: Award },
    { id: 'integrity', title: '9. Academic Integrity', icon: AlertTriangle },
    { id: 'terms', title: '10. Terms & Conditions', icon: Gavel },
    { id: 'contact', title: '11. Contact', icon: Mail },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Sticky header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Competition Manual & Submission - National Economics Challenge</title>
        <meta name="description" content="Official Competition Manual for the National Economics Challenge. Read guidelines, eligibility, and submit your essay." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen font-sans">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-900 to-blue-900 text-white pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
              Competition Manual
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              The definitive guide to participating in the inaugural 2026 National Economics Challenge. 
              Review these requirements carefully before submitting your work.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sticky Sidebar Navigation (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <nav className="sticky top-24 space-y-1 bg-white rounded-xl shadow-lg shadow-gray-200/50 p-4 border border-gray-100 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between px-3 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Contents</h3>
                </div>
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                        isActive 
                          ? 'bg-emerald-50 text-emerald-700 shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className={`mr-3 h-4 w-4 transition-colors ${isActive ? 'text-emerald-600' : 'text-gray-400 group-hover:text-gray-500'}`} />
                      {section.title}
                    </button>
                  );
                })}
                <div className="mt-6 pt-6 border-t border-gray-100 px-1">
                  <Button 
                    onClick={() => scrollToSection('submission-form')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    Submit Essay Now
                  </Button>
                </div>
              </nav>
            </aside>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden mb-6 sticky top-20 z-30">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200">
                <span className="font-semibold text-gray-900 truncate pr-4">
                  {sections.find(s => s.id === activeSection)?.title || 'Navigation'}
                </span>
                <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white border-t border-gray-100 shadow-xl rounded-b-lg overflow-hidden absolute w-full z-40"
                  >
                    <div className="max-h-[60vh] overflow-y-auto">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                        >
                          {section.title}
                        </button>
                      ))}
                    </div>
                    <div className="p-4 bg-gray-50">
                      <Button onClick={() => scrollToSection('submission-form')} className="w-full bg-emerald-600">
                        Jump to Submission
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Content Area */}
            <main className="lg:col-span-9 space-y-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* 1. Overview */}
                <motion.section id="overview" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">1. Overview</h2>
                    </div>
                    <div className="prose prose-blue max-w-none text-gray-600">
                      <p className="mb-4">
                        The National Economics Challenge invites students from across the country to engage with pressing economic issues through rigorous analysis and creative thinking. This competition aims to foster a deeper understanding of economic principles and their application to real-world problems.
                      </p>
                      <p>
                        We utilize a combination of <span className="font-bold text-emerald-600">monetary awards and publication</span> to recognize excellence:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><span className="font-bold text-yellow-600">Top Winners</span> receive cash prizes up to $250.</li>
                        <li>The <span className="font-bold text-indigo-600">Top 10 Finalists</span> are published in the <em>National Economics Booklet</em>, a curated research journal distributed regionally.</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* 2. Eligibility */}
                <motion.section id="eligibility" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-emerald-100 p-3 rounded-xl">
                        <Users className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">2. Eligibility</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                          <CheckSquare className="h-5 w-5 mr-2 text-emerald-600" />
                          Who Can Participate?
                        </h3>
                        <ul className="space-y-3 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            High school students (Grades 9-12)
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            Undergraduate students (Years 1-2)
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            Students from any recognized institution worldwide
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            Individual submissions only (no group work)
                          </li>
                        </ul>
                      </div>
                      <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                          Restrictions
                        </h3>
                        <ul className="space-y-3 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            One submission per student per year
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            Work must be unpublished elsewhere
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 3. Important Dates */}
                <motion.section id="timeline" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-indigo-100 p-3 rounded-xl">
                        <Calendar className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">3. Important Dates</h2>
                    </div>
                    <div className="space-y-4">
                      
                      <div className="flex flex-col md:flex-row gap-6 items-start p-4 rounded-xl bg-gradient-to-r from-red-50 to-transparent border border-red-100">
                        <div className="w-full md:w-48 bg-red-100 text-red-700 font-bold py-2 px-4 rounded-lg text-center shadow-sm">
                          Aug 15, 2026
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900 text-lg">Final Submission Deadline</h4>
                            <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full uppercase tracking-wide">Strict</span>
                          </div>
                          <p className="text-gray-600 mt-1">All essays must be submitted by 11:59 PM UTC. Late submissions will not be accepted under any circumstances.</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-start p-4 rounded-xl border border-transparent hover:bg-gray-50 hover:border-gray-200 transition-all">
                        <div className="w-full md:w-48 bg-emerald-50 text-emerald-700 font-bold py-2 px-4 rounded-lg text-center shadow-sm">
                          Sep 15, 2026
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Winners Announced</h4>
                          <p className="text-gray-600 mt-1">Results published on the official website. Winners will be contacted via email.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 4. Guidelines */}
                <motion.section id="guidelines" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-orange-100 p-3 rounded-xl">
                        <FileText className="h-6 w-6 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">4. Essay Guidelines</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Formatting Rules</h3>
                        <ul className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">1</span>
                            <span className="text-gray-600 text-sm"><strong>Word Count:</strong> 1,200 - 1,800 words (excluding references, abstract, and appendices).</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">2</span>
                            <span className="text-gray-600 text-sm"><strong>Font:</strong> Times New Roman or Arial, 12pt size, black ink only.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">3</span>
                            <span className="text-gray-600 text-sm"><strong>Spacing:</strong> Double-spaced with standard 1-inch margins on all sides.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">4</span>
                            <span className="text-gray-600 text-sm"><strong>File Format:</strong> PDF file format ONLY. Other formats will be rejected.</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Structural Requirements</h3>
                        <ul className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">A</span>
                            <span className="text-gray-600 text-sm"><strong>Abstract:</strong> Include a 150-200 word abstract at the very beginning of your document.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">B</span>
                            <span className="text-gray-600 text-sm"><strong>Citations:</strong> Use APA, MLA, or Harvard citation style consistently throughout the essay.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">C</span>
                            <span className="text-gray-600 text-sm"><strong>Anonymity:</strong> Do NOT include your name or school in the essay file itself (header/footer). This ensures blind review.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 5. Prompt Selection */}
                <motion.section id="prompts" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-teal-100 p-3 rounded-xl">
                        <CheckSquare className="h-6 w-6 text-teal-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">5. Prompt Selection</h2>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Participants must choose <strong>ONE</strong> prompt from the official Prompt Bank. Essays that do not address one of the provided prompts will be disqualified.
                    </p>
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                      <h4 className="font-bold text-teal-900 mb-2 flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Note on Adaptation
                      </h4>
                      <p className="text-sm text-teal-800 leading-relaxed">
                        While you must stick to the core topic of the chosen prompt, you are encouraged to narrow the scope or focus on a specific region, industry, or time period to provide a more detailed analysis. For example, if answering a prompt about "Inflation," you might focus specifically on "Inflation dynamics in emerging markets post-2020."
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* 6. Submission Process */}
                <motion.section id="submission" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Download className="h-6 w-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">6. Submission Process</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                          <p className="text-gray-900 font-medium">Prepare Your File</p>
                          <p className="text-sm text-gray-500 mt-1">Save your essay as a PDF. Filename format: <code>Title_PromptCategory.pdf</code>.</p>
                        </div>
                      </div>
                      <div className="w-px h-6 bg-gray-200 ml-4"></div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                          <p className="text-gray-900 font-medium">Fill the Form</p>
                          <p className="text-sm text-gray-500 mt-1">Complete the online submission form located at the bottom of this page.</p>
                        </div>
                      </div>
                      <div className="w-px h-6 bg-gray-200 ml-4"></div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                          <p className="text-gray-900 font-medium">Verify & Submit</p>
                          <p className="text-sm text-gray-500 mt-1">Check the "Declaration of Originality" box and hit Submit. Wait for the success message.</p>
                        </div>
                      </div>
                      <div className="w-px h-6 bg-gray-200 ml-4"></div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                        <div>
                          <p className="text-gray-900 font-medium">Confirmation</p>
                          <p className="text-sm text-gray-500 mt-1">You will receive an on-screen confirmation with a unique Reference ID. Keep this for your records.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 7. Evaluation Criteria */}
                <motion.section id="evaluation" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-violet-100 p-3 rounded-xl">
                        <Scale className="h-6 w-6 text-violet-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">7. Evaluation Criteria</h2>
                    </div>
                    <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Criterion</th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Weight</th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Economic Analysis</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-violet-600 font-bold">30%</td>
                            <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">Depth of understanding and correct application of economic theories and models.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Evidence & Research</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-violet-600 font-bold">25%</td>
                            <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">Use of relevant data, case studies, and credible academic sources to support arguments.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Originality</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-violet-600 font-bold">20%</td>
                            <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">Novelty of the argument, perspective, or solution proposed.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Clarity & Structure</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-violet-600 font-bold">15%</td>
                            <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">Logical flow, coherence, and effectiveness of communication.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Formatting</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-violet-600 font-bold">10%</td>
                            <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">Adherence to style guide, citations, and submission requirements.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.section>

                {/* 8. Awards */}
                <motion.section id="awards" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-sm border border-indigo-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-indigo-100/50">
                      <div className="bg-indigo-100 p-3 rounded-xl">
                        <Award className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">8. Awards & Recognition</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Top Winners */}
                      <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-indigo-100 relative overflow-hidden">
                         <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">CASH PRIZES</div>
                         <div className="flex items-center gap-3 mb-2">
                           <Crown className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                           <h3 className="text-xl font-bold text-gray-900">Top Winners</h3>
                         </div>
                         <div className="grid md:grid-cols-2 gap-4 mt-4">
                           <div className="flex items-start gap-2">
                             <CheckSquare className="h-5 w-5 text-indigo-600 mt-0.5" />
                             <div>
                               <p className="font-bold text-gray-900">1st Place</p>
                               <p className="text-sm text-gray-600">$250 Cash Prize + Certificate</p>
                             </div>
                           </div>
                           <div className="flex items-start gap-2">
                             <CheckSquare className="h-5 w-5 text-blue-600 mt-0.5" />
                             <div>
                               <p className="font-bold text-gray-900">2nd Place</p>
                               <p className="text-sm text-gray-600">$100 Cash Prize + Certificate</p>
                             </div>
                           </div>
                         </div>
                         <div className="mt-4 pt-4 border-t border-gray-100">
                           <p className="text-sm font-medium text-gray-700">Both winners are also published in the <em>National Economics Booklet</em>.</p>
                         </div>
                      </div>

                      {/* Finalists - Tier 2 */}
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                         <div className="flex items-center gap-3 mb-2">
                           <Star className="h-6 w-6 text-blue-500" />
                           <h3 className="text-xl font-bold text-gray-900">3rd - 10th Place Finalists</h3>
                         </div>
                         <div className="grid md:grid-cols-2 gap-4 mt-4">
                           <div className="flex items-start gap-2">
                             <CheckSquare className="h-5 w-5 text-blue-600 mt-0.5" />
                             <div>
                               <p className="font-bold text-gray-900">Booklet Publication</p>
                               <p className="text-sm text-gray-600">Included in the <em>National Economics Booklet</em>.</p>
                             </div>
                           </div>
                           <div className="flex items-start gap-2">
                             <CheckSquare className="h-5 w-5 text-gray-500 mt-0.5" />
                             <div>
                               <p className="font-bold text-gray-900">Certificate</p>
                               <p className="text-sm text-gray-600">Certificate of Commendation.</p>
                             </div>
                           </div>
                         </div>
                      </div>

                      {/* All Participants */}
                      <div className="text-center pt-2">
                        <p className="text-gray-600">
                          <span className="font-bold text-gray-900">All Participants</span> will receive an official Certificate of Participation.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 9. Integrity */}
                <motion.section id="integrity" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-red-100 p-3 rounded-xl">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">9. Academic Integrity</h2>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                      <p className="text-red-800 font-medium">Plagiarism is strictly prohibited and will result in immediate disqualification.</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-3 ml-2">
                      <li>Directly copying text from other sources without quotation marks and citation.</li>
                      <li>Paraphrasing ideas without proper attribution.</li>
                      <li>Using AI tools (like ChatGPT) to write the essay. AI may be used for brainstorming or proofreading only.</li>
                      <li>Submitting work that has been previously published or submitted to other competitions.</li>
                    </ul>
                  </div>
                </motion.section>

                {/* 10. Terms */}
                <motion.section id="terms" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-gray-100 p-3 rounded-xl">
                        <Gavel className="h-6 w-6 text-gray-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">10. Terms & Conditions</h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                      By submitting an essay, participants grant the National Economics Challenge a non-exclusive, perpetual license to publish, reproduce, and distribute the work in the National Economics Booklet and other promotional materials. Participants retain copyright ownership of their work. The organizers reserve the right to disqualify any entry that violates the rules or spirit of the competition. Decisions of the judges are final.
                    </p>
                  </div>
                </motion.section>

                {/* 11. Contact */}
                <motion.section id="contact" variants={itemVariants} className="scroll-mt-28">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">11. Contact</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      For questions regarding the manual, technical issues with submission, or eligibility inquiries, please contact the competition committee at:
                    </p>
                    <a href="mailto:info@nationaleconomicschallenge.com" className="flex items-center text-emerald-600 font-bold hover:underline bg-emerald-50 w-fit px-4 py-2 rounded-lg transition-colors hover:bg-emerald-100">
                      <Mail className="h-4 w-4 mr-2" />
                      info@nationaleconomicschallenge.com
                    </a>
                  </div>
                </motion.section>

                {/* Divider */}
                <div className="border-t border-gray-200 my-16"></div>

                {/* Submission Form Section */}
                <motion.div 
                  id="submission-form"
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-100 scroll-mt-24 ring-1 ring-emerald-50"
                >
                  <div className="text-center mb-10">
                    <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
                      <Upload className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Submit?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Please verify that your submission adheres to all the guidelines listed above. Once submitted, essays cannot be edited.
                    </p>
                  </div>
                  <div className="max-w-3xl mx-auto">
                    <SubmissionForm />
                  </div>
                </motion.div>
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionsPage;