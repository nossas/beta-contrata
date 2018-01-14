import React from 'react'
import { filterMsg } from '../actions'
import { connect } from 'react-redux'

let Search = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(filterMsg(input.value))
                //input.value = ''
            }}>
                <input
                    placeholder="Pesquisar mensagem..."
                    ref={node => {
                        input = node
                    }}
                    onChange={() => {
                        dispatch(filterMsg(input.value))
                    }}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

Search = connect()(Search)

export default Search