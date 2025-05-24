import React from 'react'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  );
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const friends = [
    {name: 'Beter', age: 24},
    {name: 'Sahur', age: 223},
  ];

  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} + {b} is {a + b}</p>
      <h1>Greetings</h1>
      <Hello name = "Bern" age = "27"/>
      <Hello name = "WY" age = "25"/>
      <Hello name = "Butter" age = "3"/>
      <Hello name = "Toast" age = "2"/>
      <p>{friends[0].name}, {friends[0].age}</p>
      <p>{friends[1].name}, {friends[1].age}</p>
    </>
  );
}

export default App