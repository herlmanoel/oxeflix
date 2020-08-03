import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Menu/components/ButtonLink';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#ffffff',
    }

    const [categoria, setCategoria] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {

        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(event) {

        const { name, value } = event.target;
        setValue(
            name,
            value,
        );
    }

    useEffect(() => {
        // o que queremos que aconteça
        const URL_TOP = `http://localhost:8080/categorias`;
        fetch(URL_TOP)
            .then((response) => response.json())
            .then((response) => setCategoria([
                ...response,
            ]))
    }, []); // [] == vazio carrega só uma vez quando começar
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                console.log(categoria)

                setCategoria([
                    ...categoria,
                    values
                ]);

                setValues(valoresIniciais)
            }}>
                <div>

                    <FormField
                        label="Nome: "
                        name="nome"
                        type="text"
                        value={values.nome}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Descrição: "
                        name="descricao"
                        type="textarea"
                        onChange={handleChange}
                        value={values.descricao}

                    />

                    <FormField
                        label="Cor: "
                        name="cor"
                        type="color"
                        onChange={handleChange}
                        value={values.cor}

                    />
                </div>

                <Button>Cadastrar</Button>
            </form>

            <ul>
                {/* {categoria.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>{categoria}</li>
                    )
                })} */}
                {categoria.map((linha, indice) => {
                    return (<li key={`${indice}`}>{linha.nome}</li>);
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}