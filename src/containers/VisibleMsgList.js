import { connect } from 'react-redux'
import MessageList from '../components/MessageList'


const searchFilter = (messages, filterText) => {
    let input = filterText.trim().toLowerCase();
    if(filterText != ""){
        return messages.filter(m => m.text.match(input))
    } else return messages
    
}

const mapStateToProps = (state) => ({
    messages: searchFilter(state.messages, state.filterText)
})


const VisibleMsgList = connect(
    mapStateToProps
)(MessageList)

export default VisibleMsgList