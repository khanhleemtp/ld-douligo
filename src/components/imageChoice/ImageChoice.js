import React, { useState } from 'react'

const ImageChoice = ({ answer, onClickImageChoice, isChoice }) => {

    return (
        <div
         onClick={onClickImageChoice}
         className={isChoice ? "image-choice-answer-unit isChoice" : "image-choice-answer-unit"}>
            <div className="image-choice-answers-img">
                <img src={answer.image} />
            </div>
            <div>{answer.title}</div>
        </div>
    )
}

export default ImageChoice
