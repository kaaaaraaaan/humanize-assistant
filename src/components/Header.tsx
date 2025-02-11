
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-fade-in">
            Content Humanizer
          </span>
        </div>
        <nav className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("https://github.com", "_blank")}
            className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub repository</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};
