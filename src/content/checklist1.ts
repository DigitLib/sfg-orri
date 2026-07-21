import { bi, type Bi } from "@/lib/i18n";

export type Question = { id: string; text: Bi };
export type Section = { id: string; title: Bi; questions: Question[]; evidence?: Bi[] };
export type Phase = {
  id: number;
  code: Bi;
  title: Bi;
  description: Bi;
  sections: Section[];
};

const q = (id: string, sr: string, en: string): Question => ({ id, text: bi(sr, en) });

export const phases: Phase[] = [
  {
    id: 0,
    code: bi("Faza 0", "Phase 0"),
    title: bi("Preliminarna orijentacija i pokretanje projekta", "Preliminary Orientation and Project Initiation"),
    description: bi(
      "Rana provera ideje projekta: svrha, obim, inicijalni rizici, i da li uopšte treba pokrenuti aktivnost.",
      "Early screening of the project idea: purpose, scope, initial risks, and whether the activity should be launched at all.",
    ),
    sections: [
      {
        id: "A",
        title: bi("Svrha i početni obim", "Purpose and initial scope"),
        questions: [
          q("0A1", "Da li je jasno definisana svrha projekta?", "Is the purpose of the project clearly defined?"),
          q("0A2", "Da li su identifikovani očekivani korisnici i publika?", "Are the expected users and audience identified?"),
          q("0A3", "Da li je zabeleženo ko predlaže projekat?", "Is the person or team proposing the project recorded?"),
          q("0A4", "Da li postoji početni opis materijala koji se digitalizuje?", "Is there an initial description of the materials to be digitized?"),
        ],
        evidence: [
          bi("Kratka izjava o svrsi", "Short statement of purpose"),
          bi("Očekivani benefiti", "Expected benefits"),
          bi("Predlagač projekta", "Project proposer"),
        ],
      },
      {
        id: "B",
        title: bi("Inicijalna procena osetljivosti", "Initial sensitivity screening"),
        questions: [
          q("0B1", "Da li materijal može sadržati lične podatke?", "Might the material contain personal data?"),
          q("0B2", "Da li postoji rizik po kulturnu osetljivost ili sporno nasleđe?", "Is there a cultural sensitivity or contested-heritage risk?"),
          q("0B3", "Da li se planira korišćenje AI ili automatizovanih alata?", "Is the use of AI or automated tools planned?"),
          q("0B4", "Da li će učestvovati vendor ili treća strana?", "Will a vendor or third party be involved?"),
        ],
        evidence: [bi("Beleška o inicijalnom AI/vendor screening-u", "Initial AI / vendor screening note")],
      },
      {
        id: "C",
        title: bi("Inicijalna pravna i regulatorna pitanja", "Initial legal and regulatory issues"),
        questions: [
          q("0C1", "Da li su identifikovani vlasnici autorskih prava ili nosioci srodnih prava?", "Are copyright holders or related-rights holders identified?"),
          q("0C2", "Da li se primenjuju posebna pravila (arhivi, kulturna dobra)?", "Do special rules apply (archives, cultural heritage)?"),
          q("0C3", "Da li su potrebne dodatne pravne konsultacije?", "Is further legal consultation needed?"),
        ],
      },
    ],
  },
  {
    id: 1,
    code: bi("Faza 1", "Phase 1"),
    title: bi("Planiranje projekta i uspostavljanje upravljanja", "Project Planning and Governance Setup"),
    description: bi(
      "Definisanje plana, uloga, budžeta, vendora i pravnog okvira pre početka rada.",
      "Defining the plan, roles, budget, vendors and legal framework before work begins.",
    ),
    sections: [
      {
        id: "A",
        title: bi("Plan projekta i ciljevi", "Project plan and objectives"),
        questions: [
          q("1A1", "Da li postoji pisani plan projekta?", "Is there a written project plan?"),
          q("1A2", "Da li su ciljevi merljivi?", "Are the objectives measurable?"),
          q("1A3", "Da li je opisan slučaj upotrebe (use case)?", "Is the use case described?"),
          q("1A4", "Da li je budžet realno procenjen?", "Is the budget realistically estimated?"),
        ],
        evidence: [bi("Plan projekta", "Project plan"), bi("Opis slučaja upotrebe", "Use case description")],
      },
      {
        id: "B",
        title: bi("Uloge i odgovornosti", "Roles and responsibilities"),
        questions: [
          q("1B1", "Da li postoji vlasnik projekta?", "Is there a project owner?"),
          q("1B2", "Da li su uloge (kustos, IT, pravni, ORRI) dodeljene?", "Are roles (curator, IT, legal, ORRI) assigned?"),
          q("1B3", "Da li je definisan postupak eskalacije?", "Is an escalation procedure defined?"),
        ],
      },
      {
        id: "C",
        title: bi("Autorska prava i pristup", "Rights and access model"),
        questions: [
          q("1C1", "Postoji li plan za oslobađanje prava (rights clearance)?", "Is there a rights-clearance plan?"),
          q("1C2", "Da li je izabran model licenciranja?", "Has a licensing model been chosen?"),
          q("1C3", "Da li je predviđeno vođenje rights metapodataka?", "Are rights metadata planned?"),
        ],
      },
      {
        id: "D",
        title: bi("AI i napredni digitalni alati", "AI and advanced digital tools"),
        questions: [
          q("1D1", "Da li je urađen AI risk screening?", "Has AI risk screening been done?"),
          q("1D2", "Kako će se sprovoditi ljudski nadzor (human review)?", "How will human review be performed?"),
        ],
      },
      {
        id: "E",
        title: bi("Vendori i treće strane", "Vendors and third parties"),
        questions: [
          q("1E1", "Da li su vendori procenjeni?", "Have vendors been assessed?"),
          q("1E2", "Da li su ugovorni zahtevi (zaštita podataka, poverljivost) definisani?", "Are contractual requirements (data protection, confidentiality) defined?"),
        ],
      },
    ],
  },
  {
    id: 2,
    code: bi("Faza 2", "Phase 2"),
    title: bi("Selekcija objekata i materijala", "Selection of Objects and Materials"),
    description: bi(
      "Šta se digitalizuje, zašto, i pod kojim uslovima pristupa.",
      "What is digitized, why, and under what access conditions.",
    ),
    sections: [
      {
        id: "A",
        title: bi("Kriterijumi selekcije", "Selection criteria"),
        questions: [
          q("2A1", "Da li su kriterijumi selekcije eksplicitni?", "Are the selection criteria explicit?"),
          q("2A2", "Da li su konsultovani kustosi / stručnjaci?", "Have curators / experts been consulted?"),
          q("2A3", "Da li je predviđena kontekstualizacija?", "Is contextualization planned?"),
        ],
      },
      {
        id: "B",
        title: bi("Osetljivost i etika", "Sensitivity and ethics"),
        questions: [
          q("2B1", "Da li materijali sadrže osetljive prikaze osoba ili zajednica?", "Do the materials contain sensitive depictions of persons or communities?"),
          q("2B2", "Da li je razmotren uticaj na zajednice porekla?", "Has impact on source communities been considered?"),
          q("2B3", "Da li je potrebna terminološka revizija?", "Is a terminology review needed?"),
        ],
      },
      {
        id: "C",
        title: bi("Autorska prava po objektu", "Item-level rights"),
        questions: [
          q("2C1", "Da li je status prava proveren po objektu?", "Have rights been verified per item?"),
          q("2C2", "Da li su predložena rights statement-a?", "Are rights statements proposed?"),
        ],
      },
      {
        id: "D",
        title: bi("Pogodnost za AI obradu", "Suitability for AI processing"),
        questions: [
          q("2D1", "Da li je izbor pogodan za predviđenu AI obradu?", "Is the selection suitable for planned AI processing?"),
          q("2D2", "Da li je opisan zahtev za ljudski pregled?", "Is the human-review requirement described?"),
        ],
      },
    ],
  },
  {
    id: 3,
    code: bi("Faza 3", "Phase 3"),
    title: bi("Priprema, digitalizacija i kreiranje master fajlova", "Preparation, Capture and Master File Creation"),
    description: bi(
      "Tehnički standardi, uslovi rada, kontrola kvaliteta i zaštita master fajlova.",
      "Technical standards, working conditions, quality control and protection of master files.",
    ),
    sections: [
      {
        id: "A",
        title: bi("Tehnički standardi", "Technical standards"),
        questions: [
          q("3A1", "Da li su definisani tehnički standardi (rezolucija, format)?", "Are technical standards (resolution, format) defined?"),
          q("3A2", "Da li su kalibrisani uređaji?", "Is equipment calibrated?"),
          q("3A3", "Da li postoji šema imenovanja fajlova?", "Is a file-naming scheme in place?"),
        ],
        evidence: [
          bi("Beleška o tehničkim standardima", "Technical standards note"),
          bi("Podešavanja opreme", "Capture settings sheet"),
        ],
      },
      {
        id: "B",
        title: bi("Bezbednost i rukovanje materijalom", "Safety and handling"),
        questions: [
          q("3B1", "Da li je rukovanje osetljivim originalima sigurno?", "Is handling of fragile originals safe?"),
          q("3B2", "Da li je zabeležen svaki propušten ili ponovljen snimak?", "Is every missing or repeated capture logged?"),
        ],
      },
      {
        id: "C",
        title: bi("Master fajlovi i backup", "Master files and backup"),
        questions: [
          q("3C1", "Da li se master fajlovi backup-uju odmah po snimanju?", "Are master files backed up promptly after capture?"),
          q("3C2", "Da li su zaštićeni od izmene?", "Are they protected from modification?"),
        ],
      },
      {
        id: "D",
        title: bi("Vendor QA (ako se koristi)", "Vendor QA (if applicable)"),
        questions: [
          q("3D1", "Da li vendor dostavlja izveštaj o kvalitetu?", "Does the vendor deliver a quality report?"),
          q("3D2", "Postoji li zapis o prihvatanju/odbijanju isporuke?", "Is there an acceptance / rejection record?"),
        ],
      },
    ],
  },
  {
    id: 4,
    code: bi("Faza 4", "Phase 4"),
    title: bi("Priprema za objavljivanje i obogaćivanje sadržaja", "Preparation for Publication and Content Enrichment"),
    description: bi(
      "Metapodaci, opisi, AI-generisani sadržaj, pristupačnost i konteksti pre objavljivanja.",
      "Metadata, descriptions, AI-generated content, accessibility and context before publication.",
    ),
    sections: [
      {
        id: "A",
        title: bi("Metapodaci i opisi", "Metadata and descriptions"),
        questions: [
          q("4A1", "Da li su metapodaci potpuni po definisanoj šemi?", "Is metadata complete per the defined schema?"),
          q("4A2", "Da li je terminologija revidirana zbog osetljivih termina?", "Has terminology been reviewed for sensitive terms?"),
        ],
      },
      {
        id: "B",
        title: bi("AI-generisani sadržaj", "AI-generated content"),
        questions: [
          q("4B1", "Da li je AI-generisan sadržaj jasno označen?", "Is AI-generated content clearly labelled?"),
          q("4B2", "Da li je urađen ljudski pregled AI izlaza?", "Has human review of AI output been performed?"),
        ],
      },
      {
        id: "C",
        title: bi("Pristupačnost", "Accessibility"),
        questions: [
          q("4C1", "Da li su predviđeni alt tekstovi i pristupačni opisi?", "Are alt text and accessible descriptions planned?"),
          q("4C2", "Da li je prikaz u skladu sa smernicama pristupačnosti?", "Is the display compliant with accessibility guidelines?"),
        ],
      },
    ],
  },
  {
    id: 5,
    code: bi("Faza 5", "Phase 5"),
    title: bi("Objavljivanje, pristup i ponovna upotreba", "Online Publication, Access and Reuse"),
    description: bi(
      "Kanali objavljivanja, licence, pravni i etički okvir za javnu upotrebu.",
      "Publication channels, licences, and legal/ethical framework for public use.",
    ),
    sections: [
      {
        id: "A",
        title: bi("Kanali i platforme", "Channels and platforms"),
        questions: [
          q("5A1", "Da li su odabrane platforme (institucionalni sajt, Europeana, itd.)?", "Have platforms been selected (institutional site, Europeana, etc.)?"),
          q("5A2", "Da li su uslovi platforme kompatibilni sa politikom institucije?", "Are platform terms compatible with institutional policy?"),
        ],
      },
      {
        id: "B",
        title: bi("Licence i rights statements", "Licences and rights statements"),
        questions: [
          q("5B1", "Da li je licenca / rights statement dodeljena svakom objektu?", "Is a licence / rights statement assigned to each item?"),
          q("5B2", "Da li su takedown procedure jasne?", "Are takedown procedures clear?"),
        ],
      },
      {
        id: "C",
        title: bi("Transparentnost", "Transparency"),
        questions: [
          q("5C1", "Da li je jasno predstavljeno poreklo materijala?", "Is provenance clearly presented?"),
          q("5C2", "Postoji li kanal za povratne informacije javnosti?", "Is there a public feedback channel?"),
        ],
      },
    ],
  },
  {
    id: 6,
    code: bi("Faza 6", "Phase 6"),
    title: bi("Upravljanje podacima, održavanje i dugoročno očuvanje", "Data Management, Maintenance and Long-Term Stewardship"),
    description: bi(
      "Skladištenje, integritet, korekcije nakon objavljivanja, i dugoročno očuvanje.",
      "Storage, integrity, post-publication corrections, and long-term preservation.",
    ),
    sections: [
      {
        id: "A",
        title: bi("Skladištenje i integritet", "Storage and integrity"),
        questions: [
          q("6A1", "Postoji li plan dugoročnog skladištenja?", "Is there a long-term storage plan?"),
          q("6A2", "Da li se proverava integritet fajlova (checksum)?", "Is file integrity verified (checksum)?"),
        ],
      },
      {
        id: "B",
        title: bi("Korekcije nakon objavljivanja", "Post-publication corrections"),
        questions: [
          q("6B1", "Postoji li postupak za korekcije metapodataka?", "Is there a procedure for metadata corrections?"),
          q("6B2", "Da li se prate zahtevi za uklanjanje / ispravku?", "Are takedown / correction requests tracked?"),
        ],
      },
      {
        id: "C",
        title: bi("Odgovornost i pregled", "Accountability and review"),
        questions: [
          q("6C1", "Da li postoji periodični pregled kolekcije?", "Is there a periodic collection review?"),
          q("6C2", "Da li se učenje iz projekta prenosi u institucionalnu praksu?", "Are lessons learned fed back into institutional practice?"),
        ],
      },
    ],
  },
];

export type GateDecision = "proceed" | "proceed_conditions" | "pause" | "escalate" | "stop";
export const gateDecisions: GateDecision[] = [
  "proceed",
  "proceed_conditions",
  "pause",
  "escalate",
  "stop",
];

export function totalQuestions(phase: Phase): number {
  return phase.sections.reduce((n, s) => n + s.questions.length, 0);
}

export function findPhase(id: number): Phase | undefined {
  return phases.find((p) => p.id === id);
}
