import './BackDrop.css';
import ReactDOM from 'react-dom';

const backdroproot = document.getElementById('backdrop-root');

const BackDrop = (props) => {
    return ReactDOM.createPortal(<div class="back-drop">
        {props.children}
    </div>, backdroproot);
}

export default BackDrop;