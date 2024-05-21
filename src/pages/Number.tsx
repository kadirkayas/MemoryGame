import  { useEffect, useState } from 'react';
import mixItem from '../service/MixItem';


const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const doubledCards = cards.concat(cards)
export function NumberGame() {
      
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
        <h1>Number 6x6</h1>
        <div className='table6x'>
        {mixedCards.map((card,index)=>{
            return <div
            key={index}
            id={card} 
            className={'card6x' }
            style={{ backgroundColor: trueCards.includes(card) ? 'green' : ''}}
            onClick={() => handleClick( index)}
            ><div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                {`${trueCards.includes(card) ||selected1 === index || selected2 === index ? card : ''}`}    
            </div>
        </div>
      })}

    </div>
        </>
    )
}