import React from 'react'

function Button( { idName, cssClass, text, iconClass, refName, click, isdisabled } ){
    return(
        <button className={cssClass} id={idName} ref={refName} onClick={click} disabled={isdisabled}>
            {iconClass ? <i className={iconClass}></i>: null} {text}
        </button>
    )
}

export default Button