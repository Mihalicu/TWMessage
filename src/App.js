import react, { useState, useEffect} from 'react';
import {Button, FormControl, InputLabel,Input}  from '@material-ui/core';

import './App.css';
import Message from './Message';
import firebaseApp from './firebase';
import firebase from 'firebase';
import Login from'./Login';
 
function App() {
  const [input, setInput] = useState('');
  const [username,setUsername] = useState('');

  const [messages, setMessages] = useState([]);
 

  
const sendMessage = (event) => {
  event.preventDefault();//pt ambrosia


    firebaseApp.firestore().collection('messages').add({
    message: input,
    username: username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setMessages([...messages,{username: username, message: input}])
  setInput('');

}
useEffect(() => {
  
  setUsername(prompt('Please enter your name'));
}, [])
// daca [] e gol, useEffect se executa o singura data la onLoad()


useEffect(() => {

  firebaseApp.firestore().collection('messages').orderBy('timestamp','desc')
  .onSnapshot(snapshot =>{
    setMessages(snapshot.docs.map(doc => doc.data()))
  })
}, [])


  return (
    <div className="App">
      <h1>MESSENGER TW</h1>
    <h2>Wellcome {username}</h2>
      <form>
      <FormControl>
      <InputLabel >Enter a message</InputLabel>
      <Input value = { input } onChange={event => setInput(event.target.value)}/>
      <Button disabled ={!input} variant ='contained' color='primary' type ='submit' onClick={sendMessage}>Send</Button>
      </FormControl>
      
      </form>
     

      {
        messages.map(message => (
          <Message username={username} message ={message} />
        
        ))
      }

      
    </div>
  );
}


export default App;
