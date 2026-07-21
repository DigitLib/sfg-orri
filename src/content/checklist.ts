import { bi, type Bi } from "@/lib/i18n";
import type { SkipCategory } from "@/lib/skipLogic";

export type QuestionOption = { value: string; label: Bi };
export type Level = 'beginner' | 'intermediate' | 'expert';
export type Question = { id: string; text: Bi; level: Level; skipCategory?: SkipCategory; options?: QuestionOption[] };
export type Section = { id: string; title: Bi; questions: Question[]; evidence?: Bi[] };

export type Phase = {
  id: number;
  code: Bi;
  title: Bi;
  description: Bi;
  sections: Section[];
};

const q = (
  id: string,
  sr: string,
  en: string,
  level: Level = 'expert',
  skipCategory?: SkipCategory,
  options?: QuestionOption[]
): Question => ({
  id,
  text: bi(sr, en),
  level,
  ...(skipCategory ? { skipCategory } : {}),
  ...(options ? { options } : {}),
});

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
        title: bi("Svrha projekta i institucionalno utemeljenje", "Project Purpose and Institutional Rationale"),
        questions: [
          q("0A1", "Da li je opšta svrha aktivnosti digitalizacije jasno navedena?", "Is the general purpose of the digitalization activity clearly stated?", 'beginner'),
          q("0A2", "Da li je predložena aktivnost povezana sa misijom institucije, javnom ulogom, strategijom kolekcije, svrhom istraživanja, ciljem pristupa, potrebom očuvanja ili obrazovnom funkcijom?", "Is the proposed activity connected to the institution’s mission, public role, collection strategy, research purpose, access objective, preservation need, or educational function?", 'beginner'),
          q("0A3", "Da li postoji jasan razlog zašto se ovi materijali ili kolekcije sada razmatraju?", "Is there a clear reason why these materials or collections are being considered now?", 'intermediate'),
          q("0A4", "Da li je institucija identifikovala očekivanu korist aktivnosti, kao što su očuvanje, javni pristup, istraživanje, obrazovanje, pristupačnost, pretraživost, ponovna upotreba ili institucionalni razvoj?", "Has the institution identified the expected benefit of the activity, such as preservation, public access, research, education, accessibility, discoverability, reuse, or institutional development?", 'intermediate'),
          q("0A5", "Da li je institucija razmotrila da li bi digitalizacija mogla stvoriti nove rizike, a ne samo nove benefite?", "Has the institution considered whether digitalization could create new risks, not only new benefits?", 'expert'),
        ],
        evidence: [
          bi("Kratka izjava o svrsi", "Short statement of purpose"),
          bi("Inicijalni opis očekivanih benefita", "Initial description of expected benefits"),
          bi("Evidencija o osobi/timu koji predlaže projekat", "Record of the person/team proposing the project")
        ]
      },
      {
        id: "B",
        title: bi("Inicijalni obim materijala", "Initial Scope of Materials"),
        questions: [
          q("0B1", "Da li su materijali, kolekcije, objekti, zapisi ili skupovi podataka predloženi za digitalizaciju opisani bar na preliminarnom nivou?", "Are the materials, collections, objects, records, or datasets proposed for digitalization described at least at a preliminary level?", 'beginner'),
          q("0B2", "Da li je poznata približna količina ili razmera, makar i grubo?", "Is the approximate quantity or scale known, even if only roughly?", 'intermediate'),
          q("0B3", "Da li je identifikovana vrsta materijala, kao što su tekst, slika, fotografija, rukopis, arhivski zapis, audio, video, 3D objekat, izvorno digitalni materijal ili mešovita kolekcija?", "Is the type of material identified, such as text, image, photograph, manuscript, archive record, audio, video, 3D object, born-digital material, or mixed collection?", 'intermediate'),
          q("0B4", "Da li je poznato fizičko ili tehničko stanje materijala, ili je potrebno izvršiti procenu?", "Is the physical or technical condition of the material known, or does it need to be assessed?", 'intermediate'),
          q("0B5", "Da li je institucija svesna bilo kakve očigledne krhkosti, problema sa konzervacijom ili ograničenja pri rukovanju?", "Is the institution aware of any obvious fragility, conservation issue, or handling constraint?", 'expert'),
          q("0B6", "Da li postoje materijali koji mogu biti osetljivi, sporni, sveti, traumatični, specifični za zajednicu, politički osetljivi ili povezani sa ranjivim osobama ili grupama?", "Are there any materials that may be sensitive, contested, sacred, traumatic, community-specific, politically sensitive, or connected to vulnerable persons or groups?", 'expert'),
          q("0B7", "Da li postoji razlog da se veruje da bi neki materijali mogli sadržati lične podatke ili informacije koje se odnose na prepoznatljiva lica?", "Is there any reason to believe that some materials may contain personal data or information relating to identifiable persons?", 'expert'),
          q("0B8", "Da li postoji bilo kakav razlog da se veruje da status prava može biti složen ili nejasan?", "Is there any reason to believe that rights status may be complex or unclear?", 'expert')
        ]
      },
      {
        id: "C",
        title: bi("Inicijalno razumevanje korisnika i uticaja", "Initial User and Impact Understanding"),
        questions: [
          q("0C1", "Da li je institucija identifikovala verovatne korisnike digitalizovanih materijala?", "Has the institution identified the likely users of the digitalized materials?", 'beginner'),
          q("0C2", "Da li je institucija razmotrila da li je projekat namenjen za internu upotrebu, istraživanje, edukaciju, javni onlajn pristup, pristup zajednici, ponovnu upotrebu od strane trećih lica ili agregaciju putem spoljnih platformi?", "Has the institution considered whether the project is intended for internal use, research use, educational use, public online access, community access, reuse by third parties, or aggregation through external platforms?", 'intermediate'),
          q("0C3", "Da li je institucija razmotrila da li bilo koji pojedinci, zajednice, grupe, istraživači, edukatori, kreatori, nosioci prava ili javni korisnici mogu biti pogođeni ovim projektom?", "Has the institution considered whether any individuals, communities, groups, researchers, educators, creators, rights holders, or public users may be affected by the project?", 'intermediate'),
          q("0C4", "Da li je institucija razmotrila da li digitalizacija može promeniti vidljivost, dostupnost, interpretaciju ili percipirano značenje materijala?", "Has the institution considered whether digitalization may change the visibility, accessibility, interpretation, or perceived meaning of the materials?", 'intermediate'),
          q("0C5", "Da li je institucija razmotrila da li projekat može povećati pristup materijalima koje je ranije bilo teško pronaći ili kontekstualizovati?", "Has the institution considered whether the project may increase access to materials that were previously difficult to find or contextualize?", 'beginner'),
          q("0C6", "Da li je institucija razmotrila da li povećan pristup može stvoriti rizike, uključujući pogrešnu interpretaciju, zloupotrebu, dekontekstualizaciju, izlaganje osetljivih informacija ili štetu pogođenim zajednicama?", "Has the institution considered whether increased access could create risks, including misinterpretation, misuse, decontextualization, exposure of sensitive information, or harm to affected communities?", 'expert')
        ]
      },
      {
        id: "D",
        title: bi("Inicijalni tehnološki i AI skrining", "Initial Technology and AI Screening"),
        questions: [
          q(
            "0D1",
            "Da li se očekuje da projekat koristi samo uobičajenu opremu za digitalizaciju, ili može uključivati AI-podržane ili napredne digitalne alate?",
            "Is the project expected to use only ordinary digitization equipment, or may it involve AI-supported or advanced digital tools?",
            'beginner',
            undefined,
            [
              { value: "ordinary", label: bi("Samo uobičajena oprema", "Ordinary Equipment Only") },
              { value: "ai_tools", label: bi("AI i napredni alati", "AI & Advanced Tools") },
              { value: "unknown", label: bi("Nepoznato", "Unknown") }
            ]
          ),
          q("0D2", "Da li bi se veštačka inteligencija ili automatizovani alati mogli koristiti za OCR, transkripciju, prevođenje, generisanje metapodataka, prepoznavanje slika, detekciju objekata, klasifikaciju, klasterisanje, preporuku, pretragu, opis, obogaćivanje, restauraciju, poboljšanje ili podršku interpretaciji?", "Could AI or automated tools be used for OCR, transcription, translation, metadata generation, image recognition, object detection, classification, clustering, recommendation, search, description, enrichment, restoration, enhancement, or interpretation support?", 'intermediate', "ai"),
          q("0D3", "Da li će bilo koji automatizovani alat uticati na to kako se materijali opisuju, kategorišu, rangiraju, ističu, preporučuju, tumače ili čine vidljivim korisnicima?", "Will any automated tool affect how materials are described, categorized, ranked, surfaced, recommended, interpreted, or made visible to users?", 'intermediate', "ai"),
          q("0D4", "Da li institucija razmatra upotrebu platformi trećih strana, alata u oblaku, eksternog softvera, AI usluga ili sistema kojima upravljaju dobavljači?", "Is the institution considering the use of third-party platforms, cloud tools, external software, AI services, or vendor-managed systems?", 'intermediate', "ai"),
          q("0D5", "Da li projektni tim razume, bar na osnovnom nivou, šta se očekuje da alat radi?", "Does the project team understand, at least at a basic level, what the tool is expected to do?", 'expert', "ai"),
          q("0D6", "Da li je jasno da li će ljudski pregled biti moguć pre nego što se automatizovani izlazi iskoriste, objave ili se na njih osloni?", "Is it clear whether human review will be possible before automated outputs are used, published, or relied upon?", 'expert', "ai"),
          q("0D7", "Da li postoji zabrinutost da alat može generisati greške, pristrasne opise, obmanjujuće izlaze ili neprikladne interpretacije?", "Is there any concern that the tool may generate errors, biased descriptions, misleading outputs, or inappropriate interpretations?", 'expert', "ai")
        ]
      },
      {
        id: "E",
        title: bi("Inicijalno uočavanje pravnih i regulatornih pitanja", "Initial Legal and Regulatory Issue-Spotting"),
        questions: [
          q("0E1", "Da li postoji bilo kakva naznaka da će autorska prava, srodna prava, licenciranje, status javnog vlasništva, moralna prava ili dozvole za ponovnu upotrebu morati da se provere?", "Is there any indication that copyright, related rights, licensing, public domain status, moral rights, or reuse permissions may need to be checked?", 'beginner'),
          q("0E2", "Da li postoji bilo kakva naznaka da bi se mogla primeniti pravila o ličnim podacima, privatnosti, pravima na sliku, poverljivosti, osetljivim informacijama ili zaštiti podataka?", "Is there any indication that personal data, privacy, image rights, confidentiality, sensitive information, or data protection rules may apply?", 'intermediate', "privacy"),
          q("0E3", "Da li postoji bilo kakva naznaka da bi se mogla primeniti pravila o arhivama, kulturnom nasleđu, javnom sektoru, pristupu informacijama, nabavkama, pristupačnosti ili transparentnosti?", "Is there any indication that archival, cultural heritage, public sector, access to information, procurement, accessibility, or transparency rules may apply?", 'intermediate'),
          q("0E5", "Da li je projektni tim identifikovao da li bi mogla biti potrebna lokalna pravna ekspertiza za zaštitu podataka, arhive, nabavke, autorska prava ili kulturno nasleđe?", "Has the project team identified whether local legal, data protection, archival, procurement, copyright, or cultural heritage expertise may be needed?", 'expert'),
          q("0E6", "Da li postoje pravne neizvesnosti koje treba rešiti pre početka detaljnog planiranja?", "Are there any legal uncertainties that should be resolved before detailed planning begins?", 'expert')
        ]
      },
      {
        id: "F",
        title: bi("Inicijalno upravljanje i odgovornost", "Initial Governance and Responsibility"),
        questions: [
          q("0F1", "Da li postoji identifikovani vlasnik projekta ili odgovorna interna funkcija?", "Is there an identified project owner or responsible internal function?", 'beginner'),
          q("0F2", "Da li je jasno ko ima ovlašćenje da odobri prelazak na formalno planiranje?", "Is it clear who has authority to approve movement into formal planning?", 'beginner'),
          q("0F3", "Da li je institucija identifikovala koji timovi ili uloge treba da budu uključeni u sledećoj fazi?", "Has the institution identified which teams or roles should be involved in the next phase?", 'intermediate'),
          q("0F4", "Da li je institucija razmotrila da li bi ORRI koordinaciju trebalo obavestiti u ovoj ranoj fazi?", "Has the institution considered whether ORRI coordination should be notified at this early stage?", 'intermediate'),
          q("0F5", "Da li postoji bilo kakav razlog da se uključi više rukovodstvo pre nego što projekat napreduje?", "Is there any reason to involve senior leadership before the project moves forward?", 'expert'),
          q("0F6", "Da li postoji razlog da se pre detaljnog planiranja uključi savetodavna funkcija za etiku, stručnjak kustos, predstavnik zajednice, pravna funkcija, funkcija zaštite podataka ili tehnički stručnjak?", "Is there any reason to involve an ethics advisory function, curatorial expert, community representative, legal function, data protection function, or technical expert before detailed planning?", 'expert'),
        ]
      }
    ]
  },
  {
    id: 1,
    code: bi("Faza 1", "Phase 1"),
    title: bi("Planiranje projekta i uspostavljanje upravljanja", "Project Planning and Governance Setup"),
    description: bi(
      "Definisanje plana, uloga, budžeta, vendora i pravnog okvira pre početka rada.",
      "Defining the plan, roles, budget, vendors and legal framework before work begins."
    ),
    sections: [
      {
        id: "A",
        title: bi("Ciljevi projekta i slučajevi upotrebe", "Project Objectives and Use Cases"),
        questions: [
          q("1A1", "Da li su ciljevi projekta jasno napisani?", "Are the project objectives clearly written?", 'beginner'),
          q("1A2", "Da li su identifikovani nameravani slučajevi upotrebe?", "Are the intended use cases identified?", 'intermediate'),
          q("1A3", "Da li je jasno da li projekat podržava očuvanje, javni pristup, istraživanje, obrazovanje, institucionalno upravljanje, pristupačnost, ponovnu upotrebu, digitalnu izložbu, angažovanje zajednice ili neku drugu svrhu?", "Is it clear whether the project supports preservation, public access, research, education, institutional management, accessibility, reuse, digital exhibition, community engagement, or another purpose?", 'intermediate'),
          q("1A4", "Da li je jasno da li će digitalizovani izlazi biti korišćeni interno, objavljeni na mreži, deljeni sa partnerima, učinjeni dostupnim preko agregatora, korišćeni u AI sistemu ili ponovo korišćeni od strane trećih lica?", "Is it clear whether the digitalized outputs will be used internally, published online, shared with partners, made available through an aggregator, used in an AI system, or reused by third parties?", 'intermediate'),
          q("1A5", "Da li je cilj projekta realan u svetlu raspoloživih resursa, vremena, stručnosti i infrastrukture?", "Is the project objective realistic in light of available resources, time, expertise, and infrastructure?", 'expert'),
          q("1A6", "Da li je institucija razmotrila da li bi projekat trebalo podeliti na manje faze ili pilote?", "Has the institution considered whether the project should be divided into smaller phases or pilots?", 'expert'),
          q("1A7", "Da li je projektni tim identifikovao kako bi izgledao uspeh?", "Has the project team identified what success would look like?", 'expert'),
          q("1A8", "Da li je projektni tim razmotrio ne samo željene benefite, već i moguće negativne efekte ili tenzije?", "Has the project team considered not only desired benefits, but also possible negative effects or tensions?", 'expert')
        ]
      },
      {
        id: "B",
        title: bi("Obim, Vremenski okvir, Resursi i Izvodljivost", "Scope, Timeline, Resources and Feasibility"),
        questions: [
          q("1B1", "Da li je obim projekta jasno definisan?", "Is the scope of the project clearly defined?", 'beginner'),
          q("1B2", "Da li su zabeležene procenjene količine, formati, složenost i očekivani izlazi?", "Are the estimated quantities, formats, complexity, and expected outputs recorded?", 'intermediate'),
          q("1B3", "Da li postoji realan vremenski okvir?", "Is there a realistic timeline?", 'intermediate'),
          q("1B4", "Da li se uzimaju u obzir uloge zaposlenih i vremenske obaveze?", "Are staff roles and time commitments considered?", 'intermediate'),
          q("1B5", "Da li su identifikovane potrebe budžeta?", "Are budget needs identified?", 'expert'),
          q("1B6", "Da li su identifikovane potrebne veštine i stručnost?", "Are required skills and expertise identified?", 'expert'),
          q("1B7", "Da li su identifikovani potrebna oprema, softver, skladište i infrastruktura?", "Are required equipment, software, storage, and infrastructure identified?", 'expert'),
          q("1B8", "Da li je institucija razmotrila da li ima dovoljan interni kapacitet?", "Has the institution considered whether it has sufficient in-house capacity?", 'expert'),
          q("1B9", "Da li je institucija razmotrila da li je potrebno spoljno angažovanje (outsourcing) ili podrška?", "Has the institution considered whether outsourcing or external support may be needed?", 'expert'),
          q("1B10", "Da li su zavisnosti, ograničenja i pretpostavke zabeleženi?", "Are dependencies, constraints, and assumptions recorded?", 'expert'),
        ]
      },
      {
        id: "C",
        title: bi("Struktura upravljanja i odgovornosti", "Governance Structure and Responsibilities"),
        questions: [
          q("1C1", "Da li postoji vlasnik projekta?", "Is there a project owner?", 'beginner'),
          q("1C2", "Da li postoji osoba ili funkcija odgovorna za koordinaciju ORRI pregleda?", "Is there a person or function responsible for coordinating ORRI review?", 'intermediate'),
          q("1C3", "Da li su dodeljene odgovornosti za identifikaciju pravnih pitanja, pregled privatnosti, oslobađanje prava, pregled kulturne osetljivosti, tehnički kvalitet, kvalitet metapodataka, pristupačnost, objavljivanje i dugoročno održavanje?", "Are responsibilities assigned for legal issue-spotting, privacy screening, rights clearance, cultural sensitivity review, technical quality, metadata quality, accessibility, publication, and long-term maintenance?", 'intermediate'),
          q("1C4", "Da li je jasno ko može da odobri ključne odluke?", "Is it clear who can approve key decisions?", 'beginner'),
          q("1C5", "Da li je jasno ko može pauzirati, eskalirati ili zahtevati redizajn projekta?", "Is it clear who can pause, escalate, or require redesign of the project?", 'expert'),
          q("1C6", "Da li postoji proces za beleženje odluka i narednih akcija?", "Is there a process for recording decisions and follow-up actions?", 'expert'),
          q("1C7", "Da li postoji proces za rešavanje neslaganja između tehničkih, kustoskih, pravnih, upravljačkih razmatranja ili razmatranja o pristupu javnosti?", "Is there a process for resolving disagreements between technical, curatorial, legal, management, or public access considerations?", 'expert'),
          q("1C8", "Da li je više rukovodstvo obavešteno ili uključeno kada projekat ima strateški, javni, finansijski, reputacioni značaj ili značaj visokog uticaja?", "Has senior leadership been informed or involved where the project has strategic, public, financial, reputational, or high-impact significance?", 'expert'),
        ]
      },
      {
        id: "D",
        title: bi("Pravno i regulatorno planiranje", "Legal and Regulatory Planning"),
        questions: [
          q("1D1", "Da li je institucija identifikovala koje se pravne ili regulatorne oblasti mogu primeniti na projekat?", "Has the institution identified which legal or regulatory areas may apply to the project?", 'beginner'),
          q("1D2", "Da li je institucija proverila da li se mogu primeniti nacionalna, regionalna, lokalna, institucionalna ili međunarodna pravila?", "Has the institution checked whether national, regional, local, institutional, or international rules may apply?", 'intermediate'),
          q("1D3", "Da li je institucija identifikovala da li je potrebno pregledati autorska prava, srodna prava, licenciranje, moralna prava, status javnog domena, prava na bazu podataka ili dozvole za ponovnu upotrebu?", "Has the institution identified whether copyright, related rights, licensing, moral rights, public domain status, database rights, or reuse permissions need to be reviewed?", 'intermediate'),
          q("1D4", "Da li je institucija identifikovala da li bi se mogla primeniti pravila o ličnim podacima, privatnosti, pravima na sliku, poverljivosti, osetljivim podacima ili zaštiti podataka?", "Has the institution identified whether personal data, privacy, image rights, confidentiality, sensitive data, or data protection rules may apply?", 'intermediate'),
          q("1D5", "Da li je institucija identifikovala da li se primenjuju arhivska pravila, pravila o kulturnom nasleđu, javnom sektoru, javnim nabavkama, pristupu informacijama, transparentnosti, pristupačnosti ili otvorenim podacima?", "Has the institution identified whether archival, cultural heritage, public sector, procurement, access to information, transparency, accessibility, or open data rules may apply?", 'expert'),
          q("1D6", "Da li je institucija identifikovala da li se mogu primeniti AI regulative ili politike?", "Has the institution identified whether AI-related regulation or policy may apply?", 'expert'),
          q("1D7", "Da li je institucija identifikovala da li uslovi korišćenja trećih lica, pravila platforme, zahtevi repozitorijuma ili zahtevi agregatora mogu uticati na projekat?", "Has the institution identified whether third-party terms of service, platform rules, repository requirements, or aggregator requirements may affect the project?", 'expert'),
          q("1D8", "Da li je institucija identifikovala ko će obezbediti pravni ili regulatorni pregled gde je to potrebno?", "Has the institution identified who will provide legal or regulatory review where needed?", 'expert'),
          q("1D9", "Da li se pravne neizvesnosti beleže, a ne ignorišu?", "Are legal uncertainties recorded rather than ignored?", 'expert')
        ]
      },
      {
        id: "E",
        title: bi("Planiranje autorskih prava, licenciranja i pristupa", "Rights, Licensing and Access Planning"),
        questions: [
          q("1E1", "Da li postoji plan za proveru statusa prava materijala?", "Is there a plan for checking the rights status of the materials?", 'beginner'),
          q("1E2", "Da li postoji plan za beleženje statusa autorskih prava, srodnih prava, licenci, dozvola, statusa javnog domena, ograničenja ili nepoznatih prava?", "Is there a plan for recording copyright status, related rights, licences, permissions, public domain status, restrictions, or unknown rights?", 'intermediate'),
          q("1E3", "Da li je institucija razmotrila da li ima pravo na digitalizaciju materijala?", "Has the institution considered whether it has the right to digitize the materials?", 'intermediate'),
          q("1E4", "Da li je institucija razmotrila da li ima pravo da materijale objavi na internetu?", "Has the institution considered whether it has the right to publish the materials online?", 'intermediate'),
          q("1E5", "Da li je institucija razmotrila da li ima pravo da dozvoli ponovnu upotrebu drugima?", "Has the institution considered whether it has the right to allow reuse by others?", 'expert'),
          q("1E6", "Da li je institucija razmotrila koja izjava o pravima, licenca ili uslov pristupa bi bili prikladni?", "Has the institution considered what rights statement, licence, or access condition may be appropriate?", 'expert'),
          q("1E7", "Da li je institucija razmotrila da li bi različiti materijali u istom projektu mogli zahtevati različite uslove pristupa ili licenciranja?", "Has the institution considered whether different materials in the same project may require different access or licensing conditions?", 'expert'),
          q("1E8", "Da li je institucija razmotrila kako će informacije o pravima biti reflektovane u metapodacima?", "Has the institution considered how rights information will be reflected in metadata?", 'expert'),
          q("1E9", "Da li je institucija razmotrila šta da radi ukoliko je status prava nepoznat ili sporan?", "Has the institution considered what to do if rights status is unknown or disputed?", 'expert')
        ]
      },
      {
        id: "F",
        title: bi("Planiranje privatnosti i zaštite podataka", "Privacy and Data Protection Planning"),
        questions: [
          q("1F1", "Da li je institucija razmotrila da li materijali sadrže lične podatke ili informacije koje se odnose na prepoznatljiva lica?", "Has the institution considered whether the materials contain personal data or information relating to identifiable persons?", 'beginner', "privacy"),
          q("1F2", "Da li je institucija razmotrila da li materijali sadrže osetljive lične podatke, privatnu prepisku, slike ljudi, glasove, biografske podatke, porodične informacije, zdravstvene informacije, političke ili verske informacije, ili druge informacije koje zahtevaju pažnju?", "Has the institution considered whether the materials contain sensitive personal data, private correspondence, images of people, voices, biographical data, family information, health information, political or religious information, or other information requiring care?", 'intermediate', "privacy"),
          q("1F3", "Da li je institucija razmotrila da li metapodaci, transkripti, OCR, opisi, oznake ili obogaćivanje mogu otkriti lične podatke?", "Has the institution considered whether metadata, transcripts, OCR, descriptions, tags, or enrichment may reveal personal information?", 'intermediate', "privacy"),
          q("1F4", "Da li je institucija razmotrila da li bi objavljivanje moglo učiniti ranije teško dostupne lične podatke lakšim za otkrivanje?", "Has the institution considered whether publication could make previously hard-to-find personal information easier to discover?", 'intermediate', "privacy"),
          q("1F5", "Da li je institucija razmotrila da li je potreban skrining privatnosti ili zaštite podataka?", "Has the institution considered whether a privacy or data protection screening is required?", 'expert', "privacy"),
          q("1F6", "Da li je institucija razmotrila da li bi pod važećim pravilima mogla biti obavezna formalna Procena uticaja na zaštitu podataka (DPIA) ili ekvivalentna lokalna procena?", "Has the institution considered whether a formal Data Protection Impact Assessment or equivalent local assessment may be required under applicable rules?", 'expert', "privacy"),
          q("1F7", "Da li je institucija razmotrila da li će alati trećih lica obrađivati lične podatke?", "Has the institution considered whether third-party tools may process personal data?", 'expert', "privacy"),
          q("1F8", "Da li je institucija identifikovala mere zaštite kao što su minimizacija, redigovanje, ograničenje pristupa, kontekstualne beleške, pregled ili odloženo objavljivanje, ukoliko je potrebno?", "Has the institution identified safeguards such as minimization, redaction, access restriction, contextual notes, review, or delayed publication, where needed?", 'expert', "privacy")
        ]
      },
      {
        id: "G",
        title: bi("Kulturna osetljivost, reprezentacija i kontekst", "Cultural Sensitivity, Representation and Context"),
        questions: [
          q("1G1", "Da li je institucija razmotrila da li su materijali kulturno osetljivi, sporni, sveti, traumatični, kolonijalni, politički osetljivi, vezani za manjine, specifični za zajednicu ili povezani sa marginalizovanim grupama?", "Has the institution considered whether the materials are culturally sensitive, contested, sacred, traumatic, colonial, politically sensitive, minority-related, community-specific, or connected to marginalized groups?", 'beginner'),
          q("1G2", "Da li je institucija razmotrila da li bi digitalizacija mogla da promeni vidljivost ili interpretaciju materijala?", "Has the institution considered whether digitalization may alter the visibility or interpretation of the materials?", 'intermediate'),
          q("1G3", "Da li je institucija razmotrila da li trenutni opisi, klasifikacije, naslovi ili metapodaci mogu sadržati zastarelu, pristrasnu, diskriminatornu, štetnu ili nedovoljnu terminologiju?", "Has the institution considered whether current descriptions, classifications, titles, or metadata may contain outdated, biased, discriminatory, harmful, or insufficient terminology?", 'intermediate'),
          q("1G4", "Da li je institucija razmotrila da li bi mogao biti potreban dodatni kontekst pre objavljivanja ili ponovne upotrebe?", "Has the institution considered whether additional context may be needed before publication or reuse?", 'intermediate'),
          q("1G5", "Da li je institucija razmotrila da li bi trebalo konsultovati pogođene zajednice, stručnjake za datu oblast, kustose, istraživače ili druge zainteresovane strane?", "Has the institution considered whether affected communities, subject experts, curators, researchers, or other stakeholders should be consulted?", 'expert'),
          q("1G6", "Da li je institucija razmotrila da li bi neki materijali trebalo da budu podložni ograničenom pristupu, odloženom objavljivanju, kontekstualnim upozorenjima, pregledu zajednice ili posebnom tretmanu?", "Has the institution considered whether some materials should be subject to restricted access, delayed publication, contextual warnings, community review, or special handling?", 'expert'),
          q("1G7", "Da li je institucija razmotrila da li bi projekat mogao nenamerno pojačati stereotipe, izbrisati kontekst ili favorizovati jedno tumačenje u odnosu na druga?", "Has the institution considered whether the project could unintentionally reinforce stereotypes, erase context, or privilege one interpretation over others?", 'expert')
        ]
      },
      {
        id: "H",
        title: bi("Planiranje AI i naprednih digitalnih alata", "AI and Advanced Digital Tool Planning"),
        questions: [
          q("1H1", "Da li će se AI ili automatizovani alati koristiti u bilo kojoj fazi projekta?", "Will AI or automated tools be used at any stage of the project?", 'beginner', "ai"),
          q("1H2", "Da li će se AI koristiti za OCR, prepoznavanje rukopisa, transkripciju, prevod, generisanje metapodataka, klasifikaciju, označavanje, klasterisanje, pretragu, preporuku, unapređenje sadržaja, restauraciju, opis, sumiranje ili podršku interpretaciji?", "Will AI be used for OCR, handwriting recognition, transcription, translation, metadata generation, classification, tagging, clustering, search, recommendation, content enhancement, restoration, description, summarization, or interpretation support?", 'intermediate', "ai"),
          q("1H3", "Da li je svrha alata jasno definisana?", "Is the purpose of the tool clearly defined?", 'intermediate', "ai"),
          q("1H4", "Da li je jasno koje će ulazne podatke alat obrađivati?", "Is it clear what input data the tool will process?", 'intermediate', "ai"),
          q("1H5", "Da li je jasno kakav će izlaz alat proizvesti?", "Is it clear what output the tool will produce?", 'expert', "ai"),
          q("1H6", "Da li je jasno da li će se izlaz koristiti interno, da li će ga pregledati osoblje, da li će biti uključen u metapodatke, objavljen ili će se na njega korisnici osloniti?", "Is it clear whether the output will be used internally, reviewed by staff, included in metadata, published, or relied upon by users?", 'expert', "ai"),
          q("1H7", "Da li je institucija razmotrila rizike od grešaka, pristrasnosti, halucinacija, pogrešne klasifikacije, neprikladnog opisa, gubitka konteksta, prekomerne automatizacije ili prevelikog oslanjanja na izlaze alata?", "Has the institution considered risks of error, bias, hallucination, misclassification, inappropriate description, loss of context, over-automation, or excessive reliance on tool outputs?", 'expert', "ai"),
          q("1H8", "Da li je institucija razmotrila kako će se sprovoditi ljudski nadzor?", "Has the institution considered how human review will be carried out?", 'expert', "ai"),
          q("1H9", "Da li je institucija razmotrila kako će neizvesnost, mašinski generisani sadržaj ili automatizovano obogaćivanje biti dokumentovani?", "Has the institution considered how uncertainty, machine-generated content, or automated enrichment will be documented?", 'expert', "ai"),
          q("1H10", "Da li je institucija razmotrila da li se mogu primeniti AI propisi, politike ili institucionalna odobrenja?", "Has the institution considered whether AI-related regulation, policy, or institutional approval may apply?", 'expert', "ai")
        ]
      },
      {
        id: "I",
        title: bi("Planiranje dobavljača, nabavki i trećih lica", "Vendor, Procurement and Third-Party Planning"),
        questions: [
          q("1I1", "Da li će biti uključen bilo kakav spoljni dobavljač, konsultant, platforma, repozitorijum, dobavljač usluga u oblaku, dobavljač softvera, AI usluga, dobavljač digitalizacije ili agregator?", "Will any external vendor, consultant, platform, repository, cloud provider, software provider, AI service, digitization provider, or aggregator be involved?", 'beginner', "vendor"),
          q("1I2", "Da li je jasno šta će treća strana raditi?", "Is it clear what the third party will do?", 'intermediate', "vendor"),
          q("1I3", "Da li je jasno da li će treća strana pristupati, obrađivati, čuvati, obogaćivati, klasifikovati, objavljivati ili ponovo koristiti materijale ili metapodatke?", "Is it clear whether the third party will access, process, store, enrich, classify, publish, or reuse the materials or metadata?", 'intermediate', "vendor"),
          q("1I4", "Da li je institucija razmotrila zahteve za javne nabavke ili ugovaranje u skladu sa važećim pravilima?", "Has the institution considered procurement or contracting requirements under applicable rules?", 'intermediate', "vendor"),
          q("1I5", "Da li je institucija razmotrila pitanja zaštite podataka, poverljivosti, intelektualne svojine, bezbednosti, revizije, pristupa, brisanja, prenosivosti i kontinuiteta usluge?", "Has the institution considered data protection, confidentiality, intellectual property, security, audit, access, deletion, portability, and service continuity issues?", 'expert', "vendor"),
          q("1I6", "Da li je institucija razmotrila da li dobavljač može koristiti materijale ili metapodatke za obučavanje, poboljšanje ili razvoj alata?", "Has the institution considered whether the vendor may use materials or metadata to train, improve, or develop tools?", 'expert', "vendor"),
          q("1I7", "Da li je institucija razmotrila da li su potrebna ugovorna ograničenja?", "Has the institution considered whether contractual restrictions are needed?", 'expert', "vendor"),
          q("1I8", "Da li je institucija razmotrila da li će izlazi dobavljača biti provereni pre prihvatanja ili objavljivanja?", "Has the institution considered whether vendor outputs will be checked before acceptance or publication?", 'expert', "vendor"),
          q("1I9", "Da li je institucija razmotrila procedure izlaska, uključujući pristup fajlovima, metapodacima, dokumentaciji i logovima nakon isteka ugovora sa dobavljačem?", "Has the institution considered exit arrangements, including access to files, metadata, documentation, and logs after the vendor relationship ends?", 'expert', "vendor")
        ]
      },
      {
        id: "J",
        title: bi("Planiranje tehničkog kvaliteta, formata i očuvanja", "Technical Quality, Formats and Preservation Planning"),
        questions: [
          q("1J1", "Da li je institucija definisala minimalni kvalitet neophodan za predviđenu upotrebu?", "Has the institution defined the minimum quality required for the intended use?", 'beginner'),
          q("1J2", "Da li je institucija razmotrila da li je snimanje većeg kvaliteta potrebno za očuvanje, istraživanje, objavljivanje, ponovnu upotrebu ili buduću obradu?", "Has the institution considered whether higher quality capture is needed for preservation, research, publication, reuse, or future processing?", 'intermediate'),
          q("1J3", "Da li je institucija identifikovala odgovarajuće formate fajlova za master fajlove, radne kopije, pristupne kopije, metapodatke, transkripte, OCR, titlove i druge izlaze?", "Has the institution identified appropriate file formats for master files, working copies, access copies, metadata, transcripts, OCR, subtitles, and other outputs?", 'intermediate'),
          q("1J4", "Da li je institucija planirala kako će master fajlovi biti zaštićeni od izmena?", "Has the institution planned how master files will be protected from alteration?", 'intermediate'),
          q("1J5", "Da li je institucija isplanirala skladištenje, rezervne kopije (backup), kontrolu verzija, imenovanje fajlova, strukturu foldera i dokumentaciju?", "Has the institution planned storage, backup, version control, file naming, folder structure, and documentation?", 'expert'),
          q("1J6", "Da li je institucija uzela u obzir potrebe za dugoročnim očuvanjem i budućom migracijom?", "Has the institution considered long-term preservation and future migration needs?", 'expert'),
          q("1J7", "Da li je institucija razmotrila interoperabilnost i standarde metapodataka?", "Has the institution considered interoperability and metadata standards?", 'expert'),
          q("1J8", "Da li je institucija razmotrila zahteve za pristupačnost za objavljene izlaze?", "Has the institution considered accessibility requirements for published outputs?", 'expert'),
          q("1J9", "Da li je institucija razmotrila da li tehničke odluke mogu uticati na budući pristup, ponovnu upotrebu ili institucionalnu nezavisnost?", "Has the institution considered whether technical decisions may affect future access, reuse, or institutional independence?", 'expert')
        ]
      },
      {
        id: "K",
        title: bi("Planiranje dokumentacije i pregleda", "Documentation and Review Planning"),
        questions: [
          q("1K1", "Da li je institucija identifikovala koja evidencija mora biti kreirana tokom projekta?", "Has the institution identified which records must be created during the project?", 'beginner'),
          q("1K2", "Da li je institucija identifikovala gde će se čuvati projektna dokumentacija?", "Has the institution identified where project documentation will be stored?", 'beginner'),
          q("1K3", "Da li je institucija identifikovala ko je odgovoran za održavanje dokumentacije kompletnom i ažurnom?", "Has the institution identified who is responsible for keeping documentation complete and up to date?", 'intermediate'),
          q("1K4", "Da li je institucija identifikovala koje liste za proveru ili obrasci moraju biti popunjeni?", "Has the institution identified which checklists or templates must be completed?", 'intermediate'),
          q("1K5", "Da li je institucija kreirala ili otvorila registar rizika i ublažavanja (mitigacija)?", "Has the institution created or opened a risk and mitigation register?", 'expert'),
          q("1K6", "Da li je institucija kreirala predložak za evidenciju odluka ili belešku o pregledu za projekat?", "Has the institution created a decision record or review note template for the project?", 'expert'),
          q("1K7", "Da li je institucija planirala kako će se pratiti nerešeni problemi?", "Has the institution planned how unresolved issues will be tracked?", 'expert'),
          q("1K8", "Da li je institucija planirala kako će se zabeležiti naučene lekcije?", "Has the institution planned how lessons learned will be captured?", 'expert')
        ]
      }
    ]
  },
  {
    id: 2,
    code: bi("Faza 2", "Phase 2"),
    title: bi("Selekcija objekata i materijala", "Selection of Objects and Materials"),
    description: bi(
      "Šta se digitalizuje, zašto, i pod kojim uslovima pristupa.",
      "What is digitized, why, and under what access conditions."
    ),
    sections: [
      {
        id: "A",
        title: bi("Razlog za izbor i institucionalna svrha", "Selection Rationale and Institutional Purpose"),
        questions: [
          q("2A1", "Da li postoji pisano obrazloženje za izbor ovih materijala?", "Is there a written rationale for selecting these materials?", 'beginner'),
          q("2A2", "Da li je izbor povezan sa misijom institucije, strategijom kolekcije, javnom ulogom, prioritetima istraživanja, obrazovnim ciljevima, ciljevima pristupa, potrebama za očuvanjem ili strategijom digitalne transformacije?", "Is the selection connected to the institution’s mission, collection strategy, public role, research priorities, educational goals, access objectives, preservation needs, or digital transformation strategy?", 'beginner'),
          q("2A3", "Da li je institucija razmotrila da li izabrani materijali imaju kulturnu, istorijsku, obrazovnu, naučnu, umetničku, društvenu, komunalnu ili istraživačku vrednost?", "Has the institution considered whether the selected materials have cultural, historical, educational, scientific, artistic, social, community, or research value?", 'intermediate'),
          q("2A4", "Da li je institucija razmotrila da li su izabrani materijali u riziku od propadanja, gubitka, oštećenja, tehnološke zastarelosti ili smanjene pristupačnosti?", "Has the institution considered whether the selected materials are at risk of deterioration, loss, damage, technological obsolescence, or reduced accessibility?", 'intermediate'),
          q("2A5", "Da li je institucija razmotrila da li će odabrani materijali verovatno biti korišćeni, ponovo korišćeni, istraživani, podučavani, izlagani ili će im pristupiti relevantni korisnici?", "Has the institution considered whether the selected materials are likely to be used, reused, researched, taught, exhibited, or accessed by relevant users?", 'expert'),
          q("2A6", "Da li je institucija razmotrila da li selekcija povećava pristup materijalima kojima je trenutno teško pristupiti?", "Has the institution considered whether the selection increases access to materials that are currently difficult to access?", 'expert'),
          q("2A7", "Da li je institucija razmotrila da li izbor može povećati vidljivost nedovoljno predstavljenog, marginalizovanog, zanemarenog ili manje dostupnog nasleđa?", "Has the institution considered whether the selection may increase the visibility of underrepresented, marginalized, overlooked, or less accessible heritage?", 'expert'),
          q("2A8", "Da li je institucija razmotrila da li izbor može nenamerno pojačati postojeće praznine, isključenja, institucionalne pristrasnosti ili prezastupljenost već vidljivih kolekcija?", "Has the institution considered whether the selection may unintentionally reinforce existing gaps, exclusions, institutional biases, or overrepresentation of already visible collections?", 'expert'),
          q("2A10", "Ako su neki materijali isključeni ili odloženi, da li postoji argumentovano objašnjenje za tu odluku?", "If some materials were excluded or postponed, is there a reasoned explanation for that decision?", 'expert')
        ]
      },
      {
        id: "B",
        title: bi("Opis i obim odabranih materijala", "Description and Scope of Selected Materials"),
        questions: [
          q("2B1", "Da li su izabrani materijali popisani ili ih je na drugi način moguće identifikovati?", "Are the selected materials listed or otherwise identifiable?", 'beginner'),
          q("2B2", "Da li je zabeležena vrsta materijala, kao što su tekst, rukopis, arhivski zapis, fotografija, mapa, audio, video, film, objekat, umetničko delo, zgrada, arheološko nalazište, izvorno digitalni materijal ili mešovita kolekcija?", "Is the type of material recorded, such as text, manuscript, archive record, photograph, map, audio, video, film, object, artwork, building, archaeological site, born-digital material, or mixed collection?", 'beginner'),
          q("2B3", "Da li je zabeležena približna količina ili zapremina?", "Is the approximate quantity or volume recorded?", 'intermediate'),
          q("2B4", "Da li je poznata lokacija ili trenutni smeštaj materijala?", "Is the location or current custody of the materials known?", 'intermediate'),
          q("2B5", "Da li je trenutno stanje materijala poznato, ili ga je potrebno proceniti?", "Is the current condition of the materials known, or does it require assessment?", 'expert'),
          q("2B6", "Da li su dostupni postojeći kataloški zapisi, metapodaci, opisi, inventari ili pronalazački alati?", "Are existing catalogue records, metadata, descriptions, inventories, or finding aids available?", 'expert'),
          q("2B7", "Da li su postojeći opisi tačni, potpuni i dovoljno odgovarajući da podrže digitalizaciju?", "Are existing descriptions accurate, complete, and appropriate enough to support digitization?", 'expert'),
          q("2B8", "Da li postoje praznine, nesigurnosti, zastareli opisi, nejasno poreklo, nedostatak kontekstualnih informacija ili nedosledni zapisi?", "Are there gaps, uncertainties, outdated descriptions, unclear provenance, missing contextual information, or inconsistent records?", 'expert'),
          q("2B9", "Da li je projektni tim svestan bilo kakvih posebnih ograničenja u vezi sa rukovanjem, konzervacijom, tehnologijom ili pristupom?", "Is the project team aware of any special handling, conservation, technical, or access constraints?", 'expert'),
          q("2B10", "Da li je institucija zabeležila da li odabrani materijali čine koherentnu kolekciju, tematsku grupu, arhivsku celinu ili poseban set pojedinačnih predmeta?", "Has the institution recorded whether the selected materials form a coherent collection, thematic group, archival unit, or separate set of individual items?", 'expert')
        ]
      },
      {
        id: "C",
        title: bi("Potrebe korisnika i očekivana upotreba", "User Needs and Expected Use"),
        questions: [
          q("2C1", "Da li su identifikovani nameravani korisnici ili grupe korisnika?", "Are the intended users or user groups identified?", 'beginner'),
          q("2C2", "Da li je institucija razmotrila kako će ovi korisnici verovatno pretraživati, pristupati, tumačiti, koristiti ili ponovo koristiti odabrane materijale?", "Has the institution considered how these users are likely to search for, access, interpret, use, or reuse the selected materials?", 'intermediate'),
          q("2C3", "Da li je institucija razmotrila da li odabrani materijali podržavaju istraživanje, obrazovanje, javni pristup, upotrebu u zajednici, kreativnu ponovnu upotrebu, izlaganje, institucionalno upravljanje ili očuvanje?", "Has the institution considered whether the selected materials support research, education, public access, community use, creative reuse, exhibition, institutional management, or preservation?", 'intermediate'),
          q("2C4", "Da li je institucija uzela u obzir da li bi različitim korisnicima mogli biti potrebni različiti nivoi kvaliteta, metapodataka, objašnjenja, jezika, pristupačnosti ili kontekstualnih informacija?", "Has the institution considered whether different users may need different levels of quality, metadata, explanation, language, accessibility, or contextual information?", 'intermediate'),
          q("2C5", "Da li je institucija razmotrila da li će materijali biti dostupni isključivo interno, istraživačima, određenim zajednicama, široj javnosti ili putem eksternih repozitorijuma ili agregatora?", "Has the institution considered whether the materials will be made available only internally, to researchers, to specific communities, to the general public, or through external repositories or aggregators?", 'expert'),
          q("2C6", "Da li je institucija razmotrila da li se izabrani materijali mogu koristiti na načine koji prvobitno nisu bili predviđeni?", "Has the institution considered whether the selected materials may be used in ways not originally expected?", 'expert'),
          q("2C7", "Da li je institucija razmotrila da li povećana vidljivost može stvoriti koristi, rizike ili tenzije?", "Has the institution considered whether increased discoverability may create benefits, risks, or tensions?", 'expert'),
          q("2C8", "Da li je institucija razmotrila da li će korisnicima biti potrebna upozorenja, kontekstualne beleške, ograničenja pristupa ili smernice za odgovorno tumačenje materijala?", "Has the institution considered whether users may need warnings, contextual notes, access restrictions, or guidance to interpret the materials responsibly?", 'expert')
        ]
      },
      {
        id: "D",
        title: bi("Prava, licenciranje i spremnost za dozvole", "Rights, Licensing and Permission Readiness"),
        questions: [
          q("2D1", "Da li je status prava na odabranim materijalima proveren ili zakazan za pregled?", "Has the rights status of the selected materials been checked or scheduled for review?", 'beginner'),
          q("2D2", "Da li je poznato da li su materijali zaštićeni autorskim pravima, srodnim pravima, moralnim pravima, pravima na bazu podataka, ugovornim ograničenjima, ograničenjima donatora, arhivskim ograničenjima ili drugim uslovima pristupa?", "Is it known whether the materials are protected by copyright, related rights, moral rights, database rights, contractual restrictions, donor restrictions, archival restrictions, or other access conditions?", 'beginner'),
          q("2D3", "Da li je poznato da li je bilo koji od materijala u javnom domenu?", "Is it known whether any materials are in the public domain?", 'intermediate'),
          q("2D4", "Da li je poznato da li institucija poseduje ili kontroliše prava neophodna za digitalizaciju?", "Is it known whether the institution owns or controls the rights needed for digitization?", 'intermediate'),
          q("2D5", "Da li je poznato da li institucija ima potrebna prava za onlajn objavljivanje?", "Is it known whether the institution has the rights needed for online publication?", 'expert'),
          q("2D6", "Da li je poznato da li institucija može da dozvoli ponovnu upotrebu od strane drugih?", "Is it known whether the institution can allow reuse by third parties?", 'expert'),
          q("2D7", "Da li postoje različiti uslovi u pogledu prava za različite predmete unutar odabrane grupe?", "Are there different rights conditions for different items within the selected group?", 'expert'),
          q("2D8", "Da li postoje dela siročad (orphan works), nosioci prava koji su nepoznati, sporna prava, nejasno autorstvo, nejasno poreklo ili nedostaju zapisi o dozvolama?", "Are there any orphan works, unknown rights holders, disputed rights, unclear authorship, unclear provenance, or missing permission records?", 'expert'),
          q("2D9", "Da li postoje sporazumi o donatorstvu, uslovi akvizicije, sporazumi o depozitu, ograničenja kolekcije ili ugovorna ograničenja koja mogu uticati na digitalizaciju ili objavljivanje?", "Are there any donor agreements, acquisition terms, deposit agreements, collection restrictions, or contractual limitations that may affect digitization or publication?", 'expert'),
          q("2D10", "Da li je institucija razmotrila koja licenca, izjava o pravima, uslov pristupa ili ograničenje ponovne upotrebe može da se primeni?", "Has the institution considered which licence, rights statement, access condition, or reuse limitation may apply?", 'expert'),
          q("2D11", "Da li je institucija razmotrila kako će informacije o pravima biti evidentirane u metapodacima?", "Has the institution considered how rights information will be recorded in metadata?", 'beginner'),
          q("2D12", "Da li je institucija proverila koja nacionalna, regionalna, institucionalna ili međunarodna pravila o pravima mogu da se primene?", "Has the institution checked which national, regional, institutional, or international rights rules may apply?", 'intermediate'),
          q("2D13", "Da li je pre početka digitalizacije neophodna specijalizovana pravna podrška ili podrška u oslobađanju prava?", "Is specialist legal or rights clearance support needed before digitization begins?", 'intermediate')
        ]
      },
      {
        id: "E",
        title: bi("Privatnost i prepoznatljiva lica", "Privacy and Identifiable Persons"),
        questions: [
          q("2E1", "Da li odabrani materijali sadrže imena, slike, glasove, potpise, adrese, prepisku, biografske detalje, lične priče, dosijee, administrativne evidencije ili druge informacije koje se odnose na prepoznatljiva lica?", "Do the selected materials contain names, images, voices, signatures, addresses, correspondence, biographical details, personal stories, case files, administrative records, or other information relating to identifiable persons?", 'beginner', "privacy"),
          q("2E2", "Da li materijali sadrže informacije o deci, ranjivim osobama, žrtvama, pacijentima, studentima, zaposlenima, članovima zajednice, političkim akterima, verskim grupama, etničkim grupama ili drugim osobama koje zahtevaju posebnu pažnju?", "Do the materials contain information about children, vulnerable persons, victims, patients, students, employees, community members, political actors, religious groups, ethnic groups, or other persons requiring particular care?", 'intermediate', "privacy"),
          q("2E3", "Da li materijali sadrže osetljive informacije, kao što su zdravstvene informacije, politička mišljenja, religijska ili filozofska uverenja, rasno ili etničko poreklo, seksualna orijentacija, porodična istorija, navodi o krivičnim delima ili osuđivanost, disciplinski dosijei, podaci o socijalnoj pomoći ili druge zaštićene kategorije prema važećem zakonu?", "Do the materials contain sensitive information, such as health information, political opinions, religious or philosophical beliefs, racial or ethnic origin, sexual orientation, family history, criminal allegations or convictions, disciplinary records, social welfare information, or other protected categories under applicable law?", 'intermediate', "privacy"),
          q("2E4", "Da li bi metapodaci, OCR, transkripti, opisi, oznake ili AI generisano obogaćivanje mogli učiniti lične informacije pretraživijim ili vidljivijim?", "Could metadata, OCR, transcripts, descriptions, tags, or AI-generated enrichment make personal information more searchable or more visible?", 'intermediate', "privacy"),
          q("2E5", "Da li bi objavljivanje moglo da izloži informacije koje je ranije bilo teško pronaći, čak i ako su tehnički bile dostupne i ranije?", "Could publication expose information that was previously difficult to find, even if it was technically available before?", 'expert', "privacy"),
          q("2E6", "Da li bi odabrani materijali mogli uticati na dostojanstvo, privatnost, bezbednost, reputaciju ili prava živih osoba ili nedavno preminulih osoba?", "Could the selected materials affect the dignity, privacy, safety, reputation, or rights of living persons or recently deceased persons?", 'expert', "privacy"),
          q("2E7", "Da li postoje primenjiva pravila o zaštiti podataka, privatnosti, arhiviranju, poverljivosti, pravima na lik, pravima na publicitet ili pravima ličnosti koja bi trebalo proveriti?", "Are there applicable data protection, privacy, archival, confidentiality, image rights, publicity rights, or personality rights rules that should be checked?", 'expert', "privacy"),
          q("2E8", "Da li je prema primenjivim lokalnim pravilima neophodan skrining privatnosti, pregled zaštite podataka, proces redakcije, ograničenje pristupa ili formalna DPIA (Procena uticaja na zaštitu podataka) ili ekvivalentna procena?", "Is a privacy screening, data protection review, redaction process, access limitation, or formal DPIA or equivalent assessment required under applicable local rules?", 'expert', "privacy"),
          q("2E9", "Da li je institucija razmotrila da li bi neke materijale trebalo isključiti, ograničiti, anonimizovati, redigovati, odložiti ili kontekstualizovati?", "Has the institution considered whether some materials should be excluded, restricted, anonymized, redacted, delayed, or contextualized?", 'expert', "privacy")
        ]
      },
      {
        id: "F",
        title: bi("Kulturna osetljivost, reprezentacija i kontekstualni integritet", "Cultural Sensitivity, Representation and Contextual Integrity"),
        questions: [
          q("2F1", "Da li su odabrani materijali povezani sa osetljivim, spornim, svetim, traumatičnim, kolonijalnim, konfliktnim, manjinskim, autohtonim, verskim, političkim ili zajedničkim nasleđem?", "Are the selected materials connected to sensitive, contested, sacred, traumatic, colonial, conflict-related, minority-related, indigenous, religious, political, or community-specific heritage?", 'beginner'),
          q("2F2", "Da li su materijali povezani sa istorijski marginalizovanim, ranjivim, pogrešno predstavljenim ili nedovoljno zastupljenim zajednicama?", "Are the materials connected to historically marginalized, vulnerable, misrepresented, or underrepresented communities?", 'intermediate'),
          q("2F3", "Da li bi digitalizacija mogla da promeni način na koji se ti materijali razumeju, kako im se pristupa, kako se tumače ili ponovo koriste?", "Could digitization change the way these materials are understood, accessed, interpreted, or reused?", 'intermediate'),
          q("2F4", "Da li bi onlajn pristup mogao da izloži materijale zloupotrebi, dekontekstualizaciji, stereotipizaciji, uznemiravanju, komercijalnoj eksploataciji ili neprikladnoj ponovnoj upotrebi?", "Could online access expose materials to misuse, decontextualization, stereotyping, harassment, commercial exploitation, or inappropriate reuse?", 'intermediate'),
          q("2F5", "Da li postojeći naslovi, oznake, kataloški opisi, klasifikacije, ključne reči ili metapodaci sadrže zastareo, diskriminatoran, štetan, uvredljiv, kolonijalan, netačan ili nepotpun jezik?", "Do existing titles, labels, catalogue descriptions, classifications, keywords, or metadata contain outdated, discriminatory, harmful, offensive, colonial, inaccurate, or incomplete language?", 'expert'),
          q("2F6", "Da li bi uklanjanje, menjanje ili sakrivanje problematične terminologije takođe moglo stvoriti rizike za istorijsku tačnost, poreklo, istraživanje ili transparentnost?", "Could removing, changing, or hiding problematic terminology also create risks for historical accuracy, provenance, research, or transparency?", 'expert'),
          q("2F7", "Da li su potrebne dodatne kontekstualne informacije koje bi objasnile poreklo, značenje, ograničenja, spornu prirodu ili osetljivost materijala?", "Is additional contextual information needed to explain the origin, meaning, limitations, contested nature, or sensitivity of the materials?", 'expert'),
          q("2F8", "Da li bi trebalo konsultovati relevantne zajednice, stručnjake za datu oblast, kustose, istraživače, edukatore ili spoljne savetnike pre digitalizacije ili objavljivanja?", "Should relevant communities, subject experts, curators, researchers, educators, or external advisors be consulted before digitization or publication?", 'expert'),
          q("2F9", "Da li postoje kulturni protokoli, očekivanja zajednice, institucionalne politike ili etički standardi koji bi trebalo da utiču na to da li se materijali digitalizuju ili objavljuju i na koji način?", "Are there cultural protocols, community expectations, institutional policies, or ethical standards that should influence whether or how the materials are digitized or published?", 'expert'),
          q("2F10", "Da li bi pristup trebalo da bude ograničen, slojevit, posredovan, odložen ili praćen upozorenjima ili kontekstualnim beleškama?", "Should access be restricted, tiered, mediated, delayed, or accompanied by warnings or contextual notes?", 'expert'),
          q("2F11", "Da li je institucija razmotrila da li sama selekcija može da komunicira određenu interpretaciju, prioritet ili institucionalni stav?", "Has the institution considered whether selection itself may communicate a particular interpretation, priority, or institutional position?", 'beginner')
        ]
      },
      {
        id: "G",
        title: bi("Očuvanje, stanje i rukovanje", "Preservation, Condition and Handling"),
        questions: [
          q("2G1", "Da li je procenjeno fizičko ili tehničko stanje odabranih materijala?", "Has the physical or technical condition of the selected materials been assessed?", 'beginner'),
          q("2G2", "Da li je neki materijal krhak, oštećen, nestabilan, pogoršanog stanja, kontaminiran, nepotpun ili težak za rukovanje?", "Are any materials fragile, damaged, unstable, deteriorating, contaminated, incomplete, or difficult to handle?", 'intermediate'),
          q("2G3", "Da li bilo koji materijal zavisi od zastarelih nosača, formata, uređaja, opreme za reprodukciju ili softvera?", "Are any materials dependent on obsolete carriers, formats, devices, playback equipment, or software?", 'intermediate'),
          q("2G4", "Da li bi digitalizacija mogla da izazove oštećenja ili da ubrza propadanje ako se materijalom ne rukuje pravilno?", "Could digitization cause damage or accelerate deterioration if not handled properly?", 'intermediate'),
          q("2G5", "Da li je potreban doprinos konzervatora pre digitalizacije?", "Is conservation input needed before digitization?", 'expert'),
          q("2G6", "Da li su potrebne posebne mere pri rukovanju, u vezi sa uslovima sredine, transportom, čišćenjem, pripremom ili stabilizacijom?", "Are special handling, environmental, transportation, cleaning, preparation, or stabilization measures needed?", 'expert'),
          q("2G7", "Da li na redosled selekcije utiče hitnost očuvanja?", "Is the order of selection influenced by preservation urgency?", 'expert'),
          q("2G8", "Da li postoje materijali koje bi trebalo prvo digitalizovati jer su u većem riziku?", "Are there materials that should be digitized first because they are at greater risk?", 'expert'),
          q("2G9", "Da li postoje materijali koje ne bi trebalo digitalizovati dok se ne završi konzervacija ili tehnička priprema?", "Are there materials that should not be digitized until conservation or technical preparation is completed?", 'expert'),
          q("2G10", "Da li je institucija razmotrila da li digitalizacija može smanjiti potrebu za budućim rukovanjem krhkim originalima?", "Has the institution considered whether digitalization may reduce future handling of fragile originals?", 'expert')
        ]
      },
      {
        id: "H",
        title: bi("Tehnička prikladnost i implikacije za kvalitet", "Technical Suitability and Quality Implications"),
        questions: [
          q("2H1", "Da li je institucija razmotrila koji je metod digitalizacije pogodan za izabrane materijale?", "Has the institution considered what digitization method is suitable for the selected materials?", 'beginner'),
          q("2H2", "Da li je institucija razmotrila da li materijali zahtevaju skeniranje, fotografisanje, audio snimanje, video snimanje, 3D snimanje, specijalizovanu opremu ili spoljnu ekspertizu?", "Has the institution considered whether the materials require scanning, photography, audio capture, video capture, 3D capture, specialist equipment, or external expertise?", 'intermediate'),
          q("2H3", "Da li je institucija razmotrila da li veličina, format, stanje, boja, tekstura, kvalitet zvuka, pokret, dimenzionalnost ili fizička struktura materijala utiču na pristup digitalizaciji?", "Has the institution considered whether the size, format, condition, colour, texture, sound quality, movement, dimensionality, or physical structure of the materials affects the digitization approach?", 'intermediate'),
          q("2H4", "Da li je institucija uzela u obzir minimalni potreban kvalitet za nameravanu upotrebu?", "Has the institution considered what minimum quality is required for the intended use?", 'intermediate'),
          q("2H5", "Da li je institucija razmotrila da li je potreban veći kvalitet za očuvanje, istraživanje, ponovnu upotrebu, AI obradu, objavljivanje ili buduću interoperabilnost?", "Has the institution considered whether higher quality is needed for preservation, research, reuse, AI processing, publication, or future interoperability?", 'expert'),
          q("2H6", "Da li je institucija razmotrila da li su postojeći metapodaci dovoljni za pronalaženje i upravljanje?", "Has the institution considered whether existing metadata is sufficient for discovery and management?", 'expert'),
          q("2H7", "Da li je institucija razmotrila da li će možda biti neophodni OCR, transkripcija, prevod, prepoznavanje objekata, obogaćivanje metapodataka ili neka druga dodatna obrada?", "Has the institution considered whether OCR, transcription, translation, object recognition, metadata enrichment, or other additional processing may be needed?", 'expert'),
          q("2H8", "Da li je institucija razmotrila da li su odabrani materijali prikladni za automatizovanu obradu, ili automatizacija može dovesti do grešaka ili izobličenja?", "Has the institution considered whether the selected materials are suitable for automated processing, or whether automation may create errors or distortions?", 'expert'),
          q("2H9", "Da li je institucija razmotrila da li bi tehnička ograničenja mogla zahtevati sužavanje, sekvenciranje ili redizajn selekcije?", "Has the institution considered whether technical constraints may require narrowing, sequencing, or redesigning the selection?", 'expert')
        ]
      },
      {
        id: "I",
        title: bi("Implikacije AI i automatizovane obrade", "AI and Automated Processing Implications"),
        questions: [
          q("2I1", "Da li će odabrani materijali verovatno biti obrađeni od strane AI ili automatizovanih alata?", "Are the selected materials likely to be processed by AI-supported or automated tools?", 'beginner', "ai"),
          q("2I2", "Da li bi materijali mogli da se koriste za OCR, prepoznavanje rukopisa, transkripciju, prevod, generisanje metapodataka, klasifikaciju, označavanje, klasterisanje, prepoznavanje slika, prepoznavanje govora, preporuku, pretragu, restauraciju, unapređenje ili podršku tumačenju?", "Could the materials be used for OCR, handwriting recognition, transcription, translation, metadata generation, classification, tagging, clustering, image recognition, speech recognition, recommendation, search, restoration, enhancement, or interpretation support?", 'intermediate', "ai"),
          q("2I3", "Da li su materijali pogodni za takvu obradu ili je verovatno da će proizvesti visoku stopu grešaka?", "Are the materials suitable for such processing, or are they likely to produce high error rates?", 'intermediate', "ai"),
          q("2I4", "Može li automatizovana obrada pogrešno pročitati jezik, dijalekt, rukopis, imena, identitete, mesta, zajednice, simbole, istorijsku terminologiju ili kulturni kontekst?", "Could automated processing misread language, dialect, handwriting, names, identities, places, communities, symbols, historical terminology, or cultural context?", 'intermediate', "ai"),
          q("2I5", "Da li bi AI-generisani izlazi mogli uvesti obmanjujuće opise, pristrasne klasifikacije, lažnu sigurnost, neprikladne oznake ili dovesti do gubitka nijansi?", "Could AI-generated outputs introduce misleading descriptions, biased classifications, false certainty, inappropriate labels, or loss of nuance?", 'expert', "ai"),
          q("2I6", "Da li bi izbor ovih materijala za AI obradu mogao stvoriti nejednaku vidljivost između kolekcija koje je lakše obraditi i kolekcija koje su kompleksnije?", "Could selection of these materials for AI processing create unequal visibility between collections that are easier to process and collections that are more complex?", 'expert', "ai"),
          q("2I7", "Da li će biti potreban ljudski pregled pre nego što se automatizovani izlazi prihvate, objave ili upotrebe u metapodacima?", "Will human review be needed before automated outputs are accepted, published, or used in metadata?", 'expert', "ai"),
          q("2I8", "Da li bi mašinski generisane izlaze trebalo označiti, kvalifikovati ili propratiti napomenama o nesigurnosti?", "Should machine-generated outputs be labelled, qualified, or accompanied by uncertainty notes?", 'expert', "ai"),
          q("2I9", "Da li je potreban dodatni skrining rizika veštačke inteligencije pre nego što projekat napreduje?", "Is additional AI risk screening required before the project moves forward?", 'expert', "ai")
        ]
      },
      {
        id: "J",
        title: bi("Uključivanje stejkholdera, eksperata i zajednice", "Stakeholder, Expert and Community Involvement"),
        questions: [
          q("2J1", "Da li je institucija identifikovala interne stručnjake koje bi trebalo uključiti u selekciju, kao što su kustosi, arhivisti, bibliotekari, edukatori, konzervatori, stručnjaci za metapodatke, pravno osoblje, tehničko osoblje ili timovi za javni pristup?", "Has the institution identified internal experts who should be involved in selection, such as curators, archivists, librarians, educators, conservators, metadata specialists, legal staff, technical staff, or public access teams?", 'beginner'),
          q("2J2", "Da li je institucija razmotrila da li bi trebalo konsultovati spoljne eksperte?", "Has the institution considered whether external experts should be consulted?", 'intermediate'),
          q("2J3", "Da li je institucija razmotrila da li bi trebalo konsultovati pogođene zajednice, izvorne zajednice, nosioce prava, donatore, istraživače, edukatore, korisnike ili aktere civilnog društva?", "Has the institution considered whether affected communities, source communities, rights holders, donors, researchers, educators, users, or civil society actors should be consulted?", 'intermediate'),
          q("2J4", "Da li su konsultacije potrebne pre finalizacije selekcije, a ne nakon što su odluke o digitalizaciji već fiksirane?", "Is consultation needed before selection is finalized, rather than after digitization decisions are already fixed?", 'intermediate'),
          q("2J5", "Da li je svrha konsultacija jasna?", "Is the purpose of consultation clear?", 'expert'),
          q("2J6", "Da li je institucija razmotrila kako će se povratne informacije beležiti, razmatrati i odraziti u odluci o selekciji?", "Has the institution considered how feedback will be recorded, considered, and reflected in the selection decision?", 'expert'),
          q("2J7", "Da li je institucija razmotrila da li bi konsultacije mogle stvoriti očekivanja kojima treba transparentno upravljati?", "Has the institution considered whether consultation may create expectations that need to be managed transparently?", 'expert'),
          q("2J8", "Da li je institucija razmotrila da li učešće treba da utiče na uslove pristupa, kontekstualne informacije, jezik metapodataka, vreme objavljivanja ili prioritete selekcije?", "Has the institution considered whether participation should influence access conditions, contextual information, metadata language, publication timing, or selection priorities?", 'expert')
        ]
      },
      {
        id: "K",
        title: bi("Implikacije pristupa, objavljivanja i ponovne upotrebe", "Access, Publication and Reuse Implications"),
        questions: [
          q("2K1", "Da li je predviđeni model pristupa za odabrane materijale široko shvaćen?", "Is the expected access model for the selected materials broadly understood?", 'beginner'),
          q("2K2", "Da li će materijali biti zadržani interno, učinjeni dostupnim istraživačima, objavljeni na mreži, podeljeni sa partnerima, pruženi preko agregatora, korišćeni na izložbama ili učinjeni dostupnim za ponovnu upotrebu?", "Will the materials be kept internal, made available to researchers, published online, shared with partners, provided through an aggregator, used in exhibitions, or made available for reuse?", 'intermediate'),
          q("2K3", "Da li će neki od odabranih materijala verovatno zahtevati ograničen pristup, posredovani pristup, ograničenu vidljivost metapodataka, odloženo objavljivanje ili posebne uslove?", "Are any selected materials likely to require restricted access, mediated access, limited metadata visibility, delayed publication, or special conditions?", 'intermediate'),
          q("2K4", "Da li je institucija razmotrila da li se odabrani materijali mogu zakonito i odgovorno objaviti na internetu?", "Has the institution considered whether the selected materials can be lawfully and responsibly published online?", 'intermediate'),
          q("2K5", "Da li je institucija razmotrila da li treća lica mogu ponovo koristiti odabrane materijale?", "Has the institution considered whether the selected materials can be reused by third parties?", 'expert'),
          q("2K6", "Da li je institucija razmotrila da li pristup može da se razlikuje između master fajlova, kopija za pristup, metapodataka, transkripata, slika, audija, videa ili obogaćenih izlaza?", "Has the institution considered whether access may need to differ between master files, access copies, metadata, transcripts, images, audio, video, or enriched outputs?", 'expert'),
          q("2K7", "Da li je institucija razmotrila potrebe za pristupačnošću, uključujući jezik, titlove, transkripte, alternativni tekst, čitljive metapodatke i pristup prilagođen korisnicima?", "Has the institution considered accessibility needs, including language, captions, transcripts, alternative text, readable metadata, and user-friendly access?", 'expert'),
          q("2K8", "Da li je institucija razmotrila da li bi objavljivanje moglo da stvori rizike zloupotrebe, pogrešne interpretacije, komercijalne eksploatacije ili gubitka konteksta?", "Has the institution considered whether publication could create risks of misuse, misinterpretation, commercial exploitation, or loss of context?", 'expert'),
          q("2K9", "Da li je institucija razmotrila da li će korisnicima biti potrebne jasne informacije o pravima, kontekstualne beleške, informacije o poreklu (izvoru), ograničenja ili kanali za ispravku?", "Has the institution considered whether users will need clear rights information, contextual notes, source information, limitations, or correction channels?", 'expert')
        ]
      },
      {
        id: "L",
        title: bi("Dokumentacija i sledljivost selekcije", "Documentation and Traceability of Selection"),
        questions: [
          q("2L1", "Da li su dokumentovani kriterijumi za izbor?", "Are the selection criteria documented?", 'beginner'),
          q("2L2", "Da li je zabeležena konačna lista ili kategorija izabranih materijala?", "Is the final list or category of selected materials recorded?", 'intermediate'),
          q("2L3", "Da li su zabeleženi razlozi za selekciju?", "Are the reasons for selection recorded?", 'intermediate'),
          q("2L4", "Da li su zabeležena isključenja, odlaganja ili ograničenja?", "Are any exclusions, postponements, or limitations recorded?", 'intermediate'),
          q("2L5", "Da li su problemi prava, privatnosti, osetljivosti, tehnologije, očuvanja i pristupa povezani sa odabranim materijalima?", "Are rights, privacy, sensitivity, technical, preservation, and access concerns linked to the selected materials?", 'expert'),
          q("2L6", "Da li su nerešeni problemi zabeleženi, sa naznakom o odgovornim osobama i daljim radnjama?", "Are unresolved issues recorded with responsible persons and follow-up actions?", 'expert'),
          q("2L7", "Da li postoji jasan zapis o odlukama koji pokazuje ko je pregledao i odobrio selekciju?", "Is there a clear decision record showing who reviewed and approved the selection?", 'expert'),
          q("2L8", "Da li postoji zapis o tome da li je eskalacija razmatrana ili sprovedena?", "Is there a record of whether escalation was considered or carried out?", 'expert'),
          q("2L9", "Da li se evidencija selekcije čuva u folderu projektne dokumentacije ili ekvivalentnom sistemu?", "Is the selection record stored in the project documentation folder or equivalent system?", 'expert'),
          q("2L10", "Može li institucija naknadno da objasni odluku o selekciji rukovodstvu, osoblju, partnerima, korisnicima, finansijerima, pogođenim zajednicama ili nadzornim organima?", "Can the institution explain the selection decision later to leadership, staff, partners, users, funders, affected communities, or oversight bodies?", 'expert')
        ]
      }
    ]
  },
  {
    id: 3,
    code: bi("Faza 3", "Phase 3"),
    title: bi("Priprema, digitalizacija i kreiranje master fajlova", "Preparation, Capture and Master File Creation"),
    description: bi(
      "Tehnički standardi, uslovi rada, kontrola kvaliteta i zaštita master fajlova.",
      "Technical standards, working conditions, quality control and protection of master files."
    ),
    sections: [
      {
        id: "A",
        title: bi("Priprema i pregled stanja", "Preparation and Condition Review"),
        questions: [
          q("3A1", "Da li je pregledano stanje svake kategorije materijala pre početka procesa snimanja?", "Has the condition of each material category been reviewed before capture begins?", 'beginner'),
          q("3A2", "Da li je institucija proverila da li su materijali kompletni, oštećeni, krhki, nestabilni, prljavi, izgrebani, pocepani, nepotpuni, slepljeni, izbledeli, iskrivljeni, polomljeni, kontaminirani ili na drugi način teški za digitalizaciju?", "Has the institution checked whether the materials are complete, damaged, fragile, unstable, dirty, scratched, torn, incomplete, stuck together, faded, distorted, broken, contaminated, or otherwise difficult to digitize?", 'beginner'),
          q("3A3", "Za knjige, sveske, rukopise, dokumenta, novine i slične materijale, da li je institucija proverila da li su stranice kompletne, pričvršćene, čitljive, posložene, presavijene, pocepane, nedostaju, ispisane preko nečeg drugog ili fizički oštećene?", "For books, notebooks, manuscripts, documents, newspapers, and similar materials, has the institution checked whether pages are complete, attached, readable, ordered, folded, torn, missing, overwritten, or physically damaged?", 'intermediate'),
          q("3A4", "Za fotografije, razglednice, slajdove, negative, mape i vizuelne materijale, da li je institucija proverila da li obe strane sadrže bitne informacije, da li su površine izgrebane ili oštećene, i da li su prisutne beleške, pečati, oznake ili natpisi?", "For photographs, postcards, slides, negatives, maps, and visual materials, has the institution checked whether both sides contain relevant information, whether surfaces are scratched or damaged, and whether notes, stamps, labels, or inscriptions are present?", 'intermediate'),
          q("3A5", "Za slike, skulpture, objekte, arheološke materijale, građevine, spomenike i 3D materijale, da li je institucija proverila da li objekat ima fizička oštećenja, ograničenja pri rukovanju, osetljivost površine, ograničenja osvetljenja, reflektujuće površine, probleme sa transparentnošću ili druga ograničenja pri snimanju?", "For paintings, sculptures, objects, archaeological materials, buildings, monuments, and 3D materials, has the institution checked whether the object has physical damage, handling limits, surface sensitivity, lighting constraints, reflective surfaces, transparency issues, or other capture limitations?", 'expert'),
          q("3A6", "Za audio, video, film, kasetu, traku, ploče, CD-ove, DVD-ove ili druge nosače, da li je institucija proverila da li je nosač moguće reprodukovati, da li je prenosiv, fizički očuvan, čitljiv, i da nije u neposrednoj opasnosti od oštećenja tokom reprodukcije?", "For audio, video, film, cassette, tape, records, CDs, DVDs, or other carriers, has the institution checked whether the carrier is playable, movable, physically intact, readable, and not at immediate risk of damage during playback?", 'expert'),
          q("3A7", "Da li je institucija identifikovala materijale koji zahtevaju konzervaciju, stabilizaciju, čišćenje, posebno rukovanje ili stručni pregled pre digitalizacije?", "Has the institution identified materials that require conservation, stabilization, cleaning, special handling, or expert review before digitization?", 'expert'),
          q("3A8", "Da li je institucija identifikovala materijale koje ne bi trebalo digitalizovati dok se ne reše problemi u vezi s njihovim stanjem?", "Has the institution identified materials that should not be digitized until condition issues are resolved?", 'expert'),
          q("3A9", "Da li je institucija razmotrila da li sama digitalizacija može stvoriti rizik od oštećenja, propadanja, gubitka ili nepovratne promene?", "Has the institution considered whether digitization itself may create a risk of damage, deterioration, loss, or irreversible change?", 'expert'),
          q("3A10", "Da li je institucija zabeležila svako vidljivo oštećenje, nedostajuće delove, ograničenja ili nepravilnosti pre početka snimanja?", "Has the institution recorded any visible damage, missing parts, limitations, or irregularities before capture begins?", 'expert')
        ]
      },
      {
        id: "B",
        title: bi("Zaštita originalnih materijala tokom digitalizacije", "Protection of Original Materials During Digitization"),
        questions: [
          q("3B1", "Da li su definisane procedure za rukovanje pre početka snimanja?", "Are handling procedures defined before capture begins?", 'beginner'),
          q("3B2", "Da li je osoblje ili su spoljni pružaoci usluga koji rukuju materijalima na odgovarajući način obučeni ili nadzirani?", "Are staff or external providers handling the materials adequately trained or supervised?", 'intermediate'),
          q("3B3", "Da li krhkim, retkim, osetljivim ili materijalima visoke vrednosti rukuje samo odgovarajuće osoblje, ili to radi pod odgovarajućim nadzorom?", "Are fragile, rare, sensitive, or high-value materials handled only by appropriate staff or under appropriate supervision?", 'intermediate'),
          q("3B4", "Da li su uslovi sredine odgovarajući, uključujući izloženost svetlosti, temperaturu, vlažnost, podršku za površinu, pomeranje, transport i bezbednost radnog prostora?", "Are environmental conditions suitable, including light exposure, temperature, humidity, surface support, movement, transport, and workspace safety?", 'intermediate'),
          q("3B5", "Da li su materijali zaštićeni od nepotrebnog dodirivanja, pritiska, toplote, prašine, vlage, oštećenja od svetlosti, mehaničkog stresa ili ponovljenog rukovanja?", "Are materials protected from unnecessary touching, pressure, heat, dust, moisture, light damage, mechanical stress, or repeated handling?", 'expert'),
          q("3B6", "Da li se, tamo gde je potrebno, koriste odgovarajući oslonci, postolja, rukavice, tegovi, nosači, stalci, držači ili zaštitne mere?", "Are appropriate supports, cradles, gloves, weights, mounts, stands, holders, or protective measures used where necessary?", 'expert'),
          q("3B7", "Da li postoji jasan proces za prijavljivanje oštećenja, pogoršanja stanja, gubitka ili incidenata tokom digitalizacije?", "Is there a clear process for reporting damage, deterioration, loss, or incident during digitization?", 'expert'),
          q("3B8", "Da li se materijali vraćaju u odgovarajuće skladište nakon snimanja?", "Are materials returned to appropriate storage after capture?", 'expert'),
          q("3B9", "Da li je institucija razmotrila da li digitalizacija može smanjiti potrebu za budućim rukovanjem krhkim originalima?", "Has the institution considered whether digitization can reduce future handling of fragile originals?", 'expert'),
          q("3B10", "Ako je uključen spoljni dobavljač, da li su jasno definisani uslovi rukovanja, odgovornosti, nadzor, transport, osiguranje i bezbednosni uslovi?", "If an external vendor is involved, are handling obligations, liability, supervision, transport, insurance, and security conditions clearly defined?", 'expert')
        ]
      },
      {
        id: "C",
        title: bi("Metod snimanja i podobnost opreme", "Capture Method and Equipment Suitability"),
        questions: [
          q("3C1", "Da li je institucija izabrala metod snimanja u skladu sa vrstom materijala, stanjem, veličinom, formatom, predviđenom upotrebom i potrebnim kvalitetom?", "Has the institution selected the capture method according to the material type, condition, size, format, intended use, and required quality?", 'beginner'),
          q("3C2", "Da li je jasno da li je materijalima potrebno skeniranje, fotografisanje, audio snimanje, video snimanje, 3D snimanje, specijalizovano snimanje slike ili neki drugi metod?", "Is it clear whether the materials require scanning, photography, audio capture, video capture, 3D capture, specialist imaging, or another method?", 'intermediate'),
          q("3C3", "Za tekstualne i ravne vizuelne materijale, da li je institucija razmotrila da li je prikladnije skeniranje ili fotografisanje?", "For textual and flat visual materials, has the institution considered whether scanning or photography is more appropriate?", 'intermediate'),
          q("3C4", "Za knjige, rukopise, mape, novine, fotografije, razglednice, slajdove i negative, da li je institucija izabrala odgovarajući skener, kameru, rezoluciju, format, osvetljenje i postavke radnog toka?", "For books, manuscripts, maps, newspapers, photographs, postcards, slides, and negatives, has the institution selected appropriate scanner, camera, resolution, format, lighting, and workflow settings?", 'intermediate'),
          q("3C5", "Za materijale velikog formata, slike, postere, nalazišta, spomenike, nameštaj, predmete, skulpture i 3D materijale, da li je institucija izabrala odgovarajuću kameru, stativ, osvetljenje, fotogrametriju, lasersko skeniranje ili neki drugi metod snimanja?", "For large-format materials, paintings, posters, sites, monuments, furniture, objects, sculptures, and 3D materials, has the institution selected appropriate camera, stand, lighting, photogrammetry, laser scanning, or other capture method?", 'expert'),
          q("3C6", "Za audio materijale, da li je institucija izabrala odgovarajuću opremu za reprodukciju, zvučnu kartu, kablove, softver za snimanje, format snimanja i kontrolu nivoa?", "For audio materials, has the institution selected suitable playback equipment, sound card, cables, recording software, recording format, and level control?", 'expert'),
          q("3C7", "Za video materijale, da li je institucija izabrala odgovarajuću opremu za reprodukciju, uređaj za hvatanje snimka (capture device), kablove, adapter, softver, rezoluciju i izlazni format?", "For video materials, has the institution selected suitable playback equipment, capture device, cables, adapter, software, resolution, and output format?", 'expert'),
          q("3C8", "Da li je institucija proverila da li su oprema i softver funkcionalni pre nego što počne glavno snimanje?", "Has the institution checked that equipment and software are functional before the main capture begins?", 'expert'),
          q("3C9", "Da li je institucija razmotrila da li treba obaviti probno (pilot) snimanje pre pune produkcije?", "Has the institution considered whether a pilot capture should be performed before full production?", 'expert'),
          q("3C10", "Da li je institucija dokumentovala odstupanja od planiranog metoda snimanja?", "Has the institution documented deviations from the planned capture method?", 'expert')
        ]
      },
      {
        id: "D",
        title: bi("Podešavanja snimanja i tehnički standardi", "Capture Settings and Technical Standards"),
        questions: [
          q("3D1", "Da li su podešavanja snimanja definisana pre početka produkcijskog snimanja?", "Are the capture settings defined before production capture begins?", 'beginner'),
          q("3D2", "Da li su formati fajlova, rezolucija, postavke boje, brzina uzorkovanja zvuka, dubina bita, video rezolucija, kompresija i ostala tehnička podešavanja odgovarajuća za vrstu materijala i predviđenu upotrebu?", "Are file formats, resolution, colour settings, audio sampling rate, bit depth, video resolution, compression, and other technical settings appropriate for the material type and intended use?", 'intermediate'),
          q("3D3", "Da li su master fajlovi kreirani u visokom kvalitetu i formatu pogodnom za dugoročno čuvanje, ukoliko je to moguće?", "Are master files created in a high-quality and preservation-suitable format where feasible?", 'intermediate'),
          q("3D4", "Da li su pristupne (access) ili radne kopije jasno odvojene od master fajlova?", "Are access or working files clearly distinguished from master files?", 'intermediate'),
          q("3D6", "Da li je institucija razmotrila da li su izabrana podešavanja dovoljna za OCR, transkripciju, obogaćivanje metapodataka, obradu uz podršku veštačke inteligencije, pristupačnost, objavljivanje ili buduću migraciju?", "Has the institution considered whether the selected settings are sufficient for OCR, transcription, metadata enrichment, AI-supported processing, accessibility, publication, or future migration?", 'expert'),
          q("3D7", "Da li je institucija razmotrila da li različite kategorije materijala zahtevaju različita tehnička podešavanja?", "Has the institution considered whether different material categories require different technical settings?", 'expert'),
          q("3D8", "Da li je institucija dokumentovala zašto su izabrana konkretna podešavanja?", "Has the institution documented why specific settings were selected?", 'expert'),
          q("3D9", "Da li je institucija proverila da li su odabrani standardi kompatibilni sa institucionalnim repozitorijumima, agregatorima, sistemima za čuvanje ili budućim platformama za objavljivanje?", "Has the institution checked whether the selected standards are compatible with institutional repositories, aggregators, preservation systems, or future publication platforms?", 'expert'),
          q("3D10", "Da li je institucija razmotrila da li su dostupni i primereni otvoreni, široko podržani i održivi formati?", "Has the institution considered whether open, widely supported, and sustainable formats are available and appropriate?", 'expert')
        ]
      },
      {
        id: "E",
        title: bi("Kontrola procesa snimanja", "Capture Process Control"),
        questions: [
          q("3E1", "Da li postoji definisan tok posla (workflow) za snimanje?", "Is there a defined workflow for capture?", 'beginner'),
          q("3E2", "Da li su dodeljene odgovornosti za upravljanje opremom, rukovanje materijalima, proveru fajlova, imenovanje fajlova, snimanje metapodataka i skladištenje izlaza?", "Are responsibilities assigned for operating equipment, handling materials, checking files, naming files, recording metadata, and storing outputs?", 'intermediate'),
          q("3E3", "Da li postoji proces za proveru da li je svaka odabrana stavka snimljena?", "Is there a process for checking that each selected item has been captured?", 'intermediate'),
          q("3E4", "Da li postoji proces za izbegavanje propuštenih stranica, nedostajućih strana, nepotpunih snimaka, neadekvatno isečenih slika (cropped), dupliranih fajlova, pogrešnog redosleda, pogrešne orijentacije ili netačnih imena fajlova?", "Is there a process for avoiding missed pages, missing sides, incomplete recordings, cropped images, duplicate files, wrong order, wrong orientation, or incorrect file names?", 'intermediate'),
          q("3E5", "Za materijale koji imaju prednju i zadnju stranu, da li je institucija proverila da li obe strane treba da budu snimljene?", "For materials with front and back sides, has the institution checked whether both sides should be captured?", 'expert'),
          q("3E6", "Za materijale sa više stranica ili sekvencijalne materijale, da li je institucija proverila da li je redosled ispravan i potpun?", "For multi-page or sequential materials, has the institution checked whether the order is correct and complete?", 'expert'),
          q("3E7", "Za audio i video materijale, da li je institucija proverila da li su napravljeni puni snimci i da li su dokumentovani problemi sa reprodukcijom?", "For audio and video materials, has the institution checked whether full recordings have been captured and whether playback issues were documented?", 'expert'),
          q("3E8", "Za 3D ili složene objekte, da li je institucija proverila da li je uhvaćeno dovoljno uglova, površina, dimenzija i detalja?", "For 3D or complex objects, has the institution checked whether enough angles, surfaces, dimensions, and details have been captured?", 'expert'),
          q("3E9", "Da li postoji proces za obustavu snimanja ukoliko se uoče oštećenja, tehnički kvarovi, neočekivana osetljivost ili ozbiljni problemi sa kvalitetom?", "Is there a process for stopping capture if damage, technical failure, unexpected sensitivity, or serious quality problems are detected?", 'expert'),
          q("3E10", "Da li postoji evidencija o tome ko je izvršio snimanje i kada?", "Is there a record of who performed the capture and when?", 'expert')
        ]
      },
      {
        id: "F",
        title: bi("Tehnička kontrola kvaliteta", "Technical Quality Control"),
        questions: [
          q("3F1", "Da li je institucija sprovela kontrolu kvaliteta snimljenih fajlova?", "Has the institution performed quality control on captured files?", 'beginner'),
          q("3F2", "Da li je proces kontrole kvaliteta definisan pre nego što se fajlovi prihvate?", "Is the quality control process defined before files are accepted?", 'intermediate'),
          q("3F3", "Da li je institucija proverila potpunost, čitljivost, oštrinu, fokus, ekspoziciju, tačnost boja, isecanje, orijentaciju, poravnanje, redosled stranica, integritet fajla i ispravno imenovanje fajlova?", "Has the institution checked completeness, readability, sharpness, focus, exposure, colour accuracy, cropping, orientation, alignment, page order, file integrity, and correct file naming?", 'intermediate'),
          q("3F4", "Za skenirani ili fotografisani tekst, da li je institucija proverila da li je tekst dovoljno čitljiv za nameravanu upotrebu i eventualni OCR?", "For scanned or photographed text, has the institution checked whether the text is legible enough for the intended use and possible OCR?", 'intermediate'),
          q("3F5", "Za slike i vizuelne materijale, da li je institucija proverila da li su bitni detalji, boje, natpisi, pečati, beleške, poleđine, teksture ili kontekstualne karakteristike adekvatno snimljeni?", "For images and visual materials, has the institution checked whether important details, colours, inscriptions, stamps, notes, backsides, textures, or contextual features are captured adequately?", 'expert'),
          q("3F6", "Za audio, da li je institucija proverila da li su nivoi snimanja, nivo buke, distorzije, nedostajući delovi, konfiguracija kanala i format fajla prihvatljivi?", "For audio, has the institution checked whether recording levels, noise, distortion, missing parts, channel configuration, and file format are acceptable?", 'expert'),
          q("3F7", "Za video, da li je institucija proverila da li su kvalitet slike, zvuka, sinhronizacije, rezolucije, frejmova, i eventualni segmenti koji nedostaju, treperenja, linije i prekidi u reprodukciji evidentirani i procenjeni?", "For video, has the institution checked whether image, sound, synchronization, resolution, frame quality, missing segments, flicker, lines, and playback interruptions are recorded and assessed?", 'expert'),
          q("3F8", "Za 3D izlaze, da li je institucija proverila da li su model, oblak tačaka (point cloud), mreža (mesh), tekstura, razmera, orijentacija i format fajla adekvatni za nameravanu upotrebu?", "For 3D outputs, has the institution checked whether the model, point cloud, mesh, texture, scale, orientation, and file format are adequate for intended use?", 'expert'),
          q("3F9", "Da li je institucija identifikovala fajlove koje je potrebno ponovo snimiti?", "Has the institution identified files that need to be recaptured?", 'expert'),
          q("3F10", "Da li je institucija evidentirala tehnička ograničenja koja se ne mogu ispraviti?", "Has the institution recorded technical limitations that cannot be corrected?", 'expert'),
          q("3F11", "Da li je institucija proverila da li su standardi kvaliteta dosledno primenjeni na različite serije (batches), operatore, dobavljače ili vrste materijala?", "Has the institution checked whether quality standards were applied consistently across different batches, operators, vendors, or material types?", 'beginner')
        ]
      },
      {
        id: "G",
        title: bi("Kreiranje i zaštita master fajlova", "Master File Creation and Protection"),
        questions: [
          q("3G1", "Da li je kreiran master fajl za svaku uspešno snimljenu stavku, tamo gde je to prikladno?", "Has a master file been created for each successfully captured item, where appropriate?", 'beginner'),
          q("3G2", "Da li su master fajlovi jasno odvojeni od radnih kopija, kopija za pristup, uređenih verzija, komprimovanih fajlova ili verzija za objavljivanje?", "Are master files clearly distinguished from working copies, access copies, edited versions, compressed files, or publication versions?", 'intermediate'),
          q("3G3", "Da li se master fajlovi čuvaju na bezbednoj i kontrolisanoj lokaciji?", "Are master files stored in a secure and controlled location?", 'intermediate'),
          q("3G4", "Da li su master fajlovi zaštićeni od slučajnog uređivanja, prepisivanja, brisanja, kompresije ili nekontrolisane izmene?", "Are master files protected from accidental editing, overwriting, deletion, compression, or uncontrolled modification?", 'intermediate'),
          q("3G5", "Da li postoji sistem za imenovanje i verziranje fajlova koji omogućava povezivanje master fajlova sa originalnim materijalima i metapodacima?", "Is there a file naming and versioning system that allows master files to be linked to original materials and metadata?", 'expert'),
          q("3G6", "Da li je institucija kreirala kontrolne zbirove (checksums) ili drugu vrstu kontrole integriteta fajlova, gde je to odgovarajuće?", "Has the institution created checksums or another file integrity control where appropriate?", 'expert'),
          q("3G7", "Da li je institucija dokumentovala vezu između fizičkog originala, master fajla, radne kopije, kopije za pristup, metapodataka i budućih derivata?", "Has the institution documented the relationship between the physical original, master file, working copy, access copy, metadata, and future derivatives?", 'expert'),
          q("3G8", "Da li je institucija razmotrila da li master fajlovi uključuju ugrađene metapodatke (embedded metadata) ili tehničke metapodatke koje treba sačuvati?", "Has the institution considered whether master files include embedded metadata or technical metadata that should be preserved?", 'expert'),
          q("3G9", "Da li su master fajlovi uključeni u plan za dugoročno čuvanje i pravljenje rezervnih kopija (backup)?", "Are master files included in the preservation and backup plan?", 'expert'),
          q("3G10", "Da li postoji proces za obnavljanje master fajlova ukoliko su radni fajlovi oštećeni, izgubljeni ili pogrešno uređeni?", "Is there a process for restoring master files if working files are damaged, lost, or incorrectly edited?", 'expert')
        ]
      },
      {
        id: "H",
        title: bi("Skladištenje, izrada rezervnih kopija i početno arhiviranje", "Storage, Backup and Initial Archiving"),
        questions: [
          q("3H1", "Da li se snimljeni fajlovi čuvaju u organizovanoj strukturi foldera ili sistemu za upravljanje digitalnom imovinom (DAMS)?", "Are captured files stored in an organized folder structure or digital asset management system?", 'beginner'),
          q("3H2", "Da li se za master fajlove odmah nakon snimanja pravi rezervna kopija (backup)?", "Are master files backed up promptly after capture?", 'intermediate'),
          q("3H3", "Da li postoji više kopija master fajlova na odvojenim lokacijama ili u različitim okruženjima za skladištenje?", "Are there multiple copies of master files in separate locations or storage environments?", 'intermediate'),
          q("3H4", "Da li je skladište zaštićeno od slučajnog brisanja, neovlašćenog pristupa, kvara hardvera, zlonamernog softvera (malware), korupcije fajlova, požara, poplave, incidenata sa električnom energijom, krađe ili kvara dobavljača usluge?", "Is storage protected against accidental deletion, unauthorized access, hardware failure, malware, corruption, fire, flood, electricity incidents, theft, or vendor failure?", 'intermediate'),
          q("3H5", "Da li je institucija definisala ko sme da pristupa, premešta, preimenuje, uređuje, briše ili kopira master fajlove?", "Has the institution defined who may access, move, rename, edit, delete, or copy master files?", 'expert'),
          q("3H6", "Da li su dozvole za pristup u skladu sa osetljivošću, statusom prava i institucionalnom vrednošću materijala?", "Are access permissions appropriate to the sensitivity, rights status, and institutional value of the materials?", 'expert'),
          q("3H7", "Da li su uređaji za skladištenje, usluge u oblaku, serveri, repozitorijumi ili eksterni diskovi evidentirani?", "Are storage devices, cloud services, servers, repositories, or external drives documented?", 'expert'),
          q("3H8", "Da li je institucija razmotrila enkripciju, kontrolu pristupa, logove revizije ili bezbedan prenos kada su materijali osetljivi, ograničeni ili sadrže lične podatke?", "Has the institution considered encryption, access control, audit logs, or secure transfer where materials are sensitive, restricted, or contain personal data?", 'expert'),
          q("3H9", "Ako se fajlovi prenose dobavljaču (vendoru) ili od njega, da li je prenos bezbedan i dokumentovan?", "If files are transferred to or from a vendor, is the transfer secure and documented?", 'expert'),
          q("3H10", "Da li postoji proces za proveru da li su rezervne kopije (backup) čitljive i potpune?", "Is there a process for checking that backup copies are readable and complete?", 'expert')
        ]
      },
      {
        id: "I",
        title: bi("Pitanja prava, privatnosti i osetljivosti otkrivena tokom snimanja", "Rights, Privacy and Sensitivity Issues Discovered During Capture"),
        questions: [
          q("3I1", "Da li je snimanje otkrilo informacije koje nisu identifikovane tokom selekcije, kao što su beleške na poleđini fotografija, anotacije, privatna prepiska, lična imena, adrese, potpisi, pečati, etikete, marginalije, skriveni tekst ili osetljivi detalji?", "Did capture reveal information that was not identified during selection, such as notes on the back of photographs, annotations, private correspondence, personal names, addresses, signatures, stamps, labels, marginalia, hidden text, or sensitive details?", 'beginner'),
          q("3I2", "Da li je snimanje pokazalo da neki materijali sadrže lične podatke ili informacije koje se odnose na prepoznatljive osobe?", "Did capture reveal that some materials contain personal data or information relating to identifiable persons?", 'intermediate'),
          q("3I3", "Da li je snimanje otkrilo kulturno osetljiv, sporan, sveti, traumatičan, diskriminatoran, uvredljiv ili kontekstualno osetljiv materijal koji prethodno nije zabeležen?", "Did capture reveal culturally sensitive, contested, sacred, traumatic, discriminatory, offensive, or contextual material that was not previously recorded?", 'intermediate'),
          q("3I4", "Da li je snimanje otkrilo informacije o autorskim pravima, informacijama o autorstvu, vlasničkim oznakama, donatorskim informacijama, napomenama o autorskim pravima, naznakama licenci ili ograničenjima?", "Did capture reveal rights information, authorship information, ownership marks, donor information, copyright notices, licence indications, or restrictions?", 'intermediate'),
          q("3I5", "Da li je snimanje otkrilo sadržaj koji može zahtevati redigovanje, ograničen pristup, odloženo objavljivanje, kontekstualizaciju ili pregled stručnjaka?", "Did capture reveal content that may require redaction, restricted access, delayed publication, contextualization, or specialist review?", 'expert'),
          q("3I6", "Da li je snimanje otkrilo sadržaj koji može uticati na planirani model pristupa ili rute objavljivanja?", "Did capture reveal content that may affect the planned access model or publication route?", 'expert'),
          q("3I7", "Da li postoji proces za obeležavanje (flagging) neočekivanih problema pre nego što materijali pređu u fazu uređivanja, obogaćivanja ili pripreme za objavljivanje?", "Is there a process for flagging unexpected issues before the materials move into editing, enrichment, or publication preparation?", 'expert'),
          q("3I8", "Da li je institucija ažurirala registar rizika i evidenciju o pravima, privatnosti ili osetljivosti?", "Has the institution updated the risk register and rights, privacy, or sensitivity records?", 'expert'),
          q("3I9", "Da li je institucija eskalirala novootkrivene probleme tamo gde je to odgovarajuće?", "Has the institution escalated newly discovered issues where appropriate?", 'expert')
        ]
      },
      {
        id: "J",
        title: bi("Metapodaci i dokumentacija o snimanju", "Metadata and Capture Documentation"),
        questions: [
          q("3J1", "Da li je svaki snimljeni fajl povezan sa ispravnim originalnim predmetom, kolekcijom, evidencijom ili identifikatorom?", "Is each captured file linked to the correct original item, collection, record, or identifier?", 'beginner'),
          q("3J2", "Da li su osnovni deskriptivni, administrativni, tehnički i prezervacijski metapodaci evidentirani gde je to prikladno?", "Is basic descriptive, administrative, technical, and preservation metadata recorded where appropriate?", 'intermediate'),
          q("3J3", "Da li je datum snimanja zabeležen?", "Is the capture date recorded?", 'intermediate'),
          q("3J4", "Da li su zabeleženi operater snimanja, tim ili dobavljač?", "Is the capture operator, team, or vendor recorded?", 'intermediate'),
          q("3J5", "Da li su oprema za snimanje, softver, podešavanja, rezolucija, format i beleške o obradi zabeleženi?", "Are capture equipment, software, settings, resolution, format, and processing notes recorded?", 'expert'),
          q("3J6", "Da li su napomene o stanju, napomene o oštećenjima, ograničenja i problemi s kvalitetom povezani sa odgovarajućim fajlovima?", "Are condition notes, damage notes, limitations, and quality issues linked to the relevant files?", 'expert'),
          q("3J7", "Da li su zastavice za prava, privatnost, osetljivost i pristup povezane s relevantnim fajlovima ili metapodacima?", "Are rights, privacy, sensitivity, and access flags linked to the relevant files or metadata records?", 'expert'),
          q("3J8", "Da li su ponovna snimanja, neuspešna snimanja, zamene, stavke koje nedostaju ili odstupanja dokumentovani?", "Are recaptures, failed captures, substitutions, missing items, or deviations documented?", 'expert'),
          q("3J9", "Da li su metapodaci zabeleženi na način koji podržava kasniju pretragu, objavljivanje, očuvanje, interoperabilnost i odgovornost?", "Is metadata recorded in a way that supports later search, publication, preservation, interoperability, and accountability?", 'expert'),
        ]
      },
      {
        id: "K",
        title: bi("Kontrola snimanja od strane dobavljača ili trećeg lica", "Vendor or Third-Party Capture Control"),
        questions: [
          q("3K1", "Ukoliko se digitalizacija poverava spoljnim saradnicima, da li su zadaci, standardi, rezultati (deliverables), rokovi i odgovornosti dobavljača jasno definisani?", "If digitization is outsourced, are the vendor’s tasks, standards, deliverables, timelines, and responsibilities clearly defined?", 'beginner', "vendor"),
          q("3K2", "Da li su definisane obaveze u vezi sa rukovanjem, transportom, skladištenjem, osiguranjem, poverljivošću, bezbednošću, pristupom i izveštavanjem o incidentima?", "Are handling, transport, storage, insurance, confidentiality, security, access, and incident reporting obligations defined?", 'intermediate', "vendor"),
          q("3K3", "Da li su specificirani potrebni formati fajlova, nivoi kvaliteta, metapodaci, konvencije o imenovanju, struktura isporuke i kriterijumi za prihvatanje?", "Are required file formats, quality levels, metadata, naming conventions, delivery structure, and acceptance criteria specified?", 'intermediate', "vendor"),
          q("3K4", "Da li je jasno ko poseduje ili kontroliše master fajlove i derivativne fajlove?", "Is it clear who owns or controls the master files and derivative files?", 'intermediate', "vendor"),
          q("3K5", "Da li je dobavljaču zabranjeno neovlašćeno kopiranje, ponovna upotreba, objavljivanje, deljenje, obučavanje (npr. AI modela) ili sekundarna upotreba materijala i metapodataka, tamo gde je to odgovarajuće?", "Is the vendor prohibited from unauthorized copying, reuse, publication, sharing, training, or secondary use of the materials and metadata, where appropriate?", 'expert', "vendor"),
          q("3K6", "Da li su uključene obaveze zaštite podataka, privatnosti, poverljivosti ili bezbednosti ukoliko dobavljač obrađuje lične podatke ili osetljive materijale?", "Are data protection, privacy, confidentiality, or security obligations included if the vendor processes personal data or sensitive materials?", 'expert', "vendor"),
          q("3K7", "Da li postoji proces za pregledanje i prihvatanje ili odbijanje rezultata rada dobavljača?", "Is there a process for reviewing and accepting or rejecting vendor outputs?", 'expert', "vendor"),
          q("3K8", "Da li postoji proces za sigurno brisanje ili povraćaj fajlova nakon što dobavljač završi rad, tamo gde je to odgovarajuće?", "Is there a process for secure deletion or return of files after the vendor’s work is complete, where appropriate?", 'expert', "vendor"),
          q("3K9", "Da li je institucija zadržala dovoljno unutrašnjeg nadzora da bi ostala odgovorna za projekat?", "Has the institution retained enough internal oversight to remain responsible for the project?", 'expert', "vendor"),
          q("3K10", "Da li su zabeležena odstupanja dobavljača, problemi sa kvalitetom, kašnjenja, incidenti ili ograničenja?", "Are vendor deviations, quality issues, delays, incidents, or limitations recorded?", 'expert', "vendor")
        ]
      },
      {
        id: "L",
        title: bi("Ljudski nadzor i izbegavanje prekomerne automatizacije", "Human Oversight and Avoidance of Over-Automation"),
        questions: [
          q("3L1", "Da li osoblje pregleda kvalitet i potpunost snimljenih fajlova?", "Are staff reviewing the quality and completeness of captured files?", 'beginner'),
          q("3L2", "Da li se automatizovane provere kvaliteta, ukoliko se koriste, dopunjuju ljudskim pregledom kada je to potrebno?", "Are automated quality checks, if used, supplemented by human review where needed?", 'intermediate'),
          q("3L3", "Da li je projektni tim svestan da tehnički uspeh ne znači automatski i kulturnu, pravnu, etičku ili kontekstualnu spremnost?", "Is the project team aware that technical success does not automatically mean cultural, legal, ethical, or contextual readiness?", 'intermediate'),
          q("3L4", "Da li je osoblje ovlašćeno da zaustavi snimanje ako identifikuju oštećenja, osetljiv sadržaj, probleme s pravima, probleme s privatnošću ili probleme s kvalitetom?", "Are staff empowered to pause capture if they identify damage, sensitive content, rights issues, privacy concerns, or quality problems?", 'intermediate'),
          q("3L5", "Da li odluke o ponovnom snimanju, isključenju, ograničavanju ili eskalaciji donose odgovarajući institucionalni akteri, a ne samo tehnički operateri?", "Are decisions about recapture, exclusion, restriction, or escalation made by appropriate institutional actors, not only by technical operators?", 'expert'),
          q("3L6", "Da li su ograničenja i nesigurnosti zabeleženi umesto da se sakrivaju?", "Are limitations and uncertainties recorded rather than hidden?", 'expert'),
          q("3L7", "Ukoliko se alati sa AI podrškom koriste tokom snimanja, poboljšanja kvaliteta, kontrole kvaliteta ili pripreme fajlova, da li je njihova uloga dokumentovana?", "If AI-supported tools are used during capture, enhancement, quality control, or file preparation, is their role documented?", 'expert', "ai"),
          q("3L8", "Da li se AI podržani ili automatizovani izlazi proveravaju pre nego što se prihvate kao pouzdani?", "Are AI-supported or automated outputs checked before they are accepted as reliable?", 'expert', "ai")
        ]
      }
    ]
  },
  {
    id: 4,
    code: bi("Faza 4", "Phase 4"),
    title: bi("Priprema za objavljivanje i obogaćivanje sadržaja", "Preparation for Publication and Content Enrichment"),
    description: bi(
      "Metapodaci, opisi, AI-generisani sadržaj, pristupačnost i konteksti pre objavljivanja.",
      "Metadata, descriptions, AI-generated content, accessibility and context before publication."
    ),
    sections: [
      {
        id: "A",
        title: bi("Kreiranje radne kopije i zaštita master fajla", "Working Copy Creation and Master File Protection"),
        questions: [
          q("4A1", "Da li je institucija kreirala radne kopije od master fajlova pre nego što se preduzme bilo kakvo uređivanje, čišćenje, konverzija, kompresija, poboljšanje, OCR, transkripcija ili obogaćivanje?", "Has the institution created working copies from the master files before any editing, cleaning, conversion, compression, enhancement, OCR, transcription, or enrichment takes place?", 'beginner'),
          q("4A2", "Da li se master fajlovi čuvaju u neizmenjenom stanju i jesu li zaštićeni od slučajnog uređivanja, prepisivanja, kompresije, brisanja ili nekontrolisanog modifikovanja?", "Are master files kept unchanged and protected from accidental editing, overwriting, compression, deletion, or uncontrolled modification?", 'intermediate'),
          q("4A3", "Da li su radne kopije smeštene u jasno identifikovanom radnom direktorijumu, folderu, repozitorijumu ili sistemu za upravljanje digitalnim sredstvima?", "Are working copies stored in a clearly identified working directory, folder, repository, or digital asset management environment?", 'intermediate'),
          q("4A4", "Da li postoji jasna konvencija o imenovanju koja razlikuje master fajlove, radne kopije, pristupne kopije, uređene fajlove, izvedene fajlove (derivatives), fajlove obogaćivanja i fajlove za objavljivanje?", "Is there a clear naming convention that distinguishes master files, working copies, access copies, edited files, derivatives, enrichment files, and publication files?", 'intermediate'),
          q("4A5", "Da li postoji proces kontrole verzija za radne fajlove?", "Is there a version control process for working files?", 'expert'),
          q("4A6", "Da li je jasno ko može da uređuje, procesira, komentariše (annotate), obogaćuje ili briše radne kopije?", "Is it clear who may edit, process, annotate, enrich, or delete working copies?", 'expert'),
          q("4A7", "Da li je institucija dokumentovala iz kog master fajla potiče koja radna kopija?", "Has the institution documented which master file each working copy came from?", 'expert'),
          q("4A8", "Da li je institucija dokumentovala bilo kakvu obradu ili modifikaciju primenjenu na radne fajlove?", "Has the institution documented any processing or modification applied to working files?", 'expert'),
          q("4A9", "Da li postoji proces za vraćanje na master fajl ako je radna kopija oštećena, pogrešno uređena ili nije pogodna za dalju upotrebu?", "Is there a process for returning to the master file if a working copy is damaged, incorrectly edited, or unsuitable for further use?", 'expert'),
          q("4A10", "Da li radne kopije podležu odgovarajućim kontrolama pristupa ako su materijali osetljivi, ograničeni ili sadrže lične podatke?", "Are working copies subject to appropriate access controls where materials are sensitive, restricted, or contain personal data?", 'expert')
        ]
      },
      {
        id: "B",
        title: bi("Čišćenje, popravka i poboljšanje radnih fajlova", "Cleaning, Repair and Enhancement of Working Files"),
        questions: [
          q("4B1", "Da li je institucija identifikovala za koje fajlove je potrebno čišćenje, popravka, poboljšanje (enhancement), isecanje (cropping), rotacija, ispravljanje, stabilizacija, smanjenje šuma, korekcija boja, podešavanje kontrasta, promena veličine ili slična priprema?", "Has the institution identified which files require cleaning, repair, enhancement, cropping, rotation, deskewing, stabilization, noise reduction, colour correction, contrast adjustment, resizing, or similar preparation?", 'beginner'),
          q("4B2", "Da li je svrha čišćenja ili popravke jasno definisana?", "Is the purpose of cleaning or repair clearly defined?", 'intermediate'),
          q("4B3", "Da li je institucija napravila razliku između tehničke korekcije i interpretativne izmene?", "Has the institution distinguished between technical correction and interpretive alteration?", 'intermediate'),
          q("4B4", "Da li je institucija razmotrila da li oznake, beleške, zapisi, mrlje, marginalije, ogrebotine, pečati, nalepnice, oštećenja, boja, pozadina ili druge osobine mogu imati istorijsku, dokaznu, kulturnu, pravnu ili istraživačku vrednost?", "Has the institution considered whether marks, notes, annotations, stains, marginalia, scratches, stamps, labels, damage, colour, background, or other features may have historical, evidential, cultural, legal, or research value?", 'intermediate'),
          q("4B5", "Da li je institucija izbegla uklanjanje karakteristika koje bi mogle biti važne za utvrđivanje porekla, autorstva, istorije upotrebe, institucionalne istorije, značenja u zajednici ili akademske interpretacije?", "Has the institution avoided removing features that may be important for provenance, authorship, use history, institutional history, community meaning, or scholarly interpretation?", 'expert'),
          q("4B6", "Kada se karakteristike uklanjaju, koriguju, poboljšavaju ili menjaju, da li su te promene dokumentovane?", "Where features are removed, corrected, enhanced, or altered, is the change documented?", 'expert'),
          q("4B7", "Da li je institucija razmotrila da li treba sačuvati i neizmenjenu i počišćenu verziju?", "Has the institution considered whether both an unaltered version and a cleaned version should be retained?", 'expert'),
          q("4B8", "Da li je institucija proverila da li čišćenje ili poboljšanje (enhancement) može uticati na OCR, transkripciju, pristupačnost, kvalitet metapodataka ili kasniju obradu podržanu veštačkom inteligencijom?", "Has the institution checked whether cleaning or enhancement may affect OCR, transcription, accessibility, metadata quality, or later AI-supported processing?", 'expert'),
          q("4B9", "Da li je institucija proverila da li bi restauracija slike, restauracija lica, čišćenje zvuka, poboljšanje videa ili slični procesi mogli stvoriti obmanjujuće izlaze?", "Has the institution checked whether image restoration, face restoration, audio cleaning, video enhancement, or similar processes could create misleading outputs?", 'expert'),
          q("4B10", "Ako se koristi restauracija ili poboljšanje podržano veštačkom inteligencijom, da li je institucija dokumentovala alat, svrhu, ulazne podatke, izlazne rezultate, ograničenja i proces ljudskog pregleda?", "If AI-supported restoration or enhancement is used, has the institution documented the tool, purpose, input, output, limitations, and human review process?", 'expert')
        ]
      },
      {
        id: "C",
        title: bi("Integritet, autentičnost i kontekst", "Integrity, Authenticity and Context"),
        questions: [
          q("4C1", "Da li je institucija razmotrila da li uređivanje, čišćenje, popravka ili poboljšanje može promeniti način na koji korisnici razumeju materijal?", "Has the institution considered whether editing, cleaning, repair, or enhancement may change how users understand the material?", 'beginner'),
          q("4C2", "Da li je institucija razmotrila da li vizuelne, tekstualne, audio ili video korekcije mogu stvoriti lažan utisak potpunosti, sigurnosti, kvaliteta ili autentičnosti?", "Has the institution considered whether visual, textual, audio, or video corrections may create a false impression of completeness, certainty, quality, or authenticity?", 'intermediate'),
          q("4C3", "Da li su oštećeni, nepotpuni, rekonstruisani, poboljšani, obnovljeni ili materijali čije je značenje nesigurno jasno identifikovani kada je to važno za korisnike?", "Are damaged, incomplete, reconstructed, enhanced, restored, or uncertain materials clearly identified where this is relevant for users?", 'intermediate'),
          q("4C4", "Da li je institucija evidentirala ograničenja digitalizovane verzije, kao što su stranice koje nedostaju, oštećen zvuk, nečitljiv tekst, isečene oblasti (cropped), nepotpuna pokrivenost objekata, nesigurni datumi, nejasno autorstvo ili delimična transkripcija?", "Has the institution recorded limitations of the digitized version, such as missing pages, damaged sound, unreadable text, cropped areas, incomplete object coverage, uncertain dates, unclear authorship, or partial transcription?", 'intermediate'),
          q("4C5", "Da li je institucija razmotrila da li su potrebne kontekstualne beleške koje objašnjavaju vezu između originalnog materijala i pripremljene digitalne verzije?", "Has the institution considered whether contextual notes are needed to explain the relationship between the original material and the prepared digital version?", 'expert'),
          q("4C6", "Da li je institucija razmotrila da li korisnici treba da budu informisani da su neki izlazi uređeni, poboljšani, generisani od strane mašine, ručno korigovani, delimični ili nesigurni?", "Has the institution considered whether users should be informed that some outputs are edited, enhanced, machine-generated, manually corrected, partial, or uncertain?", 'expert'),
          q("4C8", "Da li je institucija sačuvala dovoljno informacija kako bi budućim korisnicima ili osoblju omogućila razumevanje načina na koji je objavljena verzija nastala?", "Has the institution preserved enough information to allow future users or staff to understand how the published version was created?", 'expert')
        ]
      },
      {
        id: "D",
        title: bi("Konverzija u formate za pristup i objavljivanje", "Conversion into Access and Publication Formats"),
        questions: [
          q("4D1", "Da li je institucija identifikovala koje fajlove je potrebno konvertovati za pristup na internetu, postavljanje u repozitorijum, agregaciju, interni pristup, korišćenje u istraživanju, obrazovanju, izložbama ili za ponovnu upotrebu?", "Has the institution identified which files need to be converted for online access, repository upload, aggregation, internal access, research use, education, exhibition, or reuse?", 'beginner'),
          q("4D2", "Da li su pristupni fajlovi jasno odvojeni od master fajlova i radnih kopija?", "Are access files clearly distinguished from master files and working copies?", 'intermediate'),
          q("4D3", "Da li su izabrani formati kompatibilni s predviđenom platformom, repozitorijumom, agregatorom, sistemom za očuvanje ili okruženjem za pristup?", "Are selected formats compatible with the intended platform, repository, aggregator, preservation system, or access environment?", 'intermediate'),
          q("4D4", "Da li je institucija proverila podržava li platforma izabrane formate za sliku, zvuk, video, tekst, metapodatke, transkripte, titlove ili 3D modele?", "Has the institution checked whether the platform supports the selected image, audio, video, text, metadata, transcript, subtitle, or 3D formats?", 'intermediate'),
          q("4D5", "Da li je institucija razmotrila kako konverzija utiče na kvalitet, pristupačnost, buduću ponovnu upotrebu, pretraživost, očuvanje i korisničko iskustvo?", "Has the institution considered whether conversion affects quality, accessibility, future reuse, searchability, preservation, or user experience?", 'expert'),
          q("4D6", "Da li je institucija izbegla nepotreban gubitak kvaliteta u situacijama kada visok kvalitet pristupa, istraživanja, ponovne upotrebe, zumiranja, detaljne analize ili buduće obrade može biti potreban?", "Has the institution avoided unnecessary loss of quality where high-quality access, research, reuse, zooming, detailed analysis, or future processing may be required?", 'expert'),
          q("4D7", "Da li je institucija razmotrila jesu li fajlovi niže rezolucije ili komprimovani fajlovi prikladni za web pristup, dok su master fajlovi sačuvani zasebno?", "Has the institution considered whether lower-resolution or compressed files are appropriate for web access while master files remain preserved separately?", 'expert'),
          q("4D8", "Da li je institucija razmotrila zahtevaju li različiti materijali različite formate za pristup?", "Has the institution considered whether different materials require different access formats?", 'expert'),
          q("4D9", "Da li je institucija proverila jesu li konvertovani fajlovi potpuni, čitljivi, podobni za reprodukciju, pretraživi, ispravno imenovani i povezani s pravim metapodacima?", "Has the institution checked whether converted files are complete, readable, playable, searchable, correctly named, and linked to the correct metadata?", 'expert'),
          q("4D10", "Da li je institucija dokumentovala postavke konverzije, kao i gubitak kvaliteta ili bilo koja ograničenja?", "Has the institution documented conversion settings and any quality loss or limitations?", 'expert')
        ]
      },
      {
        id: "E",
        title: bi("OCR i prepoznavanje teksta", "OCR and Text Recognition"),
        questions: [
          q("4E1", "Da li će se na digitalizovane materijale primeniti OCR, prepoznavanje rukopisa ili neko drugo prepoznavanje teksta?", "Will OCR, handwriting recognition, or other text recognition be applied to the digitized materials?", 'beginner'),
          q("4E2", "Da li je svrha OCR-a ili prepoznavanja teksta jasno definisana, npr. pretraga, pristupačnost, transkripcija, obogaćivanje metapodataka, istraživanje, ponovna upotreba ili objavljivanje?", "Is the purpose of OCR or text recognition clearly defined, such as search, accessibility, transcription, metadata enrichment, research, reuse, or publication?", 'intermediate'),
          q("4E3", "Da li su izvorni fajlovi prikladni za OCR ili prepoznavanje rukopisa?", "Are the source files suitable for OCR or handwriting recognition?", 'intermediate'),
          q("4E4", "Da li je institucija razmotrila kako bi na tačnost mogli uticati kvalitet slike, jezik, pismo, font, rukopis, beleške na marginama (marginalije), oštećenja, mrlje, zakrivljenost stranice, istorijski pravopis ili pomešani sadržaj?", "Has the institution considered whether image quality, language, script, font, handwriting, layout, marginalia, damage, stains, page curvature, historic spelling, or mixed content may affect accuracy?", 'intermediate'),
          q("4E5", "Da li je institucija izabrala odgovarajuće alate i podešavanja za određeni jezik, pismo, tip materijala i nameravani izlaz?", "Has the institution selected appropriate tools and settings for the language, script, material type, and intended output?", 'expert'),
          q("4E6", "Da li je institucija razmotrila da li je za OCR izlaze neophodna ljudska korekcija pre objavljivanja ili ponovne upotrebe?", "Has the institution considered whether OCR outputs require human correction before publication or reuse?", 'expert'),
          q("4E7", "Da li je institucija definisala prihvatljiv nivo tačnosti za predviđenu upotrebu?", "Has the institution defined an acceptable accuracy level for the intended use?", 'expert'),
          q("4E8", "Da li su izlazi OCR-a jasno povezani s pravim fajlovima i metapodacima?", "Are OCR outputs clearly linked to the correct files and metadata records?", 'expert'),
          q("4E9", "Da li su OCR rezultati uskladišteni u prikladnim formatima za pretragu, čuvanje, pristupačnost ili interoperabilnost?", "Are OCR outputs stored in appropriate formats for search, preservation, accessibility, or interoperability?", 'expert'),
          q("4E10", "Da li su poznata ograničenja OCR-a, nivo nesigurnosti i stopa grešaka dokumentovani ukoliko je to relevantno?", "Are known OCR limitations, uncertainty, or error rates documented where relevant?", 'expert'),
          q("4E11", "Da li je institucija uzela u obzir da OCR može učiniti osetljive ili lične podatke lakšim za pretragu, i samim tim ih više izložiti javnosti?", "Has the institution considered whether OCR may make sensitive or personal information more searchable and therefore more exposed?", 'beginner'),
          q("4E12", "Da li je institucija procenila jesu li za OCR izlaze neophodne provere u pogledu privatnosti, prava, kulturne osetljivosti ili politike objavljivanja?", "Has the institution considered whether OCR outputs require privacy, rights, cultural sensitivity, or publication review before release?", 'intermediate')
        ]
      },
      {
        id: "F",
        title: bi("Transkripcija, titlovi i obogaćivanje zvučnih/video medija", "Transcription, Subtitles and Time-Based Media Enrichment"),
        questions: [
          q("4F1", "Da li će za audio ili video materijale biti kreirani transkripti, titlovi (subtitles), zatvoreni titlovi (captions), opisi, prevodi, sažeci, oznake za poglavlja ili neki drugi dodatni fajlovi?", "Will transcripts, subtitles, captions, descriptions, translations, summaries, chapter markers, or other additional files be created for audio or video materials?", 'beginner'),
          q("4F2", "Da li je svrha tih fajlova jasno određena, npr. omogućavanje pristupačnosti, olakšavanje pretrage, istraživanje, obrazovanje, ponovna upotreba, obezbeđivanje višejezičnog pristupa ili postavljanje na platforme za objavljivanje?", "Is the purpose of these files clearly defined, such as accessibility, search, research, education, reuse, multilingual access, or platform publication?", 'intermediate'),
          q("4F3", "Da li je institucija ispitala hoće li se koristiti automatsko prepoznavanje govora ili transkripcija potpomognuta veštačkom inteligencijom?", "Has the institution considered whether automatic speech recognition or AI-supported transcription will be used?", 'intermediate'),
          q("4F4", "Da li je institucija svesna činjenice da preciznost obrade može zavisiti od faktora poput jezika, naglaska, dijalekta, pozadinske buke, preklapajućeg govora, slabog kvaliteta snimka, korišćenja istorijske terminologije, imena, lokacija ili stručnih izraza?", "Has the institution considered whether language, accent, dialect, background noise, overlapping speech, low recording quality, historic terminology, names, places, or specialist vocabulary may affect accuracy?", 'intermediate'),
          q("4F5", "Da li je institucija procenila potrebu za ručnom proverom (ljudski pregled) titlova (subtitles), zatvorenih titlova (captions) i transkripata pre nego što se oni objave?", "Has the institution considered whether subtitles, captions, or transcripts need human review before publication?", 'expert'),
          q("4F6", "Da li je institucija prepoznala potrebu da se uključe elementi zvuka koji nisu govor—kao što su muzika, tišina, emocionalni ton, smene govornika ili informacije o zvuku koje daju kontekst?", "Has the institution considered whether non-speech audio, music, silence, emotional tone, speaker changes, or contextual audio information should be represented?", 'expert'),
          q("4F7", "Da li je institucija razmotrila mogućnost da transkripti ili titlovi mogu nenamerno otkriti lične podatke, osetljive informacije, uvredljiv sadržaj, podatke vezane za kulturnu osetljivost ili pravno ograničen sadržaj?", "Has the institution considered whether transcripts or subtitles may reveal personal data, sensitive information, offensive content, culturally sensitive information, or legally restricted material?", 'expert'),
          q("4F8", "Da li je institucija razmotrila mogućnost da prevodi promene značenje, izgube određene nijanse, pa zbog toga zahtevaju nadzor stručnjaka?", "Has the institution considered whether translations may alter meaning, lose nuance, or require expert review?", 'expert'),
          q("4F9", "Da li su transkripti, titlovi (subtitles), zatvoreni titlovi (captions) i prevodi nedvosmisleno vezani za odgovarajuće audio i video datoteke?", "Are transcripts, subtitles, captions, or translations clearly linked to the relevant audio or video files?", 'expert'),
          q("4F10", "Da li su formati fajlova kreiranih za ove svrhe usaglašeni sa platformom ili sistemom za arhiviranje koji je predviđen za korišćenje?", "Are files created in formats supported by the intended platform or repository?", 'expert'),
          q("4F11", "Da li su evidentirana saznanja u vezi sa ograničenjima sistema, nejasnoćama ili sa činjenicom da je sadržaj generisala mašina (tamo gde je to relevantno)?", "Are known limitations, uncertainty, or machine-generated status documented where relevant?", 'beginner')
        ]
      },
      {
        id: "G",
        title: bi("Kreiranje, pregled i obogaćivanje metapodataka", "Metadata Creation, Review and Enrichment"),
        questions: [
          q("4G1", "Da li je institucija identifikovala koji su metapodaci neophodni za otkrivanje, obezbeđivanje pristupa, kontrolu autorskih i srodnih prava, dugotrajno čuvanje, ostvarivanje interoperabilnosti i obezbeđivanje odgovornosti (accountability)?", "Has the institution identified what metadata is required for discovery, access, rights management, preservation, interoperability, and accountability?", 'beginner'),
          q("4G2", "Da li su uzeti u obzir opisni, administrativni, tehnički, pravni (rights), zaštitni i strukturni metapodaci tamo gde je to relevantno?", "Are descriptive, administrative, technical, rights, preservation, and structural metadata considered where relevant?", 'intermediate'),
          q("4G3", "Da li je svaki zapis o metapodacima ispravno povezan sa odgovarajućim digitalnim fajlom, originalnim predmetom, kolekcijom ili jedinstvenim identifikatorom?", "Is each metadata record linked to the correct digital file, original item, collection, or identifier?", 'intermediate'),
          q("4G4", "Da li se postojeći zapisi o metapodacima pregledavaju kako bi se potvrdili njihova preciznost, potpunost, uniformnost (doslednost) i svrsishodnost?", "Are existing metadata records reviewed for accuracy, completeness, consistency, and appropriateness?", 'intermediate'),
          q("4G5", "Da li je institucija analizirala postojeće opise, naslove, kategorije, ključne reči ili sisteme klasifikacije kako bi identifikovala moguće prisustvo zastarele, uvredljive, diskriminatorne, kolonijalističke, štetne, neprecizne ili nedovoljno definisane terminologije?", "Has the institution checked whether existing descriptions, titles, categories, keywords, or classifications include outdated, offensive, discriminatory, colonial, harmful, inaccurate, or incomplete language?", 'expert'),
          q("4G6", "Da li je institucija istražila da li problematična istorijska terminologija treba da bude zadržana, da li treba da dobije kontekst, da se koriguje, nadogradi ili da se precizno obrazloži?", "Has the institution considered whether problematic historical terminology should be retained, contextualized, corrected, supplemented, or clearly explained?", 'expert'),
          q("4G7", "Da li je institucija razmotrila da li izbor metapodataka može uticati na vidljivost, rezultate pretrage, rangiranje, interpretaciju, preporuku i ponovnu upotrebu?", "Has the institution considered whether metadata choices may affect visibility, search results, ranking, interpretation, recommendation, and reuse?", 'expert'),
          q("4G8", "Da li je institucija analizirala potrebu da se u metapodatke unesu detalji o poreklu (izvorniku), neizvesnostima (uncertainty), izvorima podataka, autorskom radu, godini nastanka, mestu kreiranja, statusu prava, pravilima za pristup, oznakama osetljivosti (sensitivity flags) i opisnom kontekstu?", "Has the institution considered whether metadata should include provenance, uncertainty, source information, authorship, date, location, rights status, access conditions, sensitivity flags, or contextual notes?", 'expert'),
          q("4G9", "Da li je institucija procenila potrebu za primenom kontrolisanih rečnika, definisanih standarda, normativnih (authority) zapisa, višejezičnih metapodataka ili pravila koja obezbeđuju interoperabilnost?", "Has the institution considered whether controlled vocabularies, standards, authority files, multilingual metadata, or interoperability requirements apply?", 'expert'),
          q("4G10", "Da li je institucija procenila da li je format metapodataka takav da ga mogu razumeti korisnici, a da ne bude isključivo namenjen internim ekspertima?", "Has the institution considered whether metadata is understandable to intended users, not only to internal experts?", 'expert')
        ]
      },
      {
        id: "H",
        title: bi("AI metapodaci, opisi i obogaćivanje", "AI-Supported Metadata, Description and Enrichment"),
        questions: [
          q("4H1", "Da li će se AI ili automatizovani alati koristiti za generisanje, predlaganje, klasifikaciju, označavanje, prevođenje, sažimanje, opisivanje, klasterisanje, povezivanje, preporučivanje ili obogaćivanje materijala ili metapodataka?", "Will AI or automated tools be used to generate, suggest, classify, tag, translate, summarize, describe, cluster, link, recommend, or enrich materials or metadata?", 'beginner', "ai"),
          q("4H2", "Da li je svrha ovog obogaćivanja pomoću AI jasno definisana?", "Is the purpose of the AI-supported enrichment clearly defined?", 'intermediate', "ai"),
          q("4H3", "Da li je jasno koje podatke, fajlove, metapodatke, transkripte, slike, audio, video ili druge ulazne podatke će alat obrađivati?", "Is it clear what data, files, metadata, transcripts, images, audio, video, or other inputs the tool will process?", 'intermediate', "ai"),
          q("4H4", "Da li je jasno kakve vrste izlaza (rezultata) će alat stvoriti?", "Is it clear what outputs the tool will produce?", 'intermediate', "ai"),
          q("4H5", "Da li se zna kako će rezultati biti korišćeni: za interne potrebe, hoće li proći kroz reviziju od strane zaposlenih, postati deo metapodataka, biti objavljeni za širu publiku, podeljeni sa agregatorima sadržaja ili korišćeni za funkcije pretraživanja i sistema za preporučivanje?", "Is it clear whether outputs will be used internally, reviewed by staff, included in metadata, published to users, shared with aggregators, or used by search or recommendation systems?", 'expert', "ai"),
          q("4H6", "Da li je institucija analizirala rizike koji mogu nastati u vezi sa greškama u činjenicama, halucinacijama sistema (pogrešnim interpretacijama AI-ja), predrasudama, usvajanjem stereotipa, neprikladnim rečnikom, gubitkom relevantnog okruženja, preteranim generalizovanjem, nepravilnim pripisivanjem izvora, neadekvatnim svrstavanjem ili lažnom utvrđenošću činjenica?", "Has the institution considered risks of factual error, hallucination, bias, stereotyping, inappropriate terminology, loss of context, overgeneralization, false attribution, misclassification, or misleading certainty?", 'expert', "ai"),
          q("4H7", "Da li je institucija ispitala mogućnost da izlazi AI sistema naruše vidljivost informacija, način na koji su rangirane, kako se razumeju ili koliko se percipira njihova merodavnost?", "Has the institution considered whether AI outputs may affect the visibility, ranking, interpretation, or perceived authority of materials?", 'expert', "ai"),
          q("4H8", "Da li je institucija definisala kakav je ljudski pregled potreban pre nego što se AI-generisani izlazi prihvate ili objave?", "Has the institution defined what human review is required before AI-generated outputs are accepted or published?", 'expert', "ai"),
          q("4H9", "Da li je institucija razmotrila da li AI-generisane izlaze treba označiti, kvalifikovati ili dokumentovati?", "Has the institution considered whether AI-generated outputs should be labelled, qualified, or documented?", 'expert', "ai"),
          q("4H10", "Da li je institucija razmotrila da li dobavljač AI alata može pristupati, čuvati, ponovo koristiti ili trenirati svoje modele na materijalima ili metapodacima?", "Has the institution considered whether the AI tool provider may access, store, reuse, or train on the materials or metadata?", 'expert', "ai"),
          q("4H11", "Da li je institucija preispitala sve potencijalne obaveze u okviru važećih nacionalnih, regionalnih ili međunarodnih zakona o korišćenju veštačke inteligencije, pravilnika, procedura nabavki, prava na privatnost, autorskih prava, standarda o poverljivosti i stavki definisanih ugovorom?", "Has the institution considered whether AI-related legal, policy, procurement, data protection, copyright, confidentiality, or contractual rules may apply in the relevant jurisdiction?", 'beginner', "ai"),
          q("4H12", "Da li je institucija istražila da li je mudro određene materijale isključiti iz procesa u kojem učestvuje AI, zato što sadrže veoma osetljive elemente, imaju duboko specifično značenje, štite se oštrim zakonskim regulativama, ili zato što postoji značajan rizik da će biti predstavljeni u lažnom, neadekvatnom ili uvredljivom svetlu?", "Has the institution considered whether some materials should be excluded from AI-supported processing because they are too sensitive, context-dependent, legally restricted, or likely to be misrepresented?", 'intermediate', "ai")
        ]
      },
      {
        id: "I",
        title: bi("Pregled prava i licenci pre nastavka pripreme za objavljivanje", "Rights and Licensing Review Before Publication Preparation Continues"),
        questions: [
          q("4I1", "Da li je institucija potvrdila da ima prava potrebna za kreiranje izvedenih dela, radnih kopija, pristupnih kopija, uređenih verzija, OCR-a, transkripata, titlova, prevoda, metapodataka, opisa ili obogaćenih izlaza?", "Has the institution confirmed that it has the rights required to create derivatives, working copies, access copies, edited versions, OCR, transcripts, subtitles, translations, metadata, descriptions, or enrichment outputs?", 'beginner'),
          q("4I2", "Da li je institucija proverila da li čišćenje, restauracija, prevođenje, transkripcija, uređivanje ili poboljšanje mogu stvoriti nova prava, prava saradnika, prava izvođača ili uslove licenciranja?", "Has the institution checked whether cleaning, restoration, translation, transcription, editing, or enhancement may create new rights, contributor rights, contractor rights, or licensing conditions?", 'intermediate'),
          q("4I3", "Da li je institucija procenila rizik da spoljni partneri...", "Has the institution checked whether third-party tools, vendors, consultants, or volunteers may have rights or claims in outputs they create?", 'intermediate'),
          q("4I4", "Da li je institucija nadzirala da li se dozvole i saopštenja o svojini dosledno sprovode kod svake vrste zapisa...", "Has the institution checked whether licences or rights statements apply consistently to files, metadata, derivatives, transcripts, translations, and other additional files?", 'intermediate'),
          q("4I5", "Da li je institucija promislila o tome da li su za određene i drugačije vrste rezultata...", "Has the institution considered whether different outputs require different rights statements or access conditions?", 'expert'),
          q("4I6", "Da li je institucija promislila o činjenici da bi podaci o ovlašćenjima...", "Has the institution considered whether rights information should be embedded in metadata or displayed to users?", 'expert'),
          q("4I7", "Da li je institucija razmotrila sve opcije o tome da li je deljenje podataka u javnosti...", "Has the institution considered whether publication, aggregation, reuse, or open licensing is legally possible for all outputs?", 'expert'),
          q("4I8", "Da li je institucija brižljivo proučila, potvrdila usaglašenost...", "Has the institution checked applicable national, regional, institutional, contractual, and platform-specific rules?", 'expert'),
          q("4I9", "Da li se, pre početka faza pripreme podataka...", "Has unresolved rights uncertainty been escalated before outputs are prepared for publication?", 'expert')
        ]
      },
      {
        id: "J",
        title: bi("Pregled privatnosti i zaštite podataka pre nastavka pripreme", "Privacy and Data Protection Review Before Publication Preparation Continues"),
        questions: [
          q("4J1", "Da li je institucija obratila pažnju na to i pregledala da li rezultati dobijeni skeniranjem...", "Has the institution reviewed whether OCR, transcripts, subtitles, metadata, tags, translations, or descriptions reveal personal data or information about identifiable persons?", 'beginner', "privacy"),
          q("4J2", "Da li institucija drži svest o tome da se kroz dodatne informacije...", "Has the institution considered whether enrichment makes personal information more searchable, linkable, reusable, or visible than before?", 'intermediate', "privacy"),
          q("4J3", "Da li institucija priznaje faktor mogućih slučajnih ali katastrofalnih propusta...", "Has the institution considered whether automated tools may infer, generate, expose, or incorrectly link personal information?", 'intermediate', "privacy"),
          q("4J4", "Da li institucija procenjuje ispravnost odluke da se podaci svedu u opšte okvire...", "Has the institution considered whether redaction, masking, access restriction, delayed publication, minimization, or exclusion is needed?", 'intermediate', "privacy"),
          q("4J5", "Da li je institucija temeljno ocenila to i posvetila brigu...", "Has the institution considered whether transcripts, subtitles, OCR, or metadata contain sensitive personal data or private information?", 'expert', "privacy"),
          q("4J6", "Da li institucija, pri radu na javnom davanju uvidu imena osoba...", "Has the institution considered whether the publication of names, images, voices, addresses, biographies, correspondence, or other identifiers may affect living persons or recently deceased persons?", 'expert', "privacy"),
          q("4J7", "Da li je institucija ispoštovala zakonske regulative i proverila ima li se dužnost prema državi i sistemu gde je primenljiva neka propisana i obavezna Data Protection Impact Assessment - DPIA...", "Has the institution considered whether a formal data protection impact assessment or equivalent local review is required?", 'expert', "privacy"),
          q("4J8", "Da li je institucija proverila da alati ili platforme trećih lica...", "Has the institution considered whether third-party tools or platforms process personal data and whether appropriate safeguards are in place?", 'expert', "privacy"),
          q("4J9", "Da li je institucija uporedila plan sa nacionalnim, tj. regionalnim zakonskim merama...", "Has the institution checked applicable data protection, privacy, archival, confidentiality, image rights, personality rights, or related rules in the relevant jurisdiction?", 'expert', "privacy"),
          q("4J10", "Da li je ostavljen deo pravne nesigurnosti privatnosti...", "Has unresolved privacy uncertainty been escalated before publication preparation continues?", 'expert', "privacy")
        ]
      },
      {
        id: "K",
        title: bi("Kulturna osetljivost, reprezentacija i kontekstualni pregled", "Cultural Sensitivity, Representation and Contextual Review"),
        questions: [
          q("4K1", "Da li je institucija proverila hoće li uređene i prilagođene datoteke...", "Has the institution reviewed whether prepared files, metadata, descriptions, OCR, transcripts, subtitles, translations, tags, summaries, or AI-generated outputs may affect cultural meaning or representation?", 'beginner'),
          q("4K2", "Da li je institucija ispitivala uvođenje (ubacivanje) pojmova dobijenih kroz proces obogaćivanja...", "Has the institution checked whether enrichment introduces terminology that is inaccurate, insensitive, discriminatory, colonial, offensive, reductive, or culturally inappropriate?", 'intermediate'),
          q("4K3", "Da li je institucija vodila računa da softver, odnosno automatski tehnološki uređaj...", "Has the institution considered whether automated tools may misread names, languages, dialects, places, communities, symbols, religious references, historical context, or contested meanings?", 'intermediate'),
          q("4K4", "Da li je institucija preispitivala mišljenje da nekim materijalima hitno i nepovratno nije zatrebao i savet dobijen radom kustoskog eksperta...", "Has the institution considered whether additional curatorial, community, expert, or advisory review is needed?", 'intermediate'),
          q("4K5", "Da li je institucija shvatila obavezu u kojoj je za materijal neophodno formirati i upise poput napomene o poreklu...", "Has the institution considered whether contextual notes, sensitivity statements, content warnings, provenance notes, interpretive notes, or usage guidance should accompany publication?", 'expert'),
          q("4K6", "Da li je institucija razmotrila potrebu da se određeni ishodi radova limitiraju za uvid javnosti...", "Has the institution considered whether some outputs should be restricted, mediated, delayed, revised, or excluded from publication?", 'expert'),
          q("4K7", "Da li je institucija podrobno i sa namerom pokušala posvetiti više misli o opciji gde dodavanje novih i dodatnih konotacija može postaviti jedan model pogleda na istoriju mnogo jačim...", "Has the institution considered whether enrichment may unintentionally privilege one perspective, erase uncertainty, simplify contested history, or obscure institutional responsibility?", 'expert'),
          q("4K8", "Da li je institucija sačekala sa razmišljanjima po kom korisnici treba ili zaslužuju da precizno uspostavljeni narativ...", "Has the institution considered whether users should be told when descriptions are historical, institutionally supplied, community supplied, machine-generated, corrected, or contested?", 'expert')
        ]
      },
      {
        id: "L",
        title: bi("Pristupačnost i inkluzivna upotreba", "Accessibility and Inclusive Use"),
        questions: [
          q("4L1", "Da li je institucija razmotrila potrebe za pristupačnošću ciljnih korisnika?", "Has the institution considered accessibility needs for intended users?", 'beginner'),
          q("4L2", "Da li su potrebne tekstualne alternative, zatvoreni titlovi, podnaslovi, transkripti, čitljivi metapodaci, formati sa pristupom, jasni opisi ili pomoćna sredstva za navigaciju?", "Are text alternatives, captions, subtitles, transcripts, readable metadata, accessible formats, clear descriptions, or navigation aids needed?", 'intermediate'),
          q("4L3", "Da li su audio i video materijali propraćeni odgovarajućim transkriptima, zatvorenim titlovima ili podnaslovima gde je to izvodljivo i relevantno?", "Are audio and video materials accompanied by appropriate transcripts, captions, or subtitles where feasible and relevant?", 'intermediate'),
          q("4L4", "Da li su slike, predmeti ili vizuelni materijali propraćeni značajnim opisima ili alternativnim tekstom tamo gde je to odgovarajuće?", "Are images, objects, or visual materials accompanied by meaningful descriptions or alternative text where appropriate?", 'intermediate'),
          q("4L5", "Da li su datoteke i metapodaci pripremljeni na način koji podržava čitače ekrana, pretragu, višejezični pristup i korisničko razumevanje?", "Are files and metadata prepared in a way that supports screen readers, search, multilingual access, and user understanding?", 'expert'),
          q("4L6", "Da li je institucija razmotrila mogućnost da jezik, terminologija, izgled, format datoteke, kompatibilnost platforme ili model pristupa mogu isključiti neke korisnike?", "Has the institution considered whether language, terminology, layout, file format, platform compatibility, or access model may exclude some users?", 'expert'),
          q("4L7", "Da li je institucija razmotrila da li se primenjuju zahtevi za pristupačnost u skladu sa važećim lokalnim, nacionalnim, institucionalnim ili pravilima platforme?", "Has the institution considered whether accessibility requirements under applicable local, national, institutional, or platform rules apply?", 'expert'),
          q("4L8", "Da li je institucija razmotrila da li su ograničenja pristupa, tamo gde su neophodna, jasno objašnjena i primenjena srazmerno?", "Has the institution considered whether access restrictions, where necessary, are explained clearly and applied proportionately?", 'expert')
        ]
      },
      {
        id: "M",
        title: bi("Pregled kvaliteta izlaza za obogaćivanje", "Quality Review of Enrichment Outputs"),
        questions: [
          q("4M1", "Da li je institucija definisala kriterijume za pregled kvaliteta OCR-a, transkripata, podnaslova, prevoda, metapodataka, opisa, oznaka (tagova), sažetaka, kontekstualnih beleški i izlaza generisanih pomoću veštačke inteligencije?", "Has the institution defined quality review criteria for OCR, transcripts, subtitles, translations, metadata, descriptions, tags, summaries, contextual notes, and AI-generated outputs?", 'beginner'),
          q("4M2", "Da li je institucija proverila odgovarajući uzorak ili pun skup izlaza, u zavisnosti od rizika i razmere projekta?", "Has the institution checked a suitable sample or full set of outputs, depending on risk and project scale?", 'intermediate'),
          q("4M3", "Da li je institucija proverila da li su greške izolovane ili sistemske prirode?", "Has the institution checked whether errors are isolated or systematic?", 'intermediate'),
          q("4M4", "Da li je institucija identifikovala izlaze koje treba korigovati, isključiti, ponovo obraditi, podvrgnuti pregledu specijaliste ili dodati im dodatni kontekst?", "Has the institution identified outputs that require correction, exclusion, reprocessing, specialist review, or additional context?", 'intermediate'),
          q("4M5", "Da li je institucija razmotrila da li se standardi kvaliteta razlikuju zavisno od toga da li se izlazi koriste interno, da li se objavljuju, koriste u pretrazi, dele sa agregatorima ili se korisnici oslanjaju na njih?", "Has the institution considered whether quality standards differ depending on whether outputs are used internally, published, used for search, shared with aggregators, or relied upon by users?", 'expert'),
          q("4M6", "Da li je institucija razmotrila da li izlaze niske pouzdanosti treba označiti kao takve ili povući iz objave?", "Has the institution considered whether low-confidence outputs should be labelled as such or withheld from publication?", 'expert'),
          q("4M7", "Da li je institucija dokumentovala poznata ograničenja i dozvoljene pragove greške, tamo gde je to primereno?", "Has the institution documented known limitations and acceptable error thresholds where relevant?", 'expert'),
          q("4M8", "Da li je institucija ažurirala registar rizika ako problemi s kvalitetom mogu uticati na korisnike, autorska prava, privatnost, reprezentaciju, pristupačnost ili poverenje u instituciju?", "Has the institution updated the risk register if quality issues may affect users, rights, privacy, representation, accessibility, or institutional trust?", 'expert')
        ]
      },
      {
        id: "N",
        title: bi("Kontrola prodavca, platforme ili alata tokom pripreme i obogaćivanja", "Vendor, Platform or Tool Control During Preparation and Enrichment"),
        questions: [
          q("4N1", "Da li su u proces pripreme ili obogaćivanja uključeni bilo koji dobavljači, platforme, servisi u oblaku, repozitorijumi, AI alati, alati za transkripciju, OCR alati, servisi za prevođenje, servisi za metapodatke ili spoljni konsultanti?", "Are any vendors, platforms, cloud services, repositories, AI tools, transcription tools, OCR tools, translation services, metadata services, or external consultants involved in preparation or enrichment?", 'beginner', "vendor"),
          q("4N2", "Da li je jasno šta je kojoj trećoj strani dozvoljeno da uradi sa datotekama, metapodacima, transkriptima, slikama, audio i video materijalima, ili drugim izvorima?", "Is it clear what each third party is allowed to do with the files, metadata, transcripts, images, audio, video, or other materials?", 'intermediate', "vendor"),
          q("4N3", "Da li je institucija proverila da li treće strane mogu da skladište, kopiraju, ponovo koriste, uče iz, objavljuju, dele ili zadrže materijale ili rezultate projekta?", "Has the institution checked whether third parties may store, copy, reuse, train on, publish, share, or retain project materials or outputs?", 'intermediate', "vendor"),
          q("4N4", "Da li su obaveze u pogledu poverljivosti, zaštite podataka, intelektualne svojine, bezbednosti, brisanja, pristupa, prenosivosti i sprovođenja revizije definisane, tamo gde je to primereno?", "Are confidentiality, data protection, intellectual property, security, deletion, access, portability, and audit obligations defined where relevant?", 'intermediate', "vendor"),
          q("4N5", "Da li izlazi alata podlažu pregledu od strane institucije pre prihvatanja ili objavljivanja?", "Are tool outputs subject to institutional review before acceptance or publication?", 'expert', "vendor"),
          q("4N6", "Da li su izlazi kreirani od strane dobavljača (vendor outputs) isporučeni u dogovorenim formatima i sa dovoljnom pratećom dokumentacijom?", "Are vendor-created outputs delivered in agreed formats and with sufficient documentation?", 'expert', "vendor"),
          q("4N7", "Da li postoji proces za ispravku, odbijanje, ponovnu obradu ili dokumentovanje izlaza dobavljača koji ne ispunjavaju zahteve?", "Is there a process for correcting, rejecting, reprocessing, or documenting vendor outputs that do not meet requirements?", 'expert', "vendor"),
          q("4N8", "Da li je institucija zadržala dovoljnu unutrašnju kontrolu kako bi mogla da objasni i garantuje za finalne izlaze?", "Has the institution retained enough internal control to explain and stand behind the final outputs?", 'expert', "vendor")
        ]
      },
      {
        id: "O",
        title: bi("Spremnost pripremljenih materijala za objavljivanje", "Publication Readiness of Prepared Materials"),
        questions: [
          q("4O1", "Da li su datoteke za objavljivanje potpune, pravilno imenovane i ispravno povezane s master fajlovima, radnim kopijama, metapodacima, zapisima o pravima (rights records) i uslovima za pristup?", "Are publication files complete, correctly named, and linked to the correct master files, working copies, metadata, rights records, and access conditions?", 'beginner'),
          q("4O2", "Da li su metapodaci, OCR zapisi, transkripti, titlovi (subtitles), prevodi, opisi, oznake i beleške o kontekstu spremni za pregled od strane tima zaduženog za objavljivanje ili dostupnost materijalima?", "Are metadata, OCR, transcripts, subtitles, translations, descriptions, tags, and contextual notes ready for review by the publication or access team?", 'intermediate'),
          q("4O3", "Da li su obaveštenja o autorskim i drugim pravima (rights statements), licence, restrikcije i uslovi pristupa spremni za obaveznu primenu na delima?", "Are rights statements, licences, restrictions, or access conditions ready to be applied?", 'intermediate'),
          q("4O4", "Da li su pitanja privatnosti, osetljivosti i zaštite podataka rešena pre odobrenja za objavljivanje?", "Are privacy, sensitivity, contextual, or access restrictions clearly flagged?", 'intermediate'),
          q("4O5", "Da li su opcije koje pomažu za poboljšanje pristupa materijalima kreirane ili bar definisane planom sa rokovima obavezujućih akcija?", "Are accessibility outputs ready or scheduled for completion?", 'expert'),
          q("4O6", "Da li su poznata ograničenja ili neizvesnosti zabeleženi pre objavljivanja?", "Are known limitations documented in a way that can be communicated to users where necessary?", 'expert'),
          q("4O7", "Da li su materijali ili metapodaci koji nisu odobreni za objavljivanje jasno identifikovani i odvojeni?", "Are materials that should not be published clearly separated from materials that may proceed?", 'expert'),
          q("4O8", "Da li su svaka neobrađena sporna pitanja dobila ime osobe za razrešavanje problema pod kojim delom upravljanja projektnog tima to spada?", "Are unresolved issues assigned to responsible persons?", 'expert'),
          q("4O9", "Da li je matična uprava popunila svesku sa podacima od značaja za sigurnost na takav način da ta obrada bude obeležena kroz plan procenjenih rizika?", "Has the institution updated the risk and mitigation register?", 'expert'),
          q("4O10", "Da li je institucija potvrdila da su pripremljeni materijali spremni za objavljivanje?", "Is there a clear recommendation on whether the project may proceed to online publication, proceed with conditions, pause, escalate, or redesign?", 'expert')
        ]
      }
    ]
  },
  {
    id: 5,
    code: bi("Faza 5", "Phase 5"),
    title: bi("Objavljivanje, pristup i ponovna upotreba", "Online Publication, Access and Reuse"),
    description: bi(
      "Kanali objavljivanja, licence, pravni i etički okvir za javnu upotrebu.",
      "Publication channels, licences, and legal/ethical framework for public use."
    ),
    sections: [
      {
        id: "A",
        title: bi("Svrha objavljivanja i model pristupa", "Publication Purpose and Access Model"),
        questions: [
          q("5A1", "Da li je svrha onlajn objavljivanja jasno navedena?", "Is the purpose of online publication clearly stated?", 'beginner'),
          q("5A2", "Da li je objava povezana sa misijom institucije, njenom javnom ulogom, strategijom očuvanja, edukativnom funkcijom, podrškom istraživanjima, angažovanjem zajednice, politikom ponovne upotrebe ili ciljevima digitalne transformacije?", "Is publication connected to the institution’s mission, public access role, preservation strategy, educational purpose, research support, community engagement, reuse policy, or digital transformation goals?", 'intermediate'),
          q("5A3", "Da li je izričito naglašeno hoće li se dozvoliti pristup široj javnosti, stručnjacima istraživačima, određenim organizovanim kolektivima (zajednicama), licima pod upravom institucije, udruženim ustanovama, specifičnoj bazi prijavljenih pretraživača, ili u strogim (zatvorenim) korisničkim okruženjima?", "Is it clear whether the materials will be made available to the general public, researchers, educators, specific communities, internal users, partner institutions, registered users, or restricted user groups?", 'intermediate'),
          q("5A4", "Da li je jasno da li je publikacija namenjena za pregledanje, istraživanje, ponovnu upotrebu, preuzimanje, obrazovanje, izložbu, agregaciju, pretragu, mašinski pristup ili drugi oblik upotrebe?", "Is it clear whether the publication is intended for viewing, research, reuse, download, educational use, exhibition, aggregation, search, machine access, or another form of use?", 'intermediate'),
          q("5A5", "Da li je institucija prepoznala da li su pod određenim materijalima neophodni i određeni novi obrasci davanja dostupnosti informacijama?", "Has the institution considered whether different materials require different access levels?", 'expert'),
          q("5A6", "Da li je institucija razmotrila da li se uslovi pristupa moraju prilagoditi različitim grupama korisnika ili uslovima licenciranja?", "Has the institution considered whether some materials should remain internal, restricted, mediated, delayed, or excluded from publication?", 'expert'),
          q("5A7", "Da li je institucija razmotrila da li objavljivanje može povećati vidljivost ili upotrebu nedovoljno predstavljenih kolekcija?", "Has the institution considered whether publication may change the visibility, meaning, use, or social impact of the materials?", 'expert'),
          q("5A8", "Da li je institucija razmotrila da li objavljivanje može stvoriti rizike od pogrešnog tumačenja, zloupotrebe ili nenamernih posledica?", "Has the institution considered whether online publication may create risks of misuse, misinterpretation, decontextualization, commercial exploitation, unwanted exposure, or harm to affected persons or communities?", 'expert'),
          q("5A9", "Da li je institucija ostavila zapise čvrstih rezimea po kojoj nameri stavlja podatke online dostupnim svima?", "Has the institution recorded the reasons for making the materials available online?", 'expert')
        ]
      },
      {
        id: "B",
        title: bi("Potrebe korisnika i dizajn javnog pristupa", "User Needs and Public Access Design"),
        questions: [
          q("5B1", "Da li je institucija ustanovila ko će, po svemu sudeći, vršiti interakciju sa materijalima dostupnim preko digitalnih mreža?", "Has the institution identified the expected users of the online materials?", 'beginner'),
          q("5B2", "Da li je institucija razmotrila kako će korisnici pretraživati, pregledati, tumačiti, preuzimati, citirati, ponovo koristiti ili deliti materijale?", "Has the institution considered how users will search, browse, interpret, download, cite, reuse, or share the materials?", 'intermediate'),
          q("5B3", "Da li je institucija uzela u obzir potrebe različitih korisničkih grupa (npr. istraživača, edukatora, šire javnosti, zajednica)?", "Has the institution considered the needs of both existing users and potential non-users?", 'intermediate'),
          q("5B4", "Da li se došlo do rešenja u okviru institucije kada su u pitanju postavke unutar klijentskog sistema po pitanjima potreba drugih govornih područja...", "Has the institution considered whether users need different languages, search options, filters, metadata fields, contextual notes, download options, accessibility features, or guidance?", 'intermediate'),
          q("5B5", "Da li institucija procenjuje rizik da će bez pratećih informativnih detalja doći do nepravilnih sagledavanja značenja istaknutih materijala kod publike kojoj on stiže do uviđaja?", "Has the institution considered whether users may misunderstand the materials without additional context?", 'expert'),
          q("5B6", "Da li institucija procenjuje mogućnost i činjenice u domenu opasnosti da korisnik, videvši upise prepoznavanja sadržaja kroz automatski mašinski alat ili po nekom od predloženih rezultata analize preko alata, te stvari sa punim odobrenjem poistovećuje kao mišljenje na koje stavlja potpis dotična administracija same platforme?", "Has the institution considered whether users may assume that metadata, descriptions, classifications, tags, translations, or AI-generated outputs are definitive institutional statements?", 'expert'),
          q("5B7", "Da li je institucija razmotrila kako će korisnici dobiti informacije o pravima, uslovima upotrebe i davanju zasluga (citiranju)?", "Has the institution considered whether the platform makes it clear what the material is, where it comes from, what its limitations are, and how it may be used?", 'expert'),
          q("5B8", "Da li je institucija potvrdila iz kog oblika ponašanja će slediti upit kako javnost percipira podatke od kojih oni sastavljaju program...", "Has the institution considered whether user testing, feedback sessions, expert review, or community consultation is needed before or after publication?", 'expert'),
          q("5B9", "Da li je institucija ispravno razumela situaciju gde postavka kojom dozvoljava pristup izuzetnim sadržajima može da formira nenamerno zapostavljanje odnosa naspram ljudi ne vičnih složenim sistemima korišćenja sa uređajima...", "Has the institution considered whether access design could unintentionally exclude users with limited technical access, language barriers, disabilities, or lower digital literacy?", 'expert')
        ]
      },
      {
        id: "C",
        title: bi("Izbor platforme i konfiguracija", "Platform Selection and Configuration"),
        questions: [
          q("5C1", "Da li je institucija odlučila i prepoznala koja je tačno internet adresa preko koje će objaviti pripremljene sadržaje korisnicima?", "Has the institution identified where the materials will be published?", 'beginner'),
          q("5C2", "Da li izabrana platforma podržava potrebne formate fajlova, metapodatke, pretragu i funkcije pristupa?", "Is the platform appropriate for the type of materials involved, such as images, text, audio, video, 3D objects, metadata, transcripts, subtitles, or mixed collections?", 'intermediate'),
          q("5C3", "Da li programska podloga bez prepreka nosi pun potencijal pristupa koji ustanova priželjkuje kroz funkcionisanje bezbednog čitanja...", "Does the platform support the intended access model, including public access, restricted access, registered access, download, streaming, viewing, search, browsing, or aggregation?", 'intermediate'),
          q("5C4", "Da li platforma omogućava primenu odgovarajućih kontrola pristupa, licenciranja i oznaka prava?", "Does the platform support the required rights statements, licences, access restrictions, attribution information, and reuse conditions?", 'intermediate'),
          q("5C5", "Da li funkcionisanje platforme ide u korak sa onim čim raspolažu podaci iz oblasti normativnih šablona kojima se definišu specifikacije podataka...", "Does the platform support the metadata fields and standards needed for discovery, interoperability, rights management, preservation, and context?", 'expert'),
          q("5C6", "Da li platforma podržava zahteve za pristupačnost i inkluzivni dizajn?", "Does the platform support accessibility requirements and inclusive design?", 'expert'),
          q("5C7", "Da li model platforme prezentuje, odnosno formira konačne displej informacije po vidokrugu ljudi u interfejsu (korisničko okruženje)...", "Does the platform display materials and metadata in a way that is understandable and appropriate for users?", 'expert'),
          q("5C8", "Da li organizacija na sistemu (platformi) pušta administratore u programiranje i podešavanje specifičnih okruženja...", "Does the platform allow sufficient customization of contextual information, warnings, sensitivity notices, rights information, and institutional explanations?", 'expert'),
          q("5C9", "Da li podloga za korišćenje podržava onlajn kretanje u sistemu primenjujući rad pri smanjenim displejima mobilnih tehnologija pametnih telefona...", "Does the platform support mobile access or other access modes relevant to intended users?", 'expert'),
          q("5C10", "Da li na istoj toj adresi leže alati neophodni za pouzdano sačuvanje radnih kapaciteta materijala, vraćanje izbrisanih verzija fajlova...", "Does the platform provide reliable storage, backup, recovery, security, data export, and portability options?", 'expert'),
          q("5C11", "Da li iza sistema deluje organizovan napor od onih što kreiraju platformu pa nude kontinuiranu, tehnički obrazovanu stručnu bazu za pitanja popravke istog...", "Does the platform provide adequate technical support, documentation, sustainability, and maintenance arrangements?", 'beginner'),
          q("5C12", "Da li aplikacija dozvoljava merenje broja i način poseta po opcijama dobijenim sa analitikom kroz podatke...", "Does the platform provide analytics or user engagement data, where appropriate and lawful?", 'intermediate'),
          q("5C13", "Da li je institucija razmotrila rizike zavisnosti od platforme treće strane?", "Has the institution considered the risks of dependency on a third-party platform?", 'intermediate'),
          q("5C14", "Da li su detaljna pregledanja o obaveštenjima pri obavezama rada (Terms of Service) potvrdila saglasnost trećeg lica i provajdera platformi sa ciljevima pod kojima je postavljeno postupanje poverenja...", "Has the institution checked whether the platform’s terms of service are compatible with the institution’s rights, privacy, data protection, confidentiality, procurement, public access, and reuse obligations?", 'intermediate')
        ]
      },
      {
        id: "D",
        title: bi("Prava, licenciranje i uslovi ponovne upotrebe", "Rights, Licensing and Reuse Conditions"),
        questions: [
          q("5D1", "Da li je nadležna osoba sprovela analizu statusa autorskih dozvola pod kojim stoje zbirke izabrane obimom, pre same dozvole objavljivanja rada?", "Has the rights status of each material or material category been checked before publication?", 'beginner'),
          q("5D2", "Da li je institucija potvrdila da ima pravo da objavi materijale na internetu?", "Has the institution confirmed whether it has the right to publish the materials online?", 'intermediate'),
          q("5D3", "Da li su ovlašćena radna i upravna mesta ustanovila da poseduju vlasništvo (pravo) po kom omogućuju tuđe zahvate preuzimanja iz digitalnog formata...", "Has the institution confirmed whether it has the right to allow download, reuse, modification, commercial use, educational use, research use, or machine reuse?", 'intermediate'),
          q("5D4", "Da li se priroda legalnog prenošenja prava bitno menja kad se ista stavlja u odnose kod izdvojenih fajlova, bilo onih izvornih visokokvalitetnih sačuvanih originala (master files), na pregled formatiranih dokumenata nižeg obima (access copies)...", "Has the institution checked whether rights differ between master files, access copies, images, audio, video, transcripts, subtitles, OCR, translations, metadata, descriptions, and other enrichment outputs?", 'intermediate'),
          q("5D5", "Da li ustanova navodi ispravan naziv dokumenta pod pravnim propisom (usaglašenu licencu na nivou propisane izjave o dozvoli na autorska i dodirna prava)...", "Has the institution identified the appropriate rights statement, licence, or access condition for each material or category?", 'expert'),
          q("5D6", "Kada se govori o odlukama primene otvorenog ugovora bez naplate...", "Where open licensing is considered, has the institution confirmed that open publication is legally possible and institutionally appropriate?", 'expert'),
          q("5D7", "Tamo gde objekti prepoznati projektom predstavljaju nacionalna blaga (Public Domain)...", "Where materials are in the public domain, has the institution considered how to communicate this clearly and avoid creating unnecessary access restrictions?", 'expert'),
          q("5D8", "Tamo gde su nosioci autorskog prava jasno pod komandom onog ko izlaže dokumente...", "Where rights are owned or controlled by the institution, has the institution considered whether an open licence is appropriate and whether attribution or other conditions should apply?", 'expert'),
          q("5D9", "Tamo gde iz bilo kojih pojava nismo dobili čista obaveštenja čije delo sa ponuđenih digitalnih fajlova...", "Where rights are unclear, disputed, unknown, restricted, or dependent on third-party permission, has the institution avoided publishing the material without proper review?", 'expert'),
          q("5D10", "Da li su nadgledane informacije o potencijalnim uslovima nametnutim od lica čijim poklonom smo nasledili kolekciju za bazu...", "Has the institution checked whether donor agreements, acquisition terms, archival restrictions, contracts, cultural protocols, moral rights, image rights, personality rights, or other restrictions affect publication or reuse?", 'expert'),
          q("5D12", "Da li izrazi napomena prema uslovima primene radova i propisanog obima licenciranih fajlova stoje izraženi, sa jasnom vidljivosti...", "Are rights statements and reuse conditions visible and understandable to users?", 'intermediate'),
          q("5D13", "Da li podaci po kojima stoji zaveštanje sa dozvolom primene dela pod licencom leže na istom delu u bazi unutrašnjeg obima metapodataka...", "Is rights information included in metadata where appropriate?", 'intermediate')
        ]
      },
      {
        id: "E",
        title: bi("Privatnost, zaštita podataka i prepoznatljive osobe", "Privacy, Data Protection and Identifiable Persons"),
        questions: [
          q("5E1", "Da li je obavljeno ispitivanje gde su objavljeni vizuelni fajlovi, priloženi snimci reči na jeziku kroz tekstove alata...", "Has the institution reviewed whether published materials, metadata, OCR, transcripts, subtitles, descriptions, tags, translations, or contextual notes contain personal data or information relating to identifiable persons?", 'beginner', "privacy"),
          q("5E2", "Da li je institucija ispitala da preneseno u javnost obavezno diže i nivo do te mere kako takvi obznanjeni podaci kreiraju predmete po onlajn mrežama...", "Has the institution considered whether publication makes personal information more searchable, linkable, reusable, downloadable, or visible than before?", 'intermediate', "privacy"),
          q("5E3", "Da li je procenjeno kako teška uloga prikazanog lica ostavlja direktni ožiljak ne samom onom subjektu pod istragom...", "Has the institution considered whether publication may affect living persons, recently deceased persons, families, communities, or vulnerable groups?", 'intermediate', "privacy"),
          q("5E4", "Da li su vršena propitivanja iz razloga formiranja dokaza o opciji posedovanja materijala slika lica sa prebivališnim nazivima...", "Has the institution considered whether materials include images, voices, names, addresses, correspondence, biographical details, administrative records, sensitive data, or private information?", 'intermediate', "privacy"),
          q("5E5", "Da li je ustanova izvršila preglede pri kojima prepoznaje trenutak uslovne radnje pokrivanja delova fotografije...", "Has the institution checked whether redaction, masking, access restriction, delayed publication, minimization, or exclusion is needed?", 'expert', "privacy"),
          q("5E6", "Da li su iznete činjenice o pregledu od obogaćenih informacija dobijenih alatima za kreaciju metapodataka...", "Has the institution checked whether metadata or enrichment outputs reveal information that is more sensitive than the original file itself?", 'expert', "privacy"),
          q("5E7", "Da li je prodiskutovano kako se unutrašnja organizacija platformi po alatima upita...", "Has the institution considered whether user search functions, indexing, download options, APIs, or search engine exposure increase privacy risks?", 'expert', "privacy"),
          q("5E8", "Da li su sagledane sve odrednice pravila ustanovljene pravnim izvodima države... DPIA procena...", "Has the institution considered whether a formal data protection impact assessment or equivalent local assessment is required under applicable rules?", 'expert', "privacy"),
          q("5E9", "Da li stoje proverena uporišta pravosudnog domena unutar arhivskih zabeleški koje država primenjuje...", "Has the institution checked applicable data protection, privacy, archival, confidentiality, image rights, personality rights, or related legal frameworks?", 'expert', "privacy"),
          q("5E10", "Da li je ustanova prikupila listu zabeleški pod kojima postavlja opcije sprečavanja incidenata...", "Has the institution documented safeguards and unresolved privacy issues before publication?", 'expert', "privacy")
        ]
      },
      {
        id: "F",
        title: bi("Kulturna osetljivost, kontekst i reprezentacija", "Cultural Sensitivity, Context and Representation"),
        questions: [
          q("5F1", "Da li su uzete revizije nad pitanjem porekla i odnosa prikupljenih materijala vezanih na sporno kulturno blago...", "Has the institution reviewed whether the materials are sensitive, contested, sacred, traumatic, colonial, conflict-related, minority-related, indigenous, religious, political, community-specific, or connected to historically marginalized groups?", 'beginner'),
          q("5F2", "Da li je ocenjena pojava pod čijim posredstvom prebacivanja ovakvog izvora sa ograničenog pregleda kod ustanove do prekomernih javnih uvida leži rizik...", "Has the institution checked whether online access may increase risks of misuse, stereotyping, harassment, commercial exploitation, decontextualization, or harm?", 'intermediate'),
          q("5F3", "Da li je izvršeno duboko pregledanje u kom naslovi kolekcija sa propratnim ispisanim obeležjima unutar rečnika kataloga...", "Has the institution reviewed whether titles, descriptions, keywords, classifications, metadata, translations, tags, or AI-generated outputs include outdated, offensive, discriminatory, inaccurate, colonial, harmful, or incomplete language?", 'intermediate'),
          q("5F4", "Da li se, zbog obima i razumevanja grešaka istorije, analizirao sistem gde onaj termin čija težina na neadekvatnost iz opisa zapravo ostaje prisutan uz popravku objašnjavanjem zašto je tako sačuvan...", "Has the institution considered whether problematic historical terminology should be retained, corrected, supplemented, or contextualized?", 'intermediate'),
          q("5F5", "Da li je obratila se misao potrebi da se kroz izlazni displej korisniku platforme upišu napomene kojim opominje čitaoce...", "Has the institution considered whether contextual notes, sensitivity statements, content warnings, provenance notes, community notes, interpretive guidance, or usage explanations are needed?", 'expert'),
          q("5F6", "Da li su izražene namere za učešće stručnih akademskih profesora pre same aplikacije rada u mreže...", "Has the institution considered whether affected communities, source communities, curators, subject experts, researchers, educators, or advisory bodies should review the publication approach?", 'expert'),
          q("5F7", "Da li su se formulisala određena uslovljavajuća stanovišta po kojima poseta neće teći u otvorenoj zoni pregleda...", "Has the institution considered whether access should be restricted, mediated, delayed, or tiered for some materials?", 'expert'),
          q("5F8", "Da li ustanova sagledava pretnju i donosi proračun pod obimom deljenja istorijske istine u jednoj vrsti uskog ugla sagledavanja...", "Has the institution considered whether publication may privilege one interpretation, erase uncertainty, or present contested material as neutral or settled?", 'expert'),
          q("5F9", "Da li je obezbeđeno posmatranje pod kojim upisana obeležja unutar informacija korisnicima nude objašnjenje koja od onih ispravljenih reči stoji priložena...", "Has the institution considered whether users should be told when descriptions are historical, institutionally supplied, community supplied, machine-generated, corrected, uncertain, or contested?", 'expert'),
          q("5F10", "Da li je institucija dokumentovala kako su rešena pitanja reprezentacije i konteksta?", "Has the institution documented how representation and context issues were addressed?", 'expert')
        ]
      },
      {
        id: "G",
        title: bi("Transparentnost i informacije okrenute korisniku", "Transparency and User-Facing Information"),
        questions: [
          q("5G1", "Da li platforma jasno identifikuje instituciju odgovornu za objavljivanje?", "Does the platform clearly identify the institution responsible for the publication?", 'beginner'),
          q("5G2", "Da li platforma objašnjava šta su materijali i odakle dolaze?", "Does the platform explain what the materials are and where they come from?", 'intermediate'),
          q("5G3", "Da li platforma obezbeđuje informacije o izvoru, poreklu, datumu, autoru, kolekciji i kontekstu tamo gde su dostupne?", "Does the platform provide source, provenance, date, creator, collection, and contextual information where available?", 'intermediate'),
          q("5G4", "Da li platforma jasno razlikuje originalni sadržaj, digitalizovane fajlove, uređene fajlove, kopije za pristup, metapodatke, transkripte, prevode i mašinski generisane izlaze, gde je to relevantno?", "Does the platform clearly distinguish between original content, digitized files, edited files, access copies, metadata, transcripts, translations, and machine-generated outputs where relevant?", 'intermediate'),
          q("5G5", "Da li platforma naznačava gde su informacije nesigurne, nepotpune, automatski generisane, ručno korigovane ili su trenutno pod revizijom?", "Does the platform indicate where information is uncertain, incomplete, automatically generated, manually corrected, or under review?", 'expert'),
          q("5G6", "Da li platforma jasno prikazuje izjave o pravima, licence, uslove pristupa, zahteve za atribuciju i ograničenja ponovne upotrebe?", "Does the platform clearly display rights statements, licences, access conditions, attribution requirements, and reuse restrictions?", 'expert'),
          q("5G7", "Da li platforma objašnjava bilo kakva ograničenja pristupa ili nedostupne materijale na jasan i poštovanja vredan način?", "Does the platform explain any access restrictions or unavailable materials in a clear and respectful way?", 'expert'),
          q("5G8", "Da li platforma pruža kontakt informacije ili mehanizam za pitanja, ispravke, zabrinutosti, zahteve za uklanjanje (takedown) ili potraživanja prava?", "Does the platform provide contact information or a mechanism for questions, corrections, concerns, takedown requests, or rights claims?", 'expert'),
          q("5G9", "Da li institucija pruža smernice za odgovorno korišćenje, citiranje, ponovnu upotrebu i tumačenje tamo gde je to prikladno?", "Does the institution provide guidance on responsible use, citation, reuse, and interpretation where appropriate?", 'expert'),
        ]
      },
      {
        id: "H",
        title: bi("Pristupačnost i inkluzivni dizajn", "Accessibility and Inclusive Design"),
        questions: [
          q("5H1", "Da li je institucija pregledala pristupačnost platforme i objavljenih materijala?", "Has the institution reviewed the accessibility of the platform and published materials?", 'beginner'),
          q("5H2", "Da li su materijali dostupni korisnicima sa invaliditetom u meri u kojoj je to razumno moguće?", "Are materials accessible to users with disabilities to the extent reasonably possible?", 'intermediate'),
          q("5H3", "Da li su slike podržane značajnim opisima ili alternativnim tekstom tamo gde je to odgovarajuće?", "Are images supported by meaningful descriptions or alternative text where appropriate?", 'intermediate'),
          q("5H4", "Da li su audio i video materijali podržani transkriptima, zatvorenim titlovima, podnaslovima ili drugim merama pristupačnosti gde je to izvodljivo i relevantno?", "Are audio and video materials supported by transcripts, captions, subtitles, or other accessibility measures where feasible and relevant?", 'intermediate'),
          q("5H5", "Da li su tekst, metapodaci, elementi interfejsa, navigacija, pretraga, filteri i opcije preuzimanja (download) upotrebljivi i razumljivi?", "Are text, metadata, interface elements, navigation, search, filters, and download options usable and understandable?", 'expert'),
          q("5H6", "Da li su dokumenti i datoteke obezbeđeni u pristupačnim formatima tamo gde je to prikladno?", "Are documents and files provided in accessible formats where appropriate?", 'expert'),
          q("5H7", "Da li je institucija razmotrila jezičku pristupačnost, višejezične metapodatke, uputstva na jednostavnom (razumljivom) jeziku i čitljivost?", "Has the institution considered language accessibility, multilingual metadata, plain-language guidance, and readability?", 'expert'),
          q("5H8", "Da li je institucija razmotrila da li postoje prepreke pristupu za korisnike sa ograničenom tehnologijom, malim propusnim opsegom (slabim internetom), isključivo mobilnim pristupom ili nižom digitalnom pismenošću?", "Has the institution considered whether access barriers exist for users with limited technology, low bandwidth, mobile-only access, or lower digital literacy?", 'expert'),
          q("5H9", "Da li je institucija proverila primenjiva pravila pristupačnosti, standarde, zahteve platforme ili institucionalne politike u relevantnoj nadležnosti?", "Has the institution checked applicable accessibility rules, standards, platform requirements, or institutional policies in the relevant jurisdiction?", 'expert'),
          q("5H10", "Da li je institucija dokumentovala bilo kakva ograničenja u vezi sa pristupačnošću i planirana poboljšanja?", "Has the institution documented any accessibility limitations and planned improvements?", 'expert')
        ]
      },
      {
        id: "I",
        title: bi("Objavljivanje metapodataka i interoperabilnost", "Metadata Publication and Interoperability"),
        questions: [
          q("5I1", "Da li su zapisi metapodataka dovoljno potpuni da bi korisnici mogli da pronađu, razumeju, citiraju i koriste materijale?", "Are metadata records complete enough for users to find, understand, cite, and use the materials?", 'beginner'),
          q("5I2", "Da li su zapisi metapodataka povezani sa odgovarajućim digitalnim datotekama i originalnim materijalima?", "Are metadata records linked to the correct digital files and original materials?", 'intermediate'),
          q("5I3", "Da li su informacije o pravima, pristupu, osetljivosti, poreklu i ograničenjima uključene u metapodatke, gde je to prikladno?", "Are rights, access, sensitivity, provenance, and limitation information included in metadata where appropriate?", 'intermediate'),
          q("5I4", "Da li su polja metapodataka dosledna kroz ceo projekat?", "Are metadata fields consistent across the project?", 'intermediate'),
          q("5I5", "Da li se koriste kontrolisani rečnici, normativni zapisi, identifikatori, standardi ili šeme tamo gde je to odgovarajuće?", "Are controlled vocabularies, authority files, identifiers, standards, or schemas used where appropriate?", 'expert'),
          q("5I6", "Da li je institucija razmotrila da li su metapodaci pogodni za agregatore, repozitorijume, API interfejse, pretraživače i sisteme za eksterno pretraživanje?", "Has the institution considered whether metadata is suitable for aggregators, repositories, APIs, search engines, and external discovery systems?", 'expert'),
          q("5I7", "Da li je institucija pregledala da li bi objavljivanje metapodataka moglo da izloži lične podatke, osetljive informacije, kulturno osetljive termine ili ograničene informacije?", "Has the institution reviewed whether metadata publication may expose personal data, sensitive information, culturally sensitive terms, or restricted information?", 'expert'),
          q("5I8", "Da li je institucija pregledala da li metapodaci mogu uticati na vidljivost, rangiranje, preporuke, tumačenje ili ponovnu upotrebu?", "Has the institution reviewed whether metadata may affect visibility, ranking, recommendation, interpretation, or reuse?", 'expert'),
          q("5I9", "Da li je institucija dokumentovala ograničenja metapodataka, nesigurnosti ili mašinski generisane elemente?", "Has the institution documented metadata limitations, uncertainty, or machine-generated elements?", 'expert'),
          q("5I10", "Da li se institucija osigurala da se metapodaci mogu izvesti, sačuvati, ažurirati i korigovati tokom vremena?", "Has the institution ensured that metadata can be exported, preserved, updated, and corrected over time?", 'expert')
        ]
      },
      {
        id: "J",
        title: bi("Pretraga, preporuka ili korisničke funkcije podržane veštačkom inteligencijom", "AI-Supported Search, Recommendation or User-Facing Functionality"),
        questions: [
          q("5J1", "Da li platforma za objavljivanje koristi AI podržane ili automatizovane funkcije za pretragu, preporuku, rangiranje, označavanje (tagging), prevođenje, opisivanje, sumiranje, prepoznavanje slika, prepoznavanje govora, klasterisanje, personalizaciju ili moderaciju sadržaja?", "Does the publication platform use AI-supported or automated search, recommendation, ranking, tagging, translation, description, summarization, image recognition, speech recognition, clustering, personalization, or content moderation?", 'beginner', "ai"),
          q("5J2", "Da li je jasno kako ove funkcije utiču na ono što korisnici vide, pronalaze ili razumeju?", "Is it clear how these functions affect what users see, find, or understand?", 'intermediate', "ai"),
          q("5J3", "Da li je institucija razmotrila da li bi funkcije podržane veštačkom inteligencijom mogle pojačati vidljivost nekih materijala, dok bi druge mogle sakriti?", "Has the institution considered whether AI-supported functions may amplify some materials and hide others?", 'intermediate', "ai"),
          q("5J4", "Da li je institucija razmotrila da li automatsko rangiranje, preporučivanje ili klasifikacija mogu uticati na kulturnu reprezentaciju, javnu interpretaciju ili institucionalni kredibilitet?", "Has the institution considered whether automated ranking, recommendation, or classification may affect cultural representation, public interpretation, or institutional credibility?", 'intermediate', "ai"),
          q("5J5", "Da li je institucija razmotrila da li bi opisi, oznake, sažeci, prevodi ili preporuke generisani veštačkom inteligencijom mogli da sadrže greške, pristrasnost, uvredljiv jezik, lažnu sigurnost ili obmanjujući kontekst?", "Has the institution considered whether AI-generated descriptions, tags, summaries, translations, or recommendations may contain errors, bias, offensive language, false certainty, or misleading context?", 'expert', "ai"),
          q("5J6", "Da li je institucija razmotrila da li bi korisnici trebalo da budu obavešteni da su određeni izlazi ili pristupne funkcije automatizovani ili podržani veštačkom inteligencijom?", "Has the institution considered whether users should be informed that some outputs or access functions are automated or AI-supported?", 'expert', "ai"),
          q("5J7", "Da li je institucija razmotrila da li su neophodni mehanizmi za ljudski pregled, korekciju, prevazilaženje automatizacije (override) ili procedure za podnošenje žalbi?", "Has the institution considered whether human review, correction, override, or appeal mechanisms are needed?", 'expert', "ai"),
          q("5J8", "Da li je institucija razmotrila da li AI funkcije obrađuju podatke o korisnicima, podatke o korišćenju, lične podatke ili podatke o ponašanju?", "Has the institution considered whether AI functions process user data, usage data, personal data, or behavioural data?", 'expert', "ai"),
          q("5J9", "Da li je institucija proverila da li se u odgovarajućoj nadležnosti primenjuju pravni, regulatorni zahtevi za nabavku, transparentnost, zaštitu podataka, pristupačnost ili javni sektor vezano za veštačku inteligenciju?", "Has the institution checked whether AI-related legal, procurement, transparency, data protection, accessibility, or public sector requirements apply in the relevant jurisdiction?", 'expert', "ai"),
          q("5J10", "Da li je institucija dokumentovala rizike vezane za veštačku inteligenciju, mere zaštite i ograničenja?", "Has the institution documented AI-related risks, safeguards, and limitations?", 'expert', "ai")
        ]
      },
      {
        id: "K",
        title: bi("Ponovna upotreba, preuzimanje, API i pristup trećih lica", "Reuse, Download, API and Third-Party Access"),
        questions: [
          q("5K1", "Da li je jasno da li korisnici smeju da preuzimaju (download) datoteke?", "Is it clear whether users may download files?", 'beginner'),
          q("5K2", "Da li je jasno da li korisnici mogu da ponovo koriste materijale u svrhe istraživanja, edukacije, objavljivanja, komercijalne upotrebe, kreativne ponovne upotrebe, mašinskog učenja, analize podataka ili za druge namene?", "Is it clear whether users may reuse materials for research, education, publication, commercial use, creative reuse, machine learning, data analysis, or other purposes?", 'intermediate'),
          q("5K3", "Da li je jasno da li metapodaci mogu biti prikupljani, izvezeni, ponovo korišćeni ili dostupni putem API interfejsa?", "Is it clear whether metadata may be harvested, exported, reused, or accessed through APIs?", 'intermediate'),
          q("5K4", "Da li je institucija razmotrila da li se uslovi ponovne upotrebe razlikuju za različite datoteke, metapodatke, transkripte, titlove, prevode, OCR tekstove, opise i druge rezultate obogaćivanja (enrichment outputs)?", "Has the institution considered whether reuse conditions differ for files, metadata, transcripts, subtitles, translations, OCR, descriptions, and other enrichment outputs?", 'intermediate'),
          q("5K5", "Da li je institucija razmotrila da li bi neki materijali trebalo da budu samo za pregled (view-only), niske rezolucije, sa vodenim žigom, ograničeni ili podložni posredovanom pristupu?", "Has the institution considered whether some materials should be view-only, low-resolution, watermarked, restricted, or subject to mediated access?", 'expert'),
          q("5K6", "Da li je institucija razmotrila da li bi otvoreni pristup (open access) mogao da omogući neželjena masovna preuzimanja, automatsko prikupljanje podataka (scraping), ponovnu upotrebu bez odgovarajućeg konteksta, komercijalno iskorišćavanje ili zloupotrebu osetljivih materijala?", "Has the institution considered whether open access could enable unwanted mass download, scraping, decontextualized reuse, commercial exploitation, or misuse of sensitive materials?", 'expert'),
          q("5K7", "Da li je institucija razmotrila da li bi mašinska ponovna upotreba, treniranje veštačke inteligencije (AI) ili kreiranje skupova podataka trebalo da budu dozvoljeni, ograničeni ili predmet posebnih uslova?", "Has the institution considered whether machine reuse, AI training, or dataset creation should be permitted, restricted, or subject to conditions?", 'expert'),
          q("5K8", "Da li su uslovi za ponovnu upotrebu vidljivi, tačni i lako razumljivi?", "Are reuse conditions visible, accurate, and understandable?", 'expert'),
          q("5K9", "Da li su podešavanja platforme usaglašena sa politikom ponovne upotrebe i evidencijom prava (rights records) u instituciji?", "Are platform settings aligned with the institution’s reuse policy and rights records?", 'expert'),
          q("5K10", "Da li je institucija razmotrila da li lokalni zakoni, institucionalni propisi, uslovi donatora, ugovorne obaveze ili kulturološka ograničenja utiču na mogućnosti ponovne upotrebe?", "Has the institution considered whether local legal, institutional, donor, contractual, or cultural restrictions affect reuse?", 'expert')
        ]
      },
      {
        id: "L",
        title: bi("Kontrola objavljivanja od strane dobavljača, repozitorijuma, agregatora ili trećih lica", "Vendor, Repository, Aggregator or Third-Party Publication Control"),
        questions: [
          q("5L1", "Da li će materijali biti objavljeni, hostovani, indeksirani, agregirani, obogaćeni ili prikazani putem platforme treće strane, dobavljača, repozitorijuma, usluge za pretraživanje ili agregatora?", "Will the materials be published, hosted, indexed, aggregated, enriched, or displayed through a third-party platform, vendor, repository, search service, or aggregator?", 'beginner', "vendor"),
          q("5L2", "Da li je jasno šta treća strana sme da uradi sa datotekama, metapodacima, korisničkim podacima, analitikom, obogaćenim izlazima i zapisima (logovima) pristupa?", "Is it clear what the third party may do with files, metadata, user data, analytics, enrichment outputs, and access logs?", 'intermediate', "vendor"),
          q("5L3", "Da li je institucija pregledala pravila treće strane u pogledu skladištenja, pravljenja rezervnih kopija (backup), brisanja, ponovne upotrebe, podlicenciranja, treniranja veštačke inteligencije, analitike, reklamiranja, praćenja korisnika, prenosivosti podataka i kontinuiteta pružanja usluge?", "Has the institution checked the third party’s terms on storage, backup, deletion, reuse, sublicensing, AI training, analytics, advertising, user tracking, data portability, and service continuity?", 'intermediate', "vendor"),
          q("5L4", "Da li je institucija proverila može li treća strana da modifikuje, obogaćuje, prevodi, preporučuje, rangira ili prikazuje materijale na načine koji menjaju njihovo značenje ili utiču na vidljivost?", "Has the institution checked whether the third party may modify, enrich, translate, recommend, rank, or display the materials in ways that affect meaning or visibility?", 'intermediate', "vendor"),
          q("5L5", "Da li je institucija proverila da li treća strana podržava primenu izjava o autorskim i drugim pravima (rights statements) koje koristi institucija, kao i restrikcije, procedure uklanjanja (takedown processes), potrebe za pristupačnošću i standarde metapodataka?", "Has the institution checked whether the third party supports the institution’s rights statements, restrictions, takedown processes, accessibility needs, and metadata requirements?", 'expert', "vendor"),
          q("5L6", "Da li je institucija utvrdila da li je neophodan formalni ugovor, sporazum o obradi podataka, ugovor o repozitorijumu, memorandum ili sličan pravni dogovor sa trećom stranom?", "Has the institution checked whether a contract, data processing agreement, repository agreement, memorandum, or other formal arrangement is needed?", 'expert', "vendor"),
          q("5L7", "Da li je institucija razmotrila šta će se desiti ako usluga treće strane pretrpi promene, ukine se, postane nedostupna, promeni uslove poslovanja ili onemogući pristup?", "Has the institution considered what happens if the third-party service changes, closes, becomes unavailable, changes terms, or removes access?", 'expert', "vendor"),
          q("5L8", "Da li je institucija zadržala kopije, metapodatke, zapise i dovoljnu dokumentaciju koja garantuje očuvanje pune institucionalne kontrole?", "Has the institution retained copies, metadata, records, and documentation sufficient to maintain institutional control?", 'expert', "vendor"),
          q("5L9", "Da li je institucija proverila primenjivost svih zahteva koji se odnose na postupke nabavki, zaštitu privatnih podataka, odredbe javnog sektora, arhivska pravila i kulturno nasleđe, kao i na ispunjenje ugovornih obaveza?", "Has the institution checked applicable procurement, data protection, public sector, archival, cultural heritage, and contract requirements?", 'expert', "vendor")
        ]
      },
      {
        id: "M",
        title: bi("Bezbednost, kontrola pristupa i operativna spremnost", "Security, Access Controls and Operational Readiness"),
        questions: [
          q("5M1", "Da li su dozvole za pristup pravilno konfigurisane pre objavljivanja?", "Are access permissions correctly configured before publication?", 'beginner'),
          q("5M2", "Da li su materijali sa ograničenim pristupom zaštićeni od slučajnog javnog obelodanjivanja?", "Are restricted materials protected from accidental public release?", 'intermediate'),
          q("5M3", "Da li su nacrti (drafts), radne kopije, master fajlovi, i materijali sa zabranom objavljivanja ispravno odvojeni od onih koji su predviđeni za pregled opšte publike na mreži?", "Are draft, working, master, restricted, unpublished, or internal files separated from public access files?", 'intermediate'),
          q("5M4", "Da li je institucija proverila da su korisnicima vidljivi samo odobreni fajlovi i metapodaci?", "Has the institution checked that only approved files and metadata are visible to users?", 'intermediate'),
          q("5M5", "Da li je institucija testirala linkove, prikaz fajlova, preuzimanja, striming, pretragu, filtere, prikaz metapodataka, izjave o pravima i ograničenja pristupa?", "Has the institution tested links, file display, downloads, streaming, search, filters, metadata display, rights statements, and access restrictions?", 'expert'),
          q("5M6", "Da li je ustanova proverila stoje li adekvatne blokade i obezbeđenja kojima se sprečava obrada (indeksiranje pretraživača poput Gugla - indexing) onih sadržaja osetljive ili restriktivne prirode?", "Has the institution checked whether sensitive or restricted materials are blocked from indexing by search engines where needed?", 'expert'),
          q("5M7", "Da li je institucija pregledala proceduru vođenja (upravljanja) nalogom za rad na web stranici i na sistemskim alatima, uspostavila stroga pravila za administrativne dozvole, mere osiguranja šifri, ostavljanje log tragova...", "Has the institution considered account management, administrator rights, password security, audit logs, backups, and incident response?", 'expert'),
          q("5M8", "Da li je institucija razmotrila da li objavljivanje povećava rizike od sajber bezbednosti, zloupotrebe, skrejpinga ili neovlašćenog pristupa?", "Has the institution considered whether publication increases cybersecurity, misuse, scraping, or unauthorized access risks?", 'expert'),
          q("5M9", "Da li je organizacija sa punom garancijom potvrdila postojanje ugovorenog odnosa da sistem drži mere zaštitnog formata po pitanju obezbeđenja kopija sa oporavkom po bazi...", "Has the institution confirmed that the platform has backup, recovery, continuity, and support arrangements?", 'expert'),
          q("5M10", "Da li je institucija dokumentovala operativne odgovornosti nakon objavljivanja?", "Has the institution documented operational responsibilities after publication?", 'expert')
        ]
      },
      {
        id: "N",
        title: bi("Mehanizmi za povratne informacije, ispravke, uklanjanje (takedown) i ispravljanje grešaka", "Feedback, Correction, Takedown and Redress Mechanisms"),
        questions: [
          q("5N1", "Da li postoji uočljiv i javno vidljiv način da posetioci komuniciraju sa institucijom na onlajn platformi i da se obrate odgovornim licima...", "Is there a visible way for users to contact the institution about errors, rights claims, privacy concerns, harmful descriptions, cultural sensitivity issues, access problems, or reuse questions?", 'beginner'),
          q("5N2", "Da li je propisana u obliku uredne direktive interna procedura kako organizacija po prijemu žalbe usvaja kontakt obaveštenje sa platforme...", "Is there a process for receiving, recording, assessing, and responding to correction requests?", 'intermediate'),
          q("5N3", "Da li se, pod striktnim pravilima rešavanja, prepoznaje mehanizam u kom se vlasnicima na fotografije, slike lica sa video materijala (image), nosiocima tuđih autorskih polja...", "Is there a process for rights holders or affected persons to raise copyright, privacy, image rights, confidentiality, cultural sensitivity, or other concerns?", 'intermediate'),
          q("5N4", "Da li je donesen precizan uslov poslovanja sajta sa kojim se obznanjena galerija mora skinuti, obrisati ili prekriti sa onlajn posmatranja (takedown or restriction process)...", "Is there a takedown or restriction process where publication may be unlawful, harmful, inaccurate, disputed, or inappropriate?", 'intermediate'),
          q("5N5", "Da li postoji opisan i proverljiv kanal operacija pomoću kog administracija sprovodi ponovno formatiranje (ispravku netačnosti)...", "Is there a process for correcting metadata, descriptions, OCR, transcripts, subtitles, translations, tags, or AI-generated outputs?", 'expert'),
          q("5N6", "Da li postoji procedura da se u ozbiljnijim nivoima nezadovoljstva sa informacijama posetilaca pređu okviri dežurne tehničke operativne posade i stvari eskaliraju sve do najviših tela i krugova uprave?", "Is there a process for escalating serious concerns to legal, data protection, curatorial, ethics, community engagement, technical, or leadership functions?", 'expert'),
          q("5N7", "Da li postoji proces za bilježenje izmena napravljenih nakon objavljivanja?", "Is there a process for recording changes made after publication?", 'expert'),
          q("5N8", "Da li postoji proces za saopštavanje značajnih ispravki ili ograničenja korisnicima, partnerima, repozitorijumima ili agregatorima kada je to potrebno?", "Is there a process for communicating significant corrections or restrictions to users, partners, repositories, or aggregators where necessary?", 'expert'),
          q("5N9", "Da li je institucija izbegla da objavljivanje tretira kao konačno i nepromenljivo?", "Has the institution avoided treating publication as final and unchangeable?", 'expert')
        ]
      },
      {
        id: "O",
        title: bi("Konačni pregled spremnosti za objavljivanje", "Final Publication Readiness Review"),
        questions: [
          q("5O1", "Da li su svi materijali predloženi za objavljivanje nedvosmisleno identifikovani i obeleženi?", "Are all materials proposed for publication clearly identified?", 'beginner'),
          q("5O2", "Da li su svi fajlovi ispravno povezani sa metapodacima, informacijama o pravima, kontekstualnim napomenama i podešavanjima pristupa?", "Are all files correctly linked to metadata, rights information, contextual notes, and access settings?", 'intermediate'),
          q("5O3", "Da li su izjave o pravima, licence, uslovi ponovne upotrebe, ograničenja i informacije o navođenju autora potpuni i vidljivi?", "Are rights statements, licences, reuse conditions, restrictions, and attribution information complete and visible?", 'intermediate'),
          q("5O4", "Da li su pitanja privatnosti, zaštite podataka, kulturne osetljivosti i konteksta pregledana i dokumentovana?", "Are privacy, data protection, cultural sensitivity, and contextual issues reviewed and documented?", 'intermediate'),
          q("5O5", "Da li su funkcionalnosti pristupačnosti kompletne ili planirane uz dokumentovana ograničenja?", "Are accessibility features complete or planned with documented limitations?", 'expert'),
          q("5O6", "Da li su AI-generisani ili automatizovani izlazi pregledani, označeni, ograničeni, ispravljeni ili dokumentovani gde je to relevantno?", "Are AI-generated or automated outputs reviewed, labelled, restricted, corrected, or documented where relevant?", 'expert'),
          q("5O7", "Da li su podešavanja platforme, kontrole pristupa, informacije za korisnike i tokovi objavljivanja testirani?", "Are platform settings, access controls, user-facing information, and publication workflows tested?", 'expert'),
          q("5O8", "Da li su materijali koji nisu odobreni za objavljivanje jasno isključeni ili ograničeni?", "Are materials not approved for publication clearly excluded or restricted?", 'expert'),
          q("5O9", "Da li su nerešena pitanja zabeležena uz dodeljene odgovorne osobe i rokove?", "Are unresolved issues recorded with assigned owners and deadlines?", 'expert'),
          q("5O10", "Da li je institucija identifikovala ko je odgovoran za praćenje i održavanje nakon objavljivanja?", "Has the institution identified who is responsible for post-publication monitoring and maintenance?", 'expert'),
          q("5O11", "Da li je konačnu odluku o objavljivanju odobrio odgovarajući autoritet?", "Has the final publication decision been approved by the appropriate authority?", 'beginner')
        ]
      }
    ]
  },
  {
    id: 6,
    code: bi("Faza 6", "Phase 6"),
    title: bi("Upravljanje podacima, održavanje i dugoročno starateljstvo", "Data Management, Maintenance and Long-Term Stewardship"),
    description: bi(
      "Skladištenje, integritet, korekcije nakon objavljivanja, i dugoročno očuvanje.",
      "Storage, integrity, post-publication corrections, and long-term preservation."
    ),
    sections: [
      {
        id: "A",
        title: bi("Plan upravljanja podacima i dugoročna odgovornost", "Data Management Plan and Long-Term Responsibility"),
        questions: [
          q("6A1", "Da li je institucija kreirala ili ažurirala plan upravljanja podacima za projekat?", "Has the institution created or updated a data management plan for the project?", 'beginner'),
          q("6A2", "Da li plan obuhvata master fajlove, radne kopije, pristupne fajlove, metapodatke, OCR, transkripte, titlove, prevode, kontekstualne beleške, rezultate obogaćivanja (enrichment), dokumentaciju, evidenciju o pregledima i evidenciju o odlukama?", "Does the plan cover master files, working copies, access files, metadata, OCR, transcripts, subtitles, translations, contextual notes, enrichment outputs, documentation, review records, and decision records?", 'intermediate'),
          q("6A3", "Da li je jasno ko je odgovoran za održavanje materijala i evidencije nakon što projektni tim završi svoj rad?", "Is it clear who is responsible for maintaining the materials and records after the project team completes its work?", 'intermediate'),
          q("6A4", "Da li je jasno gde će se fajlovi i zapisi čuvati?", "Is it clear where files and records will be stored?", 'intermediate'),
          q("6A5", "Da li je jasno ko sme da pristupa, uređuje, ažurira, ograničava, briše, migruje ili izvozi (eksportuje) fajlove i metapodatke?", "Is it clear who may access, edit, update, restrict, delete, migrate, or export files and metadata?", 'expert'),
          q("6A6", "Da li je jasno koliko dugo treba čuvati različite zapise i fajlove?", "Is it clear how long different records and files should be retained?", 'expert'),
          q("6A7", "Da li je institucija definisala odgovornosti za tehničko održavanje, ažuriranje metapodataka, pregled prava, pregled privatnosti, upravljanje pristupom, praćenje povratnih informacija javnosti, ispravljanje grešaka i očuvanje (konzervaciju)?", "Has the institution defined responsibilities for technical maintenance, metadata updates, rights review, privacy review, access management, public feedback, correction, and preservation?", 'expert'),
          q("6A8", "Da li je institucija razmotrila da li će se odgovornosti promeniti nakon završetka projektnog finansiranja, isteka ugovora osoblja, završetka aranžmana sa dobavljačima ili ugovora o platformi?", "Has the institution considered whether responsibility will change after project funding, staff contracts, vendor arrangements, or platform agreements end?", 'expert'),
        ]
      },
      {
        id: "B",
        title: bi("Master fajlovi, kopije za čuvanje i skladištenje", "Master Files, Preservation Copies and Storage"),
        questions: [
          q("6B1", "Da li se master fajlovi sigurno skladište i jesu li jasno odvojeni od radnih kopija, pristupnih fajlova i fajlova za objavljivanje?", "Are master files securely stored and clearly separated from working copies, access copies, and publication files?", 'beginner'),
          q("6B2", "Da li su master fajlovi zaštićeni od slučajnog uređivanja, prepisivanja, brisanja, kompresije ili nekontrolisane modifikacije?", "Are master files protected from accidental editing, overwriting, deletion, compression, or uncontrolled modification?", 'intermediate'),
          q("6B3", "Da li se rezervne kopije (backup) održavaju na odgovarajućim lokacijama ili u bezbednim okruženjima za skladištenje?", "Are backup copies maintained in appropriate locations or storage environments?", 'intermediate'),
          q("6B4", "Da li je skladište zaštićeno od kvara na hardveru, zlonamernog softvera, slučajnog brisanja, korupcije, krađe, požara, poplave, incidenata sa električnom energijom, otkazivanja usluga od strane dobavljača ili ukidanja platforme?", "Is storage protected against hardware failure, malware, accidental deletion, corruption, theft, fire, flood, electricity incidents, vendor failure, or platform closure?", 'intermediate'),
          q("6B5", "Da li je institucija definisala koliko često će se proveravati rezervne kopije?", "Has the institution defined how often backups will be checked?", 'expert'),
          q("6B6", "Da li je institucija proverila da li su rezervne kopije čitljive, potpune i da li se mogu obnoviti?", "Has the institution checked whether backup copies are readable, complete, and restorable?", 'expert'),
          q("6B7", "Da li se koriste provere integriteta fajlova, kontrolni zbirovi (checksums), logovi ili ekvivalentne kontrole gde je to prikladno?", "Are file integrity checks, checksums, logs, or equivalent controls used where appropriate?", 'expert'),
          q("6B8", "Da li je institucija planirala kako će se fajlovi migrirati ukoliko formati, sistemi, mediji za skladištenje ili platforme postanu zastareli?", "Has the institution planned how files will be migrated if formats, systems, storage media, or platforms become obsolete?", 'expert'),
          q("6B9", "Da li je institucija razmotrila da li se koriste otvoreni, široko podržani i održivi formati tamo gde je to moguće?", "Has the institution considered whether open, widely supported, and sustainable formats are used where possible?", 'expert'),
          q("6B10", "Da li postoji proces za dokumentovanje aktivnosti očuvanja, migracija, restauracija ili problema sa integritetom fajlova?", "Is there a process for documenting preservation actions, migrations, restorations, or file integrity issues?", 'expert')
        ]
      },
      {
        id: "C",
        title: bi("Održavanje metapodataka i kvalitet tokom vremena", "Metadata Maintenance and Quality Over Time"),
        questions: [
          q("6C1", "Da li postoji proces za održavanje i ažuriranje metapodataka nakon objavljivanja?", "Is there a process for maintaining and updating metadata after publication?", 'beginner'),
          q("6C2", "Da li je jasno ko može da ispravi, odobri ili ažurira metapodatke?", "Is it clear who can correct, approve, or update metadata?", 'intermediate'),
          q("6C3", "Da li se opisni, tehnički, administrativni, pravni, zaštitni, strukturni i kontekstualni metapodaci održavaju tamo gde su relevantni?", "Are descriptive, technical, administrative, rights, preservation, structural, and contextual metadata maintained where relevant?", 'intermediate'),
          q("6C4", "Da li su zapisi metapodataka povezani sa odgovarajućim fajlovima, originalima, kolekcijama, identifikatorima i uslovima pristupa?", "Are metadata records linked to the correct files, originals, collections, identifiers, and access conditions?", 'intermediate'),
          q("6C5", "Da li postoji proces za ispravljanje grešaka u naslovima, datumima, imenima, mestima, autorima, opisima, klasifikacijama, ključnim rečima, izjavama o pravima ili ograničenjima pristupa?", "Is there a process for correcting errors in titles, dates, names, places, creators, descriptions, classifications, keywords, rights statements, or access restrictions?", 'expert'),
          q("6C6", "Da li postoji proces za dokumentovanje neizvesnosti, umesto da se forsira nepotvrđena sigurnost?", "Is there a process for documenting uncertainty rather than forcing unsupported certainty?", 'expert'),
          q("6C7", "Da li postoji proces za pregled metapodataka koji sadrže zastarelu, uvredljivu, diskriminatornu, kolonijalnu, štetnu, netačnu ili nepotpunu terminologiju?", "Is there a process for reviewing metadata that includes outdated, offensive, discriminatory, colonial, harmful, inaccurate, or incomplete terminology?", 'expert'),
          q("6C8", "Da li postoji proces za dodavanje kontekstualnih beleški, informacija o poreklu, doprinosa zajednice, ažuriranih informacija o pravima ili revidiranih opisa?", "Is there a process for adding contextual notes, provenance information, community input, updated rights information, or revised descriptions?", 'expert'),
          q("6C9", "Da li postoji proces za razlikovanje između istorijske terminologije, institucionalnog opisa, opisa obezbeđenog od strane zajednice, mašinski generisanog opisa i kasnije ispravke?", "Is there a process for distinguishing between historical terminology, institutional description, community-supplied description, machine-generated description, and later correction?", 'expert'),
          q("6C10", "Da li je institucija razmotrila da li promene metapodataka treba komunicirati agregatorima, repozitorijumima, korisnicima ili partnerskim institucijama?", "Has the institution considered whether metadata changes should be communicated to aggregators, repositories, users, or partner institutions?", 'expert')
        ]
      },
      {
        id: "D",
        title: bi("Pregled prava, licenciranja i pristupa tokom vremena", "Rights, Licensing and Access Review Over Time"),
        questions: [
          q("6D1", "Da li postoji proces za preispitivanje statusa prava nakon objavljivanja?", "Is there a process for reviewing rights status after publication?", 'beginner'),
          q("6D2", "Da li je jasno ko je odgovoran za ažuriranje izjava o pravima, licenci, ograničenja pristupa, informacija o atribuciji i uslova za ponovnu upotrebu?", "Is it clear who is responsible for updating rights statements, licences, access restrictions, attribution information, and reuse conditions?", 'intermediate'),
          q("6D3", "Da li je institucija razmotrila da se status prava može promeniti vremenom, na primer zbog isteka autorskih prava, promena dozvola, povlačenja ili pojašnjenja licenci, nametanja uslova od strane donatora, nastanka sporova ili dostupnosti novih informacija?", "Has the institution considered whether rights status may change over time, for example because copyright expires, permissions change, licences are withdrawn or clarified, donors impose conditions, disputes arise, or new information becomes available?", 'intermediate'),
          q("6D4", "Da li postoji proces za rešavanje zahteva nosilaca prava, zahteva za dozvolu, pitanja o licencama, ispravki atribucije i upita o ponovnoj upotrebi?", "Is there a process for handling rights holder claims, permission requests, licence questions, attribution corrections, and reuse inquiries?", 'intermediate'),
          q("6D5", "Da li postoji proces za ograničavanje, uklanjanje, ažuriranje ili ispravljanje materijala kada se nakon objavljivanja identifikuju problemi s pravima?", "Is there a process for restricting, removing, updating, or correcting materials where rights issues are identified after publication?", 'expert'),
          q("6D6", "Da li se izjave o pravima i licence prikazane korisnicima održavaju tačnim i u skladu sa metapodacima?", "Are rights statements and licences displayed to users kept accurate and consistent with metadata?", 'expert'),
          q("6D7", "Da li postoji proces za proveru da li platforme, repozitorijumi ili agregatori trećih lica i dalje prikazuju ispravne informacije o pravima?", "Is there a process for checking whether third-party platforms, repositories, or aggregators continue to display correct rights information?", 'expert'),
          q("6D8", "Da li je institucija razmotrila da li mašinski pristup, API pristup, preuzimanja, masovna ponovna upotreba ili upotreba za trening veštačke inteligencije zahtevaju periodičan pregled?", "Has the institution considered whether machine access, API access, downloads, bulk reuse, or AI training uses require periodic review?", 'expert'),
          q("6D9", "Da li je institucija proverila da li su se promenila važeća nacionalna, regionalna, lokalna, institucionalna ili međunarodna pravila?", "Has the institution checked whether applicable national, regional, local, institutional, or international rules have changed?", 'expert'),
          q("6D10", "Da li se beleže i prate promene vezane za prava?", "Are rights-related changes recorded and traceable?", 'expert')
        ]
      },
      {
        id: "E",
        title: bi("Pregled privatnosti, zaštite podataka i prepoznatljivih osoba", "Privacy, Data Protection and Identifiable Persons Review"),
        questions: [
          q("6E1", "Da li postoji proces za preispitivanje pitanja privatnosti i zaštite podataka nakon objavljivanja?", "Is there a process for reviewing privacy and data protection concerns after publication?", 'beginner', "privacy"),
          q("6E2", "Da li je jasno ko odgovara na pritužbe o privatnosti, zahteve za zaštitu podataka, pitanja poverljivosti ili zahteve pogođenih osoba?", "Is it clear who responds to privacy complaints, data protection requests, confidentiality concerns, or requests from affected persons?", 'intermediate', "privacy"),
          q("6E3", "Da li je institucija razmotrila da li objavljeni materijali, metapodaci, OCR, transkripti, titlovi, prevodi, oznake, opisi ili obogaćeni izlazi mogu vremenom otkriti lične podatke usled poboljšanja alata za pretragu?", "Has the institution considered whether published materials, metadata, OCR, transcripts, subtitles, translations, tags, descriptions, or enrichment outputs may reveal personal data over time as search tools improve?", 'intermediate', "privacy"),
          q("6E4", "Da li je institucija razmotrila da li povećano indeksiranje, agregacija, preuzimanje, API pristup ili pretraga zasnovana na veštačkoj inteligenciji mogu učiniti lične podatke vidljivijim ili lakšim za povezivanje?", "Has the institution considered whether increased indexing, aggregation, download, API access, or AI-based search may make personal information more visible or linkable?", 'intermediate', "privacy"),
          q("6E5", "Da li postoji proces za redigovanje, ograničavanje, ispravljanje, uklanjanje ili odlaganje pristupa kada se nakon objavljivanja identifikuju problemi s privatnošću?", "Is there a process for redaction, restriction, correction, removal, or delayed access where privacy concerns are identified after publication?", 'expert', "privacy"),
          q("6E6", "Da li postoji proces za pregled materijala koji se odnose na decu, ranjive osobe, žrtve, pacijente, studente, zaposlene, porodice ili druge osobe koje zahtevaju posebnu pažnju?", "Is there a process for reviewing materials that concern children, vulnerable persons, victims, patients, students, employees, families, or other persons requiring particular care?", 'expert', "privacy"),
          q("6E7", "Da li postoji proces za proveru da li su se promenila pravila o zaštiti podataka, arhiviranju, poverljivosti, pravima na sliku, pravima ličnosti ili privatnosti?", "Is there a process for checking whether data protection, archival, confidentiality, image rights, personality rights, or privacy rules have changed?", 'expert', "privacy"),
          q("6E8", "Da li postoji proces za obradu zahteva od živih osoba, porodica, zajednica ili njihovih predstavnika?", "Is there a process for handling requests from living persons, families, communities, or representatives?", 'expert', "privacy"),
          q("6E9", "Da li se odluke u vezi sa privatnošću dokumentuju i da li ih pregledaju odgovarajuće funkcije kada je to potrebno?", "Are privacy-related decisions documented and reviewed by appropriate functions where necessary?", 'expert', "privacy"),
          q("6E10", "Da li je institucija razmotrila da li je kontinuirano objavljivanje i dalje srazmerno u svetlu novih informacija?", "Has the institution considered whether continued publication remains proportionate in light of new information?", 'expert', "privacy")
        ]
      },
      {
        id: "F",
        title: bi("Pregled kulturne osetljivosti, reprezentacije i konteksta", "Cultural Sensitivity, Representation and Context Review"),
        questions: [
          q("6F1", "Da li postoji proces za preispitivanje osetljivih, spornih, svetih, traumatičnih, kolonijalnih, konfliktnih, manjinskih, autohtonim, religijskih, političkih ili zajednički specifičnih materijala nakon objavljivanja?", "Is there a process for reviewing sensitive, contested, sacred, traumatic, colonial, conflict-related, minority-related, indigenous, religious, political, or community-specific materials after publication?", 'beginner'),
          q("6F2", "Da li postoji proces za odgovaranje na zabrinutosti pogođenih zajednica, izvornih zajednica, istraživača, korisnika ili stručnjaka?", "Is there a process for responding to concerns from affected communities, source communities, researchers, users, or experts?", 'intermediate'),
          q("6F3", "Da li postoji proces za reviziju kontekstualnih beleški, izjava o osetljivosti, upozorenja o sadržaju, terminologije, klasifikacija ili uslova pristupa gde je to potrebno?", "Is there a process for revising contextual notes, sensitivity statements, content warnings, terminology, classifications, or access conditions where needed?", 'intermediate'),
          q("6F4", "Da li je institucija razmotrila da li se socijalno, kulturno, političko ili akademsko razumevanje materijala može promeniti vremenom?", "Has the institution considered whether social, cultural, political, or scholarly understanding of the materials may change over time?", 'intermediate'),
          q("6F5", "Da li je institucija razmotrila da li povratne informacije korisnika ili doprinos zajednice otkrivaju štetnosti, propuste, pogrešne reprezentacije ili nedostatak konteksta?", "Has the institution considered whether user feedback or community input reveals harms, omissions, misrepresentations, or missing context?", 'expert'),
          q("6F6", "Da li je institucija razmotrila da li neki materijali zahtevaju ograničen pristup, posredovani pristup, odloženi pristup ili dodatno objašnjenje nakon objavljivanja?", "Has the institution considered whether some materials require restricted access, mediated access, delayed access, or additional explanation after publication?", 'expert'),
          q("6F7", "Da li postoji proces za dokumentovanje razloga zbog kojih se problematična istorijska terminologija zadržava, ispravlja, dopunjuje ili kontekstualizuje?", "Is there a process for documenting why problematic historical terminology is retained, corrected, supplemented, or contextualized?", 'expert'),
          q("6F8", "Da li postoji proces za razlikovanje između cenzure, istorijske tačnosti, poštovanja zajednice i institucionalne odgovornosti?", "Is there a process for distinguishing between correction, censorship, historical accuracy, community respect, and institutional accountability?", 'expert'),
          q("6F9", "Da li postoji proces za eskalaciju osetljivih pitanja kustoskim, etičkim, pravnim ili liderskim funkcijama, odnosno funkcijama za angažovanje zajednice?", "Is there a process for escalating sensitive issues to curatorial, ethics, community engagement, legal, or leadership functions?", 'expert'),
          q("6F10", "Da li je institucija razmotrila da li je objava i dalje usklađena s njenom javnom misijom i odgovornošću prema pogođenim zajednicama?", "Has the institution considered whether publication continues to align with its public mission and responsibility to affected communities?", 'expert')
        ]
      },
      {
        id: "G",
        title: bi("Sistemi podržani veštačkom inteligencijom, automatizovane funkcije i tekuće praćenje", "AI-Supported Systems, Automated Functions and Ongoing Monitoring"),
        questions: [
          q("6G1", "Da li se AI podržani ili automatizovani alati koriste u pretrazi, preporukama, rangiranju, označavanju, klasifikaciji, opisu, prevodu, transkripciji, moderaciji sadržaja, personalizaciji, analitici ili korisničkom pristupu?", "Are AI-supported or automated tools used in search, recommendation, ranking, tagging, classification, description, translation, transcription, content moderation, personalization, analytics, or user-facing access?", 'beginner', "ai"),
          q("6G2", "Da li postoji proces praćenja koji utvrđuje da li ovi alati proizvode greške, pristrasne rezultate, obmanjujuće opise, neprikladne preporuke ili nejednaku vidljivost?", "Is there a process for monitoring whether these tools produce errors, biased results, misleading descriptions, inappropriate recommendations, or unequal visibility?", 'intermediate', "ai"),
          q("6G3", "Da li postoji proces za pregledanje AI ili mašinski generisanih metapodataka, opisa, oznaka, sažetaka, prevoda ili drugih izlaza nakon objavljivanja?", "Is there a process for reviewing AI-generated or machine-generated metadata, descriptions, tags, summaries, translations, or other outputs after publication?", 'intermediate', "ai"),
          q("6G4", "Da li je institucija razmotrila da li ažuriranja modela, promene dobavljača, promene platforme ili ponovna obuka sistema mogu vremenom uticati na izlaze?", "Has the institution considered whether model updates, vendor changes, platform changes, or system retraining may affect outputs over time?", 'intermediate', "ai"),
          q("6G5", "Da li je institucija razmotrila da li bi automatizovani alati mogli da pojačaju vidljivost nekih materijala dok druge čine manje vidljivim?", "Has the institution considered whether automated tools may amplify some materials while making others less visible?", 'expert', "ai"),
          q("6G6", "Da li je institucija razmotrila da li AI podržani sistemi mogu obrađivati korisničke podatke, podatke o upotrebi, lične podatke ili podatke o ponašanju?", "Has the institution considered whether AI-supported systems may process user data, usage data, personal data, or behavioural data?", 'expert', "ai"),
          q("6G7", "Da li postoji proces za ispravljanje, onemogućavanje, ograničavanje, poništavanje ili pregledanje automatizovanih izlaza ili preporuka?", "Is there a process for correcting, disabling, restricting, overriding, or reviewing automated outputs or recommendations?", 'expert', "ai"),
          q("6G8", "Da li su korisnici obavešteni kada AI podržani izlazi ili funkcije značajno utiču na to šta vide ili kako tumače materijale?", "Are users informed where AI-supported outputs or functions materially affect what they see or how they interpret the materials?", 'expert', "ai"),
          q("6G9", "Da li je institucija proverila da li su se promenili pravni zahtevi, zahtevi javnog sektora, pravila transparentnosti, nabavke, zaštite podataka, pristupačnosti ili institucionalni zahtevi u vezi sa veštačkom inteligencijom?", "Has the institution checked whether AI-related legal, public sector, transparency, procurement, data protection, accessibility, or public sector requirements have changed?", 'expert', "ai"),
          q("6G10", "Da li postoji proces za dokumentovanje AI incidenata, promena, ograničenja i korektivnih mera?", "Is there a process for documenting AI-related incidents, changes, limitations, and corrective actions?", 'expert', "ai")
        ]
      },
      {
        id: "H",
        title: bi("Kontinuitet platforme, repozitorijuma i trećih strana", "Platform, Repository and Third-Party Continuity"),
        questions: [
          q("6H1", "Da li postoji proces za periodični pregled platforme, repozitorijuma, agregatora, usluge u oblaku, dobavljača ili treće strane korišćene za objavljivanje ili skladištenje?", "Is there a process for periodically reviewing the platform, repository, aggregator, cloud service, vendor, or third-party service used for publication or storage?", 'beginner', "vendor"),
          q("6H2", "Da li je institucija proverila da li platforma i dalje podržava neophodne kontrole pristupa, izjave o pravima, metapodatke, pristupačnost, bezbednost, rezervne kopije, izvoz i funkcije ispravke?", "Has the institution checked whether the platform continues to support required access controls, rights statements, metadata, accessibility, security, backup, export, and correction functions?", 'intermediate', "vendor"),
          q("6H3", "Da li je institucija pregledala da li su se promenili uslovi korišćenja platforme, ugovori, pravila repozitorijuma ili politike dobavljača?", "Has the institution reviewed whether platform terms of service, contracts, repository rules, or vendor policies have changed?", 'intermediate', "vendor"),
          q("6H4", "Da li je institucija razmotrila da li treće strane sada mogu koristiti fajlove, metapodatke, korisničke podatke ili analitiku na nove načine?", "Has the institution reviewed whether third parties may now use files, metadata, user data, or analytics in new ways, including AI training, enrichment, profiling, or commercial reuse?", 'intermediate', "vendor"),
          q("6H5", "Da li je institucija proverila da li se materijali mogu izvesti u upotrebljivim formatima ukoliko se platforma promeni, postane nedostupna ili više nije odgovarajuća?", "Has the institution checked whether materials can be exported in usable formats if the platform changes, becomes unavailable, or is no longer suitable?", 'expert', "vendor"),
          q("6H6", "Da li postoji plan za izlazak ili migraciju za usluge trećih strana?", "Is there an exit or migration plan for third-party services?", 'expert', "vendor"),
          q("6H7", "Da li je institucija proverila da li su rezervne i institucionalne kopije i dalje dostupne izvan platforme treće strane?", "Has the institution checked whether backups and institutional copies remain available outside the third-party platform?", 'expert', "vendor"),
          q("6H8", "Da li postoji proces za rešavanje problema zastoja platforme, prekinutih veza, grešaka u prikazu, gubitka metapodataka, bezbednosnih incidenata ili gubitka pristupa?", "Is there a process for addressing platform downtime, broken links, display errors, metadata loss, security incidents, or loss of access?", 'expert', "vendor"),
          q("6H9", "Da li je institucija proverila da li agregatori ili eksterni repozitorijumi prikazuju ažurirane metapodatke, informacije o pravima, ograničenja i ispravke?", "Has the institution checked whether aggregators or external repositories display updated metadata, rights information, restrictions, and corrections?", 'expert', "vendor"),
          q("6H10", "Da li je institucija razmotrila da li kontinuirana zavisnost od treće strane stvara institucionalni, pravni, tehnički, finansijski ili reputacioni rizik?", "Has the institution considered whether continued dependency on the third party creates institutional, legal, technical, financial, or reputational risk?", 'expert', "vendor")
        ]
      },
      {
        id: "I",
        title: bi("Bezbednost, kontrole pristupa i upravljanje incidentima", "Security, Access Controls and Incident Management"),
        questions: [
          q("6I1", "Da li se dozvole pristupa periodično preispituju?", "Are access permissions reviewed periodically?", 'beginner'),
          q("6I2", "Da li su ograničeni, osetljivi, neobjavljeni, interni ili master fajlovi zaštićeni od neovlašćenog pristupa?", "Are restricted, sensitive, unpublished, internal, or master files protected from unauthorized access?", 'intermediate'),
          q("6I3", "Da li se podešavanja javnog pristupa proveravaju kako bi se izbeglo slučajno izlaganje ograničenih materijala?", "Are public access settings checked to avoid accidental exposure of restricted materials?", 'intermediate'),
          q("6I4", "Da li se na odgovarajući način održavaju administratorska prava, korisnički nalozi, lozinke, autentifikacija, logovi revizije i kontrole pristupa?", "Are administrator rights, user accounts, passwords, authentication, audit logs, and access controls maintained appropriately?", 'intermediate'),
          q("6I5", "Da li postoji proces za reagovanje na neovlašćeni pristup, slučajno objavljivanje, povredu podataka (data breach), korupciju fajlova, gubitak, 'skrejping' (scraping), zloupotrebu ili kompromitovanje sistema?", "Is there a process for responding to unauthorized access, accidental publication, data breach, file corruption, loss, scraping, misuse, or system compromise?", 'expert'),
          q("6I6", "Da li se bezbednosni incidenti dokumentuju i eskaliraju tamo gde je to odgovarajuće?", "Are security incidents documented and escalated where appropriate?", 'expert'),
          q("6I7", "Da li su rezervne kopije zaštićene i testirane?", "Are backups protected and tested?", 'expert'),
          q("6I8", "Da li je institucija razmotrila da li preuzimanja fajlova, API-ji, masovni pristup ili indeksiranje pretraživača stvaraju rizike po bezbednost, privatnost ili rizike od zloupotrebe?", "Has the institution considered whether downloadable files, APIs, bulk access, or search engine indexing create security, privacy, or misuse risks?", 'expert'),
          q("6I9", "Da li je institucija proverila da li platforme i dobavljači trećih strana i dalje ispunjavaju bezbednosna očekivanja?", "Has the institution checked whether third-party platforms and vendors continue to meet security expectations?", 'expert'),
          q("6I10", "Da li postoji proces za reviziju i ažuriranje bezbednosnih aranžmana vremenom?", "Is there a process for reviewing and updating security arrangements over time?", 'expert')
        ]
      },
      {
        id: "J",
        title: bi("Povratne informacije korisnika, ispravke, uklanjanje i obeštećenje", "User Feedback, Correction, Takedown and Redress"),
        questions: [
          q("6J1", "Da li je mehanizam za povratne informacije, ispravke, uklanjanje ili prijavu zabrinutosti aktivan i vidljiv korisnicima?", "Is the feedback, correction, takedown, or concern-reporting mechanism active and visible to users?", 'beginner'),
          q("6J2", "Da li postoji proces za primanje i beleženje povratnih informacija korisnika?", "Is there a process for receiving and recording user feedback?", 'intermediate'),
          q("6J3", "Da li postoji proces za klasifikaciju prijava (kao što su greške u metapodacima, potraživanja prava, zabrinutosti za privatnost ili kulturnu osetljivost, štetan opis, tehnički problemi, problemi sa pristupačnošću, zloupotreba ili zahtevi za dodatnim kontekstom)?", "Is there a process for classifying concerns, such as metadata error, rights claim, privacy concern, cultural sensitivity concern, harmful description, technical issue, accessibility issue, misuse, or request for additional context?", 'intermediate'),
          q("6J4", "Da li je jasno ko pregleda i odgovara na različite tipove prijava?", "Is it clear who reviews and responds to different types of concerns?", 'intermediate'),
          q("6J5", "Da li postoji vremenski okvir ili očekivani nivo usluge za odgovaranje na prijave?", "Is there a timeline or service expectation for responding to concerns?", 'expert'),
          q("6J6", "Da li postoji proces za ispravljanje metapodataka, datoteka, OCR-a, transkripata, titlova, prevoda, opisa, oznaka, izjava o pravima, kontekstualnih beleški ili podešavanja pristupa?", "Is there a process for correcting metadata, files, OCR, transcripts, subtitles, translations, descriptions, tags, rights statements, contextual notes, or access settings?", 'expert'),
          q("6J7", "Da li postoji proces za ograničavanje, uklanjanje, zamenu ili privremeno onemogućavanje pristupa materijalima gde je to potrebno?", "Is there a process for restricting, removing, replacing, or temporarily disabling access to materials where necessary?", 'expert'),
          q("6J8", "Da li postoji proces za dokumentovanje razloga zbog kojih je izvršena ispravka, uklanjanje, ograničavanje ili odbijanje zahteva?", "Is there a process for documenting why a correction, takedown, restriction, or refusal was made?", 'expert'),
          q("6J9", "Da li postoji proces za obaveštavanje partnera, agregatora, repozitorijuma ili korisnika ukoliko su napravljene značajne ispravke ili ograničenja?", "Is there a process for notifying partners, aggregators, repositories, or users where significant corrections or restrictions are made?", 'expert'),
          q("6J10", "Da li postoji proces za prepoznavanje problema koji se ponavljaju i njihovo korišćenje za unapređenje budućih projekata?", "Is there a process for identifying recurring issues and using them to improve future projects?", 'expert')
        ]
      },
      {
        id: "K",
        title: bi("Praćenje, ključni pokazatelji učinka (KPI) i institucionalno izveštavanje", "Monitoring, KPIs and Institutional Reporting"),
        questions: [
          q("6K1", "Da li je institucija identifikovala indikatore za praćenje projekta nakon objavljivanja?", "Has the institution identified indicators for monitoring the project after publication?", 'beginner'),
          q("6K2", "Da li institucija prati da li materijali ostaju pristupačni, upotrebljivi, tačni, odgovarajuće kontekstualizovani i da li se njima odgovorno upravlja?", "Is the institution tracking whether the materials remain accessible, usable, accurate, appropriately contextualized, and responsibly governed?", 'intermediate'),
          q("6K3", "Da li institucija prati povratne informacije korisnika, zahteve za ispravke, zahteve za uklanjanje, tvrdnje o pravima, brige o privatnosti, probleme sa pristupačnošću, tehničke kvarove ili probleme sa metapodacima koji se ponavljaju?", "Is the institution tracking user feedback, correction requests, takedown requests, rights claims, privacy concerns, accessibility issues, technical failures, or recurring metadata problems?", 'intermediate'),
          q("6K4", "Da li institucija prati da li funkcije koje podržava veštačka inteligencija stvaraju greške, pristrasnost, probleme sa vidljivošću ili nezadovoljstvo korisnika koji se iznova ponavljaju?", "Is the institution tracking whether AI-supported or automated functions create recurring errors, bias, visibility problems, or user concerns?", 'intermediate'),
          q("6K5", "Da li institucija prati da li osoblje koristi propisane alate za proveru i evidencije?", "Is the institution tracking whether staff use the required review tools and records?", 'expert'),
          q("6K6", "Da li institucija prati da li se problemi rešavaju u pravovremenom roku kada se podignu na viši nivo (eskaliraju)?", "Is the institution tracking whether escalations are resolved in a timely way?", 'expert'),
          q("6K7", "Da li institucija prati da li su planirane provere prava, privatnosti, kulturne osetljivosti i platforme sprovedene kada je to bilo zakazano?", "Is the institution tracking whether rights, privacy, cultural sensitivity, and platform reviews are completed when scheduled?", 'expert'),
          q("6K8", "Da li institucija koristi rezultate praćenja kako bi unapredila politike, tokove rada, obuke, šablone i buduće projekte?", "Is the institution using monitoring results to improve policies, workflows, training, templates, and future projects?", 'expert'),
          q("6K9", "Da li postoji definisan put za izveštavanje ka ORRI koordinaciji, menadžmentu, savetodavnim telima ili višem rukovodstvu tamo gde je to odgovarajuće?", "Is there a reporting route to ORRI coordination, management, advisory functions, or senior leadership where appropriate?", 'expert'),
        ]
      },
      {
        id: "L",
        title: bi("Institucionalno učenje i unapređenje alata", "Institutional Learning and Tool Improvement"),
        questions: [
          q("6L1", "Da li je institucija održala pregled nakon završetka projekta ili sesiju o naučenim lekcijama?", "Has the institution held a post-project review or lessons learned session?", 'beginner'),
          q("6L2", "Da li je institucija identifikovala šta je dobro funkcionisalo u procesu digitalizacije?", "Has the institution identified what worked well in the digitalization process?", 'intermediate'),
          q("6L3", "Da li je institucija identifikovala šta je stvorilo teškoće, kašnjenja, neizvesnost, rizik ili nedoslednost?", "Has the institution identified what created difficulty, delay, uncertainty, risk, or inconsistency?", 'intermediate'),
          q("6L4", "Da li je institucija identifikovala pravna, etička, tehnička pitanja, kao i probleme sa metapodacima, pravima, privatnošću, kulturnom osetljivošću, pristupačnošću, vendorima ili platformama koji su se ponavljali?", "Has the institution identified recurring legal, ethical, technical, metadata, rights, privacy, cultural sensitivity, accessibility, vendor, or platform issues?", 'intermediate'),
          q("6L5", "Da li je institucija razmotrila da li liste za proveru, šabloni, dijagrami toka za odluke, kriterijumi eskalacije, obuke ili uloge u upravljanju treba da se unaprede?", "Has the institution considered whether checklists, templates, decision flowcharts, escalation criteria, training, or governance roles should be improved?", 'expert'),
          q("6L6", "Da li je institucija razmotrila da li je osoblju potrebna dodatna obuka ili smernice?", "Has the institution considered whether staff need additional training or guidance?", 'expert'),
          q("6L7", "Da li je institucija razmotrila da li bi u budućim projektima angažovanje zajednice, korisničke povratne informacije ili savetodavni pregled trebali biti unapređeni?", "Has the institution considered whether community engagement, user feedback, or advisory review should be improved in future projects?", 'expert'),
          q("6L8", "Da li je institucija razmotrila da li bi rezultati projekta trebalo da oblikuju buduću strategiju kolekcija, digitalnu strategiju, planiranje očuvanja, politiku pristupa ili institucionalno upravljanje?", "Has the institution considered whether project outcomes should inform future collection strategy, digital strategy, preservation planning, access policy, or institutional governance?", 'expert'),
          q("6L9", "Da li je institucija zabeležila preporuke za buduće projekte?", "Has the institution recorded recommendations for future projects?", 'expert'),
          q("6L10", "Da li je institucija dodelila odgovornost za sprovođenje poboljšanja?", "Has the institution assigned responsibility for implementing improvements?", 'expert')
        ]
      },
      {
        id: "M",
        title: bi("Održivost i post-projektna integracija", "Sustainability and Post-Project Integration"),
        questions: [
          q("6M1", "Da li je institucija utvrdila kako će se digitalizovani materijali održavati nakon što se projektno finansiranje završi?", "Has the institution identified how the digitized materials will be maintained after project funding ends?", 'beginner'),
          q("6M2", "Da li je institucija uzela u obzir potrebe u vezi sa osobljem, budžetom, troškovima platforme, troškovima skladištenja, troškovima softvera i licenci, kao i potrebama za održavanje i buduću migraciju?", "Has the institution considered staffing, budget, platform costs, storage costs, software costs, licence costs, maintenance needs, and future migration needs?", 'intermediate'),
          q("6M3", "Da li je institucija razmotrila da li su odgovornosti integrisane u redovnu institucionalnu praksu, a ne samo prepuštene kao privremeni projektni zadatak?", "Has the institution considered whether responsibilities are integrated into ordinary institutional practice rather than left as temporary project work?", 'intermediate'),
          q("6M4", "Da li je institucija razmotrila da li su rezultati projekta uključeni u institucionalne kataloge, repozitorijume, sisteme za očuvanje, politike pristupa i strukture izveštavanja?", "Has the institution considered whether the project outputs are included in institutional catalogues, repositories, preservation systems, access policies, and reporting structures?", 'intermediate'),
          q("6M5", "Da li je institucija procenila da li su partnerstva, ugovori sa dobavljačima ili aranžmani sa repozitorijumima i dalje održivi nakon završetka projekta?", "Has the institution considered whether partnerships, vendor arrangements, or repository relationships remain viable after the project ends?", 'expert'),
          q("6M6", "Da li je institucija procenila da li će javni materijali ostati pristupačni, ažurirani i podržani tokom vremena?", "Has the institution considered whether public-facing materials will remain accessible, updated, and supported over time?", 'expert'),
          q("6M7", "Da li je institucija uzela u obzir da promene u zakonu, tehnologiji, institucionalnim prioritetima ili očekivanjima korisnika mogu zahtevati buduća prilagođavanja?", "Has the institution considered whether changes in law, technology, institutional priorities, or user expectations may require future adaptation?", 'expert'),
          q("6M8", "Da li je institucija dokumentovala plan održivosti?", "Has the institution documented a sustainability plan?", 'expert'),
          q("6M9", "Da li je institucija utvrdila šta bi se desilo ako bi platforma, alat, dobavljač, finansiranje ili odgovorno osoblje postali nedostupni?", "Has the institution identified what would happen if the platform, tool, vendor, funding, or responsible staff become unavailable?", 'expert')
        ]
      },
      {
        id: "N",
        title: bi("Konačni ORRI upravljački dosije", "Final ORRI Governance Dossier"),
        questions: [
          q("6N1", "Da li je institucija prikupila ključne dokumente koji pokazuju kako je projekat pregledan, o njemu odlučivano, kako je implementiran, objavljen i održavan?", "Has the institution compiled the key documents showing how the project was reviewed, decided, implemented, published, and maintained?", 'beginner'),
          q("6N2", "Da li dosije uključuje koncept projekta, plan, razloge za selekciju, pregled prava, privatnosti, kulturne osetljivosti, proveru AI ili alata, procenu dobavljača, registar rizika, zapisnike o odlukama, zapise o kontroli kvaliteta, odobrenje za objavljivanje i plan pregleda nakon objavljivanja?", "Does the dossier include the project plan, selection rationale, rights review, privacy screening, cultural sensitivity review, AI or tool screening, vendor assessment, risk register, decision records, quality control records, publication approval, and post-publication review plan?", 'intermediate'),
          q("6N3", "Da li su uključene odluke donete na kraju svake faze (phase-gate odluke)?", "Are phase-gate decisions included?", 'intermediate'),
          q("6N4", "Da li su jasno zabeležena nerešena pitanja i naredne radnje?", "Are unresolved issues and follow-up actions clearly recorded?", 'intermediate'),
          q("6N5", "Da li su zapisi o eskalacijama, savetodavne beleške, pravni pregledi, pregledi zaštite podataka, evidencija o angažovanju zajednice ili odobrenja rukovodstva uključena gde je to primenljivo?", "Are escalation records, advisory notes, legal reviews, data protection reviews, community engagement records, or leadership approvals included where relevant?", 'expert'),
          q("6N6", "Da li su obuhvaćene konačne izjave o pravima, licence, uslovi za pristup, ograničenja i zapisi o objavljivanju?", "Are final rights statements, licences, access conditions, restrictions, and publication records included?", 'expert'),
          q("6N7", "Da li su prisutni zapisi o skladištenju, očuvanju, rezervnim kopijama, metapodacima i platformi?", "Are storage, preservation, backup, metadata, and platform records included?", 'expert'),
          q("6N8", "Da li se dosije čuva na mestu gde mu ubuduće mogu pristupiti odgovarajući akteri unutar institucije?", "Is the dossier stored in a place where it can be accessed by appropriate institutional actors in the future?", 'expert'),
          q("6N9", "Da li je institucija definisala ko je odgovoran za ažuriranje i održavanje dosijea?", "Has the institution defined who is responsible for updating or maintaining the dossier?", 'expert'),
          q("6N10", "Može li institucija iskoristiti dosije kako bi objasnila i dokazala odgovorno upravljanje projektom?", "Can the institution use the dossier to explain and evidence the responsible governance of the project?", 'expert')
        ]
      }
    ]
  }
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