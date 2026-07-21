import { bi, type Bi } from "@/lib/i18n";

export const ui = {
  app: {
    title: bi("ORRI Alat", "ORRI Tool"),
    subtitle: bi(
      "Odgovorna digitalizacija u kulturnom nasleđu",
      "Responsible digitalization in cultural heritage",
    ),
  },
  nav: {
    home: bi("Početna", "Home"),
    projects: bi("Projekti", "Projects"),
    about: bi("O alatu", "About"),
    dossier: bi("Dosije", "Dossier"),
  },
  home: {
    title: bi("Projekti", "Projects"),
    subtitle: bi(
      "Vodite ORRI pregled kroz faze digitalizacije i pratite KPI pokazatelje.",
      "Run the ORRI review across digitalization phases and track KPI indicators.",
    ),
    newProject: bi("Novi projekat", "New project"),
    empty: bi("Još nema projekata. Kreirajte prvi.", "No projects yet. Create the first one."),
    projectName: bi("Naziv projekta", "Project name"),
    projectDesc: bi("Kratak opis (opciono)", "Short description (optional)"),
    create: bi("Kreiraj", "Create"),
    cancel: bi("Otkaži", "Cancel"),
    delete: bi("Obriši", "Delete"),
    confirmDelete: bi("Obrisati projekat?", "Delete this project?"),
    phasesDone: bi("faza završeno", "phases completed"),
  },
  project: {
    overview: bi("Pregled", "Overview"),
    phases: bi("Faze", "Phases"),
    kpi: bi("KPI Dashboard", "KPI Dashboard"),
    backToProjects: bi("← Nazad na projekte", "← Back to projects"),
    progress: bi("Napredak", "Progress"),
    answered: bi("Odgovoreno", "Answered"),
    questionsAnswered: bi("odgovorenih pitanja", "questions answered"),
    kpiSummary: bi("KPI sažetak", "KPI summary"),
    openPhase: bi("Otvori fazu", "Open phase"),
    openKpi: bi("Otvori KPI Dashboard", "Open KPI Dashboard"),
    createdAt: bi("Kreirano", "Created"),
    updatedAt: bi("Ažurirano", "Updated"),
  },
  dossier: {
    subtitle: bi("Pregled svih faza i odgovora u okviru projekta.", "Overview of all phases and answers within the project."),
    import: bi("Uvezi JSON", "Import JSON"),
    export: bi("Izvezi JSON", "Export JSON"),
    print: bi("Štampaj", "Print"),
    importError: bi("Greška pri učitavanju fajla", "Error loading file"),
  },
  phase: {
    section: bi("Sekcija", "Section"),
    evidence: bi("Dokumentacija koju treba čuvati", "Evidence to retain"),
    gateTitle: bi("Phase-Gate odluka", "Phase-gate decision"),
    gateHint: bi(
      "Zabeležite ishod pregleda pre prelaska u sledeću fazu.",
      "Record the review outcome before moving to the next phase.",
    ),
    decision: bi("Odluka", "Decision"),
    decidedBy: bi("Ko je odlučio / bio uključen", "Who decided / was involved"),
    concerns: bi("Identifikovane brige", "Identified concerns"),
    followUp: bi("Naredni koraci", "Follow-up actions"),
    saveGate: bi("Sačuvaj odluku", "Save decision"),
    gateSaved: bi("Odluka sačuvana", "Decision saved"),
    note: bi("Beleška", "Note"),
    notePlaceholder: bi("Dodatne napomene…", "Additional notes…"),
    searchPlaceholder: bi("Pretraži po ID-u pitanja (npr. 0A1) ili tekstu…", "Search by Question ID (e.g. 0A1) or text…"),
    searchNoResults: bi("Nema pronađenih pitanja za unetu pretragu.", "No questions found matching your search."),
    questionId: bi("Pitanje", "Question"),
    levelBeginner: bi("Osnovni", "Basic"),
    levelIntermediate: bi("Srednji", "Intermediate"),
    levelExpert: bi("Potpuni", "Full"),
    nextPhase: bi("Sledeća faza →", "Next phase →"),
    prevPhase: bi("← Prethodna faza", "← Previous phase"),
  },
  answers: {
    yes: bi("Da", "Yes"),
    no: bi("Ne", "No"),
    partly: bi("Delimično", "Partly"),
    na: bi("N/P", "N/A"),
    unknown: bi("Nepoznato", "Unknown"),
  },
  gate: {
    none: bi("Nije doneta", "Not decided"),
    proceed: bi("Nastaviti", "Proceed"),
    proceed_conditions: bi("Nastaviti uz uslove", "Proceed with conditions"),
    pause: bi("Pauzirati", "Pause pending info"),
    escalate: bi("Eskalirati", "Escalate for review"),
    stop: bi("Zaustaviti / redizajnirati", "Stop or redesign"),
  },
  kpi: {
    title: bi("KPI Dashboard", "KPI Dashboard"),
    subtitle: bi(
      "Pratite implementaciju ORRI Strategije po oblastima.",
      "Track implementation of the ORRI Strategy across areas.",
    ),
    status: bi("Status", "Status"),
    value: bi("Vrednost", "Value"),
    comment: bi("Komentar / Follow-up", "Comment / Follow-up"),
    purpose: bi("Svrha", "Purpose"),
    source: bi("Izvor podataka", "Data source"),
    frequency: bi("Učestalost", "Frequency"),
    target: bi("Cilj", "Target"),
    summary: bi("Sažetak statusa", "Status summary"),
  },
  status: {
    green: bi("Zeleno — na putu", "Green — on track"),
    amber: bi("Žuto — pažnja potrebna", "Amber — needs attention"),
    red: bi("Crveno — značajno kašnjenje", "Red — significant gap"),
    na: bi("Nije primenljivo", "Not applicable"),
    review: bi("Za pregled", "To be reviewed"),
    none: bi("Nije postavljen", "Not set"),
  },
  about: {
    title: bi("O ORRI Alatu", "About the ORRI Tool"),
    lead: bi(
      "Ovaj alat služi kao interaktivni vodič za procenu rizika i usklađenosti pri radu sa digitalnim kolekcijama i osetljivim kulturnim nasleđem. Njegov cilj je da pomogne institucijama i stručnjacima u postizanju transparentnosti i odgovornosti kroz jasno strukturiran proces.",
      "This tool serves as an interactive guide for assessing risk and compliance when working with digital collections and sensitive cultural heritage. Its goal is to help institutions and professionals achieve transparency and accountability through a clearly structured process."
    ),
    dataProtection: bi("Zaštita podataka", "Data Protection"),
    dataProtectionDesc: bi(
      "Osigurajte da projekti digitalizacije budu u potpunosti u skladu sa propisima o zaštiti podataka, privatnosti i intelektualnoj svojini.",
      "Ensure digitization projects fully comply with data protection, privacy, and intellectual property regulations."
    ),
    ethicalApproach: bi("Etički pristup", "Ethical Approach"),
    ethicalApproachDesc: bi(
      "Primenite najviše standarde za odgovorno rukovanje osetljivim sadržajima, uz dužno poštovanje lokalnog kulturnog i istorijskog konteksta.",
      "Apply the highest standards for responsible handling of sensitive content, with due respect for local cultural and historical context."
    ),
    howToUse: bi("Kako se koristi alat?", "How to use the tool?"),
    step1Title: bi("Odabir nivoa procene i pametna redukcija (Skip-Logic)", "Assessment level selection & Smart Skip-Logic"),
    step1Desc: bi(
      "Izaberite nivo procene (Osnovni, Srednji ili Potpuni) na početnoj stranici ili zaglavlju faze. Alat automatski primenjuje redukciju (Skip-Logic) i preskače nepotrebna pitanja (poput AI alata, privatnosti ili dobavljača ako nisu prisutni u vašem projektu).",
      "Select your assessment track (Basic, Intermediate, or Full) on the home page or phase header. The tool automatically applies smart skip-logic to bypass non-applicable modules (such as AI, privacy, or vendor oversight for routine projects)."
    ),
    step2Title: bi("Voditi projekat kroz 7 faza (Phase-Gates)", "Guiding projects through 7 lifecycle phases (Phase-Gates)"),
    step2Desc: bi(
      "Korak po korak odgovarajte na pitanja kroz 7 faza digitalizacije (od Orijentacije do Održavanja). Nakon popunjene faze, sistem automatski generiše Phase-Gate odluku (Nastaviti, Nastaviti uz uslove, ili Eskalirati).",
      "Answer questions step-by-step through the 7 project phases (from Preliminary Orientation to Long-term Stewardship). Once a phase is completed, the system generates an automated Phase-Gate decision (Proceed, Proceed with Conditions, or Escalate)."
    ),
    step3Title: bi("Dosije projekta, pretraga i izvoz", "Project Dossier, Search & Export"),
    step3Desc: bi(
      "Koristite brzu pretragu za instant pronalazak pitanja. Svi vaši odgovori, beleške i izabrani nivo automatski se čuvaju u Dosijeu, odakle možete odštampati izveštaj ili izvesti/uvesti projekat u JSON formatu.",
      "Use real-time search to instantly find questions by keyword. All your answers, notes, and selected level are saved in the Dossier, from which you can print compliance reports or export/import project data as JSON."
    ),
  },
} as const;

export type UiBi = Bi;
