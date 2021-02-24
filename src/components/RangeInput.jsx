import React from 'react'

import { Input } from './'

const RangeInput = ({ nameRange, nameInput, rangeValue, onChangeRange, onChangeInput }) => {
    return (
        <div className="rangeInput">
            <input
                name={nameRange}
                className="rangeInput__range"
                type="range"
                min="1"
                max="25"
                step="1"
                value={rangeValue}
                onChange={onChangeRange}
            />
            <Input
                name={nameInput}
                className="rangeInput__input"
                value={rangeValue}
                onChange={onChangeInput}
            />
        </div>
    )
}

export default RangeInput
