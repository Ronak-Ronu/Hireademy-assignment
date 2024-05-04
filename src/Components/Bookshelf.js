import React, { useEffect, useState } from 'react'
import {book_api,params_book_api} from '../API/book_api';
import Bookdiv from './Bookdiv';
import "./CSS/Bookshelf.css"
import { useParams } from 'react-router-dom';
export default function Bookshelf() {
    const [books,setBooks]=useState([]);
    const {id} = useParams();
    const idInt = parseInt(id, 10);
    useEffect(()=>{
        console.log(id);
      const fetchbooks=async()=>{
        try {
            let data=[];
            if (idInt) {
                data=await params_book_api(idInt);
                console.log(data);
            }
            else{
                 data= await book_api();
                console.log(data);
            }
            setBooks(data);
    
        } catch (error) {
          console.error(error);
          setBooks([]);
        }
      }
      fetchbooks();
    },[idInt]);
    return (
      <div className='bookshelfcontainer'>
  
  {!id?(

      books.map((book) => (
          <div key={book.id}>
              {/* <p>{book.title}</p> */}
                <Bookdiv id={book.id} title={book.title}/>          
            </div>
          ))
        ):(
            <div>
                <Bookdiv  id={books.id} 
                 title={books.title}
                 author={books.authors}
                  isbn={books.isbn}
                  pagecount={books.pageCount}/>
            </div>
        )
    }
      </div>
    )  
}
