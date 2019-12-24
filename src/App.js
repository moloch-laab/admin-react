import React from 'react';
import { PostList, PostEdit } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;