import { useState, useEffect } from "react";
import { findPhase, type Phase, type Level } from "@/content/checklist";
import { getSkipFlags, isQuestionActive } from "@/lib/skipLogic";
import { useI18n } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Check, ScrollText, Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const BASE_URL = "/sfg-orri";
const ANSWER_VALUES = ["yes", "no", "partly", "na", "unknown"] as const;
type AnswerValue = (typeof ANSWER_VALUES)[number];

interface PhaseState {
  answers: Record<string, AnswerValue>;
  notes: Record<string, string>;
}

export function PhaseChecklist({ phaseId }: { phaseId: number }) {
  const { t, lang } = useI18n();
  const phase = findPhase(phaseId);
  const prev = findPhase(phaseId - 1);
  const next = findPhase(phaseId + 1);

  const [state, setState] = useState<PhaseState>({ answers: {}, notes: {} });
  const [userLevel, setUserLevel] = useState<Level>("expert");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("orri_single_project");
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
    const savedLevel = localStorage.getItem("orri_user_level");
    if (savedLevel) {
      setUserLevel(savedLevel as Level);
    }
    setMounted(true);
  }, []);

  const handleLevelChange = (level: Level) => {
    setUserLevel(level);
    localStorage.setItem("orri_user_level", level);
  };

  const updateState = (updater: (s: PhaseState) => PhaseState) => {
    setState((s) => {
      const nextState = updater(s);
      localStorage.setItem("orri_single_project", JSON.stringify(nextState));
      return nextState;
    });
  };

  const setAnswer = (qId: string, val: AnswerValue) => {
    updateState((s) => ({
      ...s,
      answers: { ...s.answers, [qId]: val },
    }));
  };

  const setNote = (qId: string, text: string) => {
    updateState((s) => ({
      ...s,
      notes: { ...s.notes, [qId]: text },
    }));
  };

  if (!mounted || !phase) return null;

  const skipFlags = getSkipFlags(state.answers);
  const query = searchQuery.trim().toLowerCase();

  const visibleSections = phase.sections
    .map((sec) => {
      const questions = sec.questions.filter((q) => {
        if (!isQuestionActive(q, userLevel, skipFlags)) return false;
        if (!query) return true;
        const qText = t(q.text).toLowerCase();
        const qId = q.id.toLowerCase();
        return qId.includes(query) || qText.includes(query);
      });
      return { ...sec, questions };
    })
    .filter((sec) => sec.questions.length > 0);

  const total = phase.sections.reduce(
    (n, sec) => n + sec.questions.filter((q) => isQuestionActive(q, userLevel, skipFlags)).length,
    0,
  );
  const ans = phase.sections.reduce(
    (n, sec) =>
      n +
      sec.questions.filter(
        (q) => isQuestionActive(q, userLevel, skipFlags) && state.answers[q.id],
      ).length,
    0,
  );
  const pct = total ? Math.round((ans / total) * 100) : 0;

  // Simple auto-gate logic
  const allAnswered = total > 0 && ans === total;
  let decision: "proceed" | "proceed_conditions" | "escalate" | null = null;

  if (allAnswered) {
    const values = phase.sections.flatMap((sec) =>
      sec.questions
        .filter((q) => isQuestionActive(q, userLevel, skipFlags))
        .map((q) => state.answers[q.id]),
    );
    decision = "proceed";
    if (values.includes("unknown")) decision = "escalate";
    else if (values.includes("no") || values.includes("partly")) decision = "proceed_conditions";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-8 py-8 space-y-8">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
              {t(ui.phase.section).slice(0, 4)} · {String(phase.id).padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {t(phase.code)}
            </span>
          </div>
          <select
            value={userLevel}
            onChange={(e) => handleLevelChange(e.target.value as Level)}
            className="bg-card text-xs font-medium text-muted-foreground border border-border hover:border-primary/50 transition-colors rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
          >
            <option value="beginner">{lang === "sr" ? "Osnovni nivo" : "Basic Level"}</option>
            <option value="intermediate">{lang === "sr" ? "Srednji nivo" : "Intermediate Level"}</option>
            <option value="expert">{lang === "sr" ? "Potpuni nivo" : "Full Level"}</option>
          </select>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{t(phase.title)}</h1>
        <p className="text-sm text-muted-foreground mt-1.5 max-w-3xl">
          {t(phase.description)}
        </p>
      </div>

      {(skipFlags.noAI || skipFlags.noPrivacy || skipFlags.noVendor) && (
        <div className="flex flex-wrap items-center gap-2 bg-muted/40 border border-border/80 px-4 py-2.5 rounded-xl text-xs">
          <span className="font-semibold text-muted-foreground uppercase text-[10px] tracking-wider">
            {lang === "sr" ? "Aktivna redukcija (Bypass):" : "Active Skip-Logic:"}
          </span>
          {skipFlags.noAI && (
            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded font-medium text-[11px]">
              {lang === "sr" ? "AI modul preskočen (Obična oprema)" : "AI Module Bypassed (Ordinary Equipment)"}
            </span>
          )}
          {skipFlags.noPrivacy && (
            <span className="inline-flex items-center gap-1 bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 px-2 py-0.5 rounded font-medium text-[11px]">
              {lang === "sr" ? "Modul privatnosti preskočen (Bez osetljivih podataka)" : "Privacy Module Bypassed (No Sensitive Data)"}
            </span>
          )}
          {skipFlags.noVendor && (
            <span className="inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded font-medium text-[11px]">
              {lang === "sr" ? "Modul dobavljača preskočen (Interna realizacija)" : "Vendor Module Bypassed (In-House Project)"}
            </span>
          )}
        </div>
      )}

      <div className="bg-card border border-border rounded-xl px-5 py-4 shadow-card">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-medium text-foreground">{t(ui.project.progress)}</span>
          <span className="text-muted-foreground tabular-nums">
            {ans} / {total} · <span className="text-foreground font-medium">{pct}%</span>
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-[width] duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t(ui.phase.searchPlaceholder)}
          className="w-full bg-card text-sm text-foreground placeholder:text-muted-foreground border border-border rounded-xl pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded bg-muted"
          >
            Clear
          </button>
        )}
      </div>

      {visibleSections.length === 0 && (
        <div className="text-center py-12 bg-card border border-border rounded-xl">
          <p className="text-sm text-muted-foreground">{t(ui.phase.searchNoResults)}</p>
        </div>
      )}

      <div className="space-y-6">
        {visibleSections.map((sec) => {
          const secAns = sec.questions.filter((q) => state.answers[q.id]).length;
          const secTotal = sec.questions.length;

          return (
            <section
              key={sec.id}
              className="bg-card border border-border rounded-xl shadow-card overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                    {t(ui.phase.section)} {sec.id}
                  </div>
                  <h2 className="text-base font-semibold mt-0.5">{t(sec.title)}</h2>
                </div>
                <div className="text-xs font-medium text-muted-foreground bg-background border border-border px-2.5 py-1 rounded-md tabular-nums">
                  {secAns} / {secTotal}
                </div>
              </div>

              <div className="divide-y divide-border">
                {sec.questions.map((q, idx) => (
                  <div key={q.id} id={`q-${q.id}`} className="px-6 py-5 space-y-3 scroll-mt-20">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-muted-foreground font-medium">
                        {t(ui.phase.section).slice(0, 4)} {phase.id}.{sec.id}.{idx + 1}
                      </span>
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide border uppercase",
                          q.level === "beginner"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                            : q.level === "intermediate"
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                            : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
                        )}
                      >
                        {q.level === "beginner"
                          ? t(ui.phase.levelBeginner)
                          : q.level === "intermediate"
                          ? t(ui.phase.levelIntermediate)
                          : t(ui.phase.levelExpert)}
                      </span>
                    </div>

                    <div className="text-sm leading-relaxed text-foreground font-medium">
                      {t(q.text)}
                    </div>
                    <div className="mt-3 inline-flex bg-muted rounded-lg p-1 flex-wrap gap-1">
                      {(q.options
                        ? q.options.map((opt) => ({ value: opt.value, label: t(opt.label) }))
                        : ANSWER_VALUES.map((val) => ({ value: val, label: t(ui.answers[val]) }))
                      ).map(({ value, label }) => {
                        const active = state.answers[q.id] === value;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setAnswer(q.id, value as AnswerValue)}
                            className={cn(
                              "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                              active
                                ? "bg-background text-foreground shadow-card"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                    <Textarea
                      className="mt-3 min-h-0 resize-none text-sm"
                      rows={2}
                      placeholder={t(ui.phase.notePlaceholder)}
                      value={state.notes[q.id] ?? ""}
                      onChange={(e) => setNote(q.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              {sec.evidence && sec.evidence.length > 0 && (
                <div className="mx-6 mb-6 mt-2 bg-primary/5 border border-primary/20 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-primary font-semibold mb-2">
                    <ScrollText className="h-3.5 w-3.5" /> {t(ui.phase.evidence)}
                  </div>
                  <ul className="text-sm space-y-1.5">
                    {sec.evidence.map((e, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 mt-1 text-primary shrink-0" />
                        <span>{t(e)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          );
        })}
      </div>

      <div className={cn(
        "mt-8 p-5 rounded-md border-l-4 transition-colors duration-300",
        !allAnswered ? "bg-muted/50 border-muted-foreground/30" :
        decision === "proceed" ? "bg-[color:var(--status-ok-bg)] border-[color:var(--status-ok)]" :
        decision === "proceed_conditions" ? "bg-[color:var(--status-warn-bg)] border-[color:var(--status-warn)]" :
        "bg-[color:var(--status-bad-bg)] border-[color:var(--status-bad)]"
      )}>
        <div className="flex items-center justify-between">
          <h3 className={cn(
            "font-semibold",
            !allAnswered ? "text-muted-foreground" :
            decision === "proceed" ? "text-[color:var(--status-ok)]" :
            decision === "proceed_conditions" ? "text-[color:var(--status-warn)]" :
            "text-[color:var(--status-bad)]"
          )}>
            {lang === "sr" ? "Automatska odluka (Phase-Gate)" : "Automated Phase-Gate Decision"}
          </h3>
          {allAnswered && (
             <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 bg-black/5 px-2 py-1 rounded">
               {lang === "sr" ? "Sistemski generisano" : "System Generated"}
             </span>
          )}
        </div>
        
        <p className={cn("mt-2 text-lg font-medium", !allAnswered ? "text-muted-foreground italic" : "text-foreground")}>
          {!allAnswered 
            ? (lang === "sr" ? "Odgovorite na sva pitanja da biste generisali odluku." : "Complete all questions above to generate the decision.")
            : (lang === "sr" 
                ? (decision === "proceed" ? "Nastavi" : decision === "proceed_conditions" ? "Nastavi uz uslove" : "Eskaliraj za dalju proveru")
                : (decision === "proceed" ? "Proceed" : decision === "proceed_conditions" ? "Proceed with conditions" : "Escalate for further review")
              )
          }
        </p>
        
        {allAnswered && decision === "proceed_conditions" && (
          <div className="mt-4 pt-4 border-t border-[color:var(--status-warn)]/20">
            <h4 className="text-sm font-semibold text-[color:var(--status-warn)] mb-1">
              {lang === "sr" ? "Preporuka" : "Recommendation"}
            </h4>
            <p className="text-sm text-foreground/80">
              {lang === "sr" 
                ? "Pređite na sledeću fazu, ali osigurajte da su identifikovani rizici (odgovori 'Ne' ili 'Delimično') adresirani u planu upravljanja ili eskalirani odgovornim stranama."
                : "Move to the next phase, but ensure that the identified risks ('No' or 'Partly' answers) are addressed in the management plan or escalated to responsible parties."}
            </p>
          </div>
        )}
        
        {allAnswered && decision === "escalate" && (
          <div className="mt-4 pt-4 border-t border-[color:var(--status-bad)]/20">
            <h4 className="text-sm font-semibold text-[color:var(--status-bad)] mb-1">
              {lang === "sr" ? "Preporuka" : "Recommendation"}
            </h4>
            <p className="text-sm text-foreground/80">
              {lang === "sr" 
                ? "Privremeno zaustavite prelazak u sledeću fazu. Obavezno prikupite informacije za pitanja na koja je odgovoreno 'Nepoznato' i konsultujte stručnjake pre nego što nastavite."
                : "Temporarily halt moving to the next phase. Gather information for questions answered 'Unknown' and consult subject matter experts before proceeding."}
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 pt-2">
        {prev ? (
          <a
            href={`${BASE_URL}/phase-${prev.id}`}
            className="group bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/40 transition-all flex items-center gap-3"
          >
            <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-x-0.5 transition-all" />
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                {t(ui.phase.prevPhase).replace("←", "").trim()}
              </div>
              <div className="text-sm font-medium truncate">
                {String(prev.id).padStart(2, "0")} · {t(prev.title)}
              </div>
            </div>
          </a>
        ) : (
          <div />
        )}
        {next && (
          <a
            href={`${BASE_URL}/phase-${next.id}`}
            className="group bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/40 transition-all flex items-center gap-3 sm:text-right sm:justify-end"
          >
            <div className="min-w-0 sm:order-1">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                {t(ui.phase.nextPhase).replace("→", "").trim()}
              </div>
              <div className="text-sm font-medium truncate">
                {String(next.id).padStart(2, "0")} · {t(next.title)}
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all sm:order-2" />
          </a>
        )}
      </div>
    </div>
  );
}

import { AppLayout } from "./AppLayout";
export function PhasePage({ currentPath, phaseId }: { currentPath: string; phaseId: number }) {
  return (
    <AppLayout currentPath={currentPath}>
      <PhaseChecklist phaseId={phaseId} />
    </AppLayout>
  );
}
