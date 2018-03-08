import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import { editMsg } from '../actions'

let EditForm = ({ dispatch, id, text, chave, editing }) => {
    let inputChave
    let inputText
    return (
        <div>
            <Form onSubmit={e => {
                e.preventDefault()
                editing = false
                dispatch(editMsg(id, inputChave.value, inputText.value, editing))
            }}>
                <FormGroup>
                    <Label>Chave:</Label>
                    <input
                        ref={node => { inputChave = node }}
                        defaultValue={chave}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Mensagem:</Label>
                    <input
                        ref={node => { inputText = node }}
                        defaultValue={text}
                    />
                </FormGroup>
                <Button type="submit" color="success">
                    <i className="fa fa-check-square" aria-hidden="true"></i> Salvar
                </Button>
            </Form>
        </div>
    )
}


EditForm = connect()(EditForm)

export default EditForm