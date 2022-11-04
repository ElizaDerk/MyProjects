import {useForm} from "react-hook-form";


const LogInForm = () => {

    const {
        register,
        formState: { errors }
    } = useForm();


    return(
        <>
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

        </>
    )
}

export default LogInForm;
