import Image from "next/image"
import {useState} from "react"
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"

const ModelCasa = ({ children, isOpen, closeModal,  imagenes1 }) => {
  const handleModalClick = e => e.stopPropagation()
  console.log(imagenes1)

  return (
    
   
    <div className={`model ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="model-container" onClick={handleModalClick}>
        <ul className="sliderCasa" >

          {imagenes1?.map((img, i) => {
            console.log(i)
            return (
              <li id={`casa${i}`} key={i}>
                <img src={img.im} />
              </li>
            )
          })
          }
        </ul>
        <ul className="menuCasa">
         
              <li>      <a href={`#casa0`} >1</a>    </li>
              <li>      <a href={`#casa1`} >2</a>    </li>
              <li>      <a href={`#casa2`} >3</a>    </li>
      
        </ul>



        <button onClick={closeModal} className="model-close">x</button>
        {children}


      </div>
    </div>
  )
}

export default ModelCasa;