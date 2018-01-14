import React from 'react'
import PropTypes from 'prop-types'
import EditLink from '../containers/EditLink'
import EditForm from '../containers/EditForm';

const Message = ({ chave, text, id, editing }) => {
    //text + link to edit(open the edit form) edit can be a bool => if edit = true call the <EditMsg />
    return (
        <div>
            <EditLink id={id} />
            {editing ?
                <EditForm
                    id={id}
                    chave={chave}
                    text={text}
                    editing={editing}
                />
                :
                <li>
                    {text}
                </li>
            }
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}

export default Message
