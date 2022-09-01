import Swal, { SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface PropsMessage{
    title: string,
    message: string,
    icon: SweetAlertIcon
}


export const Swal2 = ({title, message, icon="success"}: PropsMessage) => {
    MySwal.fire({
        position: 'top-end',
        title: <strong>{title}</strong>,
        html: <i>{message}</i>,
        icon: icon,
        timer: 2000
      })
}
