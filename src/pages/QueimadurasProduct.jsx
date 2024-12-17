import React, { useState } from 'react'
import Banner from '../components/Banner'
import Title from '../components/Title'
import desktopHomeBanner from '../assets/banners/queimaduras/desktop_man.png';
import mobileHomeBanner from '../assets/banners/queimaduras/mobile_man.png';
import queimadurasProduct from '../assets/queimaduras/queimaduras.png'
import g60 from '../assets/60g.png';
import queimadurasIcon from '../assets/section-icons/queimaduras.png'
import radioterapiaIcon from '../assets/section-icons/radioterapia.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const QueimadurasProduct = () => {
  const [activeSection, setActiveSection] = useState('indications');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
        <Helmet>
          <title>HALIBUT® Queimaduras - Halibut</title>
        </Helmet>
        <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
        <Title title={"HALIBUT® queimaduras"} subtitle={"Estimula a regeneração e Hidrata"} />
        <section className='grid sm:grid-cols-2 max-w-[80%] mx-auto sm:gap-10'>

          <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-3'>
            <div className='flex flex-col justify-center items-center mr-4'>
              <img src={queimadurasProduct} className='w-[150px] sm:min-w-[180px]' alt="" />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='font-robotobold text-2xl text-accent mb-2'>HALIBUT® queimaduras​</h2>
                <p className='font-roboto text-xl text-accent'>Nova aquisição da marca Halibut®, mas a confiança de sempre. Halibut® queimaduras é uma emulsão cutânea indicada para a pele de toda a família, incluindo bebés e grávidas.​</p>
              </div>
              <div>
                <div className='flex space-x-2 mt-12 sm:mt-20 mb-10'>
                    <img src={g60} alt="" />
                </div>
                <div className='sm:max-w-[70%]'>
                  <button 
                    className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-l-xl py-[8px] font-robotobold ${activeSection === 'indications' ? 'bg-primary text-white' : 'bg-white text-accent'}`}
                    onClick={() => handleButtonClick('indications')}
                  >
                    Indicações
                  </button>
                  <button 
                    className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-r-xl py-[8px] font-robotobold ${activeSection === 'application' ? 'bg-primary text-white' : 'bg-white text-accent'}`}
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
                <h2 className='text-primary font-robotobold text-3xl mb-6'>Indicações HALIBUT® Queimaduras​</h2>
                <p className='text-accent text-lg text-justify'>Formulado para o tratamento de queimaduras de 1º e 2º graus, eritemas solares, vermelhidão da pele associada a radioterapia e terapia a laser, e ainda feridas cutâneas superficiais não infetadas.</p>
​                <p className='text-accent text-lg'>Trolamina 6,7 mg/g​</p>
              </div>
            )}

            {activeSection === 'application' && 
            (
              <div>
                <h2 className='text-primary font-robotobold text-3xl mb-6'>Como aplicar HALIBUT® Queimaduras​?​​</h2>
                <h3 className='font-robotobold mb-1'>Queimaduras de primeiro grau e queimaduras solares</h3>
                  <p className='mb-5 text-justify'>Aplicar Halibut® queimaduras numa camada espessa e deixar penetrar sem esfregar. Repetir este processo 2-4 vezes por dia.</p>
                  <h3 className='font-robotobold mb-1'>Queimaduras de segundo grau e outras feridas não infetadas</h3>
                  <p className='mb-5 text-justify'>Após limpar a queimadura ou a ferida não infetada, aplicar uma camada espessa na zona afetada e repetir as aplicações várias vezes por dia. Cobrir se necessário com uma compressa humedecida, que deve ser mudada todos os dias. Não utilizar um penso absorvente seco.</p>
                  <h3 className='font-robotobold mb-1'>Vermelhidão da pele devido a radioterapia e terapia com laser</h3>
                  <p className='text-justify'>Aplicar 2-3 vezes por dia, de acordo com as recomendações do médico, e massajar suavemente até penetrar na pele.</p>
              </div>
            )}
          </div>


        </section>
        <section className='container max-w-[80%] mx-auto flex justify-center space-x-10'>
            <Link to={'/queimaduras'}>
                <img src={queimadurasIcon} className='max-w-[90px]' alt="" />
            </Link>
            <Link to={'/radioterapia'}>
                <img src={radioterapiaIcon} className='max-w-[100px]' alt="" />
            </Link>
        </section>
    </>
  )
}

export default QueimadurasProduct