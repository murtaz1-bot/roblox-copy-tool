import CopyTool from "@/components/CopyTool";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background flex flex-col">
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            toast:
              "bg-card border border-primary/40 text-foreground shadow-lg glow-cyan",
            title: "font-display font-bold text-foreground",
            description: "text-muted-foreground",
            icon: "text-primary",
          },
        }}
      />
      <CopyTool />
    </div>
  );
}
