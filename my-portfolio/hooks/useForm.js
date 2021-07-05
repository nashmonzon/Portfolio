import { useState } from "react"

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => { 
    const{name, value} = e.target;

    setForm({
      ...form,
      [name]:value
    })
  }

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
   }

  const handleSubmit = (e) => { 
    e.preventDefault()
        console.log('Sending')
        setErrors(validateForm(form))
        fetch('../api/contactame', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
        ).then((res) => {
           console.log("entre")
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setForm(initialForm)
              }
        }).catch((e)=>{
          console.log(e)
        })
  }

  return {
    form, errors, loading, response, handleChange, handleBlur, handleSubmit
  }
}