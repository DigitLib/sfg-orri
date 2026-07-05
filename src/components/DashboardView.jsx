import React, { useState, useEffect } from 'react';
import checklistData from '../data/checklist-data.json';

export default function DashboardView() {
  const [savedData, setSavedData] = useState({});
  const [lang, setLang] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  const t = {
    en: {
      pageTitle: "ORRI Implementation Monitoring",
      pageSub: "Overview of institutional digitalization governance and compliance.",
      overallProg: "Overall Progress",
      phasesComp: "Phases Completed",
      gateDecisions: "Gate Decisions Reached",
      actCond: "Active Conditions",
      actCondSub: "Proceeding with Guardrails",
      pendEsc: "Pending Escalations",
      pendEscSub: "Requires Further Review",
      trackerTitle: "Project Phase Tracker",
      trackerSub: "Real-time status of checklist completion and phase-gate outcomes.",
      thPhase: "Phase",
      thComp: "Completion",
      thCheck: "Checklist Status",
      thGate: "Gate Decision",
      statComp: "Completed",
      statProg: "In Progress",
      statPend: "Not Started",
      decisions: {
        "Proceed": "Proceed",
        "Proceed with conditions": "Proceed with conditions",
        "Escalate for further review": "Escalate for further review",
        "Pending": "Pending"
      }
    },
    sr: {
      pageTitle: "Praćenje primene ORRI",
      pageSub: "Pregled institucionalnog upravljanja digitalizacijom i usklađenosti.",
      overallProg: "Ukupan napredak",
      phasesComp: "Završene faze",
      gateDecisions: "Donete odluke",
      actCond: "Aktivni uslovi",
      actCondSub: "Nastavak uz mere predostrožnosti",
      pendEsc: "Eskalacije na čekanju",
      pendEscSub: "Zahteva dalju proveru",
      trackerTitle: "Praćenje faza projekta",
      trackerSub: "Status u realnom vremenu i ishodi (phase-gate).",
      thPhase: "Faza",
      thComp: "Završetak",
      thCheck: "Status liste",
      thGate: "Odluka (Gate)",
      statComp: "Završeno",
      statProg: "U toku",
      statPend: "Nije započeto",
      decisions: {
        "Proceed": "Nastavi",
        "Proceed with conditions": "Nastavi uz uslove",
        "Escalate for further review": "Eskaliraj za dalju proveru",
        "Pending": "Na čekanju"
      }
    }
  };

  useEffect(() => {
    setLang(localStorage.getItem('app_lang') || 'en');
    const data = localStorage.getItem('orri_project_data');
    if (data) setSavedData(JSON.parse(data));
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;
  const dict = t[lang];

  const phases = Object.entries(checklistData);
  let totalQuestions = 0; let answeredQuestions = 0; let completedPhases = 0; let totalEscalations = 0; let totalConditions = 0;

  const phaseStatuses = phases.map(([phaseKey, phaseData]) => {
    const currentData = phaseData[lang] || phaseData['en'];
    const questions = currentData.questions;
    totalQuestions += questions.length;
    const answeredInPhase = questions.filter(q => savedData[q.id]).length;
    answeredQuestions += answeredInPhase;

    const gateDecision = savedData[`${phaseKey}_gate`];
    if (gateDecision) completedPhases++;
    if (gateDecision === "Escalate for further review") totalEscalations++;
    if (gateDecision === "Proceed with conditions") totalConditions++;

    let status = dict.statPend;
    if (gateDecision) status = dict.statComp;
    else if (answeredInPhase > 0) status = dict.statProg;

    return {
      title: currentData.title,
      progress: Math.round((answeredInPhase / questions.length) * 100),
      gateDecision: gateDecision ? dict.decisions[gateDecision] : dict.decisions["Pending"],
      status: status,
      rawDecision: gateDecision // Used for color coding
    };
  });

  const overallProgress = totalQuestions === 0 ? 0 : Math.round((answeredQuestions / totalQuestions) * 100);

  const getBadgeStyle = (rawDecision) => {
    if (rawDecision === "Proceed") return "bg-green-100 text-green-800 border-green-200";
    if (rawDecision === "Proceed with conditions") return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (rawDecision === "Escalate for further review") return "bg-red-100 text-red-800 border-red-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusStyle = (status) => {
    if (status === dict.statComp) return "bg-blue-100 text-blue-800";
    if (status === dict.statProg) return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-500";
  };

  return (
    <div className="space-y-8">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-gray-900">{dict.pageTitle}</h1>
        <p className="text-gray-600 mt-2 text-lg">{dict.pageSub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{dict.overallProg}</span>
          <span className="text-3xl font-bold text-blue-600 mt-2">{overallProgress}%</span>
          <span className="text-xs text-gray-400 mt-1">{answeredQuestions} / {totalQuestions}</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{dict.phasesComp}</span>
          <span className="text-3xl font-bold text-indigo-600 mt-2">{completedPhases} / {phases.length}</span>
          <span className="text-xs text-gray-400 mt-1">{dict.gateDecisions}</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{dict.actCond}</span>
          <span className="text-3xl font-bold text-yellow-500 mt-2">{totalConditions}</span>
          <span className="text-xs text-gray-400 mt-1">{dict.actCondSub}</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{dict.pendEsc}</span>
          <span className="text-3xl font-bold text-red-500 mt-2">{totalEscalations}</span>
          <span className="text-xs text-gray-400 mt-1">{dict.pendEscSub}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{dict.trackerTitle}</h2>
          <p className="text-sm text-gray-500 mt-1">{dict.trackerSub}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-semibold text-xs">
              <tr>
                <th className="px-6 py-4">{dict.thPhase}</th>
                <th className="px-6 py-4 text-center">{dict.thComp}</th>
                <th className="px-6 py-4 text-center">{dict.thCheck}</th>
                <th className="px-6 py-4 text-center">{dict.thGate}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {phaseStatuses.map((phase, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{phase.title}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[100px]">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${phase.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-medium w-8 text-right">{phase.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${getStatusStyle(phase.status)}`}>
                      {phase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full border text-xs font-bold ${getBadgeStyle(phase.rawDecision)}`}>
                      {phase.gateDecision}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}