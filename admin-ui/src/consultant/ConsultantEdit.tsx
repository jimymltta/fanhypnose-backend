import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

import { FactureTitle } from "../facture/FactureTitle";
import { ScriptTitle } from "../script/ScriptTitle";

export const ConsultantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <DateInput label="Birth Date" source="birthDate" />
        <TextInput label="Channel" multiline source="channel" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="factures"
          reference="Facture"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FactureTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Job" source="job" />
        <TextInput label="Kids" source="kids" />
        <TextInput label="Last Name" source="lastName" />
        <BooleanInput label="Married" source="married" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="scripts"
          reference="Script"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScriptTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="whyTheyCome"
          label="WhyTheyCome"
          choices={[
            { label: "Hypno-relaxation", value: "HypnoRelaxation" },
            {
              label: "Liberation emotionnelle",
              value: "LiberationEmotionnelle",
            },
            {
              label: "Développement personnel",
              value: "DeveloppementPersonnel",
            },
            { label: "Tabac", value: "Tabac" },
            { label: "Addiction", value: "Addiction" },
            { label: "Douleur", value: "Douleur" },
            { label: "TroubleSexuel", value: "TroubleSexuel" },
            { label: "Enfant", value: "Enfant" },
            { label: "PerformanceSportive", value: "PerformanceSportive" },
            { label: "TroubleAlimentaire", value: "TroubleAlimentaire" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
