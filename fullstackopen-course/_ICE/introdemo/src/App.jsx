const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  );
}

const Hello2 = ({name, age}) => {
  const bornYear = () => {
    const yrNow = new Date().getFullYear();
    return yrNow - age
  }
  return (
    <>
      <p>Hello {name}, {age}</p>
      <p>You were born in {bornYear()}</p>
    </>
  )
}


const App = (props) => {
  const {counter} = props;
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
      <Hello2 name = "Bern2" age = "27"/>
      <p>{friends[0].name}, {friends[0].age}</p>
      <p>{friends[1].name}, {friends[1].age}</p>
      <div>{counter}</div>
    </>
  );
}

export default App