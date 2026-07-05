import React from 'react';
import kpiData from '../data/kpi-data.json';

export default function DashboardView() {
  // Helper function to color-code statuses based on Document specifications
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Green':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Amber':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Red':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Summary Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Projects Screened</span>
          <span className="text-4xl font-bold text-blue-600 mt-2">{kpiData.summaryStats.projectsScreened}</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Escalations Resolved</span>
          <span className="text-4xl font-bold text-green-600 mt-2">{kpiData.summaryStats.escalationsResolved}</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Staff Trained</span>
          <span className="text-4xl font-bold text-indigo-600 mt-2">{kpiData.summaryStats.staffTrained}</span>
        </div>
      </div>

      {/* Main KPI Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Institutional KPI Tracker</h2>
            <p className="text-sm text-gray-500 mt-1">Last updated: {kpiData.lastUpdated}</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-semibold text-xs">
              <tr>
                <th className="px-6 py-4">KPI Area</th>
                <th className="px-6 py-4">Indicator</th>
                <th className="px-6 py-4">Target</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4">Follow-Up Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {kpiData.kpiTable.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.area}</td>
                  <td className="px-6 py-4">{row.indicator}</td>
                  <td className="px-6 py-4 text-xs">{row.target}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase ${getStatusStyle(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 italic">{row.followUp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}