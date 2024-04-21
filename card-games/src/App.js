import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState(
    {
      1:[],
      2:[],
      3:[],
      4:[]
    }
  );
  useEffect(()=>{
    const numbers = Array.from({length: 52}, (_, index) => index + 1);
  // Shuffle the array of numbers
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
const people = [1,2,3,4];
const assignments = {};
    let index = 0;
    
    people.forEach(person => {
        const numbersPerPerson = Math.ceil(numbers.length / (people.length - index));
        assignments[person] = numbers.splice(0, numbersPerPerson);
        index++;
    });
  console.log(assignments);
  setPlayers(assignments);
  },[])
  return (
    <div className="App">
      <div className='flex absolute top-0 w-1/2 bottom-0 left-0 right-0 mx-auto'>
        {
          players[1].map((value, index)=>{
           return <Cards index={index} value={value} />
          })
        }
        </div>
        <p className='absolute top-36 left-0 right-0 mx-auto'>Player 1</p>
        <br/>
        <div className='flex float-left'>
        <div className="inline-flex absolute w-1/2 top-[330px] -left-48 rotate-90">
        {
          players[2].map((value, index)=>{
           return <Cards index={index} value={value} />
          })
        }
        </div>
        <p className='absolute top-96 left-72 rotate-90'>Player 2</p>
        <div className='inline-flex absolute w-1/2 top-[330px] -right-48 -rotate-90'>
        {
          players[3].map((value, index)=>{
           return <Cards index={index} value={value} />
          })
        }
        </div>
        <p className='absolute top-96 right-72 -rotate-90'>Player 3</p>
        </div>
        <br/>
       <div className='flex absolute w-1/2 bottom-0 left-0 right-0 mx-auto'>
       {
          players[4].map((value, index)=>{
           return <Cards index={index} value={value} />
          })
        }
       </div>
       <p className='absolute bottom-36 left-0 right-0 mx-auto'>Player 4</p>
      </div>
  );
}

export default App;
