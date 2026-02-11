export default function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-text/20 border-t-text rounded-full animate-spin" />
        <p className="text-sm text-text-muted">Loading admin...</p>
      </div>
    </div>
  );
}
