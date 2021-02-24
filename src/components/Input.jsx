import React from 'react'

import cn from 'classnames'

const Input = ({ className, placeholder, type, value, onChange, onClick, req, name }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={cn('input', className)}
            value={value}
            onChange={onChange}
            onClick={onClick}
            required={req && 'required'}
        />
    )
}

export default Input
