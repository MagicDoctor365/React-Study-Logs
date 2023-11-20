import './LogForm.css';
import Card from '../UI/Card/Card';
import { useState } from 'react';


const LogForm = (props) => {
    const [inputDate, setInputDate] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputTime, setInputTime] = useState(0);

    const onDateChange = (e) => {
        setInputDate(e.target.value);
    }

    const onDescChange = (e) => {
        setInputDesc(e.target.value);
    }

    const onTimeChange = (e) => {
        setInputTime(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputDate('');
        setInputDesc('');
        setInputTime('');
        const data = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }
        console.log(data);
        props.onSaveLogsData(data);
    }

    return (
        <Card className="log-form">
            <form onSubmit={handleSubmit}>
                <div className='form-item'>
                    <label htmlFor="date">日期</label>
                    <input id="date" type="date" value={inputDate} onChange={onDateChange}/>
                </div>
                <div className='form-item'>
                    <label htmlFor="desc">内容</label>
                    <input id="desc" type="text" value={inputDesc} onChange={onDescChange}/>
                </div>
                <div className='form-item'> 
                    <label htmlFor="time">时长</label>
                    <input id="time" type="number" value={inputTime} onChange={onTimeChange}/>
                </div>
                <div className='form-btn'>
                    <button >添加</button>
                </div> 
            </form>
        </Card>
    )
}

export default LogForm;