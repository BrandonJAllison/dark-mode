import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
//this custom hook will take in a key and initial value
  const [storedValue, setStoredValue] = useState(()=> {
 
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });  

  const setValue = value =>{
   
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
  }

    return[storedValue, setValue];
};

export default useLocalStorage;
