import { useState } from "react";
import "./CSS/searchbar.css"
import { params_book_api } from "../API/book_api";
import Bookdiv from "./Bookdiv";

export default function Searchbar() {

  const [data,setData]=useState('');
  const [book,setBook]=useState('');

  const handlesubmit =async (e) =>{
    e.preventDefault();
    try {
      
    const idInt = parseInt(data, 10);
    let bookdata=await params_book_api(idInt);
    setBook(bookdata);  
  } catch (error) {
      setBook('');
  }
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlesubmit(e); 
    }
  }
  return (
    <div>
        <form onSubmit={handlesubmit}>
          <textarea name="textarea"
            id="textarea" 
            onKeyDown={handleKeyDown}
            placeholder="which book id you want? try search!"
            value={data}
               onChange={(e)=>{setData(e.target.value)}}>
               </textarea>
        </form>

  
        { book?(
          <div style={{display:"flex",justifyContent:"center"}}>
          <Bookdiv id={book.id} title={book.title}/>
          </div>
        ):(
          <div></div>
        )
        }
    </div>
  )
}
