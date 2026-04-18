
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const PromptCard = ({ prompt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-emerald-100 rounded-lg p-2">
          <FileText className="h-6 w-6 text-emerald-600" />
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {prompt.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{prompt.title}</h3>
      
      <p className="text-gray-700 mb-4">{prompt.explanation}</p>

      {prompt.guiding_questions && prompt.guiding_questions.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Guiding Questions:</h4>
          <ul className="space-y-1">
            {prompt.guiding_questions.slice(0, 2).map((question, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default PromptCard;
