
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-9xl font-bold text-accent mb-6">404</h1>
        <p className="text-xl mb-8">This page does not exist or has been moved.</p>
        <Button asChild className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="/">
            <ArrowLeft className="h-4 w-4" />
            Return to Dashboard
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
