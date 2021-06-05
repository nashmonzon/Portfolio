import { useState } from 'react'

const Footer = () => {

    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [texto, setTexto] = useState('')
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      email,
      texto
    }
  fetch('../api/contactame', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }
  
    return (
        <div className="cardConteiner">
          <div className="container ">
            <div className="intro2 primaryColor">
              <h6 className="subtitulos">Contactame</h6>
              <h2 >Mis redes</h2>
              <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="container">
            <form className="formulario">
                <div className="contactos">
                <div className="boton-areaf">
                      <a className="boton2">Facebook</a>
                    </div>
                    <div className="boton-areaf">
                      <a className="boton2">Github</a>
                    </div>
                    <div className="boton-areaf">
                      <a className="boton2">Linkedin</a>
                    </div>
                    <div className="boton-areaf">
                      <a className="boton2">Gmail</a>
                    </div>
                    <div className="boton-areaf">
                      <a className="boton2">Telefono</a>
                    </div>

                </div>
                <div className="formularioInt2">
              <div className="formularioInt">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" className="inputField" placeholder="Ingresa tu Nombre" onChange={(e) => { setName(e.target.value) }} ></input>
              </div>
              <div className="formularioInt">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="inputField" placeholder="Ingresa tu Email" onChange={(e) => {setEmail(e.target.value) }} ></input>
              </div>
              <div className="formularioInt">
                <label htmlFor="texto" >Menasaje</label>
                <textarea type="text" name="texto" className="inputField2"  placeholder="Envia tu mensaje" onChange={(e) => { setTexto(e.target.value) }} ></textarea>
              </div>
              <div className="areas">
              <div className="boton-areaf">
                      <a className="boton" type="submit"  onClick={(e)=>{handleSubmit(e)}} >contactame</a>
                    </div>
                    </div>
              </div>
            </form>
            </div>
          </div>
        </div>


       
    )
}

export default Footer