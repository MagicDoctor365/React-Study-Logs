
const LogFilter = (props) => {
    const onChangeHandler = (e) => {
        props.onYearChange(+e.target.value);
    }
    return <div>
        <span>年份: </span>
        <select value={props.year} onChange={onChangeHandler}>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
    </select>
    </div>
}

export default LogFilter;