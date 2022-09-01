import {MouseEventHandler} from 'react';

export default interface Props{
    title: string,
    description: string,
    price: number,
    img: string,
    OnClick?: () => void
} 