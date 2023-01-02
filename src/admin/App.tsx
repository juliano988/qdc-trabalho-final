import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import { PostCreate } from "../posts/Create";
import { PostEdit } from "../posts/Edit";

const dataProvider = postgrestRestProvider("/api/admin");

const App = () => {

  React.useEffect(function () {
    console.log(dataProvider)
  }, [])

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} create={PostCreate} edit={PostEdit}/>
      <Resource name="comments" list={ListGuesser} />
    </Admin>
  )
};

export default App;