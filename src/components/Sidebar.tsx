import { Home, Info, ScrollText, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { cn } from "@/lib/utils";

const BASE_URL = "/sfg-orri";

export function Sidebar({ currentPath }: { currentPath: string }) {
  const { t, lang, setLang } = useI18n();

  const links = [
    { href: `${BASE_URL}/`, icon: Home, label: t(ui.nav.home) },
    { href: `${BASE_URL}/about`, icon: Info, label: t(ui.nav.about) },
    { href: `${BASE_URL}/phase-0`, icon: CheckCircle2, label: lang === "en" ? "Phase 0" : "Faza 0" },
    { href: `${BASE_URL}/phase-1`, icon: CheckCircle2, label: lang === "en" ? "Phase 1" : "Faza 1" },
    { href: `${BASE_URL}/phase-2`, icon: CheckCircle2, label: lang === "en" ? "Phase 2" : "Faza 2" },
    { href: `${BASE_URL}/phase-3`, icon: CheckCircle2, label: lang === "en" ? "Phase 3" : "Faza 3" },
    { href: `${BASE_URL}/phase-4`, icon: CheckCircle2, label: lang === "en" ? "Phase 4" : "Faza 4" },
    { href: `${BASE_URL}/phase-5`, icon: CheckCircle2, label: lang === "en" ? "Phase 5" : "Faza 5" },
    { href: `${BASE_URL}/phase-6`, icon: CheckCircle2, label: lang === "en" ? "Phase 6" : "Faza 6" },
    { href: `${BASE_URL}/dossier`, icon: ScrollText, label: t(ui.nav.dossier) },
  ];

  return (
    <div className="w-64 border-r border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0 flex flex-col h-full overflow-y-auto">
      <div className="p-4 sm:p-6 pb-4 border-b border-border/50">
        <img src={`${BASE_URL}/Safeguard-logo.png`} alt="Safeguard Logo" className="w-full h-auto object-contain mb-4" />
        <h2 className="text-xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          {t(ui.app.title)}
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5 font-medium tracking-wide uppercase">
          {t(ui.app.subtitle)}
        </p>
      </div>

      <div className="p-4 flex-1 space-y-1">
        {links.map((link) => {
          const active = currentPath === link.href || currentPath === link.href + "/";
          return (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all group",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <link.icon className={cn("h-4 w-4", active ? "text-primary-foreground/90" : "text-muted-foreground group-hover:text-foreground")} />
              {link.label}
            </a>
          );
        })}
      </div>

      <div className="p-4 border-t border-border/50">
        <div className="flex bg-muted/50 p-1 rounded-lg">
          <button
            onClick={() => {
              setLang("en");
              window.location.reload();
            }}
            className={cn(
              "flex-1 text-xs font-semibold py-1.5 rounded-md transition-all",
              lang === "en" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            EN
          </button>
          <button
            onClick={() => {
              setLang("sr");
              window.location.reload();
            }}
            className={cn(
              "flex-1 text-xs font-semibold py-1.5 rounded-md transition-all",
              lang === "sr" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            SR
          </button>
        </div>
      </div>
    </div>
  );
}
