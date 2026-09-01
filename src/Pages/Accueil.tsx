import { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHardHat,
  FaBuilding,
  FaDraftingCompass,
  FaRulerCombined,
  FaCubes,
  FaCalculator,
  FaWater,
  FaMountain,
  FaLayerGroup,
  FaProjectDiagram,
  FaTools,
  FaBookOpen,
  FaTable,
  FaClipboardCheck,
  FaGraduationCap,
  FaMoon,
  FaSun,
  FaIdCard,
  FaPlayCircle,
  FaPauseCircle,
  FaImages,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";
import Projets from "../Composant/Projets";
import Profil from "../Composant/Profil";
import type { ProjetType } from "../types";

/* =========================================================
   ASSETS PLACÉS DANS /public
   =========================================================
   /logo-eddy.png
   /eddy-pro.png
   /travail-equipe-laptop.jpeg
   /atelier-treillis.jpeg
   /atelier-structure-1.mp4
   /atelier-structure-2.mp4

   Assets déjà existants dans ton portfolio :
   /bat.jpg
   /r7-batiment.jpg
   /r7-charges.jpg
   /r7-poteau.jpg
   /r7-plans.jpg
   /r7-modele.jpg
   /CV-Eddy-Nzingoula.pdf
========================================================= */
const LOGO_COLORS = {
  navy: "#011C5F",
  deepBlue: "#011C5F",
  blue: "#011C5F",
  lightBlue: "#011C5F",
  cyan: "#011C5F",
  gradient: "#011C5F",
  nav: '#015CE1'
};
const OUTILS = [
  {
    label: "AutoCAD",
    Icon: FaDraftingCompass,
    color: "#E51050",
  },
  {
    label: "Civil 3D",
    Icon: FaMountain,
    color: "#C0008F",
  },
  {
    label: "Robot SA",
    Icon: FaCalculator,
    color: "#D7194A",
  },
  {
    label: "Revit",
    Icon: FaCubes,
    color: "#1F6BFF",
  },
  {
    label: "Excel",
    Icon: FaTable,
    color: "#217346",
  },
  {
    label: "Eurocodes",
    Icon: FaBookOpen,
    color: "#005EA8",
  },
];



const PPE = "Projet Professionnel Étudiant — Polytech Lille, 2025-2026";

const projetsData: ProjetType[] = [
  {
    Id: 1,
    Titre: "Bâtiment R+7 — Descente de charges",
    Tag: "Structures",
    contexte: PPE + " · encadrement Mme Bakelli · trinôme",
    detail:
      "Étude structurale complète d'un immeuble d'habitation de huit niveaux en béton armé implanté dans la Métropole Européenne de Lille. Quantification et acheminement des actions gravitationnelles depuis la toiture-terrasse jusqu'aux fondations, sur une ossature poteaux-poutres à dalles pleines et transmission unidirectionnelle.",
    chiffres: [
      { val: "R+7", label: "niveaux étudiés" },
      { val: "28", label: "poteaux par niveau" },
      { val: "Zone 2", label: "sismicité" },
    ],
    techs: ["Eurocode 0", "Eurocode 1", "Béton armé", "ELU / ELS"],
    image: "/r7-batiment.webp",
    color: LOGO_COLORS.navy,
  },
  {
    Id: 2,
    Titre: "Modélisation numérique du R+7",
    Tag: "Modélisation",
    contexte: PPE + " · phase numérique",
    detail:
      "Construction du modèle éléments finis complet sous Robot Structural Analysis Pro : géométrie des huit étages, définition des cas de charge permanents et d'exploitation, murs et cloisons, puis exploitation des réactions d'appui pour confronter la descente de charges numérique aux calculs analytiques menés à la main.",
    chiffres: [
      { val: "1 115 kN", label: "N ELU en pied de poteau" },
      { val: "6", label: "cas de charge" },
      { val: "8", label: "étages modélisés" },
    ],
    techs: ["Robot Structural Analysis", "Éléments finis", "Cas de charge"],
    image: "/r7-charges.webp",
    color: LOGO_COLORS.deepBlue,
  },
  {
    Id: 3,
    Titre: "Dimensionnement des éléments porteurs",
    Tag: "Béton armé",
    contexte: PPE + " · calculs analytiques Eurocode 2",
    detail:
      "Pré-dimensionnement puis dimensionnement manuel aux états limites de chaque famille d'éléments : poutres continues en flexion et effort tranchant, poteaux en compression avec vérification de l'élancement, dalles pleines et semelles isolées. Béton C25/30 et armatures à haute adhérence HA 500.",
    chiffres: [
      { val: "1 900 kN", label: "charge en pied de poteau" },
      { val: "50×50", label: "section poteau (cm)" },
      { val: "264 cm", label: "côté de semelle isolée" },
    ],
    techs: ["Eurocode 2", "C25/30", "Acier HA 500", "Ferraillage"],
    image: "/r7-poteau.webp",
    color: LOGO_COLORS.navy,
  },
  {
    Id: 4,
    Titre: "Plans d'exécution et ferraillage",
    Tag: "Plans",
    contexte: PPE + " · livrables graphiques",
    detail:
      "Production des plans d'exécution de l'ensemble des éléments : poutres, dalles, poteaux et semelles isolées, avec coupes, cartouches, nomenclatures d'armatures et quantitatifs béton et acier. Livrable directement exploitable pour un chiffrage ou une préparation de chantier.",
    chiffres: [
      { val: "4 340 kg", label: "acier HA 500, dalle" },
      { val: "50,1 m³", label: "béton, dalle" },
      { val: "41", label: "positions d'armature" },
    ],
    techs: ["Plans de coffrage", "Nomenclature", "AutoCAD", "Robot SA"],
    image: "/r7-plans.webp",
    color: LOGO_COLORS.deepBlue,
  },
  {
    Id: 5,
    Titre: "Poutre treillis en spaghetti",
    Tag: "Travaux pratiques",
    contexte: "Travaux pratiques de résistance des matériaux — Polytech Lille",
    detail:
      "Conception et réalisation en équipe d'une poutre treillis à échelle réduite en spaghetti. Recherche du meilleur rapport résistance sur masse par triangulation systématique des panneaux, soin apporté à la qualité des nœuds collés, puis mise en charge progressive jusqu'à rupture pour confronter le mode de ruine observé aux prévisions.",
    chiffres: [
      { val: "Treillis", label: "typologie étudiée" },
      { val: "Nœuds", label: "point critique identifié" },
      { val: "Équipe", label: "conception collective" },
    ],
    techs: ["RDM", "Treillis", "Essai de rupture", "Travail en équipe"],
    image: "/treillis.webp",
    color: LOGO_COLORS.navy,
  },
];

const experiencesData = [
  {
    Id: 1,
    annee: "Avril — Juin 2025",
    Titre: "Société RAMI Rénovation",
    Poste: "Stage ouvrier — second œuvre · 2 mois",
    Icon: FaHardHat,
    Badge: "Chantier",
    BadgeColor: "bg-black/10 text-black dark:bg-white/10 dark:text-white",
    detail:
      "Immersion complète sur des chantiers de rénovation de bâtiment. Participation aux travaux de second œuvre, préparation des supports et finitions, application des consignes d'exécution et des règles de sécurité. Une expérience qui donne une lecture concrète du séquencement d'un chantier et des contraintes réelles de mise en œuvre, souvent absentes des notes de calcul.",
    competences: [
      "Second œuvre",
      "Lecture de consignes",
      "Sécurité chantier",
      "Travail en équipe",
      "Rigueur d'exécution",
    ],
  },
  {
    Id: 2,
    annee: "Septembre 2023",
    Titre: "Burger King",
    Poste: "Équipier polyvalent",
    Icon: FaClipboardCheck,
    Badge: "Job étudiant",
    BadgeColor: "bg-black/10 text-black dark:bg-white/10 dark:text-white",
    detail:
      "Prise de commande au drive et en borne, encaissement. Travail en cadence soutenue, en équipe, avec une exigence de fiabilité sur chaque opération.",
    competences: ["Cadence", "Relation client", "Fiabilité"],
  },
];

const formationsData = [
  {
    annee: "2026 — 2027",
    titre: "Master 2 Génie Civil — Hydraulique, Ouvrages et Environnement",
    lieu: "Polytech Lille — Université de Lille",
  },
  {
    annee: "2025 — 2026",
    titre: "Master 1 Génie Civil — parcours généraliste",
    lieu: "Polytech Lille — Université de Lille",
  },
  {
    annee: "2023 — 2025",
    titre: "Licence Génie Civil",
    lieu: "Université de Lille",
  },
  {
    annee: "2022 — 2023",
    titre: "Licence Sciences Exactes et Sciences pour l'Ingénieur (SESI)",
    lieu: "Université de Lille",
  },
  {
    annee: "2021",
    titre: "Baccalauréat scientifique",
    lieu: "École Catholique Cours Sainte Rita — Brazzaville, Congo",
  },
];

const skillsData = [
  {
    Titre: "Calcul des structures",
    Icon: FaCalculator,
    Detail: "RDM · descente de charges · Eurocode 2",
  },
  {
    Titre: "Béton armé",
    Icon: FaBuilding,
    Detail: "Poutres · poteaux · dalles · semelles",
  },
  {
    Titre: "Géotechnique",
    Icon: FaMountain,
    Detail: "Mécanique des sols · fondations",
  },
  {
    Titre: "Hydraulique",
    Icon: FaWater,
    Detail: "En charge · surface libre · ouvrages",
  },
  {
    Titre: "Modélisation",
    Icon: FaProjectDiagram,
    Detail: "Robot Structural Analysis · éléments finis",
  },
  {
    Titre: "DAO et BIM",
    Icon: FaDraftingCompass,
    Detail: "AutoCAD · Civil 3D · Revit",
  },
  {
    Titre: "Plans d'exécution",
    Icon: FaRulerCombined,
    Detail: "Coffrage · ferraillage · nomenclature",
  },
  {
    Titre: "Chantier",
    Icon: FaHardHat,
    Detail: "Second œuvre · lecture de plans · sécurité",
  },
];

const domainesData = [
  {
    Icon: FaBuilding,
    Titre: "Structures béton armé",
    Detail:
      "Descente de charges, dimensionnement aux Eurocodes et ferraillage des éléments porteurs.",
  },
  {
    Icon: FaWater,
    Titre: "Ouvrages hydrauliques",
    Detail:
      "Dimensionnement d'ouvrages, hydrologie et gestion des eaux pluviales.",
  },
  {
    Icon: FaMountain,
    Titre: "Géotechnique",
    Detail:
      "Étude des sols et choix du système de fondation adapté au contexte.",
  },
  {
    Icon: FaProjectDiagram,
    Titre: "Modélisation numérique",
    Detail:
      "Modèles éléments finis sous Robot et confrontation aux calculs analytiques.",
  },
  {
    Icon: FaLayerGroup,
    Titre: "Production graphique",
    Detail:
      "Plans de coffrage, plans de ferraillage, nomenclatures et quantitatifs.",
  },
  {
    Icon: FaTools,
    Titre: "Appui au chantier",
    Detail:
      "Lecture de plans, suivi de travaux et contrôle de conformité d'exécution.",
  },
];

const aproposData = [
  {
    Id: 1,
    Titre: "Formation",
    detail:
      "Master 2 Génie Civil — Hydraulique, Ouvrages et Environnement, Polytech Lille",
  },
  {
    Id: 2,
    Titre: "Recherche",
    detail:
      "Stage de fin d'études de six mois en bureau d'études, à partir de février 2027",
  },
  {
    Id: 3,
    Titre: "Spécialité",
    detail:
      "Hydraulique · ouvrages · environnement · calcul de structures",
  },
  {
    Id: 4,
    Titre: "Logiciels",
    detail: "AutoCAD · Civil 3D · Robot Structural Analysis · Revit",
  },
  {
    Id: 5,
    Titre: "Langues",
    detail: "Français · lingala · kituba · anglais B1",
  },
  {
    Id: 6,
    Titre: "Mobilité",
    detail:
      "Basé à Villeneuve d'Ascq, mobile sur toute la région et au-delà",
  },
];

const competencesData = [
  { Id: 1, Titre: "Méthode de calcul rigoureuse" },
  { Id: 2, Titre: "Lecture et production de plans" },
  { Id: 3, Titre: "Confrontation analytique / numérique" },
  { Id: 4, Titre: "Travail en équipe projet" },
  { Id: 5, Titre: "Application des Eurocodes" },
  { Id: 6, Titre: "Sens du terrain et du chantier" },
];

const philosophieData = [
  { Id: 1, Titre: "Vérifier plutôt que supposer" },
  { Id: 2, Titre: "Comprendre l'ouvrage avant de le calculer" },
  { Id: 3, Titre: "Une note de calcul doit être relisible" },
  { Id: 4, Titre: "Le chantier corrige toujours la théorie" },
  { Id: 5, Titre: "Sécurité et durabilité d'abord" },
  { Id: 6, Titre: "Apprendre de chaque encadrant" },
];

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil", id: "accueil" },
  { label: "Projets", href: "#Projets", id: "Projets" },
  { label: "En action", href: "#EnAction", id: "EnAction" },
  { label: "Compétences", href: "#Competences", id: "Competences" },
  { label: "Domaines", href: "#Domaines", id: "Domaines" },
  { label: "Parcours", href: "#Experiences", id: "Experiences" },
  { label: "Formation", href: "#Formations", id: "Formations" },
  { label: "À propos", href: "#APropos", id: "APropos" },
  { label: "Contact", href: "#Contact", id: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.09 } },
};

