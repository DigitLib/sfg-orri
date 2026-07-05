import React, { useState, useEffect } from 'react';

export default function InstructionsView() {
  const [lang, setLang] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  const t = {
    en: {
      title: "How to use the ORRI Hub",
      subtitle: "A quick guide to navigating the digital governance framework.",
      sections: [
        {
          title: "1. Completing the Phase Checklists",
          body: "Navigate through Phases 0 to 6 using the top dropdown menu. Answer each question carefully. The system will automatically generate a 'Phase-Gate Decision' based on your responses. You must answer all questions in a phase to unlock the decision."
        },
        {
          title: "2. The Governance Dossier",
          body: "As you progress, the app automatically compiles your answers into the Governance Dossier. You can view this at any time. Once all phases are complete, use the 'Print to PDF' button in the Dossier to save your official institutional record."
        },
        {
          title: "3. Exporting & Importing Data",
          body: "This app runs entirely in your browser and does not use a central database. To save your progress across devices or share it with a coordinator, go to the Dashboard and click 'Export JSON'. You can later use 'Import JSON' to reload your progress."
        },
        {
          title: "4. Automated Logic",
          body: "If all answers are 'Yes' or 'Not applicable', the system suggests 'Proceed'. If there are 'No' or 'Partly' answers, it suggests 'Proceed with conditions'. If any answer is 'Unknown', the system strictly mandates 'Escalate for further review'."
        }
      ]
    },
    sr: {
      title: "Kako koristiti ORRI Hub",
      subtitle: "Kratak vodič za navigaciju kroz okvir digitalnog upravljanja.",
      sections: [
        {
          title: "1. Popunjavanje kontrolnih lista po fazama",
          body: "Krećite se kroz faze od 0 do 6 koristeći padajući meni na vrhu. Pažljivo odgovorite na svako pitanje. Sistem će automatski generisati 'Odluku' (Phase-Gate) na osnovu vaših odgovora. Morate odgovoriti na sva pitanja u fazi da biste otključali odluku."
        },
        {
          title: "2. Dosije o upravljanju (Governance Dossier)",
          body: "Kako napredujete, aplikacija automatski sakuplja vaše odgovore u Dosije o upravljanju. Možete ga pogledati u bilo kom trenutku. Kada su sve faze završene, koristite dugme 'Štampaj u PDF' da sačuvate svoj zvanični institucionalni zapis."
        },
        {
          title: "3. Izvoz i uvoz podataka",
          body: "Ova aplikacija radi isključivo u vašem pretraživaču i ne koristi centralnu bazu podataka. Da biste sačuvali napredak na različitim uređajima ili ga podelili sa koordinatorom, idite na Kontrolnu tablu (Dashboard) i kliknite na 'Izvezi JSON'. Kasnije možete koristiti 'Uvezi JSON' da ponovo učitate svoj napredak."
        },
        {
          title: "4. Automatizovana logika",
          body: "Ako su svi odgovori 'Da' ili 'Nije primenljivo', sistem predlaže 'Nastavi'. Ako ima odgovora 'Ne' ili 'Delimično', predlaže 'Nastavi uz uslove'. Ako je bilo koji odgovor 'Nepoznato', sistem strogo nalaže 'Eskaliraj za dalju proveru'."
        }
      ]
    }
  };

  useEffect(() => {
    setLang(localStorage.getItem('app_lang') || 'en');
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;
  const dict = t[lang];

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">{dict.title}</h1>
        <p className="text-gray-600 mt-2 text-lg">{dict.subtitle}</p>
      </div>

      <div className="space-y-6">
        {dict.sections.map((section, idx) => (
          <div key={idx} className="bg-gray-50 p-5 rounded border border-gray-100">
            <h2 className="text-xl font-bold text-blue-900 mb-2">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}