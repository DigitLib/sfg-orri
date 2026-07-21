import { useI18n, bi } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { BookOpen, Shield, Users, CheckCircle2 } from "lucide-react";

export function AboutView() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{t(ui.nav.about)}</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
          {t(ui.app.subtitle)}
        </p>
      </div>

      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p className="lead text-lg text-muted-foreground">
          {t(ui.about.lead)}
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-card border border-border rounded-xl p-5 shadow-card">
            <Shield className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">{t(ui.about.dataProtection)}</h3>
            <p className="text-sm text-muted-foreground">
              {t(ui.about.dataProtectionDesc)}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 shadow-card">
            <Users className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">{t(ui.about.ethicalApproach)}</h3>
            <p className="text-sm text-muted-foreground">
              {t(ui.about.ethicalApproachDesc)}
            </p>
          </div>
        </div>

        <div className="my-8 not-prose">
          <h2 className="text-lg font-semibold mb-3">
            {t(bi("Nivoi procene", "Assessment Tracks"))}
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {t(ui.phase.levelBeginner)}
              </div>
              <h4 className="text-sm font-semibold text-foreground">
                {t(bi("Brza provera (Fast-Track)", "Fast-Track Screening"))}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(bi("Za standardne projekte bez osetljivih podataka i AI alata (~10-15 min).", "For routine digitization without sensitive data or AI (~10-15 mins)."))}
              </p>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {t(ui.phase.levelIntermediate)}
              </div>
              <h4 className="text-sm font-semibold text-foreground">
                {t(bi("Standardni pregled", "Standard Review"))}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(bi("Za projekte javnog objavljivanja ili višekorisničke radne tokove (~30 min).", "For public release or multi-department workflows (~30 mins)."))}
              </p>
            </div>

            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                {t(ui.phase.levelExpert)}
              </div>
              <h4 className="text-sm font-semibold text-foreground">
                {t(bi("Potpuna revizija", "Full Audit"))}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(bi("Za AI projekte, osetljivo nasleđe ili eksternu obradu dobavljača.", "For AI-driven projects, sensitive heritage, or vendor systems."))}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">{t(ui.about.howToUse)}</h2>
        <ul className="space-y-4 not-prose">
          <li className="flex gap-3 bg-card border border-border rounded-xl p-4 shadow-sm">
            <div className="h-7 w-7 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0 font-bold text-xs">1</div>
            <div>
              <strong className="block text-sm font-semibold mb-0.5">{t(ui.about.step1Title)}</strong>
              <span className="text-xs text-muted-foreground leading-relaxed">{t(ui.about.step1Desc)}</span>
            </div>
          </li>
          <li className="flex gap-3 bg-card border border-border rounded-xl p-4 shadow-sm">
            <div className="h-7 w-7 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0 font-bold text-xs">2</div>
            <div>
              <strong className="block text-sm font-semibold mb-0.5">{t(ui.about.step2Title)}</strong>
              <span className="text-xs text-muted-foreground leading-relaxed">{t(ui.about.step2Desc)}</span>
            </div>
          </li>
          <li className="flex gap-3 bg-card border border-border rounded-xl p-4 shadow-sm">
            <div className="h-7 w-7 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0 font-bold text-xs">3</div>
            <div>
              <strong className="block text-sm font-semibold mb-0.5">{t(ui.about.step3Title)}</strong>
              <span className="text-xs text-muted-foreground leading-relaxed">{t(ui.about.step3Desc)}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

import { AppLayout } from "./AppLayout";
export function AboutPage({ currentPath }: { currentPath: string }) {
  return (
    <AppLayout currentPath={currentPath}>
      <AboutView />
    </AppLayout>
  );
}
