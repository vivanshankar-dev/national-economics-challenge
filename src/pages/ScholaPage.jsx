import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Users, Share2, Archive, Globe, Award } from 'lucide-react';

const ScholaPage = () => {
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
        <title>The Schola & National Economics Booklet</title>
        <meta name="description" content="The National Economics Booklet features the top 10 research papers from the competition, published on The Schola, a premier high school scholarship platform." />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <BookOpen className="h-20 w-20 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">The National Economics Booklet</h1>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                We are proud to partner with <span className="font-bold">The Schola</span>, a premier high school scholarship platform dedicated to publishing original research in humanities and social sciences. The top 10 submissions from our competition will be compiled into the <span className="italic">National Economics Booklet</span> and published on The Schola's platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  The National Economics Booklet serves as a showcase for the finest high school economic analysis. By publishing on The Schola, we provide our top participants with a respected platform that validates their intellectual labor. We aim to transform student essays into enduring academic contributions that reach a global audience of educators and peers.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Top 10 Selection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We select the best 10 research papers from hundreds of submissions. These papers represent the absolute top tier of high school economic analysis and are chosen for their originality, depth, and clarity.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Recognition & Awards</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every participant receives a Certificate of Participation. The authors of the top 10 selected papers are awarded a prestigious Certificate of Commendation to honor their achievement.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Platform</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By publishing in the National Economics Booklet on The Schola platform, students join a community of scholars in the humanities and social sciences, ensuring their work is accessible worldwide.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Editorial Process */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Editorial Process
              </motion.h2>

              <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 mb-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Meticulous Curation</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our process is rigorous. After the initial grading by professors and teachers, the top essays enter our editorial pipeline. Here, the best 10 papers are selected for inclusion in the National Economics Booklet. Our student editorial board works to format and refine these manuscripts, ensuring they meet professional publishing standards before they appear on The Schola. We prioritize:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Exceptional clarity of economic thinking and expression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Depth of reasoning and critical analysis of data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Intellectual honesty and acknowledgment of trade-offs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Undergraduate-level writing quality and citation</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: FileText, label: 'Submission', desc: 'Essays submitted via NEC' },
                  { icon: Users, label: 'Review', desc: 'Professors & Editors evaluate' },
                  { icon: BookOpen, label: 'Selection', desc: 'Top 10 papers chosen' },
                  { icon: Share2, label: 'Publication', desc: 'Published on The Schola' }
                ].map((step, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                    <step.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-1">{step.label}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Publication & Dissemination */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Publication & Dissemination
              </motion.h2>

              <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <Archive className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Schola Platform</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The National Economics Booklet is hosted on The Schola, an existing and respected platform for high school research. This ensures your work sits alongside other high-quality humanities and social science scholarship.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <FileText className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Booklet</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The 10 selected essays are compiled into the professionally designed National Economics Booklet (PDF). This digital volume mirrors the aesthetic of top academic journals, providing a tangible artifact of your achievement.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <Award className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Certificates</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We ensure every student's effort is recognized. All entrants receive a Certificate of Participation, while the top 10 winners receive a Certificate of Commendation, a valuable addition to any college portfolio.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScholaPage;