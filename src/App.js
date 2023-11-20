import Logs from "./Components/Logs/Logs";
import LogForm from "./Components/LogForm/LogForm";
import './App.css';
import { useState } from 'react';

const App = () => {
    const [logsData, setLogsData] = useState([
        {key: '01', date: new Date(2023,5,1), desc: "学习前端", time: 50},
        {key: '02', date: new Date(2020,6,4), desc: "学习粤语", time: 20},
        {key: '03', date: new Date(2021,9,21), desc: "学习量化", time: 100},
        {key: '04', date: new Date(2022,10,8), desc: "学习英语", time: 30},
        {key: '05', date: new Date(2023,11,9), desc: "学习系统设计", time: 60},
    ]);

    
    const onSaveLogsData = (formData) => {
        formData['key'] = Date.now();
        setLogsData([formData,...logsData]);
    }

    const onDeleteById = (id) => {
        setLogsData(prevState => {
            const newLogs = [...prevState].filter((x) => x.key != id);
            return newLogs;
        });
    }

    return (
        <div className="app">
            <LogForm onSaveLogsData={onSaveLogsData}></LogForm>
            <Logs logsData={logsData} onDeleteById={onDeleteById}></Logs>
        </div> 
    )

}

export default App;
