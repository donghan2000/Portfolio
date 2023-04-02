import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import App from "./Components/App";
import reportWebVitals from './reportWebVitals';

function Overlay() {
    return <>
        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
            <div style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
                <h1 style={{ margin: 0, padding: '0px 50px', fontSize: '5em', fontWeight: 500, letterSpacing: '-0.05em' }}>DONG HAN </h1>
            </div>
        </div>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Overlay />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
