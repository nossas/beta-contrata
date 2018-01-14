import React from 'react'
import { connect } from 'react-redux'
import { editMsg } from '../actions'

let EditForm = ({ dispatch, id, text, chave, editing }) => {
    let inputChave
    let inputText
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                editing = false
                dispatch(editMsg(id, inputChave.value, inputText.value, editing))
            }}>
                <input
                    ref={node => { inputChave = node }}
                    defaultValue={chave}
                />
                <input
                    ref={node => { inputText = node }}
                    defaultValue={text}
                />
                <button type="submit">
                    Save
                </button>
            </form>
        </div>
    )
}


EditForm = connect()(EditForm)

export default EditForm