import { useState, useEffect } from "react";
import { phases, totalQuestions, type Phase, type Level } from "@/content/checklist";
import { getSkipFlags, isQuestionActive } from "@/lib/skipLogic";
import { useI18n } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { TrendingUp, CheckCircle2, Gauge, ListChecks, ArrowRight } from "lucide-react";

const BASE_URL = "/sfg-orri";
const ANSWER_VALUES = ["yes", "no", "partly", "na", "unknown"] as const;
type AnswerValue = (typeof ANSWER_VALUES)[number];

interface PhaseState {
  answers: Record<string, AnswerValue>;
  notes: Record<string, string>;
}

export function DashboardView() {
  const { t, lang } = useI18n();
  const [state, setState] = useState<PhaseState>({ answers: {}, notes: {} });
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

  const handleLevelChange = (level: Level) => {
    setUserLevel(level);
    localStorage.setItem("orri_user_level", level);
  };

  if (!mounted) return null;

  const skipFlags = getSkipFlags(state.answers);

  let totalQ = 0;
  let answeredCount = 0;

  phases.forEach((ph) => {
    ph.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        if (isQuestionActive(q, userLevel, skipFlags)) {
          totalQ++;
          if (state.answers[q.id]) {
            answeredCount++;
          }
        }
      });
    });
  });

  const pct = totalQ ? Math.round((answeredCount / totalQ) * 100) : 0;

  let gatesDone = 0;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{t(ui.app.title)}</h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
            {t(ui.app.subtitle)}
          </p>
        </div>
        <select
          value={userLevel}
          onChange={(e) => handleLevelChange(e.target.value as Level)}
          className="bg-card text-xs font-medium text-muted-foreground border border-border hover:border-primary/50 transition-colors rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer w-fit mt-1 sm:mt-0"
        >
          <option value="beginner">{lang === "sr" ? "Osnovni nivo" : "Basic Level"}</option>
          <option value="intermediate">{lang === "sr" ? "Srednji nivo" : "Intermediate Level"}</option>
          <option value="expert">{lang === "sr" ? "Potpuni nivo" : "Full Level"}</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard icon={TrendingUp} value={`${pct}%`} label={t(ui.project.progress)} sub={`${answeredCount}/${totalQ}`} />
        <StatCard icon={CheckCircle2} value={`${answeredCount}`} label={t(ui.project.answered)} sub={`/ ${totalQ}`} />
      </div>

      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t(ui.project.phases)}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((ph) => {
            const visibleQuestions = ph.sections.flatMap(sec => sec.questions.filter(q => isQuestionActive(q, userLevel, skipFlags)));
            const total = visibleQuestions.length;
            const ans = visibleQuestions.filter(q => state.answers[q.id]).length;
            const phasePct = total ? Math.round((ans / total) * 100) : 0;
            
            return (
              <a
                key={ph.id}
                href={`${BASE_URL}/phase-${ph.id}`}
                className="group bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/40 hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center text-sm font-semibold tabular-nums shrink-0">
                    {String(ph.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold leading-snug">{t(ph.title)}</div>
                  <div className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {t(ph.description)}
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5 tabular-nums">
                    <span>{ans}/{total}</span>
                    <span className="text-foreground font-medium">{phasePct}%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-[width] duration-500"
                      style={{ width: `${phasePct}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end text-xs text-primary font-medium gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t(ui.project.openPhase)} <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, value, label, sub }: any) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-card flex items-center gap-4">
      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold tabular-nums leading-none">{value}</span>
          {sub && <span className="text-xs font-medium text-muted-foreground">{sub}</span>}
        </div>
        <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-medium">{label}</div>
      </div>
    </div>
  );
}

import { AppLayout } from "./AppLayout";
export function DashboardPage({ currentPath }: { currentPath: string }) {
  return (
    <AppLayout currentPath={currentPath}>
      <DashboardView />
    </AppLayout>
  );
}
