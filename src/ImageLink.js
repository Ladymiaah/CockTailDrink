import React from 'react'

const ImageLink = () => {
    const handleClick = () =>{
        window.location.href = 
        "https://i.redd.it/tp5qh6dr83l11.jpg"
    }
  return (
    <img
    src="https://i.redd.it/tp5qh6dr83l11.jpg" alt="Logo" onClick={handleClick}
    />
  )
}

export default ImageLink