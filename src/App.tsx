import { useState } from "react";
import "./App.css";
import { GlassCard } from "./components/ui/GlassCard";

function App() {
  return (
    <div className="App bg-slate-500 min-h-screen p-4">
      <GlassCard>
        <h1 className="font-bold text-white text-2xl p-3">
          Bem vindo ao homelab
        </h1>
      </GlassCard>
    </div>
  );
}

export default App;
