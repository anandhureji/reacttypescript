
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const PersonName = {
    first:"Anandhu",
    last:"Reji",
  }

  const nameList = [{
      first:"Anandhu",
      last:"Reji"
    },
    {
      first:"Arjun",
      last:"Reji"
    },
  ]
  return (
    <div>
      <Greet  name = "Anandhu" subject = "react-type-script" isLoggedin = {true} />
      <Person name={PersonName}/>
      <PersonList names={nameList} />
     
    </div>
  );
}

export default App;
