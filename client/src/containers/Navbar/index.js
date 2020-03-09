import React from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import NavBar from '../../components/NavBar';
import { useTranslation } from 'react-i18next';

const NavBarContainer = (props) => {
    const {user, handleLogout} = props;
    const { i18n } = useTranslation();
    const handleChangeLang = () => {
        i18n.changeLanguage('fr')
        console.log(i18n.language);
    }
    return(
        <>
            <NavBar handleChangeLang={handleChangeLang} handleLogout={handleLogout} user={user} />
        </>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
});
const mapDispatchToProps = {
    "logoutAction": LogoutAction,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleLogout" : () => {
        dispatchProps.logoutAction();
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBarContainer);
 