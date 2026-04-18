
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BookOpen } from 'lucide-react';
import Step1EmailEntry from '@/components/Step1EmailEntry';
import Step2CodeVerification from '@/components/Step2CodeVerification';
import Step3PasswordCreation from '@/components/Step3PasswordCreation';

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    school: '',
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  return (
    <>
      <Helmet>
        <title>Sign Up | National Economics Challenge</title>
      </Helmet>
      <div className="min-h-screen bg-muted/30 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <BookOpen className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">Create your account</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Step {currentStep} of 3
          </p>
          
          <div className="flex justify-center mt-4 space-x-2">
            {[1, 2, 3].map((step) => (
              <div 
                key={step} 
                className={`h-2 w-8 rounded-full ${step <= currentStep ? 'bg-primary' : 'bg-muted'}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-card py-8 px-4 shadow-sm border border-border sm:rounded-2xl sm:px-10">
            {currentStep === 1 && (
              <Step1EmailEntry 
                data={formData} 
                updateData={updateFormData} 
                onNext={handleNext} 
              />
            )}
            {currentStep === 2 && (
              <Step2CodeVerification 
                email={formData.email} 
                onNext={handleNext} 
                onBack={handleBack} 
              />
            )}
            {currentStep === 3 && (
              <Step3PasswordCreation 
                data={formData} 
              />
            )}

            {currentStep === 1 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="font-bold text-primary hover:text-primary/80 transition-colors">
                    Log in here
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
