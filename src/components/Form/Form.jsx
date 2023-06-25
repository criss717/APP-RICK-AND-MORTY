import { useState } from "react";
import validation from "./validation";
import s from './Form.module.css'

const Form = (props) => {
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

    }

    return ( 
        <div className={s.container}>
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