import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ConsultantTitle } from "../consultant/ConsultantTitle";

export const FactureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="consultant.id"
          reference="Consultant"
          label="Consultant"
        >
          <SelectInput optionText={ConsultantTitle} />
        </ReferenceInput>
        <TextInput label="Fichier" source="fichier" />
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Create>
  );
};
