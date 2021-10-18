import React from 'react'

function TextAnswer({ answer, onClickImageChoice, isChoice }) {
    return (
        <div className={ isChoice ? "text-choice-answers-unit isChoice": "text-choice-answers-unit" }
            onClick={() => onClickImageChoice(answer) }
        >
            <div className="text-choice-answers-wrapper">
                {answer.title}
            </div>
        </div>
    )
}

export default TextAnswer
