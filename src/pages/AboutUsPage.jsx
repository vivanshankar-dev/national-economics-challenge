
import React from 'react';
import { Helmet } from 'react-helmet';
import { Target, Heart, Zap, ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import PillarCard from '@/components/PillarCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | National Economics Challenge</title>
        <meta name="description" content="Discover the mission, core values, and the story behind the founder of the National Economics Challenge." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans pb-20">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About the Project</h1>
            <p className="text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium">
              Building the world's most accessible, rigorous platform for young economic thinkers.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-16">
          
          {/* The Story */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-border relative overflow-hidden">
              <Quote className="absolute top-10 left-10 w-24 h-24 text-primary/5 -z-0" />
              <h2 className="text-4xl font-bold mb-8 text-foreground relative z-10">Our Story & Mission</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 relative z-10">
                <p>
                  The National Economics Challenge was born from a simple but powerful observation: <strong className="text-foreground">high-level economic discourse is often locked away.</strong> It is hidden behind paywalls, restricted to prestigious institutions, or trapped in complex academic jargon and solely in the English language.
                </p>
                <p>
                  We believe that the economy affects everyone, so everyone should have the tools to understand and debate it. We set out to create a truly meritocratic platform where a student's analytical capability matters far more than their zip code. 
                </p>
                <p>
                  Today, we are rapidly growing into a global community dedicated to rigorous, open-access economic scholarship. We challenge students to write, we publish their best work, and crucially, we translate those insights back into regional communities.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Core Values */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Pillars</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">These four principles guide every decision we make, from prompt selection to judging criteria.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <PillarCard icon={Target} title="Clarity" description="Economics shouldn't be confusing. We prioritize communicating complex ideas simply, effectively, and persuasively without relying on unnecessary jargon." />
              <PillarCard icon={ShieldCheck} title="Rigor" description="Simplicity does not mean sacrificing depth. We demand robust data analysis, sound logical structures, and unwavering academic honesty." />
              <PillarCard icon={Heart} title="Access" description="We fight to ensure that knowledge is free. We remove financial barriers to entry and actively work to make literature available in multiple native languages." />
              <PillarCard icon={Zap} title="Impact" description="Essays shouldn't just be graded; they should be read. We focus on translating student scholarship into real-world civic insights and community discussions." />
            </div>
          </section>

          {/* Meet the Founder */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 bg-foreground text-background p-10 md:p-14 rounded-[3rem] shadow-xl border border-foreground flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="w-48 h-48 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-5xl font-extrabold text-primary-foreground shadow-inner">
              VS
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Vivan Shankar</h2>
              <p className="text-primary font-bold tracking-widest uppercase mb-6 text-sm">Founder & Executive Director</p>
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                Vivan founded the National Economics Challenge with a unified vision: to democratize economic education worldwide. Recognizing the stark gap between academic elite economics and accessible public discourse, he established this platform to amplify young, diverse voices. By championing the translation of critical insights into regional languages, Vivan aims to make economic literacy a universal right, not a privilege.
              </p>
            </div>
          </motion.section>

          {/* Vision & CTA */}
          <section className="text-center bg-secondary/30 p-12 rounded-3xl border border-secondary">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our 2030 Vision</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-primary mb-12 italic leading-tight max-w-3xl mx-auto">
              "Reaching students in 100 countries across 20 languages by 2030."
            </p>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Join the Movement</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you are a student ready to write your first essay, an educator wanting to implement our prompts, or an institution looking to sponsor our ambitious translation efforts, there is a place for you here.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-transform hover:-translate-y-0.5 text-lg shadow-lg">
                Get Involved Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
