const Model = ({ children, isOpen, closeModal }) => {
    const handleModalClick = e => e.stopPropagation()
    return (
        <div className={`model ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="model-container" onClick={handleModalClick}>
           
            
    
            <ul className="slider">
              <li id="slide1" className="sliderH img-fluid">
                <img src="Projects/landing.png" />
              </li>
              <li id="slide2" className="sliderH">
                <img src="Projects/buscador.png" />
              </li>
              <li id="slide3" className="sliderH">
                <img src="Projects/Indice.png" />
              </li>
            </ul>
          
            <ul class="menu">
              <li>      <a href="#slide1" >1</a>    </li>
              <li>      <a href="#slide2" >2</a>    </li>
              <li>      <a href="#slide3" >3</a>    </li>
            </ul>
          
       
                <button onClick={closeModal} className="model-close">x</button>
                {children}
            </div>
        </div>
    )
}

export default Model;