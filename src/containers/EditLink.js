import React from 'react'
import { changeEditing } from '../actions'
import { connect } from 'react-redux'


let EditLink = ({dispatch, id}) => {
    return (
        <a href="#"
            onClick={e => {
                e.preventDefault()
                dispatch(changeEditing(id))
            }}
        >
            Edit
        </a>
    )
}

EditLink = connect()(EditLink)

export default EditLink