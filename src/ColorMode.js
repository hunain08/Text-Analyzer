import React from 'react'
import './App.css'
export default function ColorMode(props) {
    const [color, setColor] = React.useState('')
    const handleblack = ()=>{
      setColor()
    }
  return (
    <div>
    <span className="dot" style={{marginLeft:"auto"}} onClick={handleblack}/>
    </div>
  )
}
