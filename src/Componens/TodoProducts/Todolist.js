import React from "react";
import './Todolist.css'

const Todolist = (props) =>{
    return(
        <>
        <div className="Todo_style">
          
         <li>
          {props.text}
          <button  className="buttona"   onClick={() =>{
              props.onSelect(props.id)
          }}>-</button>
        </li>
        </div>
        </>
    )
}
export default Todolist;