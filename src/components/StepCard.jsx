
import React from 'react';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg z-10">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default StepCard;
