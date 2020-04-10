import React from 'react';
import Header from './Header';
import { logout } from '../../redux/auth-reduser';
import { connect } from 'react-redux';

class HeaderComponent extends React.Component {

   
    render() {
        return <div>
            <Header {...this.props} />
        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export default connect(mapStateToProps, { logout })(HeaderComponent);
