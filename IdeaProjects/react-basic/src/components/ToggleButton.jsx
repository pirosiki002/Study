import React, {useState} from "react";
import { useEffect } from "react";

const ToggleButton = () =>{
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prevState => !prevState);
  }

  console.log("not useEffect open =", open);

  useEffect(()=>{
      console.log("This is the useEffect open =", open);
  },[open]);

  return(
    <button onClick={toggle}>
      {open ? 'OPEN':'CLOSE'}
    </button>
  )
}

export default ToggleButton;