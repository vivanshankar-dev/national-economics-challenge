import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Award, 
  Crown, 
  BookOpen, 
  Users, 
  BarChart, 
  Globe2 
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
        <meta name="description" content="Learn about the National Economics Challenge's purpose, selection criteria, and our awards structure." />
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
                We are dedicated to fostering clarity of thinking, depth of reasoning, and intellectual honesty through rigorous undergraduate-level economics writing. 
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
                  The National Economics Challenge exists to bridge the gap between high school curiosity and academic rigor. We believe that economic literacy is a cornerstone of informed citizenship.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our mission is twofold: to identify young talent capable of sophisticated analysis, and to democratize access to economic knowledge by translating and distributing their work to underserved communities.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Globe2 className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  We envision a world where young people are active participants in the economic dialogue, not just bystanders.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We see the National Economics Challenge becoming the global gold standard for pre-collegiate economic research, creating a diverse pipeline of future economists, policymakers, and business leaders who prioritize clarity and honesty in their work.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We are not a multiple-choice quiz. We are a platform for deep thought.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors duration-300 group">
                  <BookOpen className="h-10 w-10 text-gray-400 group-hover:text-emerald-600 mb-6 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Undergraduate Standards</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't simplify economics for high schoolers. We ask you to engage with the subject at a university level, citing academic sources and constructing complex arguments.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 group">
                  <Award className="h-10 w-10 text-gray-400 group-hover:text-blue-600 mb-6 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Publication & Prizes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We offer publication in the National Economics Booklet and substantial monetary prizes for top performers. 1st Place receives $250 and 2nd Place receives $100.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-indigo-50 transition-colors duration-300 group">
                  <Users className="h-10 w-10 text-gray-400 group-hover:text-indigo-600 mb-6 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Double-Blind Peer Review</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our evaluation process is rigorous and unbiased. Judges do not know your name or school, ensuring that results are based purely on the merit of your ideas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Selection Criteria Detailed */}
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
                    title: 'Clarity of Thinking (30%)',
                    desc: 'We prize simplicity on the other side of complexity. Can you explain a difficult concept without jargon? Is your logical flow unbreakable? We look for essays that guide the reader through an argument effortlessly.'
                  },
                  {
                    title: 'Depth of Economic Reasoning (30%)',
                    desc: 'This is the core. Do you correctly apply economic models? Do you understand the mechanisms at play? We want to see you identifying second-order effects and unintended consequences, not just stating surface-level observations.'
                  },
                  {
                    title: 'Evidence & Research (20%)',
                    desc: 'Opinions are cheap; data is valuable. High-scoring essays are grounded in empirical evidence, citing reputable academic sources, data sets, and case studies to support every claim.'
                  },
                  {
                    title: 'Intellectual Honesty & Nuance (20%)',
                    desc: 'Economics is rarely black and white. We heavily penalize one-sided arguments. We reward essays that acknowledge trade-offs, limitations of their own data, and valid counterarguments.'
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
                  Your work is evaluated by a curated panel of AP/IB Economics teachers and university professors. They are experts in the field who value academic integrity and original thought.
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