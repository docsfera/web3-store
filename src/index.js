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
                    background: "#FFF",
                },
                '.test':{
                    width: "180px",
                    height: "260px",
                    border: "1px solid #EDEDED",
                    margin: "10px",
                    padding: "10px"

                },
                '.staff':{
                    width: "150px",
                    height: "150px",
                    margin: "10px auto"
                },
                '.staff__info':{
                    width: "100%",
                },
                '.staff__name':{
                    margin: "0",
                    fontSize: "20px",
                    textAlign: "center",
                },
                '.staff__order':{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px"

                },
                '.staff__price':{
                    margin: "0"
                },
                '.wrist':{
                    background: "#EDEDED"
                },
                '.leggins':{
                    background: "#EDEDED"
                },
                '.fotbolka':{
                    background: "#EDEDED"
                },
                '.pants': {
                    background: "#EDEDED"
                },
                '.card': {
                    display: "flex",
                    width: "600px",
                    height: "450px",
                    position: "absolute",
                    background: "white",
                    top: "50%",
                    left: "50%",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    borderRadius: "10px"
                },
                '.card__canvas':{
                    width: "250px",
                    height: "400px",
                    background: "#F1F1F1"
                },
                '.card__info':{
                    paddingLeft: "40px"
                },
                '.card__type':{
                    fontSize: "14px",
                    margin: "0"
                },
                '.card__name':{
                    fontSize: "32px",
                    fontWeight: "300",
                    margin: "-5px 0 15px 0",
                },
                '.card__sizes':{
                    display: "flex"
                },
                '.size':{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "25px",
                    width: '25px',
                    background: "#F1F1F1",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginRight: '15px',
                    borderRadius: "4px",
                    cursor: "pointer",
                },
                '.card__count':{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px"
                },
                '.card__qty':{
                    marginRight: "20px"
                },
                '.card__span':{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20px",
                    height: "20px",
                    background: "#f2f2f2",
                    borderRadius: "4px",
                    padding: "8px 5px 8px 5px",
                    border: "1px solid #ddd",
                },
                '.card__input':{
                    height: "22px",
                    width: "45px",
                    textAlign: "center",
                    fontSize: "16px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    display: "inline-block",
                    verticalAlign: "middle",
                    margin: "0 5px"

                },
                '.card__colours':{
                    display: "flex",
                    marginBottom: "20px"
                },
                '.card__colour':{
                    width: "15px",
                    height: "15px",
                    borderRadius: "100%",
                    marginRight: "10px"
                },
                '.card__colour-1': {
                    background: 'red'
                },
                '.card__colour-2': {
                    background: 'green'
                },
                '.card__colour-3': {
                    background: 'blue'
                },
                '.card__colour-4': {
                    background: 'yellow'
                },
                '.card__colour-5': {
                    background: 'black'
                },
                '.card__price':{
                    fontSize: "26px"
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
