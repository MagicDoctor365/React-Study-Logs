import LogFilter from "../LogFilter/LogFilter";
import LogItem from "../LogItem/LogItem";
import Card from "../UI/Card/Card";
import './Logs.css';
import { useState } from 'react';

const Logs = (props) => {
    const [year, setYear] = useState(2023);
    const onYearChangeHanlder = (year) => {
        setYear(year);
    }

    let logs = null;

    const filteredLogsData = props.logsData.filter((logItem) => logItem.date.getFullYear() == year);

    if (filteredLogsData.length == 0) {
        logs = <div className="no-logs">
            没有任何日志
        </div>;
    } else {
        logs = filteredLogsData.map(item => 
        <LogItem {...item} onDelete={() => props.onDeleteById(item.key)}></LogItem>);
    }

    return <Card className="logs">
        <LogFilter year={year} onYearChange={onYearChangeHanlder}></LogFilter>
        {
           logs
        }
    </Card>
}

export default Logs;