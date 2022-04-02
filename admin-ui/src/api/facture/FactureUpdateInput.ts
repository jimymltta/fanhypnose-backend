import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type FactureUpdateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  fichier?: string | null;
  titre?: string | null;
};
