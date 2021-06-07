import { works } from "../profile"


const Cards = () => {

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
                                    <h1 className="title-app">{element.title}</h1>
                                    <p className="description-app">
                                        {element.texto}
                                    </p>
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