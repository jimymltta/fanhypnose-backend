import { FactureUpdateManyWithoutConsultantsInput } from "./FactureUpdateManyWithoutConsultantsInput";
import { ScriptUpdateManyWithoutConsultantsInput } from "./ScriptUpdateManyWithoutConsultantsInput";

export type ConsultantUpdateInput = {
  address?: string | null;
  birthDate?: Date | null;
  channel?: string | null;
  email?: string | null;
  factures?: FactureUpdateManyWithoutConsultantsInput;
  firstName?: string;
  job?: string | null;
  kids?: string | null;
  lastName?: string | null;
  married?: boolean | null;
  phone?: string | null;
  scripts?: ScriptUpdateManyWithoutConsultantsInput;
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
