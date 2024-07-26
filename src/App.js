import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState();
  const [value, setValue] = useState([]);

  const addValue = () => {
    if(!name || !amount) return alert("pls enter something");
    const obj = { id:value.length+1,title:name, amount:amount };

    setValue([...value, obj]);
    setName('');  // jaise hi value aajaye is khali kar 
    setAmount(0)   // same aapplies here
       };

       const deleteProduct = (id) => {
        setValue(value.filter((item) => item.id !== id)); // Use `item` instead of `value` in filter
      };

  return (
    <div class="main">
      <h1>Expense List</h1>
      <div class="inner1">
        <input type="text" placeholder="name" value={name} onChange={(e)=>(setName(e.target.value))} />
      </div>

      <div class="inner2">
        <input type="text" placeholder="0" value={amount} onChange={(e)=>(setAmount(parseFloat(e.target.value)))} />
      </div>

      <button onClick={addValue}>Add</button>
      <ol>
        {value.map((e)=>
        {
          return (   // return statment is very important it can make or break code
            <li key={e.id}>
          {e.title}   
          {e.amount} <button onClick={()=>(deleteProduct(e.id))}> delete</button></li>
          )
       
        })}
      </ol>
    </div>
  );
};

export default App;
