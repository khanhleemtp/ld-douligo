import React from 'react'

const TextInput = ({ question, handleChange }) => {
    return (
            <div className="text-input">
            <div className="text-input-header">
                <div className="text-input-header-img">
                    <img src={question.image} />
                </div>
                <div className="text-input-header-title">
                    <div className="text-input-header-title-content">{question.header}</div>
                    <div className="text-input-header-title-decor">
                        <div className="text-input-header-title-decor-detail"></div>
                    </div>
                </div>
            </div>
            <div className="text-input-content">
                <div className="text-input-content-wrapper">
                        <textarea placeholder={question.placeholder} type="text" onChange={handleChange} />
                </div>
            </div>      
        </div>
    )
}

export default TextInput
