import {useContext, useState} from "react";
import {ContactsContext} from "../../pages/Contact";

const Form = ({ setIsOpen }) => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value
        }));

    }

    const contacts = useContext(ContactsContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        const newContact = {
            id: Date.now(),
            name: `${values.name}`,
            email: `${values.email}`,
            phone: `${values.tel}`,

        };
        contacts.setContact([...contacts.contacts, newContact]);
    }

    return (
        <>
            <div onClick={() => setIsOpen(false)} />
            <div style={{padding: '10px', border: '1px solid black' }}>
                <div>
                    <h5>Form for new contact</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Enter new name:
                        <input
                            style={{padding: '5px', width: '250px', marginBottom: '10px'}}
                            type="text" name="name" value={values.name} onChange={handleChange}
                        />
                    </label><br/>
                    <label htmlFor="email">Email address:
                        <input
                            style={{padding: '5px', width: '250px', marginBottom: '10px'}}
                            type="text" name="email" value={values.email} onChange={handleChange}
                        />
                    </label><br/>
                    <label>Enter number:
                        <input
                            style={{padding: '5px', width: '250px', marginBottom: '10px'}}
                            type="tel" name="tel" value={values.tel} onChange={handleChange}
                        />
                    </label><br/>
                    <input type="submit" value="Send" />
                </form>
                <div>
                    <div>
                        <button onClick={() => setIsOpen(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;
