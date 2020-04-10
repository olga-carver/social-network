import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogsReduser';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}

export default compose (
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs)