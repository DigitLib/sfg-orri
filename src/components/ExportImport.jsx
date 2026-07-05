import React, { useState, useRef, useEffect } from 'react';

export default function ExportImport() {
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
  const [lang, setLang] = useState('en');
  const fileInputRef = useRef(null);

  useEffect(() => {
    setLang(localStorage.getItem('app_lang') || 'en');
  }, []);

  const t = {
    en: {
      title: "Project Data Management",
      subtitle: "Export your progress or load an existing project file.",
      btnExport: "Export JSON",
      btnImport: "Import JSON",
      btnClear: "Clear Data",
      errEmpty: "No data to export. Start a phase first!",
      succExport: "Project data exported successfully!",
      succImport: "Data imported! Refreshing...",
      errFormat: "Invalid file format. Please upload a valid JSON file.",
      confirmClear: "Are you sure you want to delete all local project data? This cannot be undone."
    },
    sr: {
      title: "Upravljanje podacima projekta",
      subtitle: "Izvezite svoj napredak ili učitajte postojeći fajl projekta.",
      btnExport: "Izvezi JSON",
      btnImport: "Uvezi JSON",
      btnClear: "Obriši podatke",
      errEmpty: "Nema podataka za izvoz. Prvo započnite fazu!",
      succExport: "Podaci projekta su uspešno izvezeni!",
      succImport: "Podaci uvezeni! Osvežavanje...",
      errFormat: "Nevažeći format. Molimo otpremite validan JSON fajl.",
      confirmClear: "Da li ste sigurni da želite da obrišete sve lokalne podatke? Ovo se ne može opozvati."
    }
  };

  const dict = t[lang];

  const handleExport = () => {
    const savedData = localStorage.getItem('orri_project_data');
    if (!savedData || savedData === '{}') {
      setStatusMessage({ text: dict.errEmpty, type: 'error' });
      return;
    }
    const blob = new Blob([savedData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `safeguard-orri-project-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setStatusMessage({ text: dict.succExport, type: 'success' });
    setTimeout(() => setStatusMessage({ text: '', type: '' }), 3000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        JSON.parse(e.target.result);
        localStorage.setItem('orri_project_data', e.target.result);
        setStatusMessage({ text: dict.succImport, type: 'success' });
        setTimeout(() => window.location.reload(), 1500);
      } catch (error) {
        setStatusMessage({ text: dict.errFormat, type: 'error' });
        setTimeout(() => setStatusMessage({ text: '', type: '' }), 3000);
      }
    };
    reader.readAsText(file);
    event.target.value = null; 
  };

  const handleClear = () => {
    if (window.confirm(dict.confirmClear)) {
      localStorage.removeItem('orri_project_data');
      window.location.reload();
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 mb-4">
      <div>
        <h3 className="font-bold text-gray-800">{dict.title}</h3>
        <p className="text-sm text-gray-500">{dict.subtitle}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {statusMessage.text && (
          <span className={`text-sm font-medium px-3 py-1 rounded ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {statusMessage.text}
          </span>
        )}
        <button onClick={handleExport} className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded border border-gray-300 transition-colors">
          {dict.btnExport}
        </button>
        <button onClick={() => fileInputRef.current.click()} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded shadow transition-colors">
          {dict.btnImport}
        </button>
        <button onClick={handleClear} className="text-red-600 hover:text-red-800 text-sm font-medium underline px-2">
          {dict.btnClear}
        </button>
        <input type="file" accept=".json" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
      </div>
    </div>
  );
}