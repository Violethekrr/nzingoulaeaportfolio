import { useState } from "react";
import { FaTimes, FaUser, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaDraftingCompass, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

/* ─── TYPES ─── */
interface ProfilData {
  prenom: string; nom: string; nomComplet: string; titre: string;
  bio: string; disponibilite: string;
  email: string; telephone: string; localisation: string;
  github: string; 
  // linkedin: string;
  portfolio: string;
  formation: string; ecole: string; anneeFormation: string;
  bac: string; lyceeBac: string; anneeBac: string;
  experience: string; projets: string; passion: string;
  stackPrincipale: string[]; langages: string[];
  frameworks: string[]; outils: string[]; bases: string[]; adresse: string; niveau: string;
}

const defaultProfil: ProfilData = {
  prenom: "Eddy", nom: "NZINGOULA",
  nomComplet: "Eddy NZINGOULA",
  titre: "\u00c9l\u00e8ve ing\u00e9nieur g\u00e9nie civil",
  bio: "Master 2 G\u00e9nie Civil \u2014 Hydraulique, Ouvrages et Environnement \u00e0 Polytech Lille. De la descente de charges au plan de ferraillage, avec le calcul analytique et le mod\u00e8le num\u00e9rique qui se v\u00e9rifient l'un l'autre.",
  disponibilite: "Recherche un stage de fin d'\u00e9tudes",
  email: "nzingoulaeddy@gmail.com", telephone: "07 66 32 85 03",
  localisation: "Villeneuve d'Ascq (59650)",
  github: "\u00c0 compl\u00e9ter",
  // linkedin: "\u00c0 compl\u00e9ter",
  portfolio: "\u00c0 compl\u00e9ter",
  formation: "Master 2 G\u00e9nie Civil \u2014 Hydraulique, Ouvrages et Environnement",
  ecole: "Polytech Lille \u2014 Universit\u00e9 de Lille",
  anneeFormation: "2026 \u2014 2027",
  bac: "Baccalaur\u00e9at scientifique",
  lyceeBac: "\u00c9cole Catholique Cours Sainte Rita \u2014 Brazzaville, Congo", anneeBac: "2021",
  experience: "3 mois de chantier", projets: "5", passion: "Stage 2027",
  stackPrincipale: ["Calcul des structures", "B\u00e9ton arm\u00e9", "Hydraulique", "G\u00e9otechnique", "Mod\u00e9lisation", "Plans d'ex\u00e9cution"],
  langages: ["Descente de charges", "RDM", "Flexion", "Effort tranchant", "\u00c9lancement", "Fondations"],
  frameworks: ["AutoCAD", "Civil 3D", "Robot Structural Analysis", "Revit", "Excel"],
  outils: ["Eurocode 0", "Eurocode 1", "Eurocode 2", "ELU / ELS", "C25/30", "Acier HA 500"],
  bases: ["Fran\u00e7ais", "Lingala", "Kituba", "Anglais B1"],
  adresse: "Villeneuve d'Ascq, Nord (59)",
  niveau: "Master 2"
};

const TABS = [
  { id: "identite",  label: "Identité",  Icon: FaUser },
  { id: "contact",   label: "Contact",   Icon: FaEnvelope },
  { id: "formation", label: "Formation", Icon: FaGraduationCap },
  { id: "stack",     label: "Technique", Icon: FaDraftingCompass },
  { id: "stats",     label: "Stats",     Icon: FaBriefcase },
];

/* ─── FIELD ROW ─── */
function FieldRow({ label, value, textMain, textMut, border, bgCard }: {
  label: string; value: string;
  textMain: string; textMut: string; border: string; bgCard: string;
}) {
  return (
    <tr className={`border-b ${border} last:border-0 grid grid-cols-1 sm:grid-cols-7`}>
      <td className={`py-2 pr-5 text-xs font-semibold uppercase tracking-widest whitespace-nowrap w-36 sm:w-44 align-top ${textMut}`}>
        {label}
      </td>
      <td className="py-2 sm:col-span-6 ">
        <p className={`text-sm px-4 py-3 rounded-xl border ${border} ${bgCard} ${textMain} leading-relaxed`}>
          {value}
        </p>
      </td>
    </tr>
  );
}

/* ─── TAGS ROW ─── */
function TagsRow({ label, tags, tagBg, textMut, border }: {
  label: string; tags: string[];
  tagBg: string; textMut: string; border: string;
}) {
  return (
    <tr className={`border-b ${border} last:border-0`}>
      <td className={`py-4 pr-5 text-xs font-semibold uppercase tracking-widest whitespace-nowrap w-36 sm:w-44 align-top ${textMut}`}>
        {label}
      </td>
      <td className="py-4">
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <span key={t} className={`text-xs font-medium px-3 py-1.5 rounded-full ${tagBg}`}>{t}</span>
          ))}
        </div>
      </td>
    </tr>
  );
}

