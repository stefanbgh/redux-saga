import React from 'react'
import { IModalButtons } from 'typescript/interfaces/IModalButtons'

const BasicModalButtons = ({ leftBtn, rightBtn, rightBtnType, leftBtnHandleEvent }: IModalButtons): JSX.Element => {
    return (
        <div id="modal__button">
            <button
                id="modal__button-close"
                type="button"
                onClick={leftBtnHandleEvent}
            >
                {leftBtn}
            </button>
            <button
                id={`modal__button-${rightBtnType}`}
                type="submit"
            >
                {rightBtn}
            </button>
        </div>
    )
}

export default BasicModalButtons