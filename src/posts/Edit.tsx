// in src/posts.js
import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PostEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput source="body" validate={required()} />
      <DateInput label="Creation date" source="created_at" />
      <ReferenceManyField label="Comments" reference="comments" target="postId">
        <Datagrid>
          <TextField source="name" />
          <TextField source="body" />
          <DateField source="created_at" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);