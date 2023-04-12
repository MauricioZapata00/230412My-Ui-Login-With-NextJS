import React from "react";

const InputText = (props) => {

    const { idLabel, labelText, idText, text, onChange, placeHolder } = props
    return (
        <div>
            <label id={idLabel} htmlFor={idText}>{labelText}</label>
            <input id={idText} type="text" value={text} onChange={onChange} placeholder={placeHolder}/>
        </div>
    )
}

export default InputText
