/** @format */

import "./App.css";
import React, { useState } from "react";
import Toggle from "../src/Toggle";
import Form from "../src/Form";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Navbar from '../src/Navbar'
const theme = createTheme({
    palette: {
        primary: {
            main: "#7B241C",
        },
        secondary:{
            main:"#fff"
        }
    },
});

const App = () => {
    const [text, setText] = useState("");
    const [checked, setChecked] = React.useState("false");

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return (
        <ThemeProvider theme={theme}>
            <div
                style={{ height: "100vh" }}
                className={checked ? "App d-color" : "App l-color"}>
                <Navbar checked={checked} toggle={toggleChecked}/>
                <br />
               
                <Form text={text} setText={setText} />
            </div>
        </ThemeProvider>
    );
};

export default App;
