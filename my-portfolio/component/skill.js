import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { skills } from "../profile"

const Skill = () => {
    

    return (
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

    )
}

export default Skill