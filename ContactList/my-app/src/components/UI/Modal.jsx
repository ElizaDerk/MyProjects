import {useState} from "react";
import Form from "./Form";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            {isOpen && <Form setIsOpen={setIsOpen} />}
        </div>
    );
}
export default Modal;
