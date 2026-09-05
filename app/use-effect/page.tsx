"use client"
import { useEffect, useState } from "react"

export default function useEffectPage() {
    const [theStateChangedOnEffect, setTheStateChangedOnEffect] = useState<null|number>(null);
    const [theStateChangedOnEffect2, setTheStateChangedOnEffect2] = useState<null|number>(null);

    function updateTheState(){
        setTheStateChangedOnEffect(Math.round(Math.random()*1000))
        setTheStateChangedOnEffect2(Math.round(Math.random()*2000))
    }

    useEffect(()=>{
        console.log("the value of theStateChangedOnEffect ===>%s\n the value of theStateChangedOnEffect2 ===>%s", theStateChangedOnEffect, theStateChangedOnEffect2)
    },[theStateChangedOnEffect2])
  return (
    <div><p>use effect page</p> <br />

        <button onClick={updateTheState} className="bg-green-400 border border-red text-white font-bold p-2" >
            update the state
        </button>
    </div>
  )
}
