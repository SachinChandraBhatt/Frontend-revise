import React, { useEffect, useState } from 'react'

const Button = ({ text, color, lin, borderColor, gredient, bgColor }) => {
    // const [btnStl, setbtnStl] = useState(null)
    let btnStl = lin?{background : gredient}:{backgroundColor:bgColor}
    console.log(btnStl);
    return (
        <button className={` px-8 py-2 rounded-full border`}
            style={{...btnStl,  color: color, borderColor: borderColor }}
        >{text}</button>
    )
}

export default Button