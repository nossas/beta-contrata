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
            <span className="edit-icon"><i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i></span>
        </a>
    )
}

EditLink = connect()(EditLink)

export default EditLink