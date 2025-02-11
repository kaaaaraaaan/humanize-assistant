
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Content Humanizer</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <GithubIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
