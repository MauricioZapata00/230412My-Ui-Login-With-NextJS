import React from "react";

const InputPassword = (props) => {

    const { idLabelPassword, labelPassword, idPassword, password, onChange, placeHolder } = props
    return (
        <div>
            <label id={idLabelPassword} htmlFor={idPassword}>{labelPassword}</label>
            <input id={idPassword} type="password" value={password} onChange={onChange} placeholder={placeHolder}/>
        </div>
    )
}

export default InputPassword