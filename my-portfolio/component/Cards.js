import Link from "next/Link"
import { works } from "../profile"
import swal from 'sweetalert2'
import Model from "./model"
import { useModal } from "../hooks/useModal"



const Cards = () => {
  const mostrarVideo = (boton) => {


    swal.fire({

      html: `<h1 >Vesky</h1>
            <iframe width="100%" height="300" src="${boton.href}" frameborder="0"></iframe>`,
      background: "#2e2e35",
      // width: "50%",
      customClass: {
        confirmButton: 'boton',
      },
      buttonsStyling: false,

    })



  }




  const [isOpen1, openModal1, closeModal1] = useModal(false)
  const [isOpen2, openModal2, closeModal2] = useModal(false)

  // console.log(isOpen)
  // const mostrarFoto = (boton, openModal) => {
    
  //   const handleModalClick = e => e.stopPropagation()

  //   return (

  //     <div className={`model ${isOpen && "is-open"}`} onClick={closeModal}>
  //       <div className="model-container" onClick={handleModalClick}>

  //         {boton.img?.map((img, i) => {
  //           //  console.log(img)
  //           return (

  //             <ul className="slider" key={i}>
  //               <li id="slide1" >

  //                 <img src={img.im} />
  //               </li>

  //             </ul>
  //           )
  //         })

  //         }


  //         <ul class="menu">
  //           <li>      <a href="#slide1" >1</a>    </li>
  //           <li>      <a href="#slide2" >2</a>    </li>
  //           <li>      <a href="#slide3" >3</a>    </li>
  //         </ul>


  //         <button onClick={closeModal} className="model-close">x</button>

  //       </div>
  //     </div>
  //   )


  // }

  return (
    <div className="cardConteiner" id="prt">
      <div className="container ">
        <div className="intro2 primaryColor">
          <h6 className="subtitulos">porfolio</h6>
          <h2 >Mis trabajos</h2>
          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {
          works.map((element, i) => (

            <div className="tarjetas" key={i}>
              <div className="card primaryColor">

                <div className="image-data">
                  <img src={element.img} className="background-image"></img>
                  <div className="skillUsadas">
                    {
                      element.tecnologias?.map((tecnologia, i) => {
                        return (
                          <ul className="tecno" key={i}>
                            <li >{tecnologia.tecnos}</li>
                          </ul>)
                      })
                    }
                  </div>

                </div>
                <div className="post-data">
                  <div>
                    <h1 className="title-app">{element.title}</h1>
                    <p className="description-app">
                      {element.texto}
                    </p>
                  </div>
                  <div className="btonsCardsArea">
                    {
                      element.botones?.map((boton, i) => {
                        return (
                          <div key={i}>
                            {boton.btn && boton.btn == "Codigo" ?

                              <Link href={boton.href}>
                                <a target="_blank" rel="noopener noreferrer" className="btonsCards">{boton.btn} </a>
                              </Link> : boton.btn == "Video" ?

                                <a onClick={() => mostrarVideo(boton)} target="_blank" rel="noopener noreferrer" className="btonsCards"> {boton.btn}</a>
                                : boton.btn == "Galeria1" ?
                                  <div>

                                    <a onClick={openModal1} target="_blank" rel="noopener noreferrer" className="btonsCards"> {boton.btn}</a>
                                    <Model isOpen={isOpen1} closeModal={closeModal1} imagenes={boton.veski}>
                                    </Model>

                                  </div>
                                  : boton.btn == "Galeria2" ?
                                  <div>

                                    <a onClick={openModal2} target="_blank" rel="noopener noreferrer" className="btonsCards"> {boton.btn}</a>
                                    <Model isOpen={isOpen2} closeModal={closeModal2} imagenes={boton.casa}>
                                    </Model>

                                  </div> :{}
                            }
                          </div>
                        )
                      })
                    }

                  </div>
                </div>
              </div>

            </div>
          ))


        }

      </div>

    </div>

  )
}

export default Cards