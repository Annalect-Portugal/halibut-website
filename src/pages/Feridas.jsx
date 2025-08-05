import { useState } from 'react'
import desktopHomeBanner from '../assets/banners/feridas/desktop.png';
import mobileHomeBanner from '../assets/banners/feridas/mobile.png';
import Banner from '../components/Banner';
import Title from '../components/Title';
import g30 from '../assets/30g.png'
import g100 from '../assets/50g.png'
import g150 from '../assets/100g.png'
import queimaduras from '../assets/feridas/pomadaoriginal.png'
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Feridas = () => {

  const mlImages = [g30, g100, g150]

  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Helmet>
        <title>Gama Feridas - Halibut</title>
      </Helmet>
      <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
      <Title title={"Feridas Superficiais"} subtitle={"Qualidade garantida, geração a geração"} />
      <div className="max-w-[90%] sm:max-w-[70%] rounded-lg p-4 mx-auto flex flex-col sm:flex-row justify-center">
        <div className='mb-7 sm:mb-0 sm:mr-14'>
          <Link to={'/pomadaoriginal'} className='flex justify-center sm:justify-end items-center sm:items-end'>
            <img src={queimaduras} alt={'Halibut Pomada Original'} className="max-w-[130px] sm:max-w-[200px] rounded-md mb-4 cursor-pointer" />
          </Link>
        </div>
        
        <div className='flex flex-col sm:max-w-[40%]'>
          <div>
            <h2 className="text-xl font-robotobold mb-2 sm:max-w-[80%] text-[#116F77]">{'HALIBUT® Pomada Original'}</h2>
            <p className='text-xs text-accent mb-2'>Medicamento não sujeito a receita médica</p>
            <div className='min-h-[100px]'>
              <p className="text-[#3A3A3A] mb-4 font-roboto">{'Qualidade garantida, geração em geração. Halibut pomada é um medicamento não sujeito a receita médica que faz parte da vida das famílias portuguesas desde 1950.'}</p>
            </div>
          </div>
          
          <div >
            <div className="flex sm:w-[80%] my-4">
              {mlImages.map((mlImage, index) => (
                <img key={index} src={mlImage} alt={`ml-icon-${index}`} className="h-10 mx-1" />
              ))}
            </div>
            <a href='/pomada.pdf' download>
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
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Indicações</h2>
                  <p className='text-accent text-sm font-roboto'>Cada grama de pomada contém 150 mg/g de óxido de zinco.
                  Halibut pomada, pela natureza da sua formulação é um medicamento dotado de uma notável ação regeneradora dos tecidos e ainda de uma grande ação protetora, calmante, adstringente e antisséptica devido à  presença do óxido de zinco. Pela sua ação calmante, cicatrizante e regeneradora dos tecidos Halibut pomada está indicada na dermatite das fraldas (assaduras dos bebés), queimaduras do primeiro grau e na cicatrização de feridas superficiais.</p>
                </div>
              )}

              {activeSection === 'application' && 
              (
                <div className='text-accent text-sm font-roboto'>
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Como aplicar?</h2>
                  <p className='text-accent font-roboto mb-3'>Nas irritações cutâneas em que a pele está intacta, estenda uma quantidade de pomada que cubra a parte afetada e espalhe friccionando levemente. Estão incluídas neste caso a dermatite das fraldas (assaduras dos bebés) e as irritações provocadas por uma exposição prolongada ao sol. As aplicações devem ser feitas várias vezes ao dia. Nas feridas superficiais pode cobri-las com um penso ou gaze previamente untado com a pomada. Troque o penso diariamente.</p>
                  <p className='text-accent font-roboto'>Fale com o seu médico ou farmacêutico se tiver dúvidas.</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Feridas