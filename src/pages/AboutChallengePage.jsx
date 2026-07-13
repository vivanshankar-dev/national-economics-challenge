import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Award, 
  BookOpen, 
  Users, 
  BarChart, 
  Globe2,
  Wrench
} from 'lucide-react';

const AboutChallengePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>About the Challenge - National Economics Challenge</title>
        <meta name="description" content="Learn about the National Economics Challenge's purpose, competition format, and how we partner with Youth Economy Lab to turn student proposals into real community pilots." />
      </Helmet>

      <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-700 to-blue-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">About the Challenge</h1>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed text-blue-100">
                NEC is not an essay competition. It is a project competition where student proposals become real pilots in real communities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  The National Economics Challenge exists to prove that serious economic analysis does not have to end in a grading folder. Every year, talented students produce compelling thinking about pressing economic problems — and almost none of it reaches the communities those problems affect.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our mission is to close that gap. By making the pilot stage structural — not optional, not aspirational — we ensure that the best student work produces something measurable in the real world.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Globe2 className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  We envision a competition where winning is defined not just by the quality of your argument, but by what actually happens when your idea meets the real world.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Through our partnership with Youth Economy Lab, NEC aims to build a growing record of student-led economic interventions — small in scale, rigorous in design, and genuine in impact — that demonstrate what pre-collegiate economics can actually produce.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Most competitions end when the judging does. Ours is designed so the judging is just the beginning.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors duration-300 group">
                  <Wrench className="h-10 w-10 text-gray-400 group-hover:text-emerald-600 mb-6 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Applied, Not Theoretical</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We do not ask students to write essays about economic problems. We ask them to design solutions — concrete, costed, community-specific interventions that could plausibly be run in the real world.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 group">
                  <Award className="h-10 w-10 text-gray-400 group-hover:text-blue-600 mb-6 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pilots, Not Just Prizes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The top 5 to 8 proposals are not just recognized — they are piloted. Finalists run a four-week remote pilot with real community participants, coordinated through our YEL chapter network. Cash prizes and NEC/YEL certification go to all Pilot Cohort members.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-indigo-50 transition-colors duration-300 group">
                  <Users className="h-10 w-10 text-gray-400 group-hover:text-indigo-600 mb-6 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Institutional Partnership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our partnership with Youth Economy Lab gives every finalist access to a real chapter network across Asia and the US. YEL chapters recruit local participants, coordinate logistics, and provide the community access that makes pilots possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Judging Criteria */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Evaluation Criteria
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Economic Reasoning (40%)',
                    desc: 'Is the intervention grounded in sound economic thinking? Does the student correctly identify the market failure or structural problem at play, and does their proposed solution address it with appropriate mechanisms? We look for evidence of genuine economic understanding, not surface-level description.'
                  },
                  {
                    title: 'Feasibility (30%)',
                    desc: 'Could this actually be piloted? We evaluate whether the proposal is realistic given the resources available, the community being targeted, and the four-week pilot window. Ambitious ideas are welcome — but they must be executable.'
                  },
                  {
                    title: 'Potential Impact (30%)',
                    desc: 'If this intervention worked, what would change? Judges assess whether the proposed outcome is meaningful, measurable, and genuinely relevant to the community being served. We reward proposals that think clearly about second-order effects and realistic scale.'
                  }
                ].map((criterion, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{criterion.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{criterion.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-indigo-900 text-white rounded-2xl p-8 text-center shadow-xl">
                <BarChart className="h-12 w-12 mx-auto mb-4 text-emerald-400" />
                <h3 className="text-2xl font-bold mb-4">Our Judges</h3>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                  Proposals are evaluated by a panel of economics professors and researchers who assess both the analytical quality of the proposal and the realism of its pilot plan. Judging is double-blind — your name and school are never visible to evaluators.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutChallengePage;
