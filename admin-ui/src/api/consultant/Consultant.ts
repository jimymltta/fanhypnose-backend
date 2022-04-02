import { Facture } from "../facture/Facture";
import { Script } from "../script/Script";

export type Consultant = {
  address: string | null;
  birthDate: Date | null;
  channel: string | null;
  createdAt: Date;
  email: string | null;
  factures?: Array<Facture>;
  firstName: string;
  id: string;
  job: string | null;
  kids: string | null;
  lastName: string | null;
  married: boolean | null;
  phone: string | null;
  scripts?: Array<Script>;
  updatedAt: Date;
  whyTheyCome?:
    | "HypnoRelaxation"
    | "LiberationEmotionnelle"
    | "DeveloppementPersonnel"
    | "Tabac"
    | "Addiction"
    | "Douleur"
    | "TroubleSexuel"
    | "Enfant"
    | "PerformanceSportive"
    | "TroubleAlimentaire"
    | null;
};
