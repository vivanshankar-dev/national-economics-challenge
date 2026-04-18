
import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
      <h3 className="font-bold text-lg mb-2 text-primary">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
