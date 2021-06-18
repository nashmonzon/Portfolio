import Image from "next/image"

const Model = ({ children, isOpen, closeModal, imagenes }) => {
  const handleModalClick = e => e.stopPropagation()

  return (

    <div className={`model ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="model-container" onClick={handleModalClick}>
        <ul className="slider" >

          {imagenes?.map((img, i) => {
            console.log(img)
            return (
              <li id={`slide${i}`} key={i}>
                <img src={img.im} />
              </li>
            )
          })
          }
        </ul>
        <ul class="menu">
         
              <li>      <a href={`#slide0`} >1</a>    </li>
              <li>      <a href={`#slide1`} >2</a>    </li>
              <li>      <a href={`#slide2`} >3</a>    </li>
              <li>      <a href={`#slide3`} >1</a>    </li>
              <li>      <a href={`#slide4`} >2</a>    </li>
              <li>      <a href={`#slide5`} >3</a>    </li>

           
          

        </ul>



        <button onClick={closeModal} className="model-close">x</button>
        {children}


      </div>
    </div>
  )
}

export default Model;