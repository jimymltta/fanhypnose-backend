import { FactureCreateNestedManyWithoutConsultantsInput } from "./FactureCreateNestedManyWithoutConsultantsInput";
import { ScriptCreateNestedManyWithoutConsultantsInput } from "./ScriptCreateNestedManyWithoutConsultantsInput";

export type ConsultantCreateInput = {
  address?: string | null;
  birthDate?: Date | null;
  channel?: string | null;
  email?: string | null;
  factures?: FactureCreateNestedManyWithoutConsultantsInput;
  firstName: string;
  job?: string | null;
  kids?: string | null;
  lastName?: string | null;
  married?: boolean | null;
  phone?: string | null;
  scripts?: ScriptCreateNestedManyWithoutConsultantsInput;
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
