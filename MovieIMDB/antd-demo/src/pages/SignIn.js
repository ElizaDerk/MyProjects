import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem('', JSON.stringify(data))
        navigate('/browser');
    };

    return(
        <>
            <div className="form-back">
                <div className="form-wrapper">
                    <div className="text-form">
                        <h2 className="title">Welcome to our film-planet!</h2>
                        <p>To explore more into our world sign up, please!</p>
                    </div>

                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="input-sign"
                            placeholder="username"
                            {...register('username', {
                                minLength: 4,
                                pattern: /^[A-Za-z]+$/i,
                                required: true,
                            })}
                        />
                        {errors.username && <p className="error">Login contains more than 4 letters</p>}

                        <input
                            className="input-sign"
                            placeholder="password"
                            type="password"
                            {...register('password', {
                                minLength: 8,
                                maxLength: 16,
                                required: true,
                            })}
                        />
                        {errors.password && <p className="error">Password have to contain more than 8 symbols</p>}

                        <input type="submit" value="Log In" className="log-btn"/>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignIn;
