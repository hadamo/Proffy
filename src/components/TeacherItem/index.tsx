import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/33159326?s=460&u=5a82be8963d06c627b4f59131823d83c70fb3334&v=4" 
                alt="Hádamo Egito"/>
                <div>
                    <strong>Hádamo Egito</strong>
                    <span>Data Science</span>
                </div>
            </header>

            <p>
                Eu uso python pra mexer nuns dados aí.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;