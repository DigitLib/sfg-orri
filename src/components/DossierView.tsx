import { useState, useEffect } from "react";
import { phases, totalQuestions, type Phase, type Level } from "@/content/checklist";
import { getSkipFlags, isQuestionActive } from "@/lib/skipLogic";
import { useI18n } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { ScrollText, Printer, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BASE_URL = "/sfg-orri";

export function DossierView() {
  const { t, lang } = useI18n();
  const [state, setState] = useState<{ answers: Record<string, string>; notes: Record<string, string> }>({ answers: {}, notes: {} });
  const [userLevel, setUserLevel] = useState<Level>("expert");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("orri_single_project");
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {}
    }
    const savedLevel = localStorage.getItem("orri_user_level");
    if (savedLevel) {
      setUserLevel(savedLevel as Level);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skipFlags = getSkipFlags(state.answers);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-8 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{t(ui.nav.dossier)}</h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            {t(ui.dossier.subtitle)}
          </p>
        </div>
        <div className="flex gap-2">
          <input 
            type="file" 
            id="import-json" 
            className="hidden" 
            accept=".json"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = (ev) => {
                try {
                  const data = JSON.parse(ev.target?.result as string);
                  if (data.answers) {
                    // Extract level before saving main state, so we don't pollute the answers state, though it's harmless
                    const { level, ...mainState } = data;
                    localStorage.setItem("orri_single_project", JSON.stringify(mainState));
                    if (level) {
                      localStorage.setItem("orri_user_level", level);
                    }
                    window.location.reload();
                  }
                } catch (err) {
                  alert(t(ui.dossier.importError));
                }
              };
              reader.readAsText(file);
            }}
          />
          <Button variant="outline" size="sm" onClick={() => document.getElementById("import-json")?.click()} className="gap-2">
            <Download className="h-4 w-4 rotate-180" /> {t(ui.dossier.import)}
          </Button>
          <Button variant="outline" size="sm" onClick={() => {
            const currentLevel = localStorage.getItem("orri_user_level") || "expert";
            const exportData = {
              ...state,
              level: currentLevel
            };
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href",     dataStr);
            downloadAnchorNode.setAttribute("download", "orri_dossier.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
          }} className="gap-2">
            <Download className="h-4 w-4" /> {t(ui.dossier.export)}
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" /> {t(ui.dossier.print)}
          </Button>
        </div>
      </div>

      <div className="space-y-8 print:space-y-6">
        {phases.map((ph) => {
          const visibleSections = ph.sections.map((sec) => ({
            ...sec,
            questions: sec.questions.filter((q) => isQuestionActive(q, userLevel, skipFlags)),
          })).filter(sec => sec.questions.length > 0);

          const total = visibleSections.reduce((n, sec) => n + sec.questions.length, 0);
          const ans = visibleSections.reduce(
            (n, sec) => n + sec.questions.filter((q) => state.answers[q.id]).length,
            0,
          );
          
          if (ans === 0) return null; // Skip empty phases

          const allAnswered = total > 0 && ans === total;
          let decision: "proceed" | "proceed_conditions" | "escalate" | null = null;
          
          if (allAnswered) {
            const values = visibleSections.flatMap((sec) =>
              sec.questions.map((q) => state.answers[q.id]),
            );
            decision = "proceed";
            if (values.includes("unknown")) decision = "escalate";
            else if (values.includes("no") || values.includes("partly")) decision = "proceed_conditions";
          }
          
          return (
            <section key={ph.id} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden print:shadow-none print:border-gray-300">
              <div className="px-5 py-4 border-b border-border bg-muted/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                    Faza {ph.id}
                  </span>
                  <h2 className="text-base font-semibold">{t(ph.title)}</h2>
                </div>
                <div className="text-xs font-medium text-muted-foreground">
                  {ans} / {total}
                </div>
              </div>
              <div className="divide-y divide-border">
                {ph.sections.map((sec) => (
                  <div key={sec.id} className="px-5 py-4">
                    <h3 className="text-sm font-semibold mb-3">{t(sec.title)}</h3>
                    <div className="space-y-4">
                      {sec.questions.map((q) => {
                        const answer = state.answers[q.id];
                        const note = state.notes[q.id];
                        if (!answer && !note) return null;
                        
                        return (
                          <div key={q.id} className="text-sm pl-4 border-l-2 border-border space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={cn(
                                  "px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-wide border uppercase",
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
                            <div className="font-medium text-foreground">{t(q.text)}</div>
                            <div className="flex flex-col gap-1.5 mt-2">
                              {answer && (
                                <div className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-muted text-muted-foreground w-fit">
                                  {q.options
                                    ? t(q.options.find((o) => o.value === answer)?.label ?? { sr: answer, en: answer })
                                    : t(ui.answers[answer as keyof typeof ui.answers]) || answer}
                                </div>
                              )}
                              {note && (
                                <div className="text-muted-foreground text-xs italic bg-muted/30 p-2 rounded">
                                  {note}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              {allAnswered && decision && (
                <div className={cn(
                  "px-5 py-4 border-t",
                  decision === "proceed" ? "bg-[color:var(--status-ok-bg)] border-[color:var(--status-ok)]/20" :
                  decision === "proceed_conditions" ? "bg-[color:var(--status-warn-bg)] border-[color:var(--status-warn)]/20" :
                  "bg-[color:var(--status-bad-bg)] border-[color:var(--status-bad)]/20"
                )}>
                  <h3 className={cn(
                    "font-semibold text-sm",
                    decision === "proceed" ? "text-[color:var(--status-ok)]" :
                    decision === "proceed_conditions" ? "text-[color:var(--status-warn)]" :
                    "text-[color:var(--status-bad)]"
                  )}>
                    {lang === "sr" ? "Automatska odluka (Phase-Gate): " : "Automated Phase-Gate Decision: "}
                    {lang === "sr" 
                      ? (decision === "proceed" ? "Nastavi" : decision === "proceed_conditions" ? "Nastavi uz uslove" : "Eskaliraj za dalju proveru")
                      : (decision === "proceed" ? "Proceed" : decision === "proceed_conditions" ? "Proceed with conditions" : "Escalate for further review")
                    }
                  </h3>
                  
                  {decision === "proceed_conditions" && (
                    <div className="mt-2 pt-2 border-t border-[color:var(--status-warn)]/20">
                      <h4 className="text-xs font-semibold text-[color:var(--status-warn)] mb-0.5">
                        {lang === "sr" ? "Preporuka" : "Recommendation"}
                      </h4>
                      <p className="text-xs text-foreground/80">
                        {lang === "sr" 
                          ? "Pređite na sledeću fazu, ali osigurajte da su identifikovani rizici (odgovori 'Ne' ili 'Delimično') adresirani u planu upravljanja ili eskalirani odgovornim stranama."
                          : "Move to the next phase, but ensure that the identified risks ('No' or 'Partly' answers) are addressed in the management plan or escalated to responsible parties."}
                      </p>
                    </div>
                  )}
                  
                  {decision === "escalate" && (
                    <div className="mt-2 pt-2 border-t border-[color:var(--status-bad)]/20">
                      <h4 className="text-xs font-semibold text-[color:var(--status-bad)] mb-0.5">
                        {lang === "sr" ? "Preporuka" : "Recommendation"}
                      </h4>
                      <p className="text-xs text-foreground/80">
                        {lang === "sr" 
                          ? "Privremeno zaustavite prelazak u sledeću fazu. Obavezno prikupite informacije za pitanja na koja je odgovoreno 'Nepoznato' i konsultujte stručnjake pre nego što nastavite."
                          : "Temporarily halt moving to the next phase. Gather information for questions answered 'Unknown' and consult subject matter experts before proceeding."}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

import { AppLayout } from "./AppLayout";
export function DossierPage({ currentPath }: { currentPath: string }) {
  return (
    <AppLayout currentPath={currentPath}>
      <DossierView />
    </AppLayout>
  );
}
