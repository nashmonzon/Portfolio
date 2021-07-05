import Layout from "../component/Layout";
import NavBar from "../component/NavBar";

import Skill from "../component/skill.js"
import Cards from "../component/Cards.js"
import Footer from "../component/Footer"
import ReactPlayer from "react-player"
import Modals from "../component/modals";
import Model from "../component/model";
import ModelCasa from "../component/modelcasa";
import EmblaCarousel from"../component/embla"
import Link from "next/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowUp} from "@fortawesome/free-solid-svg-icons"


export default function Home() {


  return (
    <Layout  id="top">
      <Link href="#top">
      <a className="top-menu" ><FontAwesomeIcon icon={faArrowUp}/></a>
      </Link>
      {/* topapp */}
      <div></div>
      <div className="fondito" >

        <div className="container containerTop ">
          <div className="row  ">
            <div className="col-md-12  ">
              <div className=" primaryColor  ">
                <div className="row ">
                  <div className="col-md-3 test intro" data-aos="fade-right">
                    <h1 className="name">
                      Ignacio
                    </h1>
                    <h1 className="name ">
                      Monzon<span className="colorSecundario">.</span></h1>
                    <div className="dash"></div>
                    <ul className="socialMedia">
                      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ignmonzon">Linkedin</a>

                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/nashmonzon">GitHub </a>

                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ignmonzon"> Facebook</a>

                    </ul>
                    <div className="boton-area">
                      <a className="boton" href="#contact">Contactame</a>
                    </div>
                  </div>
                  <div className="col-md-5  foto intro" data-aos="fade-up" >
                    <img src="adrieeee.png" className="img-fluid " />
                  </div>
                  <div className="col-md-4   intro fullNone" data-aos="fade-left">
                    <h6 className="subtitulos">introduccion</h6>
                    <h2>Full Stack Web</h2>
                    <h2>Developer</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* midapp */}
        <Cards />


        {/* <skillapp> */}
        <Skill />
        {/* footer */}
        <Footer />

        <div className="copyright-text ">
          <p className="copyright-text2">Mil besitos</p>
        </div>
      </div>


    </Layout>

  )
}
