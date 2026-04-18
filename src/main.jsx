import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AlertCircle, FileText, WifiOff, RefreshCw } from 'lucide-react';
import App from '@/App';
import { supabase } from '@/lib/supabase';
import '@/index.css';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured = supabaseUrl && supabaseAnonKey;

window.addEventListener('unhandledrejection', event => {
  console.error('❌ Unhandled Promise Rejection (Global Error Logger):', event.reason);
});

window.addEventListener('error', event => {
  console.error('❌ Global Runtime Error:', event.error);
});

// A wrapper component to check Supabase health before rendering the main App
const RootWrapper = () => {
  const [isHealthy, setIsHealthy] = useState(true);
  const [isChecking, setIsChecking] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      if (!isConfigured) {
        setIsChecking(false);
        return;
      }
      try {
        console.log('🔄 Performing initial Supabase health check...');
        
        // Use a standard non-privileged auth check as a reliable connection test
        // This avoids "role does not exist" or table permission errors entirely
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('❌ Supabase health check failed with API error:', error.message);
          setIsHealthy(false);
          setErrorMessage(error.message);
        } else {
          console.log('✅ Supabase connection established successfully. Session check passed.');
          setIsHealthy(true);
        }
      } catch (err) {
        console.error('❌ Supabase health check threw an exception (Network/Config):', err.message || err);
        setIsHealthy(false);
        setErrorMessage(err.message || 'Network connection failed');
      } finally {
        // Always finish checking so the app can load (graceful degradation)
        setIsChecking(false);
      }
    };
    checkConnection();
  }, []);

  if (!isConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-red-600 px-6 py-4 flex items-center space-x-3">
            <AlertCircle className="h-8 w-8 text-white" />
            <h1 className="text-xl font-bold text-white">Configuration Required</h1>
          </div>
          <div className="p-8">
            <p className="text-gray-700 text-lg mb-6">
              The application cannot start because the Supabase configuration is missing.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2" /> Setup Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-blue-800">
                <li>Create a file named <span className="font-mono bg-blue-100 px-2 py-1 rounded text-sm">.env</span> in the project root directory.</li>
                <li>Add the following environment variables to the file:</li>
              </ol>
              <div className="mt-4 bg-gray-900 rounded-md p-4 overflow-x-auto">
                <code className="text-sm font-mono text-green-400 block mb-2">VITE_SUPABASE_URL=your_project_url</code>
                <code className="text-sm font-mono text-green-400 block">VITE_SUPABASE_ANON_KEY=your_anon_key</code>
              </div>
            </div>
            <div className="text-center">
               <button onClick={() => window.location.reload()} className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                 Reload Page
               </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="text-gray-500 font-medium">Verifying database connection...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isHealthy && (
        <div className="bg-red-600 text-white px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 sticky top-0 z-[9999]">
          <WifiOff className="h-4 w-4 flex-shrink-0" />
          <span>Connection Error: {errorMessage || 'Cannot connect to the database. Features relying on persistent data may not work correctly.'}</span>
          <button onClick={() => window.location.reload()} className="ml-4 underline hover:text-red-200 flex items-center gap-1 flex-shrink-0">
            <RefreshCw className="h-3 w-3" /> Retry
          </button>
        </div>
      )}
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootWrapper />);