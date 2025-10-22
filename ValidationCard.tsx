import React from 'react';
import { Card } from './ui/card';
import { StatusBadge } from './StatusBadge';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface Issue {
  type: 'critical' | 'success' | 'warning';
  label: string;
  field: string;
  action: string;
}

interface ValidationCardProps {
  issues: Issue[];
  validPercentage: number;
  invalidPercentage: number;
}

export function ValidationCard({ issues, validPercentage, invalidPercentage }: ValidationCardProps) {
  // Calculate donut chart values
  const total = validPercentage + invalidPercentage;
  const validAngle = (validPercentage / total) * 360;
  
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all">
      <div className="flex items-center justify-between mb-6">
        <h3 className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Data Validation</h3>
        <div className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs rounded-full shadow-lg">
          {validPercentage}% Valid
        </div>
      </div>
      
      {/* Data Integrity Chart */}
      <div className="flex justify-center mb-8">
        <div className="relative w-52 h-52">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full blur-2xl animate-pulse" />
          <svg className="w-52 h-52 transform -rotate-90 relative z-10">
            <defs>
              <linearGradient id="validGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="invalidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
            {/* Valid data (green) */}
            <circle
              cx="104"
              cy="104"
              r="85"
              stroke="url(#validGradient)"
              strokeWidth="26"
              fill="none"
              strokeDasharray={`${(validPercentage / 100) * 534} 534`}
              className="drop-shadow-lg"
            />
            {/* Invalid data (red) */}
            <circle
              cx="104"
              cy="104"
              r="85"
              stroke="url(#invalidGradient)"
              strokeWidth="26"
              fill="none"
              strokeDasharray={`${(invalidPercentage / 100) * 534} 534`}
              strokeDashoffset={-((validPercentage / 100) * 534)}
              className="drop-shadow-lg"
            />
          </svg>
          {/* Center legend */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-5xl bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">{validPercentage}%</div>
            <div className="text-sm text-gray-500 mt-2">Valid</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 shadow-md" />
          <span className="text-sm text-gray-700">Valid ({validPercentage}%)</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-rose-500 shadow-md" />
          <span className="text-sm text-gray-700">Invalid ({invalidPercentage}%)</span>
        </div>
      </div>

      {/* Inconsistency Table */}
      <div className="space-y-3">
        <h4 className="text-sm text-gray-700 flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full" />
          Validation Issues
        </h4>
        <div className="border border-purple-100 rounded-xl overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-3 border-b border-purple-100">
            <div className="text-xs text-gray-700">Issue</div>
            <div className="text-xs text-gray-700">Field</div>
            <div className="text-xs text-gray-700">Action</div>
          </div>
          
          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {issues.map((issue, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 px-4 py-3 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-indigo-50/50 transition-all group">
                <div className="flex items-center">
                  <StatusBadge type={issue.type}>{issue.label}</StatusBadge>
                </div>
                <div className="text-sm text-gray-700 flex items-center group-hover:text-gray-900">{issue.field}</div>
                <div className="text-sm bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center hover:from-purple-700 hover:to-indigo-700 cursor-pointer">
                  {issue.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="w-full mt-6 px-6 py-3 bg-white text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 border-2 border-emerald-500 rounded-xl hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 hover:text-white hover:border-transparent transition-all shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.02] transform">
        Validate All Records
      </button>
    </Card>
  );
}
