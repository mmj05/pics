import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];

const names = users.map(({ name }) => {
  return <li key={name.id}>{name}</li>
})


export default class App extends React.Component {
  render() {
    return (
      <ul>
        {names}
      </ul>
    );
  }
}
