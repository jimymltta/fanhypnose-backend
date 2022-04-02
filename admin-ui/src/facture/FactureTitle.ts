import { Facture as TFacture } from "../api/facture/Facture";

export const FACTURE_TITLE_FIELD = "fichier";

export const FactureTitle = (record: TFacture): string => {
  return record.fichier || record.id;
};
