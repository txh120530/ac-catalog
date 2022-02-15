import {useCategory} from '../store/ThemeContext.js';
import {useTheme} from '../store/ThemeContext.js';

import styled, { css } from 'styled-components'



const NavBarstyles = styled.div`
		display: block;
		${props => (props.theme === true ? css`background-color: #999996` : css`background-color:#FFFFFA`)};
		${props => (props.theme === true ? css`color: #eee` : css`color:#111`)};


	`;


const NavBar = ({children}) => {
	const theme = useTheme();
	const category = useCategory();


    return (
        <>
        	<NavBarStyles theme={theme}  className="navBar rounded shadow m-4 p-3 w-full max-w-xs">{children}</NavBarStyles>
        </>
    );
};

NavBar.displayName = 'NavBar';


export default NavBar;
