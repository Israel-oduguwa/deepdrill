"use client"

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Target,
  BarChart3,
  Clock,
  Heart,
  Zap,
  Eye,
  Lock
} from 'lucide-react';

const SafetySection = () => {
  const [activeTab, setActiveTab] = useState('principles');
  const [isVisible, setIsVisible] = useState(false);

  // Safety statistics
  const stats = [
    { 
      value: 99.7, 
      suffix: '%', 
      label: 'Safety Compliance Rate', 
      icon: CheckCircle,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    { 
      value: 120, 
      suffix: 'K+', 
      label: 'Training Hours Completed', 
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    { 
      value: 5, 
      suffix: 'M+', 
      label: 'Incident-Free Hours', 
      icon: Clock,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50'
    },
    { 
      value: 25, 
      suffix: '', 
      label: 'Safety Awards Received', 
      icon: Award,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  // Safety principles
  const principles = [
    {
      icon: Shield,
      title: "Prevention First",
      description: "Proactive identification and mitigation of potential hazards before they become incidents.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Zero Harm Goal",
      description: "Our unwavering commitment to ensuring no harm comes to our people, communities, or environment.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Users,
      title: "Shared Responsibility",
      description: "Safety is everyone's responsibility, from leadership to frontline operations.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Continuous Improvement",
      description: "Regular assessment and enhancement of our safety systems and practices.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  // Safety programs
  const programs = [
    {
      title: "Behavior-Based Safety",
      description: "Empowering employees to identify and correct unsafe behaviors before incidents occur.",
      icon: Eye
    },
    {
      title: "Process Safety Management",
      description: "Comprehensive systems to prevent releases of hazardous substances.",
      icon: Zap
    },
    {
      title: "Emergency Response",
      description: "State-of-the-art emergency preparedness and response capabilities.",
      icon: AlertTriangle
    },
    {
      title: "Health & Wellness",
      description: "Programs focused on both physical and psychological wellbeing of our workforce.",
      icon: Heart
    }
  ];

  // Performance metrics
  const metrics = [
    {
      value: "0.18",
      label: "Total Recordable Injury Rate",
      trend: "↓ 12%",
      trendColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      comparison: "Industry Avg: 0.42"
    },
    {
      value: "0.02",
      label: "Lost Time Injury Rate",
      trend: "↓ 8%",
      trendColor: "text-emerald-600",
      bgColor: "bg-red-50",
      icon: Heart,
      iconColor: "text-red-500",
      comparison: "Industry Avg: 0.08"
    },
    {
      value: "98.7%",
      label: "Safety Training Completion",
      trend: "↑ 5%",
      trendColor: "text-emerald-600",
      bgColor: "bg-blue-50",
      icon: CheckCircle,
      iconColor: "text-emerald-500",
      comparison: "Target: 95%"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">Industry Leader in Safety</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Safety Is Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Foundation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Protecting our people, communities, and environment through unwavering commitment 
            to the highest safety standards in the industry.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className={`${stat.bgColor} backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                        <span className="text-lg">{stat.suffix}</span>
                      </div>
                      <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'principles', label: 'Safety Principles', icon: Shield },
              { id: 'programs', label: 'Safety Programs', icon: Target },
              { id: 'performance', label: 'Performance', icon: TrendingUp }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-2xl shadow-blue-500/10 border border-blue-100'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-500">
            {/* Principles Tab */}
            {activeTab === 'principles' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {principles.map((principle, index) => {
                  const IconComponent = principle.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/30 transition-all duration-500 transform hover:-translate-y-2"
                    >
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${principle.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{principle.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{principle.description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Programs Tab */}
            {activeTab === 'programs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                            <IconComponent className="w-8 h-8 text-blue-600" />
                          </div>
                          <span className="text-4xl font-bold text-slate-300">0{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{program.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>
                        <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                          Learn More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Performance Tab */}
            {activeTab === 'performance' && (
              <div className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">Safety Performance Metrics</h2>
                  <p className="text-xl text-slate-600">
                    Transparent reporting of our safety performance and continuous improvement journey
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className={`p-3 rounded-xl ${metric.bgColor}`}>
                            <IconComponent className={`w-8 h-8 ${metric.iconColor}`} />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${metric.trendColor} bg-emerald-50`}>
                            {metric.trend}
                          </span>
                        </div>
                        <div className="text-4xl font-bold text-slate-800 mb-2">{metric.value}</div>
                        <div className="text-lg font-semibold text-slate-700 mb-2">{metric.label}</div>
                        <div className="text-slate-500 text-sm">{metric.comparison}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Additional Performance Chart */}
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <div className="flex items-center gap-4 mb-8">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-slate-800">Safety Performance Trend</h3>
                  </div>
                  <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-slate-500 mb-2">Visual representation of safety metrics</div>
                      <div className="text-sm text-slate-400">(Chart visualization would be implemented here)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Safety <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Commitment</span>
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                We believe that all incidents are preventable and that zero harm is an achievable goal. 
                Our safety culture is built on leadership commitment, employee engagement, and continuous 
                improvement through learning and innovation.
              </p>

              <div className="space-y-4">
                {[
                  "Executive safety leadership and visibility",
                  "Comprehensive risk assessment and management",
                  "Investment in safety technology and innovation",
                  "Transparent safety performance reporting"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-4 text-slate-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Animated Circle */}
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-4 border-4 border-blue-400/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <div className="text-center text-white">
                      <Shield className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-2xl font-bold">Zero Harm</div>
                      <div className="text-blue-100">Our Promise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;