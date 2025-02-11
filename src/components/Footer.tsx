
import { HeartIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900">
      <div className="container flex flex-col items-center justify-center py-8 px-4 space-y-2">
        <p className="text-sm text-muted-foreground flex items-center gap-1 animate-fade-in">
          Made with <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" /> by the Content Humanizer Team
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Content Humanizer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