function SectionLabel({
  children,
  accent,
}: {
  children: string;
  accent: string;
}) {
  return (
    <p
      className="mb-1 text-xs font-semibold uppercase tracking-widest"
      style={{ color: accent }}
    >
      {children}
    </p>
  );
}

function Divider({ accent }: { accent: string }) {
  return (
    <div
      className="mx-6 h-px md:mx-[6%]"
      style={{ backgroundColor: `${accent}33` }}
    />
  );
}

export default function Accueil() {
  const { isDark, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projet, setProjet] = useState(false);
  const [vue, setVue] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [contactForm, setContactForm] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Contrôle personnalisé de la vidéo 2 :
  // aucun contrôle audio n'est exposé et le volume reste forcé à zéro.
  const atelierStructure2Ref = useRef<HTMLVideoElement>(null);
  const [atelierStructure2Playing, setAtelierStructure2Playing] = useState(false);

  const toggleAtelierStructure2 = async () => {
    const video = atelierStructure2Ref.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Impossible de lire atelier-structure-2 :", error);
      }
    } else {
      video.pause();
    }
  };

  const accent = isDark ? "#FFFFFF" : "#000000";
  const bg = isDark ? "bg-black" : "bg-[#F6F8F9]";
  const bgNav = isDark ? "bg-black/95" : "bg-[#F6F8F9]/95";
  const bgCard = isDark ? "bg-gray-950" : "bg-white";
  const border = isDark
    ? "border-white/15"
    : "border-black/15";
  const textMain = isDark ? "text-gray-100" : "text-black";
  const textMut = isDark ? "text-gray-400" : "text-gray-500";
  const tagBg = isDark
    ? "bg-white/10 text-white"
    : "bg-black/5 text-black";

  const inputCls = `w-full text-sm px-4 py-3 rounded-xl border ${border} ${bgCard} ${textMain} outline-none focus:ring-1 focus:ring-black/20 transition`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = NAV_LINKS.map((link) => link.id);

      for (const id of [...sections].reverse()) {
        if (id === "accueil") {
          if (window.scrollY < 200) {
            setActiveSection("accueil");
            break;
          }
          continue;
        }

        const element = document.getElementById(id);

        if (element && window.scrollY >= element.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    const { nom, email, message } = contactForm;

    const mailto =
      `mailto:nzingoulaeddy@gmail.com` +
      `?subject=${encodeURIComponent(`Message de ${nom}`)}` +
      `&body=${encodeURIComponent(
        `Nom: ${nom}\nEmail: ${email}\n\n${message}`
      )}`;

    window.location.href = mailto;

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1000);
  };

  return (
    <div
      className={`${bg} ${textMain} min-h-screen font-sans transition-colors duration-300`}
      style={{
        backgroundImage: `
          linear-gradient(${isDark ? "rgba(255,255,255,0.035)" : "rgba(1,28,95,0.035)"} 1px, transparent 1px),
          linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.035)" : "rgba(1,28,95,0.035)"} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {projet && (
        <Projets
          projets={projetsData}
          onClose={() => setProjet(false)}
        />
      )}

      {vue && <Profil onClose={() => setVue(false)} />}

      <motion.button
        onClick={() => setVue(true)}
        aria-label="Ouvrir la fiche profil"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-5 right-5 z-20 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-105"
        style={{ background: LOGO_COLORS.gradient }}
      >
        <FaIdCard className="h-5 w-5" />
      </motion.button>

      {/* NAVBAR */}
      <header
        className={`fixed z-50 flex w-full items-center justify-between border-b ${border} ${bgNav} px-4 py-2.5 transition-shadow md:px-[4%] ${
          scrolled ? "shadow-md backdrop-blur" : ""
        }`}
      >
        <a
          href="#accueil"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo-eddy.png"
            alt="Logo Eddy Anderson NZINGOULA"
            className="h-9 w-9 shrink-0 object-contain md:h-10 md:w-10"
          />

          <div className="hidden min-w-0 sm:block">
            <p
              className={`truncate text-xs font-extrabold tracking-[0.16em] ${textMain}`}
            >
              EDDY ANDERSON NZINGOULA
            </p>
            <p className={`truncate text-[10px] ${textMut}`}>
              Génie civil · Structures & ouvrages
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-3 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative pb-0.5 text-[13px] font-medium transition-colors
                  after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:transition-all after:duration-300
                  ${isActive ? "font-semibold after:w-full" : "after:w-0"}`}
                style={{
                  color: isActive
                    ? LOGO_COLORS.nav
                    : isDark
                    ? "#ffffff"
                    : LOGO_COLORS.navy,
                }}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="#Contact"
            className="rounded-lg px-4 py-2 text-[13px] font-semibold text-white"
            style={{ background: LOGO_COLORS.gradient }}
          >
            Me contacter
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className={`rounded-full border p-2 ${border}`}
          >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className={`rounded-full border p-1.5 ${border}`}
          >
            {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <button
            className="text-xl font-bold"
            style={{ color: accent }}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className={`fixed left-0 right-0 top-[60px] z-40 flex flex-col gap-2 border-b ${border} ${bgCard} px-6 py-4 lg:hidden`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-1 text-sm font-medium ${
                activeSection === link.id ? "font-semibold" : textMut
              }`}
              style={{
                color:
                  activeSection === link.id ? accent : undefined,
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#Contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 w-fit rounded-lg px-4 py-1.5 text-center text-sm font-semibold text-white"
            style={{ background: LOGO_COLORS.gradient }}
          >
            Me contacter
          </a>
        </div>
      )}

      <div className="pt-[60px]">
        {/* HERO */}
        <section
          id="accueil"
          className="relative min-h-[560px] md:min-h-[600px] overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="/bat.webp"
              alt=""
              className="h-full w-full scale-[1.03] object-cover"
              style={{ filter: "blur(2px)" }}
            />

                      {/* Overlay principal */}
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.72) 100%)"
                  : "linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.28) 100%)",
              }}
            />

            {/* Dégradé inférieur */}
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? "linear-gradient(to top, rgba(0,0,0,0.78), transparent 52%)"
                  : "linear-gradient(to top, rgba(0,0,0,0.38), transparent 52%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto grid min-h-[560px] md:min-h-[600px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:px-[6%] lg:grid-cols-2 lg:gap-14">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-xl"
            >
              <motion.div
                variants={fadeUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur sm:text-xs"
              >
                <span className={`h-2 w-2 animate-pulse rounded-full ${isDark ? "bg-white" : "bg-black"}`} />
                Recherche un stage de fin d'études
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/75 sm:text-xs"
              >
                EDDY ANDERSON NZINGOULA
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mb-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Je calcule et
                <br />
                dimensionne des{" "}
                <span className={isDark ? "text-white" : "text-[#011C5F]"}>
                  ouvrages
                </span>
                <br />
                en béton armé.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mb-6 max-w-md text-sm leading-6 text-white/80"
              >
                Master 2 Génie Civil — Hydraulique, Ouvrages et
                Environnement à Polytech Lille. Calcul,
                dimensionnement, modélisation numérique et lecture
                concrète du chantier.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-2.5"
              >
                <a
                  href="#Projets"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 bg-[#011C5F] text-xs font-semibold text-white shadow-lg transition-opacity hover:opacity-90 sm:text-sm"
                
                >
                  Voir mes projets →
                </a>

                <a
                  href="/CV-Eddy-Nzingoula.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-black/15 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:text-sm"
                >
                  <FaFilePdf />
                  Télécharger le CV
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex min-h-[340px] items-center justify-center"
            >
              <div className="relative flex items-end justify-center gap-3 sm:gap-4">
                {/* Portrait principal */}
                <div
                  className="relative z-10 h-[320px] w-[205px] shadow-xl shrink-0 overflow-hidden rounded-[26px] border border-white/15 sm:h-[360px] sm:w-[235px]"
                  
                >
                  <img
                    src="/eddy-pro.webp"
                    alt="Portrait professionnel d'Eddy Anderson NZINGOULA"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />

                 

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      Génie civil
                    </p>
                    <p className="text-lg font-extrabold text-white">
                      Structures · Hydraulique
                    </p>
                  </div>
                </div>

                {/* Deuxième portrait */}
                <motion.div
                  initial={{ opacity: 0, x: 25}}
                  animate={{ opacity: 1, x: 0}}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="relative hidden  h-[245px] w-[155px] shrink-0 overflow-hidden rounded-[24px] border border-white/15 sm:block"
                  style={{
                    boxShadow:
                      "0 18px 45px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src="/eddy.webp"
                    alt="Eddy Anderson NZINGOULA"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 h-20"
                   
                  />

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                      Profil
                    </p>
                    <p className="text-sm font-extrabold text-white">
                      Eddy Anderson NZINGOULA
                    </p>
                  </div>
                </motion.div>
              </div>

              <div
                className={`absolute hidden lg:block right-0 sm:left-120 bottom-4 z-50 w-[175px] overflow-hidden rounded-2xl border ${border} ${bgCard} shadow-2xl  lg:-right-2`}
              >
                <img
                  src="/r7-modele.webp"
                  alt="Modèle numérique du bâtiment"
                  className="h-[112px] w-full object-cover"
                />

                <div className="p-3">
                  <p
                    className={`mb-1 text-[9px] font-semibold ${textMut}`}
                  >
                    MODÈLE NUMÉRIQUE
                  </p>
                  <p
                    className={`text-[11px] font-bold ${textMain}`}
                  >
                    Robot · Revit · AutoCAD
                  </p>
                </div>
              </div>

              <div
                className={`absolute hidden lg:block -left-2 bottom-10 z-50 rounded-2xl border ${border} ${bgCard} px-4 py-3 shadow-xl `}
              >
                <p
                  className={`text-3xl font-extrabold ${textMain}`}
                >
                  R+7
                </p>
                <p className={`text-[10px] ${textMut}`}>
                  bâtiment dimensionné
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LOGICIELS */}
        <div
          className={`border-y ${border} px-6 py-5 md:px-[6%]`}
        >
          <p
            className={`mb-3 text-[12px] font-semibold uppercase tracking-widest ${textMut}`}
          >
            Logiciels et référentiels
          </p>

          <div className="flex flex-wrap gap-3">
            {OUTILS.map(({ label, Icon, color }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-1"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${border} ${bgCard}  transition-colors`}
                >
                  <Icon size={18} style={{ color: color }} />
                </div>

                <span className={`text-[11px] ${textMut}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROJETS */}
        <section id="Projets" className="px-6 py-16 md:px-[6%]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>Réalisations</SectionLabel>

              <div className="mb-4 flex items-end justify-between">
                <h2
                  className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
                >
                  Projets académiques
                </h2>

                {projetsData.length > 6 && (
                  <button
                    className={`my-auto cursor-pointer py-2 pb-1 transition-transform duration-300 hover:scale-105 ${textMain}`}
                    onClick={() => setProjet((value) => !value)}
                  >
                    Voir tous les projets →
                  </button>
                )}
              </div>

              <p
                className={`mb-8 max-w-2xl text-sm ${textMut}`}
              >
                Les quatre premières cartes sont les phases
                successives d'une même étude menée en trinôme sur un
                immeuble R+7 : descente de charges, modélisation,
                dimensionnement et plans d'exécution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projetsData.map((projetItem, index) => (
                <motion.div
                  key={projetItem.Id}
                  variants={fadeUp}
                  custom={index}
                  className={`flex flex-col overflow-hidden rounded-2xl border ${border} ${bgCard} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className="relative h-44 overflow-hidden"
                    style={{ backgroundColor: projetItem.color }}
                  >
                    <img
                      src={projetItem.image}
                      alt={projetItem.Titre}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <span
                      className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                      style={{
                        backgroundColor: isDark ? "rgba(255,255,255,0.16)" : "rgba(1,28,95,0.90)",
                      }}
                    >
                      {projetItem.Tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3
                      className={`mb-1 text-base font-bold leading-snug ${textMain}`}
                    >
                      {projetItem.Titre}
                    </h3>

                    <p
                      className={`mb-3 text-[11px] italic ${textMut}`}
                    >
                      {projetItem.contexte}
                    </p>

                    <p
                      className={`mb-4 text-xs leading-relaxed ${textMut}`}
                    >
                      {projetItem.detail}
                    </p>

                    <div
                      className={`mb-4 grid grid-cols-3 gap-2 border-y py-3 ${border}`}
                    >
                      {projetItem.chiffres.map((chiffre) => (
                        <div
                          key={chiffre.label}
                          className="text-center"
                        >
                          <p
                            className="text-sm font-extrabold leading-tight"
                            style={{ color: accent }}
                          >
                            {chiffre.val}
                          </p>

                          <p
                            className={`mt-0.5 text-[9px] leading-tight ${textMut}`}
                          >
                            {chiffre.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {projetItem.techs.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagBg}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider accent={accent} />

        {/* EN ACTION — PHOTOS + VIDÉOS */}
        <section id="EnAction" className="px-6 py-10 md:px-[6%] md:py-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>En action</SectionLabel>

              <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2
                    className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
                  >
                    Travail en équipe & expérimentation
                  </h2>

                  <p
                    className={`mt-2 max-w-2xl text-sm leading-relaxed ${textMut}`}
                  >
                    Quelques réalisations et situations de travail à Polytech
                    Lille : présentation d'un projet individuel, échanges
                    techniques, fabrication d'un treillis expérimental et
                    mise en pratique des notions étudiées en cours.
                  </p>
                </div>

                <div
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${border} ${bgCard} ${textMut}`}
                >
                  <FaImages style={{ color: accent }} />
                  2 photos
                  <span>·</span>
                  <FaVideo style={{ color: accent }} />
                  2 vidéos
                </div>
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <motion.figure
                variants={fadeLeft}
                className={`group relative overflow-hidden rounded-2xl border ${border} ${bgCard} lg:col-span-6`}
              >
                <img
                  src="/travail-equipe-laptop.webp"
                  alt="Travail en équipe autour d'un ordinateur"
                  className="h-[240px] sm:h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div
                  className="absolute inset-x-0 bottom-0 p-5"
                 
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Échange technique
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-white">
                    Réflexion autour d'un projet
                  </h3>
                </div>
              </motion.figure>

              <motion.figure
                variants={fadeRight}
                className={`group relative overflow-hidden rounded-2xl border ${border} ${bgCard} lg:col-span-6`}
              >
                <img
                  src="/atelier-treillis.webp"
                  alt="Équipe travaillant sur une structure treillis expérimentale"
                  className="h-[240px] sm:h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div
                  className="absolute inset-x-0 bottom-0 p-5"
                 
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Projet expérimental
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-white">
                    Conception d'un treillis en équipe
                  </h3>
                </div>
              </motion.figure>

              <motion.article
                variants={fadeUp}
                className={`overflow-hidden rounded-2xl border ${border} ${bgCard} lg:col-span-6`}
              >
                <div className="relative bg-black">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster="/travail-equipe-laptop.webp"
                    className="h-[220px] sm:h-[235px] w-full object-cover"
                  >
                    <source
                      src="/atelier-structure-1.mp4"
                      type="video/mp4"
                    />
                    Votre navigateur ne prend pas en charge la vidéo.
                  </video>

                  <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <FaPlayCircle />
                    Séquence 01
                  </div>
                </div>

                <div className="p-4">
                  <h3
                    className={`font-bold ${textMain}`}
                  >
                    Présentation d'un projet individuel
                  </h3>

                  <p
                    className={`mt-1 text-xs leading-relaxed ${textMut}`}
                  >
                    Présentation d'un projet réalisé individuellement,
                    avec explication du sujet, de l'approche retenue et
                    des principaux éléments du travail réalisé.
                  </p>
                </div>
              </motion.article>

              <motion.article
                variants={fadeUp}
                className={`overflow-hidden rounded-2xl border ${border} ${bgCard} lg:col-span-6`}
              >
                <div className="relative bg-black">
                  <video
                    ref={atelierStructure2Ref}
                    muted
                    preload="metadata"
                    playsInline
                    disablePictureInPicture
                    poster="/atelier-treillis.webp"
                    className="h-[220px] sm:h-[235px] w-full cursor-pointer object-cover"
                    onClick={toggleAtelierStructure2}
                    onPlay={() => setAtelierStructure2Playing(true)}
                    onPause={() => setAtelierStructure2Playing(false)}
                    onEnded={() => setAtelierStructure2Playing(false)}
                    onLoadedMetadata={(event) => {
                      event.currentTarget.muted = true;
                      event.currentTarget.volume = 0;
                    }}
                    onVolumeChange={(event) => {
                      if (
                        !event.currentTarget.muted ||
                        event.currentTarget.volume !== 0
                      ) {
                        event.currentTarget.muted = true;
                        event.currentTarget.volume = 0;
                      }
                    }}
                  >
                    <source
                      src="/atelier-structure-2.mp4"
                      type="video/mp4"
                    />
                    Votre navigateur ne prend pas en charge la vidéo.
                  </video>

                  <button
                    type="button"
                    onClick={toggleAtelierStructure2}
                    aria-label={
                      atelierStructure2Playing
                        ? "Mettre la vidéo en pause"
                        : "Lire la vidéo"
                    }
                    className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-2xl text-white shadow-xl backdrop-blur transition duration-300 hover:scale-110 hover:bg-black/75"
                  >
                    {atelierStructure2Playing ? (
                      <FaPauseCircle />
                    ) : (
                      <FaPlayCircle />
                    )}
                  </button>

                  <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <FaPlayCircle />
                    Séquence 02 
                  </div>
                </div>

                <div className="p-4">
                  <h3 className={`font-bold ${textMain}`}>
                    Séquence de travail pratique
                  </h3>

                  <p
                    className={`mt-1 text-xs leading-relaxed ${textMut}`}
                  >
                    Une séquence complémentaire qui montre la mise en
                    pratique concrète des notions abordées pendant la
                    formation.
                  </p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </section>

        <Divider accent={accent} />

        {/* COMPÉTENCES */}
        <section
          id="Competences"
          className="px-6 py-16 md:px-[6%]"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>Expertise</SectionLabel>

              <h2
                className={`mb-8 text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
              >
                Mes compétences
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {skillsData.map((skill) => (
                <motion.div
                  key={skill.Titre}
                  variants={fadeUp}
                  className={`rounded-xl border p-4 text-center transition-colors ${border} ${bgCard}`}
                >
                  <div
                    className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                    style={{ color: accent }}
                  >
                    <skill.Icon />
                  </div>

                  <p
                    className={`mb-1 text-xs font-semibold ${textMain}`}
                  >
                    {skill.Titre}
                  </p>

                  <p className={`text-[11px] leading-relaxed ${textMut}`}>
                    {skill.Detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider accent={accent} />

        {/* DOMAINES */}
        <section id="Domaines" className="px-6 py-16 md:px-[6%]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>Domaines</SectionLabel>

              <h2
                className={`mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
              >
                Ce sur quoi je peux intervenir
              </h2>

              <p className={`mb-8 max-w-lg text-sm ${textMut}`}>
                Les missions de bureau d'études sur lesquelles ma
                formation me rend opérationnel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {domainesData.map((domaine) => (
                <motion.div
                  key={domaine.Titre}
                  variants={fadeUp}
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${border} ${bgCard}`}
                  style={{
                    boxShadow: isDark
                      ? "none"
                      : "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ color: accent }}
                  >
                    <domaine.Icon className="h-5 w-5" />
                  </div>

                  <h3
                    className={`mb-2 text-sm font-bold ${textMain}`}
                  >
                    {domaine.Titre}
                  </h3>

                  <p className={`text-xs leading-relaxed ${textMut}`}>
                    {domaine.Detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider accent={accent} />

        {/* EXPÉRIENCES */}
        <section
          id="Experiences"
          className="px-6 py-16 md:px-[6%]"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>Parcours</SectionLabel>

              <h2
                className={`mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
              >
                Expérience professionnelle
              </h2>

              <p className={`mb-10 max-w-lg text-sm ${textMut}`}>
                Le terrain avant le bureau d'études.
              </p>
            </motion.div>

            <div className="relative">
              <div
                className="absolute bottom-0 left-5 top-0 hidden w-0.5 sm:block"
                style={{ backgroundColor: `${accent}33` }}
              />

              <div className="space-y-6">
                {experiencesData.map((experience) => (
                  <motion.div
                    key={experience.Id}
                    variants={fadeUp}
                    className="relative sm:pl-16"
                  >
                    <div
                      className={`absolute left-0 top-6 z-10 hidden h-10 w-10 items-center justify-center rounded-full ${!isDark? 'text-white': 'text-black'} shadow-lg sm:flex`}
                      style={{ backgroundColor: accent }}
                    >
                      <experience.Icon className={`h-4 w-4  `} />
                    </div>

                    <div
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${border} ${bgCard}`}
                      style={{
                        boxShadow: isDark
                          ? "0 4px 24px rgba(0,0,0,0.4)"
                          : "0 4px 32px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="flex items-start justify-between px-6 pb-3 pt-5">
                        <div>
                          <div className="mb-1 flex items-center gap-3">
                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-full text-white sm:hidden"
                              style={{ backgroundColor: accent }}
                            >
                              <experience.Icon className="h-3.5 w-3.5" />
                            </div>

                            <p
                              className={`text-lg font-extrabold tracking-tight ${textMain}`}
                            >
                              {experience.Titre}
                            </p>
                          </div>

                          <p className={`text-sm ${textMut}`}>
                            {experience.Poste} · {experience.annee}
                          </p>
                        </div>

                        <span
                          className={`ml-3 mt-1 shrink-0 rounded-full px-3 py-1 text-xs font-bold ${experience.BadgeColor}`}
                        >
                          {experience.Badge}
                        </span>
                      </div>

                      <div className="px-6 pb-5">
                        <div
                          className="mb-4 h-px"
                          style={{ backgroundColor: `${accent}22` }}
                        />

                        <p
                          className={`mb-4 text-sm leading-relaxed ${textMut}`}
                        >
                          {experience.detail}
                        </p>

                        <p
                          className="mb-2 text-xs font-semibold uppercase tracking-wider"
                          style={{ color: accent }}
                        >
                          Compétences développées
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {experience.competences.map((competence) => (
                            <span
                              key={competence}
                              className={`rounded-full px-2.5 py-1 text-xs font-medium ${tagBg}`}
                            >
                              {competence}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <Divider accent={accent} />

        {/* À PROPOS */}
        <section id="APropos" className="px-6 py-16 md:px-[6%]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>À propos</SectionLabel>

              <h2
                className={`mb-8 text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
              >
                Qui je suis
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
              <motion.div
                variants={fadeLeft}
                className="flex flex-col gap-6"
              >
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.20)",
                    maxWidth: 380,
                  }}
                >
                  <img
                    src="/atelier-treillis.webp"
                    alt="Travail d'équipe sur une poutre treillis"
                    className="w-full rounded-2xl object-cover"
                    style={{ aspectRatio: "4/5" }}
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    
                  >
                    <p className="text-base font-extrabold text-white">
                      De la théorie à l'expérimentation
                    </p>

                    <p className="text-xs text-white/70">
                      Projet collectif de résistance des matériaux
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                className="lg:col-span-2"
              >
                <p
                  className={`mb-4 text-sm leading-relaxed ${textMut}`}
                >
                  Je suis{" "}
                  <strong className={textMain}>
                    Eddy NZINGOULA
                  </strong>
                  , étudiant en Master 2 Génie Civil, spécialité
                  Hydraulique, Ouvrages et Environnement à Polytech
                  Lille.
                </p>

                <p
                  className={`mb-4 text-sm leading-relaxed ${textMut}`}
                >
                  Ce qui m'intéresse dans ce métier, c'est le moment où
                  le calcul rencontre la réalité : quand une hypothèse
                  de descente de charges se vérifie dans un modèle
                  numérique ou quand un mode de rupture observé en
                  essai correspond à celui qu'on avait prévu.
                </p>

                <p
                  className={`mb-6 text-sm leading-relaxed ${textMut}`}
                >
                  Un stage ouvrier de trois mois en second œuvre m'a
                  appris que la mise en œuvre a toujours le dernier mot
                  sur la note de calcul. Je cherche aujourd'hui un
                  stage de fin d'études en bureau d'études pour
                  travailler des deux côtés.
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    "Rigueur",
                    "Sens du terrain",
                    "Eurocodes",
                    "Travail en équipe",
                    "Curiosité technique",
                  ].map((valeur) => (
                    <span
                      key={valeur}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${tagBg}`}
                    >
                      {valeur}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {aproposData.map((item) => (
                    <div
                      key={item.Id}
                      className={`flex items-start gap-3 rounded-xl border p-3 transition-colors ${border} ${bgCard}`}
                    >
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[10px] font-bold"
                        style={{
                          color: accent,
                          borderColor: `${accent}55`,
                        }}
                      >
                        {item.Id}
                      </span>

                      <div>
                        <p
                          className={`text-xs font-semibold ${textMain}`}
                        >
                          {item.Titre}
                        </p>

                        <p
                          className={`mt-0.5 text-[11px] leading-relaxed ${textMut}`}
                        >
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-10 flex w-full flex-col gap-5">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  ["8", "niveaux dimensionnés"],
                  ["28", "poteaux par niveau"],
                  ["1 900 kN", "charge en pied de poteau"],
                ].map(([value, label]) => (
                  <div key={label} className="text-center">
                    <p
                      className="text-3xl font-extrabold sm:text-4xl"
                      style={{ color: accent }}
                    >
                      {value}
                    </p>

                    <p className={`text-sm ${textMut}`}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {competencesData.map((item) => (
                  <div
                    key={item.Id}
                    className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${border} ${bgCard}`}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                      style={{
                        color: accent,
                        borderColor: `${accent}55`,
                      }}
                    >
                      {item.Id}
                    </span>

                    <span
                      className={`text-xs font-medium ${textMain}`}
                    >
                      {item.Titre}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <SectionLabel accent={accent}>
                  Compétences transversales
                </SectionLabel>

                <h3
                  className={`mb-4 text-xl font-extrabold tracking-tight ${textMain}`}
                >
                  Ce que la formation m'a donné
                </h3>

                <p
                  className={`text-sm leading-relaxed ${textMut}`}
                >
                  Trois ans de génie civil m'ont surtout appris une
                  méthode : poser les hypothèses avant de calculer,
                  vérifier chaque résultat par un second chemin et
                  savoir traduire une note de calcul en plan
                  exécutable.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
            >
              <div>
                <SectionLabel accent={accent}>Approche</SectionLabel>

                <h3
                  className={`mb-4 text-xl font-extrabold tracking-tight ${textMain}`}
                >
                  Ce qui guide mon travail
                </h3>

                <p
                  className={`text-sm leading-relaxed ${textMut}`}
                >
                  Une structure ne pardonne pas l'approximation. Un
                  coefficient mal repris, une descente de charges
                  oubliée sur un niveau et c'est tout le
                  dimensionnement qui glisse. La vérification croisée
                  n'est pas une précaution, c'est la méthode.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {philosophieData.map((item) => (
                  <div
                    key={item.Id}
                    className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${border} ${bgCard}`}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                      style={{
                        color: accent,
                        borderColor: `${accent}55`,
                      }}
                    >
                      {item.Id}
                    </span>

                    <span
                      className={`text-xs font-medium ${textMain}`}
                    >
                      {item.Titre}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Divider accent={accent} />

        {/* FORMATION */}
        <section
          id="Formations"
          className="flex px-6 py-16 md:px-[6%]"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>Formation</SectionLabel>

              <h2
                className={`mb-10 text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
              >
                Mon cursus
              </h2>
            </motion.div>

            <div className="relative">
              <div
                className="absolute bottom-0 left-5 top-0 hidden w-0.5 sm:block"
                style={{ backgroundColor: `${accent}33` }}
              />

              <div className="space-y-5">
                {formationsData.map((formation, index) => (
                  <motion.div
                    key={`${formation.annee}-${formation.titre}`}
                    variants={fadeUp}
                    className="relative sm:pl-16"
                  >
                    <div
                      className={`absolute left-0 top-4 z-10 hidden h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${!isDark? 'text-white': 'text-black'}  sm:flex`}
                      style={{ backgroundColor: accent }}
                    >
                      {index + 1}
                    </div>

                    <div
                      className={`rounded-2xl border p-5 transition-colors ${border} ${bgCard}`}
                      style={{
                        boxShadow: isDark
                          ? "none"
                          : "0 2px 16px rgba(0,0,0,0.06)",
                      }}
                    >
                      <p
                        className="mb-1 text-xs font-semibold"
                        style={{ color: accent }}
                      >
                        {formation.annee}
                      </p>

                      <h3
                        className={`mb-1 text-sm font-bold ${textMain}`}
                      >
                        {formation.titre}
                      </h3>

                      <p className={`text-xs ${textMut}`}>
                        {formation.lieu}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div
            className="relative left-5 mt-20 hidden justify-center lg:flex"
            style={{ color: accent }}
          >
            <FaGraduationCap size={98} />
          </div>
        </section>

        <Divider accent={accent} />

        {/* CONTACT */}
        <section id="Contact" className="px-6 py-16 md:px-[6%]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel accent={accent}>Contact</SectionLabel>

              <h2
                className={`mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl ${textMain}`}
              >
                Me contacter
              </h2>

              <p className={`mb-10 max-w-lg text-sm ${textMut}`}>
                Un stage à proposer en bureau d'études ? Écrivez-moi,
                je réponds sous 48 heures.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                className="space-y-4"
              >
                {[
                  {
                    Icon: FaEnvelope,
                    label: "Email",
                    val: "nzingoulaeddy@gmail.com",
                    href: "mailto:nzingoulaeddy@gmail.com",
                  },
                  {
                    Icon: FaPhoneAlt,
                    label: "Téléphone",
                    val: "07 66 32 85 03",
                    href: "tel:+33766328503",
                  },
                  {
                    Icon: FaMapMarkerAlt,
                    label: "Localisation",
                    val: "Villeneuve d'Ascq (59650)",
                    href: "#Contact",
                  },
                  {
                    Icon: FaLinkedin,
                    label: "LinkedIn",
                    val: "À compléter",
                    href: "#Contact",
                  },
                ].map(({ Icon, label, val, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                    className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all ${border} ${bgCard}`}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ color: accent }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-wider ${textMut}`}
                      >
                        {label}
                      </p>

                      <p
                        className={`text-sm font-medium ${textMain}`}
                      >
                        {val}
                      </p>
                    </div>
                  </a>
                ))}

                <a
                  href="/CV-Eddy-Nzingoula.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: LOGO_COLORS.gradient }}
                >
                  <FaFilePdf />
                  Télécharger le CV
                </a>
              </motion.div>

              <motion.div variants={fadeRight}>
                <form
                  onSubmit={handleSend}
                  className={`space-y-4 rounded-2xl border p-6 ${border} ${bgCard}`}
                  style={{
                    boxShadow: isDark
                      ? "none"
                      : "0 4px 32px rgba(0,0,0,0.08)",
                  }}
                >
                  <div>
                    <label
                      className={`mb-1.5 block text-xs font-semibold ${textMut}`}
                    >
                      Nom complet
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className={inputCls}
                      value={contactForm.nom}
                      onChange={(event) =>
                        setContactForm((form) => ({
                          ...form,
                          nom: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <label
                      className={`mb-1.5 block text-xs font-semibold ${textMut}`}
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="votre@email.com"
                      className={inputCls}
                      value={contactForm.email}
                      onChange={(event) =>
                        setContactForm((form) => ({
                          ...form,
                          email: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <label
                      className={`mb-1.5 block text-xs font-semibold  ${isDark? 'text-white' : 'text-black'}`}
                    >
                      Message
                    </label>

                    <textarea
                      required
                      rows={6}
                      placeholder="Décrivez la mission ou le stage proposé..."
                      className={`${inputCls} resize-none`}
                      value={contactForm.message}
                      onChange={(event) =>
                        setContactForm((form) => ({
                          ...form,
                          message: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending || sent}
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ background: LOGO_COLORS.gradient }}
                  >
                    {sent ? (
                      "✓ Message envoyé !"
                    ) : sending ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <FaEnvelope className="h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <footer
          className={`border-t py-8 text-center text-xs ${border} ${textMut}`}
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <img
              src="/logo-eddy.png"
              alt="Logo Eddy Anderson NZINGOULA"
              className="h-8 w-8 object-contain"
            />

            <p className={`text-sm font-bold ${textMain}`}>
              EDDY ANDERSON NZINGOULA
            </p>
          </div>

          <p>
            Génie civil — Hydraulique, Ouvrages et Environnement ·
            Polytech Lille
          </p>
        </footer>
      </div>
    </div>
  );
}
