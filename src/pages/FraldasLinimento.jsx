import { useState } from 'react'
import Banner from '../components/Banner'
import Title from '../components/Title'
import desktopHomeBanner from '../assets/banners/fraldas/desktop.png';
import mobileHomeBanner from '../assets/banners/fraldas/mobile.png';
import linimento from '../assets/muda-fraldas/produtos/linimento.png'
import ml200 from '../assets/200ml.png'
import linimentoIcons from '../assets/muda-fraldas/produtos/linimento/linimento-icons.png'
import linimentoLastIcon from '../assets/muda-fraldas/produtos/linimento/linimento-mudafraldas.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FraldasLinimento = () => {
  const [activeSection, setActiveSection] = useState('indications');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
        <Helmet>
          <title>HALIBUT Muda Fraldas® Linimento - Halibut</title>
        </Helmet>
        <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
        <Title title={"HALIBUT Muda Fraldas® Linimento"} subtitle={"Para uma limpeza suave a cada muda da fralda"} />
        <section className='grid sm:grid-cols-2 max-w-[80%] mx-auto sm:gap-10'>

          <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-3'>
            <div className='flex flex-col justify-center items-center'>
              <img src={linimento} className='w-[150px] sm:w-[250px]' alt="" />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='font-robotobold text-2xl text-accent mb-2'>HALIBUT Muda Fraldas® Linimento </h2>
                <p className='font-roboto text-xl text-accent'>A assadura da fralda é muito comum e a sua prevenção é essencial!</p>
              </div>
              <div>
                <img src={ml200} className='mt-12 sm:mt-28 mb-10' alt="" />
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
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Indicações HALIBUT Muda Fraldas® Linimento </h2>
                <p className='text-accent mb-5 text-lg text-justify'>A pele da zona da fralda é particularmente frágil, sendo por isso fundamental manter uma boa higiene  e prevenir a irritação. HALIBUT Muda Fraldas® Linimento proporciona uma limpeza suave a cada muda de fralda, removendo as impurezas da pele do bebé. </p>
                <p className='text-accent text-lg text-justify'>Testada dermatológica e pediatricamente, a sua composição com Óleo de Girassol e Óleo de Linhaça, ricos em ácidos gordos, apresenta similaridade com o filme lipídico da pele, contribuindo para a função protetora da pele do bebé.</p>
              </div>
            )}

            {activeSection === 'application' && 
            (
              <div>
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Como aplicar HALIBUT Muda Fraldas® Linimento?  </h2>
                <p className='text-accent mb-5 text-lg'>A aplicação deve ser feita com uma compressa ou algodão, em todas as mudas da fralda. Agitar antes de usar.  </p>
                <p className='text-accent text-lg'>Principais vantagens:</p>
                <ul className='text-accent text-lg'>
                  <li>• Inclui na sua composição ingredientes de origem natural  </li>
                  <li>• Ajuda a eliminar microrganismos e resíduos de creme ou pomada </li>
                  <li>• Limpeza, proteção e hidratação num só gesto </li>
                  <li>• Sem sabão</li>
                  <li>• Evita o desperdício de toalhitas descartáveis</li>
                </ul>
              </div>
            )}
          </div>


        </section>
        <section className='container max-w-[80%] mx-auto flex flex-col justify-center items-center space-y-16'>
            <img src={linimentoIcons} className='max-w-[80%] sm:max-w-[500px]' alt="" />
            <Link to={'/muda-fraldas'}>
              <img src={linimentoLastIcon} className='max-w-[90px]' alt="" />
            </Link>
        </section>
    </>
  )
}

export default FraldasLinimento