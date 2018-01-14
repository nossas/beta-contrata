import React from 'react'
import { Button } from 'reactstrap';
import { filterMsg } from '../actions'
import { connect } from 'react-redux'

let Search = ({ dispatch }) => {
    let input
    return (
        <div className="search-form">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                //dispatch(filterMsg(input.value))
                //input.value = ''
            }}>
                <input className="search-input"
                    placeholder="Pesquisar mensagem..."
                    ref={node => {
                        input = node
                    }}
                    onChange={() => {
                        dispatch(filterMsg(input.value))
                    }}                   
                />
            </form>
        </div>
    )
}

Search = connect()(Search)

export default Search