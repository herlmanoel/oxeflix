import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Button } from './components/ButtonLink';
import './Menu.css';
export default function Menu () {

    return (
        <nav className="Menu">
            <a href="/">
             <img className="Logo" src={Logo} alt="OxeFlix logo" />
            </a>

            {/* as="a": se comporta como "a" */}
            <Button as="a" className="ButtonLink" href="/"> Novo vídeo </Button>
        </nav>
    );
}