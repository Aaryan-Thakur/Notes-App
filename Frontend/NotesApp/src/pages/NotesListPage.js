import React, {useEffect, useState} from 'react'
// import notes from '../assets/data'
import Listitem from '../components/Listitem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

 let [i,set] = useState(1);

 let update = () => {
  set(i+1);
};




  let [notes,setNotes] = useState([]);

  useEffect(()=>{
    getNotes(); 


  },[]);

 



  let getNotes = async() => {
    
    let response  = await fetch('http://localhost:8000/api/notes',{
      method:'GET'
    });
    let data = await response.json();
    setNotes(data);

    return data;


  }

  useEffect(()=>{
    getNotes(); 


  },[i]);

 

  return (
    <div className='notes'>
        <div className="notes-header">
          <h2 className='notes-title'>&#9782; Notes</h2>
          <p className='notes-count'>{notes.length}</p>
        </div>

      <div className='notes-list'>
        {
          notes.map((note,index) =>(
            <Listitem update={update} key={index} note={note} />
          ) )
        }
      </div>
      <AddButton />

    </div>
  )
}

export default NotesListPage