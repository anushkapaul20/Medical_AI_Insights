import React from 'react';
import { Card } from './ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Users, FileText, AlertTriangle } from 'lucide-react';

export function AnalyticsView() {
  // Monthly trends data
  const monthlyData = [
    { month: 'May', reports: 45, highRisk: 12, avgAccuracy: 89 },
    { month: 'Jun', reports: 52, highRisk: 15, avgAccuracy: 91 },
    { month: 'Jul', reports: 48, highRisk: 11, avgAccuracy: 90 },
    { month: 'Aug', reports: 61, highRisk: 18, avgAccuracy: 92 },
    { month: 'Sep', reports: 58, highRisk: 14, avgAccuracy: 94 },
    { month: 'Oct', reports: 67, highRisk: 19, avgAccuracy: 93 }
  ];

  // Disease distribution data
  const diseaseData = [
    { name: 'Diabetes', value: 35, color: '#8b5cf6' },
    { name: 'Hypertension', value: 28, color: '#ec4899' },
    { name: 'Cardiovascular', value: 22, color: '#f59e0b' },
    { name: 'Kidney Disease', value: 15, color: '#10b981' }
  ];

  // Risk distribution
  const riskData = [
    { name: 'Low Risk', value: 78, color: '#10b981' },
    { name: 'Moderate Risk', value: 26, color: '#f59e0b' },
    { name: 'High Risk', value: 23, color: '#ef4444' }
  ];

  // Feature importance across all analyses
  const featureData = [
    { feature: 'Blood Pressure', importance: 92 },
    { feature: 'Glucose Level', importance: 88 },
    { feature: 'BMI', importance: 76 },
    { feature: 'Age', importance: 71 },
    { feature: 'Cholesterol', importance: 68 },
    { feature: 'Family History', importance: 64 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Analytics Dashboard</h2>
        <p className="text-sm text-gray-600 mt-2">Comprehensive insights and trends from medical AI analysis</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Analyses</p>
              <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">331</h3>
              <div className="flex items-center gap-1 text-emerald-600 text-sm">
                <TrendingUp size={14} />
                <span>+12.5%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <FileText size={24} className="text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Unique Patients</p>
              <h3 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">284</h3>
              <div className="flex items-center gap-1 text-emerald-600 text-sm">
                <TrendingUp size={14} />
                <span>+8.3%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg. Accuracy</p>
              <h3 className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">92.8%</h3>
              <div className="flex items-center gap-1 text-emerald-600 text-sm">
                <TrendingUp size={14} />
                <span>+2.1%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <Activity size={24} className="text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">High Risk Cases</p>
              <h3 className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">89</h3>
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <TrendingDown size={14} />
                <span>-3.2%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <AlertTriangle size={24} className="text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl">
          <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">Monthly Analysis Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="reports" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 4 }}
                name="Total Reports"
              />
              <Line 
                type="monotone" 
                dataKey="highRisk" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', r: 4 }}
                name="High Risk"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Disease Distribution */}
        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl">
          <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">Disease Type Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diseaseData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {diseaseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature Importance */}
        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl">
          <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">Top Feature Importance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={featureData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="feature" type="category" width={120} stroke="#6b7280" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="importance" fill="url(#colorGradient)" radius={[0, 8, 8, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Risk Level Distribution */}
        <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl">
          <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">Risk Level Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Accuracy Trend */}
      <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl">
        <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">Model Accuracy Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" domain={[85, 95]} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="avgAccuracy" fill="url(#accuracyGradient)" radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
