import {useEffect, useState} from "react";

const useLocalStorageState = (key, defaultVal) => {

    const savedVal = window.localStorage.getItem(key);

    const initVal = savedVal === null ? defaultVal : JSON.parse(savedVal);

    const [state, setState] = useState(initVal);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(state));
    }, [state]);

    return [state, setState];
}

export default useLocalStorageState;