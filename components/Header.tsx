"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Sacrament Meeting Planner</h1>
        <div className="text-sm mt-2 sm:mt-0 opacity-90">
          <span>Harare Ward</span> | <span>{currentDate}</span>
        </div>
      </div>
    </header>
  );
}
