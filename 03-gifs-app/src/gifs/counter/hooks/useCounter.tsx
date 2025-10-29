import { useState } from "react";


export const useCounter = (inicialValue: number = 10) => {
  const [counter, setCounter] = useState(inicialValue);

    const handleAdd = () => (
        setCounter( counter + 1)
    );

    const handleSubtract = () => (
        setCounter((prevState) => (prevState - 1))
    );

    const handleReset = () => (
        setCounter(inicialValue)
    );

    return {
        //Properties o Values
        counter,

        //Methods o Actions
        handleAdd,
        handleSubtract,
        handleReset,
    }
}
