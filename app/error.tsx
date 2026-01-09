"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-slate-800">Something went wrong!</h2>
      <button onClick={() => reset()} className="text-slate-100 cursor-pointer transition-colors bg-slate-800 px-3 py-1 rounded-md">Try again</button>
      <p className="text-slate-600">{error.message || "Something went wrong"}</p>

    </div>
  );
}
