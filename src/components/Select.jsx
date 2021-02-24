import React from 'react'

import { map } from 'lodash'



const Select = ({ options, onSelect, selectValue, name }) => {
    const [optionsHidden, setOptionsHidden] = React.useState(true)

    const optionClick = (option) => {
        onSelect(option)
        toggleOptionsBlock()
    }
    const toggleOptionsBlock = () => {
        setOptionsHidden(!optionsHidden)
    }
    return (
        <div className="customSelect">
            <div onClick={toggleOptionsBlock} className="customSelect__value">
                {selectValue && selectValue.text}
            </div>
            
            {
                !optionsHidden &&   <div className="customSelect__options"> 
                                        {map(options, (option, index) => (
                                            <div key={index} className="customSelect__option" onClick={() => optionClick(option)}>
                                                {option.text}
                                            </div>
                                        ))}
                                    </div>
            }
        </div>
    )
}

export default Select
