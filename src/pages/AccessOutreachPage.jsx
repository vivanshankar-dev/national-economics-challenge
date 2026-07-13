import React from 'react';
import { Helmet } from 'react-helmet';
import StepCard from '@/components/StepCard';
import { HeartHandshake, Globe2, BookOpen, GraduationCap, Megaphone, Users, Mic, Wrench } from 'lucide-react';

const AccessOutreachPage = () => {
  return (
    <>
      <Helmet>
        <title>Community Pilots | National Economics Challenge</title>
        <meta name="description" content="How NEC finalist proposals become real four-week pilots in underserved communities, delivered through our partnership with Youth Economy Lab." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <div className="bg-foreground text-background py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground opacity-50"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Where Proposals Become Pilots</h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed opacity-90">
              The NEC Community Pilot Program is where the competition's best ideas meet real communities — turning student proposals into four-week, live economic interventions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* How the pilot works */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">From Proposal to Pilot</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Once judging is complete, the top 5 to 8 proposals are matched with a Youth Economy Lab chapter whose community fits the intervention's target group. The YEL chapter recruits 10 to 20 local participants and assigns a point of contact who coordinates with the finalist throughout the four-week pilot window.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Everything runs remotely — through calls, messaging platforms, and shared documents. No travel is required. At the end of the four weeks, each finalist documents what happened: what changed, what did not, and what a larger-scale version would require.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-primary">5 to 8</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Pilots Per Cycle</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-primary">4 Weeks</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Per Pilot</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center"><Globe2 className="mr-3 text-primary" /> What Each Pilot Produces</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><Wrench className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">A Real Intervention</h4>
                    <p className="text-muted-foreground text-sm mt-1">A live economic intervention run with real community participants — not a simulation, not a presentation. Something that actually happened.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><GraduationCap className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">A Before-and-After Record</h4>
                    <p className="text-muted-foreground text-sm mt-1">Each pilot produces a published writeup documenting what was tried, what changed, and what the evidence suggests about scaling. Quantitative where possible, qualitative where not.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><Users className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">A Published Credential</h4>
                    <p className="text-muted-foreground text-sm mt-1">All pilot finalists are recognized as part of the NEC Pilot Cohort, with their writeup published on the NEC platform alongside co-branding from Youth Economy Lab.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* How It Works Steps */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How the Pilot Stage Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From proposal selection to published results, here is the full sequence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-24 relative">
            <div className="hidden md:block absolute top-10 left-1/8 right-1/8 h-1 bg-border z-0"></div>
            <StepCard number="1" title="Selection" description="Judges select the top 5 to 8 proposals from the full pool, based on economic reasoning, feasibility, and potential impact." />
            <StepCard number="2" title="Matching" description="Each finalist is matched with a YEL chapter whose community fits the proposal's target group — gig workers, smallholder farmers, unbanked households, and similar populations." />
            <StepCard number="3" title="Pilot Execution" description="Over four weeks, the finalist runs their intervention remotely with 10 to 20 community participants recruited by the YEL chapter. The chapter assigns a local point of contact throughout." />
            <StepCard number="4" title="Documentation" description="Each finalist submits a before-and-after writeup. Results are published as part of the NEC Pilot Cohort record, and all finalists receive NEC/YEL certification." />
          </div>


          {/* YEL Logo */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Implementation Partner</p>
            <div className="flex justify-center items-center mb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D560BAQGPzFnRgFVKYQ/company-logo_200_200/company-logo_200_200/0/1726313527941/youth_economy_lab_logo?e=2147483647&v=beta&t=HLVluUeqFXFAJqXGNBEv3l_uLVBV1GyCYJF7SalFIXA"
                alt="Youth Economy Lab"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Youth Economy Lab is a global student economics organization with chapters across Asia and the United States. Their chapter network is the infrastructure that makes every NEC community pilot possible.
            </p>
          </div>

          {/* YEL Partnership */}
          <div className="bg-gradient-to-br from-white to-secondary/20 p-12 rounded-3xl shadow-sm border border-border mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Partnership With Youth Economy Lab</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                YEL is the infrastructure that makes the pilot stage possible. Without their chapter network, finalist proposals stay on paper.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Community Access</h4>
                <p className="text-muted-foreground text-sm">YEL chapters across Asia and the US have the local trust and relationships needed to recruit real community participants for each pilot.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <Mic className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Local Coordination</h4>
                <p className="text-muted-foreground text-sm">Each chapter assigns a dedicated point of contact who liaises between the finalist and the community throughout the four-week window.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <Megaphone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Co-Branding and Credit</h4>
                <p className="text-muted-foreground text-sm">YEL is credited as implementation partner on all NEC pilot materials. Their chapters receive recognition in every published writeup they support.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-foreground text-background p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Become a Partner or Ambassador</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
              Are you an organisation working with underserved communities? We would love to explore bringing NEC pilots to your network. Are you an educator? Get in touch to bring NEC to your students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
                Partner With Us
              </a>
              <a href="/contact" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AccessOutreachPage;
