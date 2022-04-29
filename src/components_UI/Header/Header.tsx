import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {PATH} from "../../enams/paths";

export const Header = () => {

    const dispatch = useDispatch()


    return <div>
            <nav>
                <NavLink to={PATH.LOGIN}>
                    Log In
                </NavLink>
                <NavLink to={PATH.PROFILE}>
                    Profile
                </NavLink>
                <NavLink to={PATH.REGISTRATION}>
                    Registration
                </NavLink>
                <NavLink to={PATH.PASSWORD_RESTORATION}>
                    Password recovery
                </NavLink>
                <NavLink to={PATH.PACKS}>
                    Packs List
                  </NavLink>
            </nav>
        </div>
}