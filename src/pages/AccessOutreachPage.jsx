import React from 'react';
import { Helmet } from 'react-helmet';
import StepCard from '@/components/StepCard';
import { HeartHandshake, Globe2, BookOpen, GraduationCap, Megaphone, Users, Mic } from 'lucide-react';

const AccessOutreachPage = () => {
  return (
    <>
      <Helmet>
        <title>Access & Outreach | National Economics Challenge</title>
        <meta name="description" content="Discover how NEC brings student economics research to underprivileged communities through live workshops and partnerships." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <div className="bg-foreground text-background py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground opacity-50"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Knowledge Shouldn't Have Borders</h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed opacity-90">
              The Access & Outreach Program connects NEC's top student researchers with underprivileged communities — turning academic scholarship into real-world impact.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Mission & Impact */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">From the Page to the People</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The most important ideas in economics are often the least accessible. NEC's Access & Outreach Program is designed to close that gap — by bringing our top essay finalists directly to communities that lack access to quality economics education.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Through partnerships with grassroots organisations, our finalist authors present their research at live workshops and guest speaker sessions — making economics feel relevant, accessible, and human.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-primary">Top 10</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Essays Selected</span>
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
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><Mic className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Student Voices, Real Audiences</h4>
                    <p className="text-muted-foreground text-sm mt-1">Finalist authors present their research at live sessions hosted by our partner organisations, bringing academic thinking into communities that rarely encounter it.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><GraduationCap className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Inspiring Future Scholars</h4>
                    <p className="text-muted-foreground text-sm mt-1">Hearing economics research presented by a peer — not a professor — demystifies the subject and inspires younger students to engage.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-2 rounded-lg mr-4 mt-1"><Users className="w-5 h-5 text-secondary-foreground" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Community Discourse</h4>
                    <p className="text-muted-foreground text-sm mt-1">When students present essays on topics like income inequality, financial inclusion, or housing economics to the communities experiencing those issues, the conversation becomes real.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How The Program Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our model ensures that the ideas generated in the competition reach the audiences that need them most.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-24 relative">
            <div className="hidden md:block absolute top-10 left-1/8 right-1/8 h-1 bg-border z-0"></div>
            <StepCard number="1" title="Curation" description="We carefully select the Top 10 most impactful and universally relevant essays from the annual competition." />
            <StepCard number="2" title="Preparation" description="Finalist authors work with NEC to prepare their research for a live audience — distilling complex ideas into accessible, engaging presentations." />
            <StepCard number="3" title="Workshops" description="NEC co-hosts live economics workshops with partner organisations, where finalist authors present their research directly to underprivileged communities." />
            <StepCard number="4" title="Guest Sessions" description="Top authors join our partners' existing community programmes as guest speakers, creating an ongoing bridge between student scholarship and the real world." />
          </div>

          {/* Partners Section */}
          <div className="bg-gradient-to-br from-white to-secondary/20 p-12 rounded-3xl shadow-sm border border-border mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Partner Organisations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We work with grassroots organisations that already have the community trust and infrastructure to deliver impact. NEC brings the research — our partners bring the people.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Education NGOs</h4>
                <p className="text-muted-foreground text-sm">Partnering with organisations working in under-resourced schools across South Asia and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Financial Literacy Orgs</h4>
                <p className="text-muted-foreground text-sm">Collaborating with financial literacy organisations whose community audiences benefit directly from student economics research.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <Megaphone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Student Networks</h4>
                <p className="text-muted-foreground text-sm">Working with student-led organisations to amplify the reach of our workshops and create peer-to-peer impact.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-foreground text-background p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Become a Partner or Ambassador</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
              Are you an organisation working with underprivileged communities? We'd love to bring NEC's student researchers to your audience. Are you an educator? Get involved and help us expand our reach.
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
