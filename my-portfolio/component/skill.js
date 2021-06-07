import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { skills } from "../profile"

const Skill = () => {
    

    return (
        <div className="skillcontainer">
        <div className="container" id="skls">
          <div className="row intro ">
            <div className=" primaryColor containerMid ">
              <h6 className="subtitulos">skill</h6>
              <h2 >Mis habilidades</h2>
            </div>
            <div className="skillContainer" >
            <div className="dad">
            {
                skills.map(({value, textColor,texto, img},i) => (
                    <div className="primaryColor " key={i}>
                        <div className="skillContainerC ">
                           <img src={img} className="img-fluid" width="auto" height="auto"></img>
                        </div>
                        <div>
                            <h3 >{texto}</h3>

                        </div>
                    </div>
                ))
            }
        </div>
            </div>
          </div>
        </div>
        
        </div>

    )
}

export default Skill