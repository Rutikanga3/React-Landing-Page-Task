import React from 'react'
const variantClasses = {
  primary: "bg-primaryColor-800 text-white hover:bg-primaryColor-700",
  
};


function Buttons({
    type = "button",
    variant='primary',
    onClick,
    className = `px-4 py-2 rounded-md font-semibold bg-primaryColor-500 text-white hover:bg-primaryColor-600`,
    children,

}) {
  return (
    <div>
      <button type={type} onClick={onClick} variant={variant} className={className}>{children} </button>
        
    </div>
  )
}

export default Buttons
