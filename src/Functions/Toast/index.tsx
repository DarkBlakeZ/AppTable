
import { toast, TypeOptions } from 'react-toastify';

interface PropsToast{
    type: TypeOptions,
    message: string
}

export const Toast = ({type, message}: PropsToast) => {
    toast(message, {
        type: type,
        theme: "colored",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
    });
}