/* ══════════════════════════════════════════════════ */
export default function Profil({ onClose }: { onClose: () => void }) {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState("identite");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profil = defaultProfil;

  const accent   = isDark ? "#3FB5C4" : "#011C5F";
  const bgCard   = isDark ? "bg-[#0a0a0a]" : "bg-white";
  const bgSide   = isDark ? "bg-[#080808]" : "bg-[#f0f4f8]";
  const border   = isDark ? "border-[#14515c]/40" : "border-gray-200";
  const textMain = isDark ? "text-gray-100" : "text-[#0F172B]";
  const textMut  = isDark ? "text-gray-400" : "text-gray-500";
  const tagBg    = isDark ? "bg-[#011C5F]/25 text-[#7fd0da]" : "bg-[#e5f1f3] text-[#011C5F]";

  const sharedProps = { textMain, textMut, border, bgCard };

  const activeTabData = TABS.find(t => t.id === activeTab)!;

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  /* ── CONTENU ── */
  const renderTab = () => {
    switch (activeTab) {
      case "identite": return (
        <table className="w-full">
          <tbody>
          
            <FieldRow label="Nom complet"   value={profil.nomComplet}    {...sharedProps} />
            <FieldRow label="Adresse"       value={profil.adresse}       {...sharedProps} />
            <FieldRow label="Niveau"        value={profil.niveau}        {...sharedProps} />
            <FieldRow label="Titre"         value={profil.titre}         {...sharedProps} />
            <FieldRow label="Biographie"    value={profil.bio}           {...sharedProps} />
            <FieldRow label="Disponibilité" value={profil.disponibilite} {...sharedProps} />
          </tbody>
        </table>
      );
      case "contact": return (
        <table className="w-full">
          <tbody>
            <FieldRow label="Email"        value={profil.email}        {...sharedProps} />
            <FieldRow label="Téléphone"    value={profil.telephone}    {...sharedProps} />
            <FieldRow label="Localisation" value={profil.localisation} {...sharedProps} />
            <FieldRow label="Portfolio"    value={profil.portfolio}       {...sharedProps} />
            {/* <FieldRow label="LinkedIn"     value={profil.linkedin}     {...sharedProps} /> */}
            </tbody>
        </table>
      );
      case "formation": return (
        <table className="w-full">
          <tbody>
            <FieldRow label="Diplôme"   value={profil.formation}      {...sharedProps} />
            <FieldRow label="Établissement"     value={profil.ecole}  {...sharedProps} />
            <FieldRow label="Période"   value={profil.anneeFormation} {...sharedProps} />
            <FieldRow label="Bac"       value={profil.bac}            {...sharedProps} />
            <FieldRow label="Lycée"     value={profil.lyceeBac}       {...sharedProps} />
            <FieldRow label="Année Bac" value={profil.anneeBac}       {...sharedProps} />
          </tbody>
        </table>
      );
      case "stack": return (
        <table className="w-full">
          <tbody>
            <TagsRow label="Domaines"   tags={profil.stackPrincipale} tagBg={tagBg} {...sharedProps} />
            <TagsRow label="Calcul"     tags={profil.langages}        tagBg={tagBg} {...sharedProps} />
            <TagsRow label="Logiciels"  tags={profil.frameworks}      tagBg={tagBg} {...sharedProps} />
            <TagsRow label="Normes"     tags={profil.outils}          tagBg={tagBg} {...sharedProps} />
            <TagsRow label="Langues"    tags={profil.bases}           tagBg={tagBg} {...sharedProps} />
          </tbody>
        </table>
      );
      case "stats": return (
        <table className="w-full">
          <tbody>
            <FieldRow label="Terrain"          value={profil.experience} {...sharedProps} />
            <FieldRow label="Projets réalisés" value={profil.projets}    {...sharedProps} />
            <FieldRow label="Objectif"         value={profil.passion}    {...sharedProps} />
          </tbody>
        </table>
      );
      default: return null;
    }
  };

  /* ── NAV ITEMS (partagé sidebar + menu mobile) ── */
  const NavItems = () => (
    <>
      {TABS.map(tab => {
        const isActive = activeTab === tab.id;
        return (
          <button key={tab.id} onClick={() => handleTabSelect(tab.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold w-full transition-all
              ${isActive ? "text-white shadow-md" : `${textMut} hover:bg-white/5`}`}
            style={{ backgroundColor: isActive ? accent : undefined }}>
            <tab.Icon className="w-4 h-4 shrink-0" />
            {tab.label}
          </button>
        );
      })}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center  "
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`${bgCard} border ${border} rounded-3xl w-full sm:w-[90%] h-10 flex flex-col overflow-hidden`}
        style={{
          height: "clamp(540px, 90vh, 880px)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
        }}
        onClick={e => e.stopPropagation()}
      >

        {/* ── TOPBAR ── */}
        <div className={`flex relative items-center gap-3 px-5 sm:px-7 py-4 sm:py-0 border-b ${border} shrink-0`}>
          {/* Avatar */}
          <div className="sm:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden border-2 shrink-0"
            style={{ borderColor: `${accent}60` }}>
            <img src="eddy-pro.webp" alt="Profil" className="w-full h-full object-cover"
              onError={e => { e.currentTarget.style.display = "none"; }} />
          </div>
          <div className="sm:hidden flex-1 min-w-0">
            <p className={`font-extrabold text-sm sm:text-base ${textMain} truncate`}>{profil.prenom} {profil.nom}</p>
            <p className={`text-xs sm:text-sm ${textMut} truncate`}>{profil.titre}</p>
          </div>
          {/* Badge dispo — masqué sur très petit */}
          <div className="sm:hidden  xs:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0"
            style={{ backgroundColor: `${accent}18`, color: accent }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="hidden sm:inline">{profil.disponibilite}</span>
            <span className="sm:hidden">Disponible</span>
          </div>
          {/* Fermer */}
          <button onClick={onClose}
            className={`w-9 h-9 rounded-full absolute top-0 right-4 flex items-center justify-center border ${border} ${textMut} hover:text-red-400 hover:border-red-400 transition-colors shrink-0 ml-1`}>
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* ── BODY ── */}
        <div className="flex flex-1 overflow-hidden min-h-0">

          {/* ── SIDEBAR DESKTOP (sm+) ── */}
          <aside className={`hidden sm:flex flex-col ${bgSide} border-r ${border} w-52 lg:w-64 shrink-0 py-6 px-3 lg:px-4`}>
            {/* Mini carte */}
            <div className={`${bgCard} border ${border} rounded-2xl p-5 mb-5 text-center`}>
              <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-3 border-2"
                style={{ borderColor: `${accent}50` }}>
                <img src="eddy-pro.webp" alt="" className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.style.display = "none"; }} />
              </div>
              <p className={`font-extrabold text-sm ${textMain} leading-tight mb-0.5`}>{profil.prenom}</p>
              <p className={`text-xs ${textMut}`}>{profil.titre}</p>
            </div>

            {/* Tabs */}
            <nav className="flex flex-col gap-1.5 flex-1">
              <NavItems />
            </nav>

            {/* Quick contacts */}
            <div className={`pt-5 mt-4 border-t ${border} space-y-2.5`}>
              <a href={`mailto:${profil.email}`}
                className={`flex items-center gap-2 text-xs ${textMut} hover:opacity-70 transition-colors truncate`}>
                <FaEnvelope className="w-3 h-3 shrink-0" />
                <span className="truncate">{profil.email}</span>
              </a>
              {/* <a href="#Contact" target="_blank" rel="noreferrer"
                className={`flex items-center gap-2 text-xs ${textMut} hover:opacity-70 transition-colors truncate`}>
                <FaLinkedin className="w-3 h-3 shrink-0" />
                <span className="truncate">{profil.linkedin}</span>
              </a> */}
              <div className={`flex items-center gap-2 text-xs ${textMut} truncate`}>
                <FaMapMarkerAlt className="w-3 h-3 shrink-0" />
                <span className="truncate">{profil.localisation}</span>
              </div>
            </div>
          </aside>

          {/* ── CONTENU PRINCIPAL ── */}
          <main className="flex-1 overflow-y-auto flex flex-col min-w-0">

            {/* ── MENU BURGER MOBILE (sm-) ── */}
            <div className={`sm:hidden border-b ${border} shrink-0`}>
              <button
                onClick={() => setMobileMenuOpen(v => !v)}
                className={`w-full flex items-center justify-between px-5 py-4 ${textMain}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: accent }}>
                    <activeTabData.Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold">{activeTabData.label}</span>
                </div>
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}>
                  <FaChevronDown className={`w-4 h-4 ${textMut}`} />
                </motion.div>
              </button>

              {/* Menu déroulant mobile */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className={`${bgSide} border-t ${border} px-4 py-3 flex flex-col gap-1.5`}>
                     
                      <NavItems />
                      {/* Contacts rapides */}
                      <div className={`mt-2 pt-3 border-t ${border} flex flex-col gap-2`}>
                        <a href={`mailto:${profil.email}`}
                          className={`flex items-center gap-2 text-xs ${textMut}`}>
                          <FaEnvelope className="w-3 h-3 shrink-0" />
                          <span className="truncate">{profil.email}</span>
                        </a>
                        {/* <a href="#Contact" target="_blank" rel="noreferrer"
                          className={`flex items-center gap-2 text-xs ${textMut}`}>
                          <FaLinkedin className="w-3 h-3 shrink-0" />
                          <span>{profil.linkedin}</span>
                        </a> */}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── CONTENU ONGLET ── */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-7 lg:px-9 py-2">
              {/* Titre (desktop seulement — sur mobile c'est le bouton burger qui sert de titre) */}
              <div className={`hidden sm:flex items-center gap-3 mb-6 pb-5 border-b ${border}`}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: accent }}>
                  <activeTabData.Icon className="w-4 h-4" />
                </div>
                <div>
                  <h2 className={`text-lg font-extrabold tracking-tight ${textMain}`}>{activeTabData.label}</h2>
                  <p className={`text-xs ${textMut} mt-0.5`}>Informations du profil</p>
                </div>
              </div>

              {/* Tableau */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`${bgCard} border ${border} rounded-2xl overflow-hidden `}
                >
                  <div className="px-4 sm:px-6 py-2 overflow-x-auto">
                    {renderTab()}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats cards */}
              {activeTab === "stats" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="grid grid-cols-3 gap-4 mt-5"
                >
                  {[
                    { label: "Projets", val: profil.projets },
                    { label: "Terrain", val: profil.experience },
                    { label: "Objectif", val: profil.passion },
                  ].map(({ label, val }) => (
                    <div key={label} className={`${bgCard} border ${border} rounded-2xl p-5 sm:p-7 text-center`}>
                      <p className="text-3xl sm:text-4xl font-extrabold mb-1.5" style={{ color: accent }}>{val}</p>
                      <p className={`text-xs ${textMut}`}>{label}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </motion.div>
    </motion.div>
  );
}