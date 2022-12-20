
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {

  const PersonName = {
    first:"Anandhu",
    last:"Reji",
  }

  const nameList = [
    {
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
      <Oscar >
      <Heading>Oscar goes to Anandhu Reji</Heading>
      </Oscar>
      
      <Greet  name = "Anandhu"  isLoggedin = {true} />
      <Person name={PersonName}/>
      <PersonList names = {nameList} />
      <Status status='error' />
     
    </div>
  );
}

export default App;
