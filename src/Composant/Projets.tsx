import { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import type { ProjetType } from "../types";

const PROJ_FILTERS = ["Tous", "Structures", "Modélisation", "Béton armé", "Plans", "Travaux pratiques"];

export default function Projets({ projets, onClose }: { projets: ProjetType[]; onClose: () => void }) {
  const { isDark } = useTheme();
  const [projFilter, setProjFilter] = useState("Tous");

  const bgCard   = isDark ? "bg-[#0a0a0a]" : "bg-white";
  const border   = isDark ? "border-[#14515c]/40" : "border-gray-200";
  const textMain = isDark ? "text-gray-100" : "text-[#14202B]";
  const textMut  = isDark ? "text-gray-400" : "text-gray-500";
  const tagBg    = isDark ? "bg-[#0B6E7F]/25 text-[#7fd0da]" : "bg-[#e5f1f3] text-[#0B6E7F]";
  const accent   = isDark ? "#3FB5C4" : "#0B6E7F";

  const filteredProjets = projFilter === "Tous" ? projets : projets.filter(p => p.Tag === projFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className={`flex flex-col rounded-xl ${isDark ? "bg-black" : "bg-[#F6F8F9]"} w-[90%] h-[90%] relative`}>
        <button onClick={onClose} aria-label="Fermer"
          className="self-end absolute top-2 right-3 z-10 px-4 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          ✕
        </button>

        <section className="px-6 md:px-[6%] py-14 overflow-y-auto">
          <div className="sticky top-0 bg-inherit pb-4 mb-4">
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textMain} mb-2`}>Projets académiques</h2>
            <p className={`${textMut} text-sm max-w-2xl mb-6`}>
              Études de structures menées en formation, du calcul analytique aux plans d'exécution.
            </p>
            <div className="flex flex-wrap gap-2">
              {PROJ_FILTERS.map(f => (
                <button key={f} onClick={() => setProjFilter(f)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all ${
                    projFilter === f ? "text-white border-transparent" : `${border} ${textMut}`
                  }`}
                  style={{ backgroundColor: projFilter === f ? accent : undefined }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProjets.map(p => (
              <div key={p.Id}
                className={`${bgCard} border ${border} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
                <div className="h-40 relative overflow-hidden" style={{ backgroundColor: p.color }}>
                  <img src={p.image} alt={p.Titre} className="w-full h-full object-cover"
                    onError={e => { e.currentTarget.style.display = "none"; }} />
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: "rgba(11,110,127,0.92)" }}>{p.Tag}</span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className={`font-bold text-base ${textMain} mb-1 leading-snug`}>{p.Titre}</h3>
                  <p className={`text-[11px] ${textMut} mb-3 italic`}>{p.contexte}</p>
                  <p className={`text-xs leading-relaxed ${textMut} mb-4`}>{p.detail}</p>
                  <div className={`grid grid-cols-3 gap-2 mb-4 py-3 border-y ${border}`}>
                    {p.chiffres.map(c => (
                      <div key={c.label} className="text-center">
                        <p className="text-sm font-extrabold leading-tight" style={{ color: accent }}>{c.val}</p>
                        <p className={`text-[9px] ${textMut} leading-tight mt-0.5`}>{c.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.techs.map(t => (
                      <span key={t} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagBg}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
