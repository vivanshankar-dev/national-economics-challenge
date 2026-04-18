import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, CheckCircle, Award, AlertCircle, GraduationCap, Star, BookOpen, Crown } from 'lucide-react';

const SubmissionManual = () => {
  return (
    <div className="space-y-8">
      {/* Competition Overview */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-emerald-600"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">Competition Overview</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The National Economics Challenge is a premier essay competition designed to identify and recognize high school students with exceptional potential in economics. Our goal is to foster a deeper understanding of economic principles by challenging students to apply them to complex, real-world problems.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This competition features a <span className="font-bold text-emerald-600">two-tier publication system</span> designed to reward academic excellence at different levels. While the top 10 finalists are published in our regional journal, the top 2 winners achieve global recognition through an exclusive partner platform.
        </p>
      </motion.div>

      {/* Publication & Recognition (New Section) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md p-8 border border-indigo-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <Crown className="h-8 w-8 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Publication Tiers</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tier 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-indigo-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">HIGHEST HONOR</div>
            <div className="flex items-center gap-3 mb-3">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <h3 className="font-bold text-lg text-gray-900">Top 2 Winners</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">The absolute best submissions.</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span>Published in <span className="font-semibold text-indigo-600">The Young Researcher</span> (Global Platform)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span>Published in <span className="font-semibold text-blue-600">National Economics Booklet</span></span>
              </li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h3 className="font-bold text-lg text-gray-900">Top 10 Finalists</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">The top tier of finalists (ranks 3-10).</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span>Published in <span className="font-semibold text-blue-600">National Economics Booklet</span></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span>Feature in UAE Educational Networks</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Important Dates */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-md p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Important Dates & Deadlines</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Submission Deadline</h3>
            <p className="text-2xl font-bold text-gray-900">August 15, 2026</p>
            <p className="text-sm text-gray-600 mt-1">11:59 PM UTC</p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
            <h3 className="font-semibold text-emerald-800 mb-2">Results Announced</h3>
            <p className="text-2xl font-bold text-gray-900">September 15, 2026</p>
            <p className="text-sm text-gray-600 mt-1">Via Email & Website</p>
          </div>
        </div>
      </motion.div>

      {/* Submission Criteria */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-md p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">Submission Requirements</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Format & Length</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside pl-2">
              <li><span className="font-medium">Word Count:</span> 1,200 to 1,800 words (excluding bibliography).</li>
              <li><span className="font-medium">File Format:</span> PDF format only to preserve formatting.</li>
              <li><span className="font-medium">Font:</span> Times New Roman, 12pt, double-spaced.</li>
              <li><span className="font-medium">Anonymity:</span> Do NOT include your name inside the essay document to ensure blind grading.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Standards</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside pl-2">
              <li><span className="font-medium">Originality:</span> Work must be completely original. Plagiarism will result in immediate disqualification.</li>
              <li><span className="font-medium">Citations:</span> Use APA or MLA citation style consistently throughout the document.</li>
              <li><span className="font-medium">Structure:</span> Must include an abstract (max 150 words), introduction, body paragraphs, conclusion, and references.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Evaluation Process & Prizes */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-md p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Prizes & Recognition</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900 border-b pb-2">Award Structure</h3>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <div className="flex items-center gap-2 mb-2">
                 <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-0.5 rounded">1st & 2nd Place</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <span className="font-semibold text-indigo-700">The Young Researcher</span> Publication</li>
                <li>• <span className="font-semibold text-blue-700">National Economics Booklet</span> Publication</li>
                <li>• Certificate of Commendation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                 <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">3rd - 10th Place</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <span className="font-semibold text-blue-700">National Economics Booklet</span> Publication</li>
                <li>• Certificate of Commendation</li>
              </ul>
            </div>

            <div className="p-2">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">All Participants:</span> Official Certificate of Participation.
              </p>
            </div>
          </div>

          <div>
             <h3 className="font-semibold text-gray-900 border-b pb-2 mb-4">Scoring Rubric</h3>
             <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Economic Analysis & Reasoning</span>
                <span className="font-bold text-emerald-600">40%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Clarity & Organization</span>
                <span className="font-bold text-emerald-600">25%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Evidence & Research</span>
                <span className="font-bold text-emerald-600">20%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Originality & Insight</span>
                <span className="font-bold text-emerald-600">15%</span>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-xl text-sm text-blue-800">
              <p className="italic">"Essays are evaluated through a rigorous process by a panel consisting of economics teachers and university professors."</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Eligibility */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-md p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">Eligibility</h2>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Open to all high school students (grades 9-12) worldwide.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Students may submit individually or in teams of up to two members.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Previous winners are eligible to compete again with new submissions.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SubmissionManual;