import {useCategory} from '../store/ThemeContext.js';
import {useTheme} from '../store/ThemeContext.js';

import styled, { css } from 'styled-components'



const CardStyles = styled.div`
		display: block;
		${props => (props.theme === true ? css`background-color: #999996` : css`background-color:#FFFFFA`)};
		${props => (props.theme === true ? css`color: #eee` : css`color:#111`)};


	`;


const Card = ({children}) => {
	const theme = useTheme();
	const category = useCategory();


    return (
        <>
        	<CardStyles theme={theme}  className="card rounded shadow m-4 p-3 w-full max-w-xs">{children}</CardStyles>
        </>
    );
};

Card.displayName = 'Card';


export default Card;
