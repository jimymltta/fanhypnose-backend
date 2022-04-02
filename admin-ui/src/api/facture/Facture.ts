import { Consultant } from "../consultant/Consultant";

export type Facture = {
  consultant?: Consultant | null;
  createdAt: Date;
  fichier: string | null;
  id: string;
  titre: string | null;
  updatedAt: Date;
};
