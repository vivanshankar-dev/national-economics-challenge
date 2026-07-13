import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Wrench, Users, Shield, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';
import PillarCard from '@/components/PillarCard';
import StepCard from '@/components/StepCard';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>National Economics Challenge | Inaugural 2026 Edition</title>
        <meta name="description" content="The National Economics Challenge is an applied economics project competition where students design real interventions for underserved communities, partnering with Youth Economy Lab to pilot the best ideas." />
      </Helmet>

      <div className="min-h-screen font-sans">
        {/* Hero */}
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
                An applied economics project competition open to high school and undergraduate students globally. Design a small-scale economic intervention for an underserved community — and if your proposal is selected, pilot it live through our partnership with Youth Economy Lab.
              </p>
              
              <div className="mb-14 bg-white/50 backdrop-blur-sm p-6 rounded-3xl inline-block border border-border shadow-sm">
                <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Submission Deadline</p>
                <CountdownTimer targetDate="2026-08-15T23:59:59" />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/competition-manual">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                    Read the Manual <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full border-2 border-primary text-primary hover:bg-primary/5 transition-all">
                    Submit Your Proposal
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is NEC */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Economics That Does Something</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The National Economics Challenge is not an essay contest. Entrants design small-scale economic interventions for real problems in underserved communities — a tool, system, or program grounded in genuine economic reasoning and a realistic pilot plan. The top 5 to 8 proposals are then piloted live, with Youth Economy Lab chapters providing on-the-ground community access across Asia and the US. The result is something most student competitions never produce: a documented, real-world outcome.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PillarCard icon={Globe} title="Global and Open" description="Open to high school and undergraduate students worldwide, individually or in teams of up to 3." />
              <PillarCard icon={Wrench} title="Applied Format" description="Design a concrete intervention grounded in economic reasoning, with a realistic four-week pilot plan." />
              <PillarCard icon={Users} title="Live Pilots" description="The top 5 to 8 proposals are piloted with real communities through YEL's chapter network — fully remote, fully real." />
              <PillarCard icon={Shield} title="Rigorous Judging" description="Proposals are evaluated on economic reasoning (40%), feasibility (30%), and potential impact (30%) by a double-blind panel." />
            </div>
          </div>
        </section>

        {/* Why Participate */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Should You Participate?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                NEC is built for students who want their work to matter beyond a grade.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Applied Thinking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designing a real intervention forces you to engage with feasibility, behavioral economics, and real-world constraints that no essay prompt can replicate. You learn by building, not just arguing.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Real-World Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Finalists do not just receive recognition. They run a four-week live pilot with real community participants coordinated through YEL chapters. Before-and-after results are documented and published.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Awards and Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  1st Place takes the primary prize. 2nd and 3rd are runners-up. All Pilot Cohort members (4th to 8th) receive NEC/YEL certification and have their pilot writeup published — a credential that stands apart from any standard competition.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">How the Competition Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Two stages. One for all entrants. One for the best proposals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-1 bg-primary/10 z-0 rounded-full"></div>
              <StepCard number="1" title="Design Your Proposal" description="Identify a real economic problem in an underserved community and design a concrete intervention. Submit a 1,500 to 2,500 word proposal covering the problem, the solution, your economic reasoning, and a realistic four-week pilot plan." />
              <StepCard number="2" title="Judging and Selection" description="Expert judges evaluate every proposal double-blind on economic reasoning, feasibility, and potential impact. The top 5 to 8 proposals advance to the pilot stage in Week 7." />
              <StepCard number="3" title="Pilot With YEL" description="Finalists are matched with a YEL chapter, who recruits 10 to 20 local participants and provides a point of contact. You run your intervention remotely over four weeks and submit a before-and-after writeup." />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-foreground text-background text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10">Build Something That Matters</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl flex-1 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-white">For Students</h3>
                <p className="text-white/80 mb-8 leading-relaxed">Design a real economic intervention. If your proposal is selected, pilot it with a real community through our YEL partnership — then see your results published.</p>
                <Link to="/signup">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg rounded-xl border-0">Register Now</Button>
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl flex-1 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-white">For Educators and Partners</h3>
                <p className="text-white/80 mb-8 leading-relaxed">Bring NEC to your students, or connect your community with our pilot network to receive student-designed economic interventions.</p>
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
