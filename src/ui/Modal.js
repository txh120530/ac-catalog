import {useCategory, useTheme, useModalToggle} from '../store/ThemeContext.js';


import styled, { css } from 'styled-components';
import ReactDOM from 'react-dom';

    

const Backdrop = props => {
	const modalToggle = useModalToggle();
	return <div className="backdrop" onClick={() => modalToggle(null)} />;
}

const ModalStyles = styled.div`
		display: block;
		${props => (props.theme === true ? css`background-color: #666` : css`background-color:#fff`)};
		${props => (props.theme === true ? css`color: #eee` : css`color:#111`)};
	`;


const Modal = ({infoID, children}) => {
	const theme = useTheme();
	const category = useCategory();
	const modalToggle = useModalToggle();


    return (
        <>
        {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalStyles id={infoID} theme={theme}  className="modal rounded shadow m-4 p-3 w-full max-w-sm">{children}</ModalStyles>, document.getElementById('modal-root'))}
        </>
    );
};

Modal.displayName = 'Modal';


export default Modal;
