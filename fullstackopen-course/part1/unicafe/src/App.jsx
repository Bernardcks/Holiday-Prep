import {useState} from 'react';

const Title = ({title}) => <h2>{title}</h2>;
const Button = ({onClick, name}) => <button onClick={onClick}>{name}</button>;
const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>;

const Statistics = (props) => {
  if(props.all > 0){
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good}/>
          <StatisticLine text='neutral' value={props.neutral}/>
          <StatisticLine text='bad' value={props.bad}/>
          <StatisticLine text='all' value={props.all}/>
          <StatisticLine text='average' value={props.average}/>
          <StatisticLine text='positive' value={props.positive}/>
        </tbody>
      </table>
    );
  }

  return (<p>No feedback given</p>);
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good+bad+neutral;

  return (
    <>
      <Title title = 'give feedback'/>
      <Button onClick={() => setGood(good + 1)} name={'good'}/>
      <Button onClick={() => setNeutral(neutral + 1)} name={'neutral'}/>
      <Button onClick={() => setBad(bad + 1)} name={'bad'}/>
      <Title title={'statistics'}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={(good-bad)/all} positive={(good/all)*100 + ' %'}/>
    </>
  )
}

export default App