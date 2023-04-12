
import React, { useEffect, useState } from "react";
import './Addtodo.css'
import Todolist from "./Todolist";
 


const AddToseave = () =>{
  const list = localStorage.getItem('id')
  if(list){
    return JSON.parse(localStorage.getItem('id'))
  }else{
      return [];
  }
}
 
const Addtodo = (props) =>{

  const[input, setInput] = useState('  ')
  const[items, setItems] = useState(AddToseave ());

  const ListHandler = (event) =>{
    setInput(event.target.value);
  };
   
  const listsoitems = () =>{
     setItems((olditems)=>{
        return [...olditems, input];
     });
     setInput("");
  };

   const deletItems = (id) =>{
    console.log('deleted')

    setItems((olditems)=>{
      return olditems.filter((arryElem,index)=>{
        return index !== id;
      })
    })
   }
    const deletAll = ()=> {
     return setItems([])
    }



   useEffect(()=>{
    localStorage.setItem('id',JSON.stringify(items))
    
   },[items])
  

  return(
        <>
              <div className="main_div">
                <div className="center_div">
                 <br/>
                 <h1>ToDo List</h1>  
                 <br/>
                 <input type="text"
                 onChange={ListHandler}
                 value={input}
                 placeholder="Add a Items"/>
                 <button onClick={listsoitems}> + </button>
                 <ol>
                  
                    {
                        items.map((itemval,index)=>{
                          return(
                           <Todolist
                             key={index}
                             id={index}
                            text={itemval} 
                            onSelect={deletItems}
                            />
                           
                          )
                        })
                    }

                  
             
                 </ol>
                       <br/>
                       <br/>
              <button className="button_b"  onClick={deletAll}>Clear all</button>
               
                </div>
                 
               
              </div> 
        
        </>
    )

}
export default Addtodo;