import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export const Detail = () => {
const { id }= useParams();
  return <div className="text-7xl text-yellow-400 font-bold">SHOU {id}</div>
}


export const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Sho shua 2.0");

  useEffect(()=> {
    if(count===990){
      setTitle("hai raggiunto il livello Ken manca poco per il Chen, FORZA")
    }
  },[count])

  
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-3xl text-Green-400 mb-4">
          {title}
        </h1>

        <h2 className="text-center font-bold text-xl mb-6">Vite + React</h2>

        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-violet-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
            onClick={() => setCount((count) => count + 9)}
          >
            Hai premuto il pulsante {count} {count === 1 ? "volta" : "volte"}
          </button>

          <button
              className="bg-violet-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
              onClick={() => setTitle("Charizard")}
          >
            Cambia
          </button>

          <Link to="/frontend-rocks/SHOU/1  text-violet-400 font-bold">Link della pagina dettagliata</Link>
        </div>
      </div>
    </div>
  );
}
