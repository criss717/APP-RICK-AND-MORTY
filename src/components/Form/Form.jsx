import { useState } from "react";
import validation from "./validation";
import s from './Form.module.css'

const Form = (props) => {
    const audioSubmit= new Audio('../../../public/audio/eres-un-monstruo.mp3')
    const [userData, setUserData]=useState({
        email:'',
        password:''
    })

    const [errors,setErros] = useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const property=e.target.name;
        const value=e.target.value;

        setErros(validation({...userData, [property]:value}))
        setUserData({...userData, [property]:value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();        
        props.login(userData)
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", './eres-un-monstruo.mp3')
        etiquetaAudio.play()
    }

    return ( 
        <div className={s.container}>
            <div className={s.containerGhost}>
                <div className={s.title}>
                    <h1>RIK AND MORTY</h1>
                </div>
                <div className={s.ghost}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <form className={s.form} onSubmit={onSubmit}>
                <img src='/assets/fondoLogin.jpg' alt=""/>
                <label htmlFor="email">EMAIL</label>
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={userData.email}
                    className={errors.email && s.warning}
                 />
                <p className={s.danger}>{errors.email}</p>

                <label htmlFor="password">PASSWORD</label>
                <input 
                    name="password" 
                    type="password"
                    onChange={handleChange}
                    value={userData.password}
                    className={errors.email && s.warning}
                 />
                <p className={s.danger}>{errors.password}</p>

                <button type="submit">SUBMIT</button>

            </form>

        </div>
    );
}
 
export default Form;