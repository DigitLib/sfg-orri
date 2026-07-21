import { useState } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Toaster } from "@/components/ui/sonner";
import { Sidebar } from "./Sidebar";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppLayout({ children, currentPath }: { children: ReactNode; currentPath: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <I18nProvider>
      <div className="flex h-screen print:h-auto bg-background overflow-hidden print:overflow-visible text-foreground selection:bg-primary/20 selection:text-primary relative print:block">
        
        {/* Mobile Header */}
        <div className="md:hidden absolute top-0 left-0 right-0 h-14 border-b border-border bg-background/95 backdrop-blur z-20 flex items-center justify-between px-4 print:hidden">
          <div className="font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            ORRI Alat
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Sidebar overlay for mobile */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30 print:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={cn(
          "fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 print:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <Sidebar currentPath={currentPath} />
        </div>

        {/* Main Content */}
        <main className="flex-1 h-full print:h-auto overflow-y-auto print:overflow-visible bg-muted/20 md:pt-0 pt-14 w-full">
          {children}
        </main>

        <Toaster />
      </div>
    </I18nProvider>
  );
}
