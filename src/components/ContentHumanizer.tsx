
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContentHumanizer = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const maxChars = 2000;

  const handleHumanize = async () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to humanize.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/humanize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      if (!response.ok) throw new Error("Failed to humanize content");

      const data = await response.json();
      setOutput(data.humanizedText);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to humanize the content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-fade-in">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-muted-foreground">
            Original Text
          </label>
          <span className="text-xs text-muted-foreground">
            {input.length}/{maxChars}
          </span>
        </div>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, maxChars))}
          placeholder="Enter your text here..."
          className="min-h-[200px] resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleHumanize}
          disabled={isLoading || !input.trim()}
          className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Humanizing...
            </>
          ) : (
            "Humanize"
          )}
        </Button>
      </div>

      {output && (
        <div className="space-y-2 animate-slide-up">
          <label className="text-sm font-medium text-muted-foreground">
            Humanized Result
          </label>
          <div className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm">
            <p className="text-foreground whitespace-pre-wrap">{output}</p>
          </div>
        </div>
      )}
    </div>
  );
};
