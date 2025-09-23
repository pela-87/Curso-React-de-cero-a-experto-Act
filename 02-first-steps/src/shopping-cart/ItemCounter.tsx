import { useState } from "react";


//import './ItemCounter.css';
//Utilizando CSS como module
import style from './ItemCounter.module.css';

interface Props { 
    name : string,
    quantity?: number,
};

export const ItemCounter = ( {name, quantity = 1} : Props) => {

  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  }
  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  }


  return (
    <section 
      //Dandole stylo como modulo.
      className= {style['item-row']}

      //Utilizando los style de css normal.
      //className="item-row"

      //dandole stylo desde codigo.
      // style={{
      //     display: 'flex',
      //     alignItems: 'center',
      //     gap: 10,
      //     marginTop: 10,
      // }}
    >
        <span            
            className={style['item-text']}
            style={{
              color: count === 1 ? 'red' : 'black',
            }}
        >
          {name} 
        </span>
        <button onClick={ handleAdd }>
          +1
        </button>
        <span>{count}</span>
        <button onClick={ handleSubtract }>
          -1
        </button>
    </section>
  )
}
