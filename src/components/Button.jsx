import React from 'react'
import cn from 'classnames';

const Button = ({ children, className, size, type, onClick }) => {
    return (
        <button 
            className={cn("btn", className, {"m": size !== "m"})}
            onClick={onClick}
            type={type}>
            { children}
        </button>
    )
}

export default Button
