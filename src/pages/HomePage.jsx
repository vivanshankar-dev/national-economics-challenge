
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Users, Shield, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';
import PillarCard from '@/components/PillarCard';
import StepCard from '@/components/StepCard';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>National Economics Challenge | Inaugural 2026 Edition</title>
        <meta name="description" content="Democratizing economic literacy through the National Economics Challenge. A premier essay competition empowering the next generation of global economic thinkers." />
      </Helmet>

      <div className="min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-white pt-24 pb-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-6 shadow-sm border border-primary/20">
                Inaugural 2026 Edition
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
                The National <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Economics Challenge</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                We believe that understanding economics shouldn't be a privilege. It is a fundamental tool for understanding the world, shaping policy, and driving progress. Join the premier essay competition empowering the next generation of global economic thinkers and leaders.
              </p>
              
              <div className="mb-14 bg-white/50 backdrop-blur-sm p-6 rounded-3xl inline-block border border-border shadow-sm">
                <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Submission Deadline</p>
                <CountdownTimer targetDate="2026-08-15T23:59:59" />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/prompts">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                    View Prompt Bank <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full border-2 border-primary text-primary hover:bg-primary/5 transition-all">
                    Submit Your Essay
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is the NEC & Mission */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Democratizing Economic Education</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The National Economics Challenge (NEC) is more than just a competition; it is a global movement. Our mission is to break down the complex jargon of academic economics and make it accessible to everyone, regardless of their background or native language. We envision a world where young minds from diverse communities can contribute directly to solving pressing global financial challenges.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PillarCard icon={Globe} title="Global Community" description="Connecting bright minds across borders to tackle pressing economic issues through collaborative discourse." />
              <PillarCard icon={BookOpen} title="Rigorous Analysis" description="Fostering deep research, critical thinking, and highly structured argumentation in young scholars." />
              <PillarCard icon={Users} title="Inclusive Outreach" description="Translating key insights into regional languages to break down barriers to economic literacy." />
              <PillarCard icon={Shield} title="Academic Integrity" description="Upholding the absolute highest standards of original, unaided, and honest student scholarship." />
            </div>
          </div>
        </section>

        {/* Why Participate */}
        <section className="py-24 bg-secondary/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Should You Participate?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you are exploring economics for the first time or you are an aspiring policymaker, the NEC offers unparalleled opportunities.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Intellectual Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop invaluable skills in data analysis, policy evaluation, and persuasive academic writing. You will learn to formulate arguments backed by real-world data, preparing you for university-level research and beyond.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Real-World Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your ideas don't just stay in a grading folder. They contribute to a growing open-access archive, serving as a resource for future students. The best essays are translated and distributed to under-resourced schools.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Awards & Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compete for cash prizes up to $250. Top essays will be published in the prestigious National Economics Booklet, an incredible distinction that enhances college applications and academic portfolios.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Academic Journey */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">A Rigorous Academic Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The competition is designed to mimic the lifecycle of professional academic research. Here is how it works:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-1 bg-primary/10 z-0 rounded-full"></div>
              <StepCard number="1" title="Select & Research" description="Browse our curated Prompt Bank. Choose a topic that ignites your curiosity and dive deep into academic literature, datasets, and historical context." />
              <StepCard number="2" title="Analyze & Write" description="Synthesize your findings into a compelling 1,200-1,800 word essay. Focus on clarity, originality, and robust evidence." />
              <StepCard number="3" title="Submit & Publish" description="Submit before the August 15 deadline. Expert judges evaluate the entries, and top papers are recognized globally and published." />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-foreground text-background text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10">Shape the Global Economic Discourse</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl flex-1 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-white">For Students</h3>
                <p className="text-white/80 mb-8 leading-relaxed">Take the challenge. Showcase your analytical prowess on a national stage and build your portfolio.</p>
                <Link to="/signup">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg rounded-xl border-0">Register Now</Button>
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl flex-1 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-white">For Educators & Partners</h3>
                <p className="text-white/80 mb-8 leading-relaxed">Integrate our prompts into your curriculum, or join our network to distribute translated essays.</p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full h-12 text-lg rounded-xl border-white/50 text-foreground hover:bg-white hover:text-foreground">Partner With Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
