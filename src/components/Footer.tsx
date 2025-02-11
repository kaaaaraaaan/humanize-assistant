
import { HeartIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container flex items-center justify-center h-16 px-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <HeartIcon className="h-4 w-4 text-red-500" /> by the Content Humanizer Team
        </p>
      </div>
    </footer>
  );
};
