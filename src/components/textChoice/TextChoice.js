import React from 'react'
import TextAnswer from './TextAnswer'

function TextChoice({ question, onClickImageChoice, isChoice }) {
    return (
        <div className="text-choice">
        <div className="text-choice-header">{question.header}</div>
            {
                question.answers.map(answer => (
                        <TextAnswer
                                answer={answer} 
                                key={answer.id}
                                isChoice={isChoice === answer.id}
                                onClickImageChoice={onClickImageChoice} />
                    ))
            }
         </div>  
    )
}

export default TextChoice
