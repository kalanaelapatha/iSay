import { connect } from 'react-redux'
import MainView from "../components/MainView";
import {login, logout, submitClick} from "./action";


const mapStateToProps = state => ({

    config:state.configReducer,

});

const mapDispatchToProps = (dispatch) => ({


    loginClick: () => dispatch(login()),
    logoutClick: () => dispatch(logout()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainView)