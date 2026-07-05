import React, { useState, useEffect } from 'react';
import checklistData from '../data/checklist-data.json';

export default function DossierView() {
  const [savedData, setSavedData] = useState(null);
  const [lang, setLang] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  const t = {
    en: {
      title: "Final Record",
      subtitle: "Review and export your project's ORRI decisions.",
      noData: "No Project Data Found",
      noDataSub: "Complete a phase checklist to generate your governance dossier.",
      dossierTitle: "Project ORRI Governance Dossier",
      printBtn: "Print to PDF",
      answered: "Answered:",
      gate: "Phase-Gate Decision",
      outcome: "Outcome:",
      decisions: {
        "Proceed": "Proceed",
        "Proceed with conditions": "Proceed with conditions",
        "Escalate for further review": "Escalate for further review",
        "Stop or redesign": "Stop or redesign"
      }
    },
    sr: {
      title: "Konačni zapis",
      subtitle: "Pregledajte i izvezite ORRI odluke vašeg projekta.",
      noData: "Nisu pronađeni podaci o projektu",
      noDataSub: "Popunite kontrolnu listu faza da biste generisali dosije o upravljanju.",
      dossierTitle: "ORRI Dosije o Upravljanju Projektom",
      printBtn: "Štampaj u PDF",
      answered: "Odgovor:",
      gate: "Odluka (Phase-Gate)",
      outcome: "Ishod:",
      decisions: {
        "Proceed": "Nastavi",
        "Proceed with conditions": "Nastavi uz uslove",
        "Escalate for further review": "Eskaliraj za dalju proveru",
        "Stop or redesign": "Zaustavi ili redizajniraj"
      }
    }
  };

  useEffect(() => {
    setLang(localStorage.getItem('app_lang') || 'en');
    const data = localStorage.getItem('orri_project_data');
    if (data) setSavedData(JSON.parse(data));
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <div className="p-4 text-gray-500">Loading...</div>;
  
  const dict = t[lang];

  if (!savedData || Object.keys(savedData).length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{dict.noData}</h2>
        <p className="text-gray-500">{dict.noDataSub}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{dict.title}</h1>
        <p className="text-gray-600">{dict.subtitle}</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-gray-800">{dict.dossierTitle}</h2>
          <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 text-sm font-medium transition-colors print:hidden">
            {dict.printBtn}
          </button>
        </div>

        <div className="space-y-12">
          {Object.entries(checklistData).map(([phaseKey, phaseData]) => {
            const currentData = phaseData[lang] || phaseData['en'];
            const hasAnswers = currentData.questions.some(q => savedData[q.id]) || savedData[`${phaseKey}_gate`];

            if (!hasAnswers) return null; 

            return (
              <div key={phaseKey} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">
                  {currentData.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentData.questions.map((q) => {
                    if (!savedData[q.id]) return null;
                    
                    let displayAnswer = savedData[q.id];
                    if (lang === 'sr') {
                      const translationMap = {
                        'Yes': 'Da', 'No': 'Ne', 'Partly': 'Delimično', 'Not applicable': 'Nije primenljivo', 'Unknown': 'Nepoznato'
                      };
                      displayAnswer = translationMap[displayAnswer] || displayAnswer;
                    }

                    return (
                      <div key={q.id} className="bg-gray-50 p-4 rounded border border-gray-100 flex flex-col justify-between">
                        <div>
                          <span className="text-xs text-blue-600 uppercase tracking-wider font-bold">{q.category}</span>
                          <p className="text-sm text-gray-800 mt-2 mb-4 leading-relaxed">{q.text}</p>
                        </div>
                        <p className="font-medium text-gray-900 border-t border-gray-200 pt-2">
                          {dict.answered} <span className="text-blue-600 font-semibold">{displayAnswer}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>

                {savedData[`${phaseKey}_gate`] && (
                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r">
                    <h4 className="font-bold text-blue-900">{dict.gate}</h4>
                    <p className="text-blue-800 mt-1">
                      {dict.outcome} <strong>{dict.decisions[savedData[`${phaseKey}_gate`]] || savedData[`${phaseKey}_gate`]}</strong>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}