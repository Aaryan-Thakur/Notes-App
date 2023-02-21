import React , {useState,useEffect} from 'react'
// import notes from '../assets/data'
import { redirect, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {ReactComponent as BackIcon} from '../assets/back.svg'

const NotePage = () => {


 let [note,setNote] = useState(null);
 let noteId = useParams();
//  let note = notes.find(note => note.id === Number(noteId.id))


useEffect(() => {
  getNote();
  
},[])

let getNote = async() =>{
  if(noteId.id==="new") return;
  let response = await fetch(`http://localhost:8000/api/notes/${noteId.id}`)
  let data = await response.json();
  setNote(data);
}

let updateNote = async() =>{
  await fetch(`http://localhost:8000/api/notes/${noteId.id}/`,{
    method :'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })

  console.log(note)

}

let deleteNote = async() =>{
  await fetch(`http://localhost:8000/api/notes/${noteId.id}/`,{
    method :'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({...note,'updated': new Date()})
  })

  redirect("/");

}

let createNote = async() =>{
  if(!note.body) return;
  await fetch('http://localhost:8000/api/notes/',{
    method :'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note['body'])
  })



}

let handleSumbit = () =>{
  if(noteId.id !== 'new' && !note.body)
  {
    deleteNote();
  }else if(noteId.id !== 'new'){

    updateNote();
  }
  else if(noteId.id === 'new'&& note!==null){
    createNote();

  }
  
  // redirect("/");

}

return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to = "/" onClick={handleSumbit} ><BackIcon className='back-icon'/></Link>
        </h3>

        {noteId.id !== 'new'?(<Link to = "/" onClick={deleteNote}>Delete</Link>):
                             (<Link to='/' onClick={handleSumbit}>Save</Link>)}

        
      </div>

    
     <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} value={note?.body}>

     </textarea>
    </div>
  )
}

export default NotePage