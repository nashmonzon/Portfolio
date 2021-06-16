import { useModal } from "../hooks/useModal";
import Model from "./model"

const Modals = () => {
    const [isOpenModal1, openModal1 , closeModal1]= useModal(false)
    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Model isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>caca</h3>
                    <img src="casa.jpg"></img>
            </Model>
          
        </div>
    )
}

export default Modals;