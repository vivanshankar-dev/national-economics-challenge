
import React from 'react';

const LanguageCard = ({ language, speakers }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-center text-center hover:border-primary transition-colors">
      <h3 className="text-2xl font-bold text-foreground mb-1">{language}</h3>
      <p className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{speakers}</p>
    </div>
  );
};

export default LanguageCard;
