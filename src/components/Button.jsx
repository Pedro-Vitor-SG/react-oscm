import React from 'react'

import  './Button.css'

const Button = (props) => {
    return ( 
        <button>{props.content}</button>
     );
}
 
export default Button;