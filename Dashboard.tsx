import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { PredictionCard } from './PredictionCard';
import { ValidationCard } from './ValidationCard';
import { ReportsView } from './ReportsView';
import { UploadView } from './UploadView';
import { AnalyticsView } from './AnalyticsView';
import { Search, Bell, User, Upload, Sparkles } from 'lucide-react';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for prediction
  const features = [
    { name: 'Blood Pressure', value: 85, color: '#DC3545' },
    { name: 'Glucose Level', value: 72, color: '#FFC107' },
    { name: 'BMI', value: 58, color: '#28A745' },
    { name: 'Age Factor', value: 45, color: '#0047AB' },
    { name: 'Cholesterol', value: 38, color: '#6C757D' }
  ];

  // Mock data for validation
  const issues = [
    { type: 'critical' as const, label: 'Missing Data', field: 'Patient ID #4521', action: 'Review' },
    { type: 'critical' as const, label: 'Out of Range', field: 'Blood Pressure', action: 'Correct' },
    { type: 'warning' as const, label: 'Inconsistent', field: 'Date of Birth', action: 'Verify' },
    { type: 'success' as const, label: 'Validated', field: 'Diagnosis Code', action: 'None' },
    { type: 'critical' as const, label: 'Duplicate', field: 'Record #8834', action: 'Merge' }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
      </div>
      
      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Medical AI Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Real-time analysis and validation
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="pl-10 pr-4 py-2 bg-white/60 backdrop-blur-sm border border-purple-200 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>
              <button className="p-2 hover:bg-purple-100 rounded-xl transition-all relative group">
                <Bell size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse" />
              </button>
              <button className="p-2 hover:bg-purple-100 rounded-xl transition-all group">
                <User size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-8">
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl">
                {/* Column 1: Prediction Analysis */}
                <PredictionCard 
                  riskPercentage={73}
                  features={features}
                />

                {/* Column 2: Validation Details */}
                <ValidationCard 
                  issues={issues}
                  validPercentage={82}
                  invalidPercentage={18}
                />
              </div>

              {/* Additional Info Section */}
              <div className="mt-6 max-w-7xl">
                <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-2xl p-6 shadow-xl shadow-purple-500/30 relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/40 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Upload size={26} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1 flex items-center gap-2">
                        Quick Actions
                        <Sparkles size={16} className="animate-pulse" />
                      </h4>
                      <p className="text-sm text-white/90 mb-3">
                        Upload a new medical report to run AI-powered analysis and validation checks
                      </p>
                      <button 
                        onClick={() => setActiveTab('upload')}
                        className="px-5 py-2.5 text-sm bg-white text-purple-600 rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
                      >
                        Upload Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Reports View */}
          {activeTab === 'reports' && <ReportsView />}

          {/* Upload View */}
          {activeTab === 'upload' && <UploadView />}

          {/* Analytics View */}
          {activeTab === 'analytics' && <AnalyticsView />}

          {/* Settings View */}
          {activeTab === 'settings' && (
            <div className="max-w-4xl">
              <div>
                <h2 className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Settings</h2>
                <p className="text-sm text-gray-600 mt-2">Manage your application preferences and configurations</p>
              </div>
              <div className="mt-6 p-12 bg-white/80 backdrop-blur-xl border-white/20 rounded-2xl shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Settings Coming Soon</h3>
                <p className="text-sm text-gray-600">Configure system preferences, notifications, and more</p>
              </div>
            </div>
          )}

          {/* Help View */}
          {activeTab === 'help' && (
            <div className="max-w-4xl">
              <div>
                <h2 className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Help & Support</h2>
                <p className="text-sm text-gray-600 mt-2">Get assistance and learn how to use the Medical AI Dashboard</p>
              </div>
              <div className="mt-6 p-12 bg-white/80 backdrop-blur-xl border-white/20 rounded-2xl shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Help Center Coming Soon</h3>
                <p className="text-sm text-gray-600">Access documentation, tutorials, and support resources</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}