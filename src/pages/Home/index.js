import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

export default function Home() {
  return (
    // jsx: JS + XML
    <div style={{ background: "#141414"}}>
      <Menu />
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
    </div>
  );
}