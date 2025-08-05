import {useEffect} from 'react'
import HomeBanner from '../components/HomeBanner'
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
import defaultBanner from '../assets/banners/home/default.png'
import defaultBannerMobile from '../assets/banners/home/default-mobile.png'

const Home = () => {

   useEffect(() => {
      window.scrollTo(0,0)
    }, [])

  return (
    <>
      <Helmet>
         <title>Halibut</title>
      </Helmet>
      <HomeBanner
         banners={[
            { image: defaultBanner, mobileImage: defaultBannerMobile, link: '/' }
         ]}
      />
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
     <div className="sm:mt-5 container mx-auto grid grid-cols-2 sm:flex justify-center items-center sm:space-x-5">
         <Link to={'/radioterapia'}>
            <Card image={iconRadioterapia} title={"Radioterapia<br/>e Terapia a Laser"} titleColor={"#9A9596"} />
         </Link>
         <Link to={'/pele-sensibilizada'}>
            <Card image={iconSensibilizada} title={"Pele Sensibilizada"} titleColor={"#FAC404"} />
         </Link>
     </div>
     <div className='container mx-auto my-20 flex flex-col justify-between font-roboto sm:text-center text-accent space-y-8 px-6 sm:px-0 sm:space-y-0 sm:flex-row'>
        <div className='sm:max-w-[40%]'>
            <h2 className='font-robotobold text-2xl mb-5 text-center'>Estar presente sempre que a pele dos portugueses pede um cuidado especial</h2>
            <p className='text-justify'>A gama Halibut tem uma missão clara: estar presente sempre que a pele dos portugueses precise de um cuidado especial. Assim, trabalhamos diariamente para continuar a desenvolver os  produtos para o cuidado de toda a família e a manter a qualidade e confiança que passa de geração em geração.</p>
        </div>
        <div className='sm:max-w-[40%]'>
            <h2 className='font-robotobold text-2xl mb-5 text-center'>Orgulhosamente Marca Portuguesa</h2>
            <p className='text-justify'>Desde o lançamento da nossa 1ª pomada em 1950, que procuramos a melhor inovação para proteger a pele de toda a família. Hoje em dia, com um portefólio completo para assaduras da fralda, queimaduras e feridas superficiais.</p>
        </div>
     </div>
    </>
  )
}

export default Home