
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutUsPage from '@/pages/AboutUsPage';
import CompetitionManualPage from '@/pages/CompetitionManualPage';
import ArchivePage from '@/pages/ArchivePage';
import AccessOutreachPage from '@/pages/AccessOutreachPage';
import PublicationsPage from '@/pages/PublicationsPage';
import PromptBankPage from '@/pages/PromptBankPage';
import SignUpPage from '@/pages/SignUpPage';
import LoginPage from '@/pages/LoginPage';
import EssaySubmissionPage from '@/pages/EssaySubmissionPage';
import SubmissionSuccessPage from '@/pages/SubmissionSuccessPage';
import ContactPage from '@/pages/ContactPage';
import ConfirmationPage from '@/pages/ConfirmationPage';
import VerificationPage from '@/pages/VerificationPage';
import PendingVerificationPage from '@/pages/PendingVerificationPage';
import ProtectedRoute from '@/components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="competition-manual" element={<CompetitionManualPage />} />
            <Route path="archive" element={<ArchivePage />} />
            <Route path="access-outreach" element={<AccessOutreachPage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="prompts" element={<PromptBankPage />} />
            <Route path="contact" element={<ContactPage />} />
            
            {/* Auth Routes */}
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="confirmation" element={<ConfirmationPage />} />
            <Route path="verify-email" element={<VerificationPage />} />
            <Route path="pending-verification" element={<PendingVerificationPage />} />
            
            {/* Protected Routes */}
            <Route 
              path="essay-submission" 
              element={
                <ProtectedRoute>
                  <EssaySubmissionPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="submission-success" 
              element={
                <ProtectedRoute>
                  <SubmissionSuccessPage />
                </ProtectedRoute>
              } 
            />
          </Route>
        </Routes>
      </Router>
      <Toaster />
      <Analytics />
    </AuthProvider>
  );
}

export default App;
