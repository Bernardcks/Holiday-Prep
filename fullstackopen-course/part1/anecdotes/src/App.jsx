import { useState } from "react";

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Title = ({text}) => <h2>{text}</h2>

const MostVoted = ({anecdotes, votes, index}) => {
  if(index < 0){
    return (<p>No votes yet.</p>);
  }

  return (
    <>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const getMostVotedIndex = () => votes.findIndex(v => v === Math.max(...votes));

  return (
    <>
      <Title text='Anecdote of the day'/>
      <div>
        {anecdotes[selected]}
      </div>
      <Button onClick={() => handleVote(selected)} text='vote'/>
      <Button onClick={() => setSelected(randInt(0, anecdotes.length-1))} text='next anecdote'/>
    
      <Title text='Anecdote with the most votes'/>
      <MostVoted anecdotes={anecdotes} votes={votes} index={getMostVotedIndex()}/>
    </>
  )
}

export default App