import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

const Skill = () => {
    return (
        <div className="skillContainer">
            <CircularProgressbar
                value={70}
                text={`${70}%`}
                styles={buildStyles({
                    textColor: "red",
                    pathColor: "turquoise",
                    trailColor: "gold"
                })}
            />
        </div>

    )
}

export default Skill