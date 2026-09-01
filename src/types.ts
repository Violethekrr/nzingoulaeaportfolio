import { type IconType } from "react-icons";

export type StackType = string;

export type AproposType = { Id: number; Titre: string; detail: string };
export type CompetenceType = { Id: number; Titre: string };
export type PhilosophieType = { Id: number; Titre: string };
export type SkillType = { Titre: string; Icon: IconType; Detail: string };

/** Un chiffre cle affiche sur la carte projet (ex. 1 900 kN / charge en pied de poteau). */
export type ChiffreType = { val: string; label: string };

export type ProjetType = {
  Id: number;
  Titre: string;
  Tag: string;
  /** Cadre academique : cours, encadrant, annee. */
  contexte: string;
  techs: string[];
  detail: string;
  chiffres: ChiffreType[];
  image: string;
  color: string;
};

export type ExperienceType = {
  Id: number;
  Titre: string;
  Poste: string;
  Periode: string;
  Icon: IconType;
  Badge: string;
  BadgeColor: string;
  detail: string;
  competences: string[];
};
