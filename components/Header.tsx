"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentDate = mounted
    ? new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sacrament Meeting Planner</h1>
        <div className="text-sm">{currentDate}</div>
      </div>
    </header>
  );
}
