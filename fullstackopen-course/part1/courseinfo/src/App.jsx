const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

export const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props);
  const [first, second, third] = props.course.parts
  return (
    <>
      <Part name={first.name} exercises={first.exercises}/>
      <Part name={second.name} exercises={second.exercises}/>
      <Part name={third.name} exercises={third.exercises}/>
    </>
  )
}

const Total = (props) => {
  const arr = props.course.parts;
  return (
    <p>Numer of exercises {arr[0].exercises + arr[1].exercises + arr[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10,
      },
      {
      name: 'Using props to pass data',
      exercises: 7,
      },
      {
      name: 'State of a component',
      exercises: 14,
      },
    ],
  };
    
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App