import React, { useState } from 'react'
import Banner from '../components/Banner'
import Title from '../components/Title'
import desktopHomeBanner from '../assets/banners/fraldas/desktop.png';
import mobileHomeBanner from '../assets/banners/fraldas/mobile.png';
import pomadaReparadoraImg from '../assets/muda-fraldas/produtos/pomada-reparadora.png'
import g50 from '../assets/50g.png';
import g100 from '../assets/100g.png';
import pomadaReparadoraIcons from '../assets/muda-fraldas/produtos/reparadora/reparadora-icons.png'
import mudaFraldasIcon from '../assets/muda-fraldas/produtos/linimento/linimento-mudafraldas.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FraldasReparadora = () => {
  const [activeSection, setActiveSection] = useState('indications');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
        <Helmet>
          <title>HALIBUT Muda Fraldas® Pomada Reparadora - Halibut</title>
        </Helmet>
        <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
        <Title title={"HALIBUT Muda Fraldas® Pomada Reparadora"} subtitle={"A reparação da pele em caso de assadura da fralda"} />
        <div className="flex container flex-col justify-center items-center mx-auto mt-[-50px] mb-20">
            <button className='bg-[#d20629] text-white font-robotobold text-sm rounded-full px-7 py-2'>COM MICONAZOL</button>
        </div>
        <section className='grid sm:grid-cols-2 max-w-[80%] mx-auto sm:gap-10'>

          <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-3'>
            <div className='flex flex-col justify-center items-center'>
              <img src={pomadaReparadoraImg} className='w-[200px] sm:w-[520px]' alt="" />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='font-robotobold text-2xl text-accent mb-2'>​HALIBUT Muda Fraldas® Pomada Reparadora</h2>
                <p className='font-roboto text-xl text-accent'>Reparação da pele na assadura da fralda, com miconazol para controlar a proliferação de microrganismos.</p>
              </div>
              <div>
                <div className='flex space-x-2 mt-12 sm:mt-20 mb-10'>
                    <img src={g50} alt="" />
                    <img src={g100} alt="" />
                </div>
                <div className='sm:max-w-[70%]'>
                  <button 
                    className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-l-xl py-[8px] font-robotobold ${activeSection === 'indications' ? 'bg-[#9CD061] text-white' : 'bg-white text-accent'}`}
                    onClick={() => handleButtonClick('indications')}
                  >
                    Indicações
                  </button>
                  <button 
                    className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-r-xl py-[8px] font-robotobold ${activeSection === 'application' ? 'bg-[#9CD061] text-white' : 'bg-white text-accent'}`}
                    onClick={() => handleButtonClick('application')}
                  >
                    Como aplicar
                  </button>
                </div>
              </div> 
            </div>
          </div>

          <div className='sm:max-w-[80%] mx-auto mt-10 sm:mt-0 font-roboto'>
            {activeSection === 'indications' && 
            (
              <div>
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Indicações HALIBUT Muda Fraldas® Pomada Reparadora​​</h2>
                <p className='text-accent text-md text-justify'>Pomada para a reparação da pele quando existe irritação, assadura da fralda e/ou vermelhidão no​ rabinho do bebé. Com miconazol que ajuda a controlar a proliferação de microrganismos na pele e óxido de zinco com uma ação regeneradora dos tecidos e ainda de uma grande ação protetora e​ calmante.​</p>
              </div>
            )}

            {activeSection === 'application' && 
            (
              <div>
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Como aplicar HALIBUT Muda Fraldas® Pomada Reparadora​?​​</h2>
                <p className='text-accent mb-5 text-md'>Aplicar em cada muda da fralda, durante 7 dias, em camada fina e homogénea, na pele limpa e seca. Se ​após estes dias a zona da fralda continuar alterada, consulte o médico. Antes da utilização de <Link to={'/linimento'} className='underline'>HALIBUT​ Muda Fraldas® Pomada Reparadora</Link> recomendamos que limpe suavemente a pele do bebé com​ HALIBUT​ Muda Fraldas® Linimento, para um cuidado completo na prevenção da assadura da fralda.​​​​</p>
                <p className='text-accent text-md'>Principais vantagens:</p>
                <ul className='text-accent text-md'>
                  <li>• Textura cremosa e fácil de espalhar​​</li>
                  <li>• Cheiro agradável​​</li>
                  <li>• Controla a proliferação de microorganismos​</li>
                  <li>• Não deixa resíduos brancos​</li>
                  <li>• Permite ver a evolução da vermelhidão no rabinho do bebé</li>
                </ul>
              </div>
            )}
          </div>


        </section>
        <section className='container max-w-[80%] mx-auto flex flex-col justify-center items-center space-y-16'>
            <img src={pomadaReparadoraIcons} className='max-w-[80%] sm:max-w-[500px]' alt="" />
            <Link to={'/muda-fraldas'}>
              <img src={mudaFraldasIcon} className='max-w-[90px]' alt="" />
            </Link>
        </section>
    </>
  )
}

export default FraldasReparadora