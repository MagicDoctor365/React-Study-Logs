import ReactDOM from 'react-dom/client';  //react-dom已经分为client和server两种，这里用client
import './index.css';
import App from './App';

/*
const App = <div className='logs'>
    
</div>
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App name={'孙悟空'} age={18}/>);