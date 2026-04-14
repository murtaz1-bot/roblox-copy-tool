import { AlertCircle, CheckCircle2, Copy, Gamepad2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function CopyTool() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCopy() {
    if (!url.trim()) {
      setError("Please enter a game URL first");
      inputRef.current?.focus();
      return;
    }
    setError("");
    navigator.clipboard.writeText(url.trim()).then(() => {
      setCopied(true);
      toast("Game copied!", {
        icon: <CheckCircle2 className="text-primary w-5 h-5" />,
        duration: 2500,
        description: "URL is now in your clipboard — go share it!",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleCopy();
    if (error) setError("");
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-3 mb-10"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 glow-cyan">
            <Gamepad2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display font-black text-4xl tracking-tight text-foreground uppercase">
            RBLX<span className="text-primary">•</span>SHARE
          </h1>
        </div>
        <p className="text-muted-foreground font-body text-base text-center max-w-xs">
          Paste any Roblox game link and instantly copy it to share with
          friends.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 0%, oklch(0.6 0.25 275 / 0.06) 0%, transparent 70%)",
        }}
      >
        {/* Grid decoration */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.04]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.6 0.25 275) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.25 275) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <label
          htmlFor="game-url"
          className="block font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-3"
        >
          Roblox Game URL
        </label>

        {/* Input + Button row */}
        <div className="flex gap-3 relative">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              id="game-url"
              data-ocid="game-url-input"
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError("");
              }}
              onKeyDown={handleKeyDown}
              placeholder="roblox.com/games/189707/bloxburg-rp"
              className={[
                "w-full px-4 py-3.5 rounded-xl bg-input border font-mono text-sm text-foreground",
                "placeholder:text-muted-foreground/50 outline-none transition-all duration-200",
                "focus:border-primary focus:glow-cyan",
                error
                  ? "border-destructive"
                  : "border-border hover:border-primary/50",
              ].join(" ")}
              aria-describedby={error ? "url-error" : undefined}
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <motion.button
            data-ocid="copy-btn"
            onClick={handleCopy}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={[
              "flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-black text-sm uppercase tracking-widest",
              "transition-all duration-200 cursor-pointer",
              copied
                ? "bg-primary text-primary-foreground glow-cyan"
                : "bg-accent text-accent-foreground glow-orange hover:brightness-110",
            ].join(" ")}
            aria-label="Copy game URL to clipboard"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Done
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.p
              id="url-error"
              role="alert"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 mt-3 text-destructive text-sm font-body"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Hint */}
        {!error && (
          <p className="mt-3 text-xs text-muted-foreground font-body">
            Tip: Press{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs border border-border">
              Enter
            </kbd>{" "}
            to copy instantly.
          </p>
        )}
      </motion.div>

      {/* Recent Games decorative */}
      <RecentGames />

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== "undefined" ? window.location.hostname : "",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
    </main>
  );
}

const POPULAR_GAMES = [
  { name: "Welcome to Bloxburg", url: "roblox.com/games/189707/bloxburg-rp" },
  { name: "Brookhaven RP", url: "roblox.com/games/1962086868/brookhaven-rp" },
  { name: "Adopt Me!", url: "roblox.com/games/920587237/adopt-me" },
  { name: "Royale High", url: "roblox.com/games/735030788/royale-high" },
];

function RecentGames() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  function handleGameClick(url: string, name: string) {
    setActiveUrl(url);
    navigator.clipboard.writeText(`https://www.${url}`).then(() => {
      toast(`${name} copied!`, {
        icon: <CheckCircle2 className="text-primary w-5 h-5" />,
        duration: 2500,
        description: "URL is now in your clipboard — go share it!",
      });
      setTimeout(() => setActiveUrl(null), 1500);
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full max-w-lg mt-8"
    >
      <h2 className="font-display font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3 px-1">
        Popular Games — Quick Copy
      </h2>
      <div className="grid grid-cols-2 gap-2.5">
        {POPULAR_GAMES.map((game, i) => (
          <motion.button
            key={game.url}
            data-ocid={`quick-game-${i}`}
            onClick={() => handleGameClick(game.url, game.name)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={[
              "flex flex-col items-start text-left px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer group",
              activeUrl === game.url
                ? "bg-primary/10 border-primary/50 glow-cyan"
                : "bg-card border-border hover:border-primary/40 hover:bg-primary/5",
            ].join(" ")}
          >
            <span className="font-display font-bold text-sm text-foreground leading-tight truncate w-full">
              {game.name}
            </span>
            <span className="font-mono text-xs text-muted-foreground truncate w-full mt-0.5">
              {game.url.split("/").slice(0, 3).join("/")}
            </span>
            <span
              className={[
                "mt-2 text-xs font-display font-bold uppercase tracking-wider transition-colors",
                activeUrl === game.url
                  ? "text-primary"
                  : "text-accent group-hover:text-accent/80",
              ].join(" ")}
            >
              {activeUrl === game.url ? "✓ Copied!" : "Copy link"}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
