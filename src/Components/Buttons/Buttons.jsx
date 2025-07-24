import React from 'react'
const variantClasses = {
  primary: "bg-primaryColor-800 text-white hover:bg-primaryColor-700",
  
};


function Buttons({
    type = "button",
    variant='primary',
    onClick,
    className = `px-4 py-2 rounded-md font-semibold bg-primaryColor-500 text-white hover:bg-primaryColor-600 sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg`,
    children,

}) {
  return (
    <div>
      <button type={type} onClick={onClick} variant={variant} className={className}>{children} </button>
        
    </div>
  )
}

export default Buttons
