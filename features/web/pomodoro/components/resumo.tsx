"use client";
import { useMemo } from "react";

export default function Resumo({
  tasks,
  tempoPomodoro,
}: {
  tasks: { name: string; done: number; total: number }[];
  tempoPomodoro: number;
}) {
  const data = useMemo(() => {
    return {
      feitos: 0,
      total: 0,
      concluido: 0,
      restante: 0,
    };
  }, [tasks, tempoPomodoro]);

  return (
    <div className="mt-6 w-full max-w-lg mx-auto border border-cyan-500 rounded-xl px-6 py-4 text-sm text-white flex flex-col sm:flex-row sm:justify-between items-center gap-2 bg-[#1f2127]">
    </div>
  );
}
