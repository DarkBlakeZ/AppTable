import './index.css'
import {useId} from 'react'

export default function Header() {

    const id = useId();
    
    const active = (id:string) => {
        console.log(id);
        let list = document.querySelectorAll(".list");

        list.forEach(item => {
            if(item.id !== id) item.setAttribute("class", "list");
            else item.setAttribute("class", "list active")

        })

        let element = document.getElementById(id);

        element?.setAttribute("class", "list active")
    }

    const activeMenu = () => {
        const $ = (selector: string) => document.querySelector(selector);
        let toggle = $('#toggle');

        if(toggle?.className == "on"){
            toggle?.setAttribute('class', 'off');
        }else{
            toggle?.setAttribute('class', 'on');
        }

    }

    return (
    <>
    <div id="toggle" className="hamburgesa" onClick={activeMenu}>
        <span></span>
    </div>
    <div id="menu">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    </>)
}