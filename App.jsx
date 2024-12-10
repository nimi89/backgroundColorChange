import { useState } from "react"


function App() {
  let [color, setColor] = useState("white")

   return (
    <>
    
    
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 

            <button onClick={
              () => setColor("red")
            } className="w-20 outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"red"}}
            > red </button>
            <button onClick={() => setColor("black")} className="w-20 border-2 px-4 py-1 rounded text-black" style={{backgroundColor:"white"}}> white </button>
            <button onClick={() => setColor("olive")} className="w-20 outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"olive"}}> olive </button>
            <button onClick={() => setColor("orange")} className="w-20 outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"orange"}}> orange</button>
            <button onClick={() => setColor("green")} className="w-20 outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"green"}}> green </button>
            <button onClick={() => setColor("blue")} className="w-20 outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"blue"}}> blue </button>
            <button onClick={() => setColor("brown")} className="w-20 outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"brown"}}> brown </button>
            <button onClick={() => setColor("purple")} className="w-20 outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"purple"}}> purple </button>
            <button onClick={() => setColor("yellow")} className="w-20 outline-none px-4 py-1 rounded text-red" style={{backgroundColor:"yellow"}}> yellow </button>

          </div>
           </div>
      </div>
    </>
  )
}

export default App
