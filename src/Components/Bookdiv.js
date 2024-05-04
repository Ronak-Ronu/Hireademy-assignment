import React, { useState } from 'react'
import "./CSS/Bookdiv.css"
import { Link } from 'react-router-dom'
export default function Bookdiv({id,title,author,isbn,pagecount}) {
    const intid=parseInt(id,10);
  return (
    <div>
            {
                intid && title && isbn?(

                //   <div className='authorscontainer'>
                //     {author.map((author) => (
                //         <p key={author}>
                //            <div className='authors'>
                //             {author}
                //            </div>
                //         </p>
                //       ))}
                //   </div>

                <div class="component-3-parent">
                <div class="component-3">
                  <div class="nav-item-shape">{title}</div>
                  <div class="nav-item-container">
                    <div class="nav-item-details">
                      <div class="nav-item-icon">ISBN : {isbn}</div>
                      <div class="nav-item-details-child">Page Count :{pagecount}</div>
                    </div>
                    <h5>Authors</h5>

                    <div class="nav-item-details1">
                      <div class="nav-item-details-item" >
                         <div className='authorscontainer'>
                            {author.map((author) => (
                                <ul key={author}>
                                    <li className='authors'>
                                    {author}
                                    </li>
                                </ul>
                            ))}
                    </div>

                      </div>
                      <div class="nav-item-details-inner">id:{id}</div>
                    </div>
                    <Link to={'/'}>
                            <div class="go-back-icon">back</div>
                    </Link>
                  </div>
                </div>
            </div>
        
                  ):(
              <div className="container">
                      <Link to={`/books/${intid}`}>
                    <div className="title">{title}</div>
                    </Link>
                    </div>

                )
            }
            
    </div>
  )
}
