import logo from './logo.svg';
import './App.css';

const style = {
   fontSize: '24px',
   fontStyle : 'italic',
   color: 'red'
}

let text = 'test variable';


function App() {
  let text2 = '222';
  return (
    <>
      <div className='container'>
        <h1 style={style}>app_1</h1>
        <img alt="test" src="/images/logo512.png" />
        <ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>      
    </>
  );
}

export default App;
