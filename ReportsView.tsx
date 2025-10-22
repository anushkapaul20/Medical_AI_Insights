import React, { useState } from 'react';
import { Card } from './ui/card';
import { FileText, Download, Eye, Filter, Calendar, User, TrendingUp } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface Report {
  id: string;
  patientName: string;
  reportType: string;
  date: string;
  riskLevel: 'critical' | 'warning' | 'success';
  status: string;
  accuracy: number;
}

export function ReportsView() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reports: Report[] = [
    {
      id: 'RPT-001',
      patientName: 'John Anderson',
      reportType: 'Diabetes Risk Assessment',
      date: '2025-10-20',
      riskLevel: 'critical',
      status: 'High Risk',
      accuracy: 94
    },
    {
      id: 'RPT-002',
      patientName: 'Sarah Mitchell',
      reportType: 'Cardiovascular Analysis',
      date: '2025-10-19',
      riskLevel: 'warning',
      status: 'Moderate Risk',
      accuracy: 87
    },
    {
      id: 'RPT-003',
      patientName: 'Michael Chen',
      reportType: 'General Health Screening',
      date: '2025-10-18',
      riskLevel: 'success',
      status: 'Low Risk',
      accuracy: 96
    },
    {
      id: 'RPT-004',
      patientName: 'Emily Davis',
      reportType: 'Hypertension Risk',
      date: '2025-10-17',
      riskLevel: 'critical',
      status: 'High Risk',
      accuracy: 91
    },
    {
      id: 'RPT-005',
      patientName: 'Robert Wilson',
      reportType: 'Kidney Function Analysis',
      date: '2025-10-16',
      riskLevel: 'success',
      status: 'Normal',
      accuracy: 98
    },
    {
      id: 'RPT-006',
      patientName: 'Lisa Thompson',
      reportType: 'Diabetes Risk Assessment',
      date: '2025-10-15',
      riskLevel: 'warning',
      status: 'Moderate Risk',
      accuracy: 89
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Total Reports</p>
              <h3 className="text-white mb-0">127</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FileText size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Low Risk</p>
              <h3 className="text-white mb-0">78</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">High Risk</p>
              <h3 className="text-white mb-0">23</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FileText size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Avg. Accuracy</p>
              <h3 className="text-white mb-0">92%</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4 bg-white/80 backdrop-blur-xl border-white/20 shadow-lg">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-gray-700">
            <Filter size={18} className="text-purple-500" />
            <span className="text-sm">Filter by:</span>
          </div>
          {['all', 'high-risk', 'moderate', 'low-risk'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </Card>

      {/* Reports Table */}
      <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Medical Reports</h3>
          <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all shadow-lg">
            Export All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-100">
                <th className="text-left py-4 px-4 text-sm text-gray-700">Report ID</th>
                <th className="text-left py-4 px-4 text-sm text-gray-700">Patient</th>
                <th className="text-left py-4 px-4 text-sm text-gray-700">Type</th>
                <th className="text-left py-4 px-4 text-sm text-gray-700">Date</th>
                <th className="text-left py-4 px-4 text-sm text-gray-700">Status</th>
                <th className="text-left py-4 px-4 text-sm text-gray-700">Accuracy</th>
                <th className="text-left py-4 px-4 text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-indigo-50/50 transition-all group">
                  <td className="py-4 px-4">
                    <span className="text-sm text-purple-600">{report.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs">
                        {report.patientName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-700">{report.patientName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-700">{report.reportType}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={14} className="text-purple-400" />
                      {report.date}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge type={report.riskLevel}>{report.status}</StatusBadge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                          style={{ width: `${report.accuracy}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-700 w-12">{report.accuracy}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-purple-100 rounded-lg transition-all group/btn">
                        <Eye size={16} className="text-gray-600 group-hover/btn:text-purple-600" />
                      </button>
                      <button className="p-2 hover:bg-purple-100 rounded-lg transition-all group/btn">
                        <Download size={16} className="text-gray-600 group-hover/btn:text-purple-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
