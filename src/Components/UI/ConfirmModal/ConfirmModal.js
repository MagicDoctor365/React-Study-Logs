import './ConfirmModal.css';
import Card from '../Card/Card';
import BackDrop from '../BackDrop/BackDrop';

const ConfirmModal = (props) => {
    return <BackDrop>
        <Card className="confirm-modal">
        <div className='confirm-text'>
            <p>该操作不可恢复，确认码？</p>
        </div>
        <div className='confirm-button'>
            <button className='ok-button' onClick={props.onOKClickHandler}>确认</button>
            <button onClick={props.onCancelClickHandler}>取消</button>
        </div>
    </Card>
    </BackDrop>
}

export default ConfirmModal;