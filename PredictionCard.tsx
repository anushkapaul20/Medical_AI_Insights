import React from 'react';
import { Card } from './ui/card';

interface FeatureImportance {
  name: string;
  value: number;
  color: string;
}

interface PredictionCardProps {
  riskPercentage: number;
  features: FeatureImportance[];
}

export function PredictionCard({ riskPercentage, features }: PredictionCardProps) {
  // Calculate the stroke dash offset for the gauge
  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (riskPercentage / 100) * circumference;

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all">
      <div className="flex items-center justify-between mb-6">
        <h3 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Disease Risk Prediction</h3>
        <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full shadow-lg">
          High Risk
        </div>
      </div>
      
      {/* Risk Gauge */}
      <div className="flex justify-center mb-8">
        <div className="relative w-52 h-52">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse" />
          <svg className="w-52 h-52 transform -rotate-90 relative z-10">
            {/* Background circle */}
            <circle
              cx="104"
              cy="104"
              r="85"
              stroke="#f3f4f6"
              strokeWidth="20"
              fill="none"
            />
            {/* Progress circle with gradient */}
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
            <circle
              cx="104"
              cy="104"
              r="85"
              stroke="url(#gaugeGradient)"
              strokeWidth="20"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out drop-shadow-lg"
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-5xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">{riskPercentage}%</div>
            <div className="text-sm text-gray-500 mt-2">Risk Score</div>
          </div>
        </div>
      </div>

      {/* Feature Importance */}
      <div className="space-y-4">
        <h4 className="text-sm text-gray-700 flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full" />
          Feature Importance
        </h4>
        {features.map((feature, index) => (
          <div key={index} className="space-y-2 group">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{feature.name}</span>
              <span className="text-sm px-2 py-0.5 bg-gray-100 rounded-md group-hover:bg-gradient-to-r group-hover:from-violet-100 group-hover:to-purple-100 transition-all">{feature.value}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                className="h-3 rounded-full transition-all duration-700 shadow-md relative overflow-hidden"
                style={{
                  width: `${feature.value}%`,
                  background: `linear-gradient(90deg, ${feature.color}, ${feature.color}dd)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-xl hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-[1.02] transform">
        Run Disease Prediction Analysis
      </button>
    </Card>
  );
}
