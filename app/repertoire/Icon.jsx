import React from 'react';

export default function AddProgram({piece, onProgramChange, action}) {
   const [icon, setIcon] = React.useState(true)
   const icons = {
    "ADD":"add_circle",
    "REMOVE":"remove"
   }
   const handleClick = () => {
   if (action === "ADD"){
        onProgramChange(piece, action)
   }
   if (action === "REMOVE"){
         onProgramChange(piece, action)
}
    
    
    setIcon(!icon)
  }

   return <span 
            class="material-icons" 
            onClick={handleClick} 
            style={{cursor: 'pointer'}}>
            {icons[action]}
          </span>
}