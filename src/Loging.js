import React, {useState} from "react";

const FormLoging = (props) => {
    const[user, setUser] = useState("")
    const[password, setPassword] = useState("")

    const onChange = (e) =>{
        console.log(e.target.name);
        if(e.target.name === "user"){
            setUser(e.target.value);
        }
        if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    };

    const onSubmit = (e) =>{
        console.log(e);
        e.preventDefault();
        if(user === "admin" && password === "1234"){
            alert("Bienvenido");
            props.cambiarInicio(true)
        }
        else{
            alert("Datos errorneos")
        }
    };

    return(
        <>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="user">Usuario</label>
                    <input 
                        type="text" 
                        name="user" 
                        id="user" 
                        value={user} 
                        onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password} 
                        onChange={onChange}></input>
                </div>
                <button>Confirmar</button>
            </form>
        </>
    )
};

export default FormLoging;