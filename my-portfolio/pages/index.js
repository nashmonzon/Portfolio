import Layout from "../component/Layout";
import NavBar from "../component/NavBar";


export default function Home() {
  return (
    <Layout >
      {/* topapp */}
      <div>
        <div className="container containerTop ">
          <div className="row  ">
            <div className="col-md-12  ">
              <div className=" primaryColor  ">
                <div className="row ">
                  <div className="col-md-3 intro ">
                    <h1 className="name ">
                      Ignacio
                  Monzon<span className="colorSecundario">.</span>
                    </h1>
                  </div>
                  <div className="col-md-5 foto intro" >
                    <img src="adrie4.png" className="img-fluid " width="448" height="539" />
                  </div>
                  <div className="col-md-4 intro">
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
        <div className="container2 ">
          <div className="row  ">
            <div className="col-md-12  ">
              <div className=" primaryColor containerMid ">
                <div className="row intro ">
                  <h6 className="subtitulos">porfolio</h6>
                  <h2 >Mis trabajos</h2>
                  <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <div className="row">
                    <div className="proyectos col-md-12">

                      <div className="   proyectosInt">
                        <div className="col-md-6 " >

                          <h1>nachooo</h1>
                          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-md-6 fotosDiv">
                          <img src="casa.jpg" className="foteli " ></img>
                        </div>
                      </div>
                      <div className="   proyectosInt">
                      <div className="col-md-6 fotosDivL">
                          <img src="casa.jpg" className="foteli " width="502px"  height="285px" ></img>
                        </div>
                        <div className="col-md-6 " >

                          <h1>nachooo</h1>
                          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        
                      </div>
                      <div className="   proyectosInt">
                        <div className="col-md-6 " >

                          <h1>nachooo</h1>
                          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-md-6 fotosDiv">
                          <img src="casa.jpg" className="foteli " width="502px"  height="285px" ></img>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>

  )
}
