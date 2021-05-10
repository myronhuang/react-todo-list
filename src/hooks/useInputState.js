import { useState } from "react";

const useInputState = (init) => {
    const [value, setValue] = useState(init);

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue("");
    };

    return [value, handleValueChange, reset];
}

export default useInputState;