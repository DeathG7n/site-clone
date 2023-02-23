
import React, {useState} from 'react'
import { Faqs } from './faqStyles'
import { faqArray1 , faqArray2} from './faquestions'

export default function Faq() {
  
  return (
    <Faqs>
            <h1>Frequently Asked Questions</h1>
            <span>
              <section>
                {faqArray1.map(faq=>{
                  return(
                    <Card item={faq}/>
                  )
                })}
              </section>
              <section>
                {faqArray2.map(faq=>{
                  return(
                    <Card item={faq}/>
                  )
                })}
              </section>
            </span>
          </Faqs>
  )
}

export function Card({item}){
  const [show, setShow] = useState(false)
  function handleShowAnswer(){
      setShow(!show)
  }
  return(
    <div onClick={handleShowAnswer}>
      <p><span>{show? "-" : "+"}</span>{item?.questions}</p>
      <div style={{display: show? "block" : "none"}}>{item?.answers}</div>
    </div>
  )
}
