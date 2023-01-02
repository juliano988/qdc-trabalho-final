import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="body" validate={[required()]} fullWidth />
        </SimpleForm>
    </Create>
);