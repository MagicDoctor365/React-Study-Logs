import MyDate from "../MyDate/MyDate";
import Card from "../UI/Card/Card"
import './LogItem.css';
import ConfirmModal from "../UI/ConfirmModal/ConfirmModal";
import {useState} from 'react';

const LogItem = (props) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const deleteHandler = () => {
        setShowConfirmModal(true);
    }

    const onCancelClickHandler = () => {
        setShowConfirmModal(false);
    }

    const onOKClickHandler = () => {
        props.onDelete();
    }

    return <Card className='item'>
        {showConfirmModal && 
            <ConfirmModal 
            onCancelClickHandler={onCancelClickHandler}
            onOKClickHandler={onOKClickHandler}
            />  
        }
        <MyDate date={props.date}/>
        <div className='content'>
            <h2 className='desc'>{props.desc}</h2>
            <div className='time'>{props.time}分钟</div>
        </div>
        <div>
            <div className="delete" onClick={deleteHandler}>x</div>
        </div>
    </Card>
}

export default LogItem;