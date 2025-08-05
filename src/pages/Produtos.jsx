import React from 'react'
import Title from '../components/Title'
import iconFeridas from '../assets/home-icons/feridas.png'
import iconIrritacoes from '../assets/home-icons/irritacoes.png'
import iconFralda from '../assets/home-icons/muda-fralda.png'
import iconQueimadura from '../assets/home-icons/queimaduras.png'
import iconRadioterapia from '../assets/home-icons/radioterapia.png'
import iconSensibilizada from '../assets/home-icons/sensibilizada.png'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Produtos = () => {
  return (
    <>
        <Helmet>
          <title>Todas as gamas - Halibut</title>
        </Helmet>
      <Title title={"Toda a Gama Halibut"} subtitle={"Qualidade garantida, geração em geração"} />
      <div className="container mx-auto grid grid-cols-2 justify-center items-center sm:space-x-5 sm:flex sm:flex-row" id='anchor'>
          <Link to={'/muda-fraldas'}>
              <Card image={iconFralda} title={"Muda Fraldas"} titleColor={"#AECC50"} />
          </Link>
          <Link to={'/queimaduras'}>
              <Card image={iconQueimadura} title={"Queimaduras<br/>1º, 2º grau e solares"} titleColor={"#DD0029"} />
          </Link>
          <Link to={'/feridas'}>
              <Card image={iconFeridas} title={"Feridas Superficiais"} titleColor={"#F57A07"} />
          </Link>
          <Link to={'/irritacoes'}>
              <Card image={iconIrritacoes} title={"Irritações da Pele"} titleColor={"#116F77"} />
          </Link>
      </div>
      <div className="sm:mt-5 container mx-auto grid grid-cols-2 sm:flex justify-center items-center sm:space-x-5 mb-20">
          <Link to={'/radioterapia'}>
              <Card image={iconRadioterapia} title={"Radioterapia<br/>e Terapia a Laser"} titleColor={"#9A9596"} />
          </Link>
          <Link to={'/pele-sensibilizada'}>
              <Card image={iconSensibilizada} title={"Pele Sensibilizada"} titleColor={"#FAC404"} />
          </Link>
      </div>
    </>
  )
}

export default Produtos