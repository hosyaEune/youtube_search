import React from 'react'

import { Button, Input, RangeInput, Select } from './'

import { setModalActive } from '../redux/actions/modal'

import { addFavoriteVideos } from '../redux/actions/favoriteVIdeos'


const options = [
    {
        value: 'relevance',
        text: 'Без сортировки'
    },
    {
        value: 'date',
        text: 'Дате'
    },
    {
        value: 'rating',
        text: 'Рейтингу'
    },
    {
        value: 'relevance',
        text: 'Релевантности'
    },
    {
        value: 'title',
        text: 'Названию'
    },
    {
        value: 'videoCount',
        text: 'Количеству видео'
    },
    {
        value: 'viewCount',
        text: 'Количеству просмотров'
    },
]

// #TODO: научиться пользоваться formik

const Modal = ({ dispatch, changeInputHandler }) => {
    const fon = React.useRef(null)

    const clickOutsideCallback = React.useCallback(e => {
        if (e.path[0] === fon.current) {
            handleModalActive();
        }
    }, []);

    React.useEffect(() => {
        document.querySelector('body').addEventListener('click', clickOutsideCallback);
        return () => document.querySelector('body').removeEventListener('click', clickOutsideCallback);
    }, [clickOutsideCallback]);

    const handleModalActive = () => {
        dispatch(setModalActive(false))
    }


    const [formInputs, setFormInputs] = React.useState({
                                                            q: '',
                                                            title: '',
                                                            sortBy: options[0],
                                                            count: '12'
                                                        })

    const onChangeRangeValue = (e) => {
        let value = +e.target.value
        value = value < 25 ? value : 25
        value = value > 0 ? value : 1
        e.target.value = value
        changeInputHandler(e, setFormInputs)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addFavoriteVideos(formInputs))
        handleModalActive()
    }

    const handleSelectOption = (option) => {
        setFormInputs(prev => ({ ...prev, sortBy: option }))
    }

    return (
        <div className="modal" ref={fon}>
            <div className="wrapper">
                <div className="container">
                    <div className="test">
                        <form onSubmit={onSubmit}>
                            <h3>Сохранить запрос</h3>
                            <label>
                                Запрос
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Запрос"
                                        name="q"
                                        onChange={(e) => changeInputHandler(e, setFormInputs)}
                                        value={formInputs['q']}
                                    />
                                </div>
                            </label>

                            <label>
                                <span className="req_star">*</span> Название
                                <div>
                                    <Input
                                        value={formInputs['title']}
                                        type="text"
                                        placeholder="Название"
                                        name="title"
                                        onChange={(e) => changeInputHandler(e, setFormInputs)}
                                        req
                                    />
                                </div>
                            </label>
                            <label>
                                Сортировать по:
                                <div>
                                    <Select options={options} onSelect={handleSelectOption} selectValue={formInputs['sortBy']}/>
                                </div>
                            </label>
                            <label>
                                Максимальное количество
                                <div>
                                    <RangeInput
                                        nameRange="count"
                                        nameInput="count"
                                        rangeValue={formInputs['count']}
                                        onChangeRange={onChangeRangeValue}
                                        onChangeInput={onChangeRangeValue}
                                    />
                                </div>
                            </label>
                            <div className="modal__buttons">
                                <Button type="button" className="disabled" onClick={handleModalActive}>Не сохранять</Button>
                                <Button type="submit">Сохранить</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
