import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type FactureCreateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  fichier?: string | null;
  titre?: string | null;
};
