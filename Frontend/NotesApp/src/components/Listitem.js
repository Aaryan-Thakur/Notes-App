import React from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'








const Listitem = ({update,note}) => {


  let getTitle = (note)=>{

    let t1 = note.body.split("\n")[0];
    let t2 = note.body.split("\n")[0];


    if(t1.length>=10){
      t2 = (t1.slice(0,10) + "...")
    }

    let titles=[t1,t2];
    
    return titles;
  }

  let getContent = (note) =>{
    let title = getTitle(note);
    let content = note.body;
    content = content.replaceAll(title[0],"");

    if(content.length>=20){
      content = content.slice(0,20) + "...";
      }
    return content.slice(0,45);
  }

  let getDate = (note) =>{
    let date = note.updated;
    date = date.slice(0,10);
    return date;
  }

  
// FIX PROXY HERE
  let deleteNote = async(id) =>{
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/`,{
      method :'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({...note,'updated': new Date()})
    })
    update();
  }
  

  return (
    

    <Link to={`/note/${note.id}`}>

      <div className='notes-list-item'>
        <h3>{getTitle(note)[1]}</h3>
        <div onClick={()=>{deleteNote(note.id)} } className="delete-container"><DeleteButton/></div>
        
        <span className='date'>{getDate(note)}</span>
        <span className='content'>{getContent(note)}</span>
      </div>
      
    </Link>


   
  )
}

export default Listitem