import React, { useState, createContext, useEffect } from 'react';
export const Themee = createContext();
let Theme = (props) => {
    let [theme, setTheme] = useState(true);
    //console.log(theme);
    let Test = () => {
        if (theme) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            //setTheme(theme);
        }
        else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            //setTheme(false);
        }
    }
    useEffect(() => {
        Test();
    })
    return (
        <>
            <Themee.Provider value={[theme, setTheme]}>
                {props.children}
            </Themee.Provider>
        </>
    )
}
export default Theme;