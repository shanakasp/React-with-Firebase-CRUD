import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebaseconfig';
import {collection, getDocs, addDoc} from "firebase/firestore"
function App() {

   const [NewName, setNewName] = useState("");
   const [NewAge, setNewAge] = useState(0);
      const [users, setUsers] = useState([]);
     const usersCollectionRef = collection(db, "users")

     const createUser = async () =>
     {
      await addDoc  (usersCollectionRef, { name: NewName, age: NewAge})
     }


     useEffect(() => {
      const getUsers = async () =>
      {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      getUsers();
     }, []);

   return   ( 

   <div className="App"> 
   <input placeholder='Name...' onChange={(event) =>{
    setNewName(event.target.value);
   }}></input>
   <input type = "number" placeholder='Age...'></input>
   <button onClick={createUser}> Create User</button>
   {users.map((user) =>
   {
    return<div> <h1>Name: {user.name}</h1>
    <h1>Age: {user.age}</h1></div>
   }
   )}

   </div>
  
);}

export default App;
