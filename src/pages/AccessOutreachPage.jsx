
import React from 'react';
import { Helmet } from 'react-helmet';
import LanguageCard from '@/components/LanguageCard';
import StepCard from '@/components/StepCard';
import { HeartHandshake, Globe2, BookOpen, GraduationCap, Megaphone } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AccessOutreachPage = () => {
  return (
    <>
      <Helmet>
        <title>Access & Outreach | National Economics Challenge</title>
        <meta name="description" content="Discover our mission to democratize economic literacy by translating winning essays and distributing them to under-resourced communities." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <div className="bg-foreground text-background py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground opacity-50"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Knowledge Shouldn't Have Borders</h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed opacity-90">
              The Access & Outreach Program is the heart of the NEC. We translate complex economic scholarship into regional languages, empowering under-resourced communities worldwide.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Mission & Impact */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Breaking Down Barriers to Literacy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                High-level economic discourse is often gated by two major barriers: expensive institutional access and the English language constraint. Our outreach program is designed to completely dismantle these walls.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe that a student in a rural public school should have the same access to cutting-edge economic debates as a student in a top-tier international academy. By translating winning essays and distributing them for free, we turn student scholarship into a public good.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-primary">3+</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Target Languages</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-primary">Growing</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Partnerships</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center"><Globe2 className="mr-3 text-primary" /> The Ripple Effect</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><BookOpen className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Curriculum Integration</h4>
                    <p className="text-muted-foreground text-sm mt-1">Teachers use our translated booklets as real-world case studies in social studies classes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><GraduationCap className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Inspiring Future Scholars</h4>
                    <p className="text-muted-foreground text-sm mt-1">Reading high-quality essays written by peers demystifies economics and inspires younger students to engage.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><Megaphone className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Community Discourse</h4>
                    <p className="text-muted-foreground text-sm mt-1">Localizing economic terminology allows communities to better understand and debate civic policies.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* The Outreach Model */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How The Program Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our end-to-end model ensures that the brilliant ideas generated in the competition reach the audiences that need them most.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-24 relative">
            <div className="hidden md:block absolute top-10 left-1/8 right-1/8 h-1 bg-border z-0"></div>
            <StepCard number="1" title="Curation" description="We carefully select the Top 10 most impactful and universally relevant essays from the annual competition." />
            <StepCard number="2" title="Translation" description="Our network of bilingual economists and educators accurately translate the essays, preserving nuanced academic arguments." />
            <StepCard number="3" title="Publishing" description="Essays are compiled into localized 'National Economics Booklets', formatted for easy printing and digital reading." />
            <StepCard number="4" title="Distribution" description="Through our NGO and school partnerships, booklets are delivered directly to classrooms and community centers." />
          </div>

          {/* Languages Supported */}
          <div className="bg-gradient-to-br from-white to-secondary/20 p-12 rounded-3xl shadow-sm border border-border mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Phase 1: Target Languages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For our inaugural 2026 edition, we are focusing on expanding access across South Asia, prioritizing languages with massive populations but limited open-access academic economic resources.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full text-left">
                    <LanguageCard language="Hindi" speakers="600M+ Speakers" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Focusing on public schools across Northern and Central India.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full text-left">
                    <LanguageCard language="Tamil" speakers="85M+ Speakers" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reaching students in Southern India and diaspora communities.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full text-left">
                    <LanguageCard language="Malayalam" speakers="35M+ Speakers" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Expanding high literacy rates into advanced economic understanding.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm font-medium">
              * Phase 2 expansion plans include Spanish, French, and Mandarin.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-foreground text-background p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Become a Partner or Ambassador</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
              This massive undertaking relies on passionate volunteers and institutional partners. 
              Are you bilingual? Become a Volunteer Translator. 
              Are you an educator? Request booklets for your school.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
                Join the Ambassador Program
              </a>
              <a href="/contact" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Request Materials
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AccessOutreachPage;
