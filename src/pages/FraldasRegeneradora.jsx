import React, { useState } from 'react'
import Banner from '../components/Banner'
import Title from '../components/Title'
import desktopHomeBanner from '../assets/banners/fraldas/desktop.png';
import mobileHomeBanner from '../assets/banners/fraldas/mobile.png';
import pomadaRegeneradoraImg from '../assets/muda-fraldas/produtos/pomada-regeneradora.png'
import g50 from '../assets/50g.png';
import g100 from '../assets/100g.png';
import pomadaRegeneradoraIcons from '../assets/muda-fraldas/produtos/regeneradora/regeneradora-icons.png'
import mudaFraldasIcon from '../assets/muda-fraldas/produtos/linimento/linimento-mudafraldas.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FraldasRegeneradora = () => {
  const [activeSection, setActiveSection] = useState('indications');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
        <Helmet>
          <title>HALIBUT Muda Fraldas® Pomada Regeneradora 45ZN - Halibut</title>
        </Helmet>
        <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
        <Title title={"HALIBUT Muda Fraldas® Pomada Regeneradora 45ZN"} subtitle={"Protege e regenera a pele do bebé."} />
        <section className='grid sm:grid-cols-2 max-w-[80%] mx-auto sm:gap-10'>

          <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-3'>
            <div className='flex flex-col justify-center items-center'>
              <img src={pomadaRegeneradoraImg} className='w-[200px] sm:w-[520px]' alt="" />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='font-robotobold text-2xl text-accent mb-2'>​HALIBUT Muda Fraldas® Pomada Regeneradora 45ZN</h2>
                <p className='font-roboto text-xl text-accent'>Proteção e regeneração da pele a cada muda da fralda. Testado em pele atópica e com 45% óxido de zinco.</p>
              </div>
              <div>
                <div className='flex space-x-2 mt-12 sm:mt-20 mb-10'>
                    <img src={g50} alt="" />
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
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Indicações HALIBUT Muda Fraldas® Pomada Regeneradora 45ZN​​</h2>
                <p className='text-accent text-md text-justify'>Pomada para a regeneração da pele a cada muda da fralda. Protege o rabinho do bebé, promove a regeneração da pele e ajuda a aliviar as irritações, assaduras e vermelhidão da pele. Com 45% de óxido de zinco. Testado em pele atópica e sensível. Testado pediátrica e dermatologicamente.</p>
              </div>
            )}

            {activeSection === 'application' && 
            (
              <div>
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Como aplicar HALIBUT Muda Fraldas® Pomada Regeneradora 45ZN​?​​</h2>
                <p className='text-accent mb-5 text-md'>Aplicar em cada muda da fralda, em camada fina e homogénea, na pele limpa e seca. Se ​após estes dias a zona da fralda continuar alterada, consulte o médico. Antes da utilização de <Link to={'/linimento'} className='underline'>HALIBUT​ Muda Fraldas® Pomada Regeneradora</Link> recomendamos que limpe suavemente a pele do bebé com​ HALIBUT​ Muda Fraldas® Linimento, para um cuidado completo na prevenção da assadura da fralda.​​​​</p>
                <p className='text-accent text-md'>Principais vantagens:</p>
                <ul className='text-accent text-md'>
                  <li>• Protege e regenera a pele 3x mais rápido**<sup>1</sup>​</li>
                  <li>• 96% dos utilizadores referiram sentir a pele do seu bebé mais hidratada, protegida e regenerada*​​​</li>
                  <li>• 96% dos utilizadores referiram verificar uma redução da vermelhidão e irritação na pele do seu bebé*​</li>
                  <li>• Textura agradável e fácil de espalhar*</li>
                  <li>• Não deixa resíduos brancos​</li>
                  <li>• Permite ver a evolução da vermelhidão da pele</li>
                </ul>
              </div>
            )}
          </div>


        </section>
        <section className='container max-w-[80%] mx-auto flex flex-col justify-center items-center space-y-16'>
            <img src={pomadaRegeneradoraIcons} className='max-w-[80%] sm:max-w-[500px]' alt="" />
            <Link to={'/muda-fraldas'}>
              <img src={mudaFraldasIcon} className='max-w-[90px]' alt="" />
            </Link>
        </section>
        

        <section className='container max-w-[60%] mx-auto flex flex-col'>
          <div className='mx-auto text-left mt-10'>
            <p className='text-[#AAAAAA] font-rsoboto text-xs mb-5'><small>*Confirmação da compatibilidade e aceitabilidade de um produto cosmético após a sua aplicação em condições normais de uso em humanos, com avaliação subjetiva das suas qualidades cosméticas e eficácia.<br/>Teste de utilização sob controlo dermatológico e controlo pediátrico. Halibut Muda Fraldas® Pomada Regeneradora. Estudo realizado em 22 crianças (Fevereiro 2025).</small></p>
            <p className='text-[#AAAAAA] font-roboto text-xs'><small>** Avaliação da eficácia de um produto cosmético num estudo de utilização, com análise dos efeitos de proteção e regeneração, através de avaliação objetiva do eritema com recurso a um cromâmetro.<br/>Halibut Muda Fraldas (símbolo marca registada) Pomada Regeneradora. Estudo realizado em 12 adultos (janeiro 2025).<br/>1 Com a pele previamente protegida.</small></p>
          </div>
        </section>
    </>
  )
}

export default FraldasRegeneradora