import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Button } from './components/ButtonLink';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu () {

    return (
        <nav className="Menu">
            <Link to="/">
             <img className="Logo" src={Logo} alt="OxeFlix logo" />
            </Link>

            {/* as="a": se comporta como "a" */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video"> Novo vídeo </Button>
        </nav>
    );
}