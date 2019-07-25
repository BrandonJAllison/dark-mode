import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'; //importing our useLocalStorage custom hook into our useDarkMode component

const useDarkMode = () => {

    const [darkValue, setDarkValue] = useLocalStorage("DarkMode");
    useEffect(()=>{
       
        darkValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkValue])

    return[darkValue, setDarkValue]

};

export default useDarkMode;
