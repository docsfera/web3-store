import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MantineProvider} from '@mantine/core'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            globalStyles: (_theme) => ({
                boby:{
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden'
                },
                '#root':{
                    width: '100%',
                    height: '100%',
                },
                '.App':{
                    height: '100vh',
                    background: "url('store.jpg') no-repeat center",

                },
                canvas:{
                    position: 'absolute',
                    width: '50vw',
                    height: '50vh'
                },
                '.main' :{
                    display: "flex",
                    flexWrap: "wrap",
                    position: "absolute",
                    top: "100px",
                    right: "200px",
                    width: "600px",
                    height: "70vh",
                    background: "grey",
                },
                '.staff': {
                    width: "150px",
                    height: "150px",
                    margin: "20px"
                },
                '.wrist':{
                    background: "green"
                },
                '.leggins':{
                    background: "blue"
                },
                '.fotbolka':{
                    background: "red"
                },
                '.pants': {
                    background: "yellow"
                }


            })
        }}>
            <App/>

        </MantineProvider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
