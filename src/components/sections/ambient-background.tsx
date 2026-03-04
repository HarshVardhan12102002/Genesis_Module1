export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 left-[-120px] h-80 w-80 rounded-full bg-violet-500/25 blur-[120px]" />
      <div className="absolute right-[-140px] top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-[-80px] left-1/3 h-72 w-72 rounded-full bg-amber-300/10 blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_45%)]" />
    </div>
  );
}
