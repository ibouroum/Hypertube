import React, {useState} from 'react';
import {connect} from "react-redux";
import NavBar from '../../components/NavBar';
import { useTranslation } from 'react-i18next';
import MyModal from "../../components/commun/modal";
import Profile from '../../containers/Profile';
import {ClearUserInformation } from "../../actions/logoutAction";
const NavBarContainer = (props) => {
    const {user, handleLogout} = props;
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleChangeLang = () => {
        i18n.changeLanguage('fr')
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleProfileOpen = () => {
        setOpen(true);

    }
    return(
        <>
            <NavBar handleChangeLang={handleChangeLang} handleProfileOpen={handleProfileOpen} handleLogout={handleLogout} user={user} />
            {open && <MyModal isOpen={open}  handleClose={handleClose}>
                <Profile   user={user} />
            </MyModal>}
        </>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
});
const mapDispatchToProps = {
    "ClearUserInformation": ClearUserInformation,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleLogout" : () => {
        dispatchProps.ClearUserInformation();
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBarContainer);
 