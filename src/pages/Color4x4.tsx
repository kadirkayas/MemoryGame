import  { useEffect, useState } from 'react';
import mixItem from '../service/MixItem';


const cards = ['red','blue','green','yellow','purple','orange','black','white']
const doubledCards = cards.concat(cards)
export function Color4x4() {
      
      const[mixedCards, setMixedCards] = useState<string[]>([])
      const[selected1, setSelected1] = useState<number | null>(null);
      const[selected2, setSelected2] = useState<number | null>(null);
      const[trueCards, setTrueCards] = useState<string[]>([])
      useEffect(()=>{
        setMixedCards(mixItem(doubledCards))
      },[])
      function handleClick(index: number) {
        if(selected1 === null){
          setSelected1(index)
        }else if(selected2 === null){
          setSelected2(index)
        }
        if(selected1 !== null && selected2 !== null){
          if(mixedCards[selected1] === mixedCards[selected2]){
            setTrueCards([...trueCards, mixedCards[selected1]])
            setSelected1(null)
            setSelected2(null)
          }else{
            setSelected1(null)
            setSelected2(null)
          }
        }
        
      }
    return(
        <>
        <h1>Color 4x4</h1>
        <div className='table4x'>
        {mixedCards.map((card,index)=>{
            return <div
            key={index}
            id={card} 
            className={'card4x' }
            style={{ backgroundColor:trueCards.includes(card) ||
                 selected1 === index || selected2 === index ? card : 'gray' }}
            onClick={() => handleClick( index)}
            >
        </div>
      })}

    </div>
        </>
    )
}