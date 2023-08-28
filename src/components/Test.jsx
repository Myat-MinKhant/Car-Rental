import { useRef } from "react";

export  const Parent = function() {
    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const search = useRef();

    return (
      <>
       <Child reference={el1} click={()=> scrollToDiv(el2)} />
       <Child reference={el2} click={()=> scrollToDiv(el1)}/>
      </>
     );  
   }
   
   const Child = ({ reference, click }) => (
     <div ref={reference} className=" bg-red-600 mt-10 h-screen">
       <button onClick={click}>click</button>
       <h1>Hello</h1>
     </div>
   );