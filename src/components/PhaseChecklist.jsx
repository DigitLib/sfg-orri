import React, { useState, useEffect } from 'react';

export default function PhaseChecklist({ phaseKey, phaseData }) {
  const [answers, setAnswers] = useState({});
  const [lang, setLang] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  const uiTranslations = {
    en: {
      options: ['Yes', 'No', 'Partly', 'Not applicable', 'Unknown'],
      optionValues: ['Yes', 'No', 'Partly', 'Not applicable', 'Unknown'],
      gateLabel: "Automated Phase-Gate Decision",
      systemGen: "System Generated",
      pending: "Complete all questions above to generate the decision.",
      proceed: "Proceed",
      conditions: "Proceed with conditions",
      escalate: "Escalate for further review",
      loading: "Loading...",
      nextPhase: "Next Phase",
      goToDossier: "View Governance Dossier",
      recTitle: "Recommendation:",
      // Extracted from the document guidelines:
      recConditions: "The project may continue, but specific actions, safeguards, limitations, or follow-up steps must be completed. Please document these missing elements and assign them for follow-up before moving forward.",
      recEscalate: "The project requires input from relevant specialist functions (legal, privacy, ethics, technical, etc.) before proceeding. Remember: Escalation is not a sign of failure, it is a governance safeguard."
    },
    sr: {
      options: ['Da', 'Ne', 'Delimično', 'Nije primenljivo', 'Nepoznato'],
      optionValues: ['Yes', 'No', 'Partly', 'Not applicable', 'Unknown'],
      gateLabel: "Automatska odluka (Phase-Gate)",
      systemGen: "Sistemski generisano",
      pending: "Odgovorite na sva pitanja da biste generisali odluku.",
      proceed: "Nastavi",
      conditions: "Nastavi uz uslove",
      escalate: "Eskaliraj za dalju proveru",
      loading: "Učitavanje...",
      nextPhase: "Sledeća faza",
      goToDossier: "Pogledaj dosije",
      recTitle: "Preporuka:",
      recConditions: "Projekat se može nastaviti, ali se specifične akcije, mere zaštite, ograničenja ili dalji koraci moraju dovršiti. Molimo dokumentujte ove elemente i zadužite odgovorne osobe pre nego što nastavite.",
      recEscalate: "Projekat zahteva mišljenje relevantnih stručnih službi (pravnih, etičkih, tehničkih, za zaštitu privatnosti itd.) pre nastavka. Zapamtite: Eskalacija nije znak neuspeha, to je mera zaštite upravljanja."
    }
  };

  useEffect(() => {
    const currentLang = localStorage.getItem('app_lang') || 'en';
    setLang(currentLang);

    const savedData = localStorage.getItem('orri_project_data');
    if (savedData) {
      setAnswers(JSON.parse(savedData));
    }
    setIsLoaded(true);
  }, []);

  const handleOptionChange = (questionId, value) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    
    const questions = phaseData[lang].questions;
    const answeredCount = questions.filter(q => updatedAnswers[q.id]).length;
    
    if (answeredCount === questions.length) {
      const values = questions.map(q => updatedAnswers[q.id]);
      let autoGate = "Proceed";
      
      if (values.includes("Unknown")) autoGate = "Escalate for further review";
      else if (values.includes("No") || values.includes("Partly")) autoGate = "Proceed with conditions";
      
      updatedAnswers[`${phaseKey}_gate`] = autoGate;
    }

    setAnswers(updatedAnswers);
    localStorage.setItem('orri_project_data', JSON.stringify(updatedAnswers));
  };

  if (!isLoaded) return <div className="p-4 text-gray-500">{uiTranslations['en'].loading}</div>;

  const t = uiTranslations[lang];
  const currentData = phaseData[lang];
  const currentDecision = answers[`${phaseKey}_gate`];
  const allAnswered = currentData.questions.every(q => answers[q.id]);

  let displayDecision = currentDecision;
  if (lang === 'sr' && currentDecision) {
    if (currentDecision === "Proceed") displayDecision = t.proceed;
    if (currentDecision === "Proceed with conditions") displayDecision = t.conditions;
    if (currentDecision === "Escalate for further review") displayDecision = t.escalate;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const currentPhaseNum = parseInt(phaseKey.replace('phase', ''), 10);
  const isLastPhase = currentPhaseNum === 6;
  const nextRoute = isLastPhase ? `${base}/dossier` : `${base}/phase-${currentPhaseNum + 1}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{currentData.title}</h2>
      <p className="text-gray-600 mb-6">{currentData.purpose}</p>

      {currentData.questions.map((q) => (
        <div key={q.id} className="mb-6 pb-4 border-b border-gray-100 last:border-0">
          <p className="font-medium text-gray-800 mb-3">{q.text}</p>
          <div className="flex flex-wrap gap-4">
            {t.options.map((displayOption, index) => {
              const actualValue = t.optionValues[index];
              return (
                <label key={`${q.id}-${actualValue}`} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name={q.id}
                    value={actualValue}
                    checked={answers[q.id] === actualValue}
                    onChange={(e) => handleOptionChange(q.id, e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{displayOption}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}

      <div className={`mt-8 p-5 rounded-md border-l-4 transition-colors duration-300 ${
        !allAnswered ? "bg-gray-50 border-gray-300" :
        currentDecision === "Proceed" ? "bg-green-50 border-green-500" :
        currentDecision === "Proceed with conditions" ? "bg-yellow-50 border-yellow-500" :
        "bg-red-50 border-red-500"
      }`}>
        <div className="flex items-center justify-between">
          <h3 className={`font-semibold ${
            !allAnswered ? "text-gray-600" :
            currentDecision === "Proceed" ? "text-green-800" :
            currentDecision === "Proceed with conditions" ? "text-yellow-800" :
            "text-red-800"
          }`}>
            {t.gateLabel}
          </h3>
          {allAnswered && (
             <span className="text-xs font-bold uppercase tracking-wider opacity-70 bg-black/5 px-2 py-1 rounded">{t.systemGen}</span>
          )}
        </div>
        
        <p className={`mt-2 text-lg font-medium ${!allAnswered ? "text-gray-500 italic" : "text-gray-900"}`}>
          {!allAnswered ? t.pending : displayDecision}
        </p>

        {/* --- DYNAMIC RECOMMENDATIONS --- */}
        {allAnswered && currentDecision === "Proceed with conditions" && (
          <div className="mt-4 p-3 bg-yellow-100/50 rounded border border-yellow-200">
            <p className="text-sm text-yellow-900"><strong className="font-semibold">{t.recTitle}</strong> {t.recConditions}</p>
          </div>
        )}

        {allAnswered && currentDecision === "Escalate for further review" && (
          <div className="mt-4 p-3 bg-red-100/50 rounded border border-red-200">
            <p className="text-sm text-red-900"><strong className="font-semibold">{t.recTitle}</strong> {t.recEscalate}</p>
          </div>
        )}
      </div>

      {allAnswered && (
        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
          <a 
            href={nextRoute}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-6 rounded shadow transition-colors flex items-center space-x-2"
          >
            <span>{isLastPhase ? t.goToDossier : t.nextPhase}</span>
            {!isLastPhase && <span>➔</span>}
          </a>
        </div>
      )}
    </div>
  );
}