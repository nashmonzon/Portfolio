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




    const mostrarGaleria = (boton) => {
        const [isOpenModal1, openModal1 , closeModal1]= useModal(false)
        return (

            <div className="fonde">
            <div className="slideCon">
            
    
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
              
            </div>
          </div>
       
        )





    }

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
                                                                : boton.btn == "Galeria" ?
                                                                    <a onClick={() => mostrarGaleria(boton)} target="_blank" rel="noopener noreferrer" className="btonsCards"> {boton.btn}</a>
                                                                    : {}
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