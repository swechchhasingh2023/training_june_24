import React,{ useState, useEffect } from "react";
import Header from "./Header";

const App = () => {
    const [title] = useState('Developer funnel')
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

// handle click help to update the state dynamically
    const handleClick = () =>{
        setCount(count+1)
    }
    const handleClick1 = () =>{
        setCount1(count1+1)
    }

    useEffect (() =>{
        console.log("Hiiiiiii")
    },[count])

  return (
    <>
     <Header />
     <div style={{height: '200px', width: '300px', backgroundColor: 'skyblue'}}></div>
     <h1>{title}</h1>
     <h2>{count}</h2>
     <button onClick={handleClick}>Count</button>
     {/* <button onClick={()=>setCount(count+1)}>Count</button> */}
     <h2>{count1}</h2>
     <button onClick={handleClick1}>Count1</button>
    </>
  );
};
export default App;
