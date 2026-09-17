export type Locale = "de" | "en";

export type ProjectType =
  | "standalone"
  | "pv-hybrid"
  | "wind-hybrid"
  | "industrie"
  | "netzbooster"
  | "hinterzaehler";

export type ProjectStatus = "in-betrieb" | "genehmigt" | "in-planung";

export type Project = {
  id: string;
  name: string;
  city: string;
  region: string;
  country: string;
  year: number;
  capacityMwh: number;
  powerMw: number;
  type: ProjectType;
  scope: string;
  standards: string[];
  status: ProjectStatus;
};

export type LocalizedService = {
  title: string;
  lede: string;
  body: string;
  points: string[];
};

export type Service = {
  id: string;
  index: string;
  de: LocalizedService;
  en: LocalizedService;
};

export type TeamMember = {
  id: string;
  name: string;
  roleDe: string;
  roleEn: string;
  focusDe: string;
  focusEn: string;
};
