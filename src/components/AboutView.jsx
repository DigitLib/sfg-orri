import React, { useState, useEffect } from 'react';

export default function AboutView() {
  const [lang, setLang] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  const t = {
    en: {
      title: "About the ORRI Tool",
      subtitle: "Operationalizing responsible digitalization in cultural heritage.",
      sections: [
        {
          title: "Purpose of the Checklist",
          body: "The Phase-Based ORRI Review Checklist is a practical review instrument for cultural heritage institutions undertaking digitalization projects. Its purpose is to help project teams identify and address ethical, legal, societal, technical, and governance issues throughout the digitalization lifecycle."
        },
        {
          title: "Responsible Decision-Making",
          body: "The Checklist is designed to support responsible decision-making from the earliest project idea to long-term management of digitized materials. It helps institutions understand what should be checked, when it should be checked, who should be involved, what should be documented, and when additional review or escalation may be required."
        },
        {
          title: "Not an Administrative Burden",
          body: "This Checklist is not intended to slow down digitalization or create unnecessary administrative burden. Its purpose is to make digitalization more transparent, accountable, inclusive, legally aware, and institutionally reliable."
        },
        {
          title: "Relationship to the Strategy",
          body: "This Checklist operationalizes the institutional commitments set out in the SAFEGUARD-DH ORRI Strategy. While the Strategy defines the institution’s long-term governance commitments, this Checklist supports their practical application in concrete digitalization projects."
        }
      ]
    },
    sr: {
      title: "O alatu ORRI",
      subtitle: "Operacionalizacija odgovorne digitalizacije u kulturnom nasleđu.",
      sections: [
        {
          title: "Svrha kontrolne liste",
          body: "Kontrolna lista zasnovana na fazama (Phase-Based ORRI Review Checklist) je praktični instrument za pregled za institucije kulturnog nasleđa koje sprovode projekte digitalizacije. Njena svrha je da pomogne projektnim timovima da identifikuju i reše etička, pravna, društvena, tehnička pitanja i pitanja upravljanja tokom celokupnog životnog ciklusa digitalizacije."
        },
        {
          title: "Odgovorno donošenje odluka",
          body: "Kontrolna lista je dizajnirana da podrži odgovorno donošenje odluka od najranije ideje projekta do dugoročnog upravljanja digitalizovanim materijalima. Pomaže institucijama da razumeju šta treba proveriti, kada to treba proveriti, ko treba da bude uključen, šta treba dokumentovati i kada može biti potreban dodatni pregled ili eskalacija."
        },
        {
          title: "Nije administrativni teret",
          body: "Ova kontrolna lista nema za cilj da uspori digitalizaciju ili stvori nepotreban administrativni teret. Njena svrha je da digitalizaciju učini transparentnijom, odgovornijom, inkluzivnijom, pravno svesnijom i institucionalno pouzdanijom."
        },
        {
          title: "Odnos prema Strategiji",
          body: "Ova kontrolna lista operacionalizuje institucionalne obaveze navedene u SAFEGUARD-DH ORRI Strategiji. Dok Strategija definiše dugoročne obaveze upravljanja institucije, ova lista podržava njihovu praktičnu primenu u konkretnim projektima digitalizacije."
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
          <div key={idx} className="bg-gray-50 p-6 rounded border-l-4 border-blue-800 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed text-md">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}