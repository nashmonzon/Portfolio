import { useState } from 'react'
import { useForm } from '../hooks/useForm'


const initialForm = {
    name: '',
    email: '',
    texto: '',
}
const validationsForms = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexTexto = /^.{1,255}$/;


    if (!form.name.trim()) {
        errors.name = "El campo Nombre es requerido";
    }else if (!regexName.test(form.name.trim())){
        errors.name = "El campo Nombre solo acepta letras"
    }

    if (!form.email.trim()) {
        errors.email = "El campo Email es requerido";
    }else if (!regexEmail.test(form.email.trim())){
        errors.email = "El campo Email es incorrecto"
    }

    if (!form.texto.trim()) {
        errors.texto = "El campo Comentarios es requerido";
    }else if (!regexTexto.test(form.texto.trim())){
        errors.texto = "El campo Comentarios no debe exceder los 255 caracteres"
    }
   

    return errors;
}


const Footer = () => {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [texto, setTexto] = useState('')
    // const [submitted, setSubmitted] = useState(false)
    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForms)



    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('Sending')
    //     let data = {
    //         name,
    //         email,
    //         texto
    //     }
    //     fetch('../api/contactame', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then((res) => {
    //         console.log('Response received')
    //         if (res.status === 200) {
    //             console.log('Response succeeded!')
    //             setSubmitted(true)
    //             setName('')
    //             setEmail('')
    //             setBody('')
    //         }
    //     })
    // }



    return (
        <div className="cardConteiner" id="contact">
            <div className="container ">
                <div className="intro2 primaryColor">
                    <h6 className="subtitulos">Contactame</h6>
                    <h2 >Mis redes</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="container">
                    <form className="formulario" onSubmit={handleSubmit}>
                        <div className="contactos">
                            <div className="boton-areaf">
                                <a className="boton2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ignmonzon">Facebook</a>
                            </div>
                            <div className="boton-areaf">
                                <a className="boton2" target="_blank" rel="noopener noreferrer" href="https://github.com/nashmonzon">Github</a>
                            </div>
                            <div className="boton-areaf">
                                <a className="boton2" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ignmonzon">Linkedin</a>
                            </div>
                            <div className="boton-areaf">

                                <a className="boton2" id="email" onClick="copyToClipboard('email')" >ignmonzon@gmail.com</a>
                            </div>
                            <div className="boton-areaf">
                                <a className="boton2" target="_blank" rel="noopener noreferrer" href="https://wa.me/543415212503">+54 3415 212503</a>
                            </div>

                        </div>
                        {/* <div className="formularioInt2">
                            <div className="formularioInt">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" className="inputField" placeholder="Ingresa tu Nombre" onChange={(e) => { setName(e.target.value) }} ></input>
                            </div>
                            <div className="formularioInt">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="inputField" placeholder="Ingresa tu Email" onChange={(e) => { setEmail(e.target.value) }} ></input>
                            </div>
                            <div className="formularioInt">
                                <label htmlFor="texto" >Menasaje</label>
                                <textarea type="text" name="texto" className="inputField2" placeholder="Envia tu mensaje" onChange={(e) => { setTexto(e.target.value) }} ></textarea>
                            </div>
                            <div className="areas">
                                <div className="boton-areaf">
                                    <a className="boton" type="submit" onClick={(e) => { handleSubmit(e) }} >contactame</a>
                                </div>
                            </div>
                        </div> */}
                        <div className="formularioInt2">


                            <div className="formularioInt">

                                <input type="text" name="name" className="inputField" placeholder="Ingresa tu Nombre" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                                {errors.name && <p>{errors.name}</p>}
                            </div>
                            <div className="formularioInt">

                                <input type="email" name="email" className="inputField" placeholder="Ingresa tu Email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                            <div className="formularioInt">
                                <textarea type="text" name="texto" className="inputField2" placeholder="Envia tu mensaje" onBlur={handleBlur} onChange={handleChange} value={form.texto} required  ></textarea>
                                {errors.texto && <p>{errors.texto}</p>}
                            </div>
                            <div className="areas">
                                <div className="boton-areaf">
                                    <input className="boton" type="submit" value="contactame"/>
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