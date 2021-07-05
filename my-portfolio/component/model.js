
const Model = ({ children, isOpen, closeModal, imagenes, imagenes1 }) => {
  const handleModalClick = e => e.stopPropagation()
  console.log(imagenes)

  return (
    
   
    <div className={`model ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="model-container" onClick={handleModalClick}>
        <ul className="slider" >

          {imagenes?.map((img, i) => {
            console.log(i)
            return (
              <li id={`cosa${i}`} key={i}>
                <img src={img.im} />
              </li>
            )
          })
          }
        </ul>
        <ul className="menu">
         
              <li>      <a href={`#cosa0`} >1</a>    </li>
              <li>      <a href={`#cosa1`} >2</a>    </li>
              <li>      <a href={`#cosa2`} >3</a>    </li>
      
        </ul>



        <button onClick={closeModal} className="model-close">x</button>
        {children}


      </div>
    </div>
  )
}

export default Model;