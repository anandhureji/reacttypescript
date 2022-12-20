
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
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

    <Input value='' handleChange={(event)=>console.log(event)}></Input>
      <Button handleClick={(event,id)=>{
        console.log('Button CLiked',event,id)
      }}></Button>
      
      <Greet  name = "Anandhu"  isLoggedin = {true} />
      <Person name={PersonName}/>
      <PersonList names = {nameList} />
      <Status status='error' />
     
    </div>
  );
}

export default App;
