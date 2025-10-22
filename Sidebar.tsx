import React from "react";
import {
  LayoutDashboard,
  Upload,
  FileText,
  BarChart3,
  Settings,
  HelpCircle,
  Activity,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({
  activeTab,
  onTabChange,
}: SidebarProps) {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      color: "from-violet-500 to-purple-500",
    },
    {
      id: "upload",
      label: "Upload Report",
      icon: Upload,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "reports",
      label: "Reports",
      icon: FileText,
      color: "from-emerald-500 to-green-500",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      color: "from-gray-500 to-slate-500",
    },
    {
      id: "help",
      label: "Help",
      icon: HelpCircle,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="w-64 bg-white/80 backdrop-blur-xl border-r border-white/20 h-full flex flex-col shadow-xl">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse">
            <Activity size={24} className="text-white" />
          </div>
          <div>
            <h2 className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Medical AI
            </h2>
            <div className="flex items-center gap-1">
              <Sparkles size={10} className="text-purple-500" />
              <span className="text-xs text-gray-500">
                Insights
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r " +
                    item.color +
                    " text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:bg-gradient-to-r hover:" +
                    item.color +
                    " hover:text-white hover:shadow-md"
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
              )}
              <Icon size={20} className="relative z-10" />
              <span className="text-sm relative z-10">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-100 to-purple-100 hover:from-gray-200 hover:to-purple-200 transition-all cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="text-sm">DR</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900 truncate">
              Dr. Gavarkar
            </p>
            <p className="text-xs text-gray-500 truncate">
              doctor@hospital.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}