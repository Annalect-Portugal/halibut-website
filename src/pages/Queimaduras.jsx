import React, { useState } from 'react'
import desktopHomeBanner from '../assets/banners/queimaduras/desktop_man.png';
import mobileHomeBanner from '../assets/banners/queimaduras/mobile_man.png';
import Banner from '../components/Banner';
import Title from '../components/Title';
import g60 from '../assets/60g.png'
import queimaduras from '../assets/queimaduras/queimaduras.png'
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Queimaduras = () => {

  const mlImages = [g60]

  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Helmet>
        <title>Gama Queimaduras - Halibut</title>
      </Helmet>
      <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
      <Title title={"Queimaduras"} subtitle={"Qualidade garantida, geração a geração"} />
      <div className="max-w-[90%] sm:max-w-[70%] rounded-lg p-4 mx-auto flex flex-col sm:flex-row justify-center">
        <div className='mb-7 sm:mb-0 sm:mr-14'>
          <Link to={'/halibutqueimaduras'} className='flex justify-center sm:justify-end items-center sm:items-end'>
            <img src={queimaduras} alt={'Halibut Queimaduras'} className="max-w-[130px] sm:max-w-[180px] rounded-md mb-4 cursor-pointer" />
          </Link>
        </div>
        
        <div className='flex flex-col sm:max-w-[40%]'>
          <div>
            <h2 className="text-xl font-robotobold mb-2 sm:max-w-[80%] text-[#116F77]">{'HALIBUT® queimaduras'}</h2>
            <div className='min-h-[100px] sm:max-w-[80%]'>
              <p className="text-[#3A3A3A] mb-4 font-roboto">{'Nova aquisição da marca Halibut®, mas a confiança de sempre. Halibut® queimaduras é uma emulsão cutânea indicada para a pele de toda a família, incluindo bebés e grávidas.'}</p>
            </div>
          </div>
          
          <div >
            <div className="flex sm:w-[80%] my-4">
              {mlImages.map((mlImage, index) => (
                <img key={index} src={mlImage} alt={`ml-icon-${index}`} className="h-10 mx-1" />
              ))}
            </div>
            <a href='/queimaduras.pdf' download>
              <p className='text-primary font-roboto text-xs flex items-center gap-1 mb-3'>Folheto Informativo <MoveRight size={12}/></p>
            </a>
            <div className="flex justify-between sm:w-[60%] font-robotobold text-[#3A3A3A] mt-2">
              <button
                onClick={() => handleButtonClick('indications')}
                className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-bl-xl py-[6px] ${activeSection === 'indications' ? 'bg-primary text-white' : ''}`}
              >
                Indicações
              </button>
              <button
                onClick={() => handleButtonClick('application')}
                className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-br-xl py-[6px] ${activeSection === 'application' ? 'bg-primary text-white' : ''}`}
              >
                Como aplicar
              </button>
            </div> 

            <div className='mt-5'>
              {activeSection === 'indications' && 
              (
                <div>
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Indicações​​</h2>
                  <p className='text-accent text-sm mb-3 font-roboto'>Formulado para o tratamento de queimaduras de 1º e 2º graus, eritemas solares, vermelhidão da pele associada a radioterapia e terapia a laser e ainda feridas cutâneas superficiais não infetadas. ​</p>
                  <p className='text-accent text-sm font-roboto'>Trolamina 6,7 mg/g​</p>
                </div>
              )}

              {activeSection === 'application' && 
              (
                <div className='text-accent text-sm font-roboto'>
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Como aplicar​?​​</h2>
                  <h3 className='font-robotobold mb-1'>Queimaduras de primeiro grau e queimaduras solares</h3>
                  <p className='mb-5'>Aplicar Halibut® queimaduras numa camada espessa e deixar penetrar sem esfregar. Repetir este processo 2-4 vezes por dia.</p>
                  <h3 className='font-robotobold mb-1'>Queimaduras de segundo grau e outras feridas não infetadas</h3>
                  <p className='mb-5'>Após limpar a queimadura ou a ferida não infetada, aplicar uma camada espessa na zona afetada e repetir as aplicações várias vezes por dia. Cobrir se necessário com uma compressa humedecida, que deve ser mudada todos os dias. Não utilizar um penso absorvente seco.</p>
                  <h3 className='font-robotobold mb-1'>Vermelhidão da pele devido a radioterapia e terapia com laser</h3>
                  <p>Aplicar 2-3 vezes por dia, de acordo com as recomendações do médico, e massajar suavemente até penetrar na pele.</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Queimaduras