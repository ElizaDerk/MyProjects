import Modal from "../components/UI/Modal";
import {createContext, useEffect, useState} from "react";
import {MdDelete} from "react-icons/md";
import { Oval } from  'react-loader-spinner'

export const ContactsContext = createContext();
const Contact = () => {

    const [contacts, setContact] = useState([])
    const hasContacts = contacts.length > 0

    useEffect(async ()=>{
        async function fetchData(){
            const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
            console.log(response)
            setContact([...contacts, ...response])
        }
        fetchData()
    }, [])


    const removeData = (id) => {
        setContact(contacts.filter(contact => contact.id !== id))
    };

    const renderBody = () => {
        return contacts && contacts.map(({id, name, email, phone }) => {
            return (
                <tr key={id}>
                    <td style={{padding: '10px', border: '1px solid black' }}>{name}</td>
                    <td style={{padding: '10px', border: '1px solid black' }}>{email}</td>
                    <td style={{padding: '10px', border: '1px solid black' }}>{phone}</td>
                    <td style={{padding: '10px', border: '1px solid black' }}>
                        <button style={{padding: '10px', border: 'none', background: 'none', display: 'flex',
                            alignItems: 'center' }} onClick={() => removeData(id)} >
                            Delete<MdDelete />
                        </button>
                    </td>
                </tr>
            )
        })
    }
    if (hasContacts){
        return (
            <>
                <ContactsContext.Provider value={{ contacts, setContact }}>
                    <table>
                        <tbody>
                        {renderBody()}
                        </tbody>
                    </table>
                    <Modal />
                </ContactsContext.Provider>

            </>
        )
    }
    return(
        <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    )
}

export default Contact;
