import React, { useState } from 'react'
import Banner from '../components/Banner'
import Title from '../components/Title'
import desktopHomeBanner from '../assets/banners/pomada-original/desktop.png';
import mobileHomeBanner from '../assets/banners/pomada-original/mobile.png';
import pomadaOriginalImg from '../assets/feridas/pomadaoriginal.png'
import g30 from '../assets/30g.png';
import g100 from '../assets/50g.png';
import g150 from '../assets/100g.png';
import { Link } from 'react-router-dom';
import irritacoesIcon from '../assets/section-icons/irritacoes.png'
import feridasIcon from '../assets/section-icons/feridas.png'
import { Helmet } from 'react-helmet';

const PomadaOriginal = () => {
  const [activeSection, setActiveSection] = useState('indications');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>  
        <Helmet>
          <title>HALIBUT® Pomada Original - Halibut</title>
        </Helmet>
        <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
        <div>
            <Title title={"HALIBUT® Pomada Original"} subtitle={"Regenera e Cicatriza"} claim={"Medicamento não sujeito a receita médica"}/>
        </div>
        
        <section className='grid sm:grid-cols-2 max-w-[80%] mx-auto sm:gap-10'>

          <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-3'>
            <div className='flex flex-col justify-center items-center'>
              <img src={pomadaOriginalImg} className='w-[180px] sm:w-[620px]' alt="" />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='font-robotobold text-2xl text-accent mb-2'>​HALIBUT® Pomada Original</h2>
                <p className='font-roboto text-xl text-accent'>Qualidade garantida, geração em geração. Halibut pomada é um medicamento não sujeito a receita médica que faz parte da vida das famílias portuguesas desde 1950.</p>
              </div>
              <div>
                <div className='flex space-x-2 mt-12 sm:mt-20 mb-10'>
                    <img src={g30} alt="" />
                    <img src={g100} alt="" />
                    <img src={g150} alt="" />
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
                <h2 className='text-primary font-robotobold text-3xl mb-6'>Indicações HALIBUT®<br/>Pomada Original​​</h2>
                <p className='text-accent text-md text-justify'>Cada grama de pomada contém 150 mg/g de óxido de zinco.​ Halibut pomada, pela natureza da sua formulação é um medicamento dotado de uma notável ação regeneradora dos tecidos e ainda de uma grande ação protetora, calmante, adstringente e antisséptica devido à presença do óxido de zinco.​ Pela sua ação calmante, cicatrizante e regeneradora dos tecidos Halibut pomada está indicada na dermatite das fraldas (assaduras dos bebés), queimaduras do primeiro grau e na cicatrização de feridas superficiais.​​</p>
              </div>
            )}

            {activeSection === 'application' && 
            (
              <div>
                <h2 className='text-primary font-robotobold text-3xl mb-6'>Como aplicar HALIBUT® Pomada Original​?​​</h2>
                <p className='text-accent mb-5 text-md text-justify'>Nas irritações cutâneas em que a pele está intacta, estenda uma quantidade de pomada que cubra a​ parte afetada e espalhe friccionando levemente. Estão incluídas neste caso a dermatite das fraldas​ (assaduras dos bebés) e as irritações provocadas por uma exposição prolongada ao sol. As aplicações​ devem ser feitas várias vezes ao dia. Nas feridas superficiais pode cobri-las com um penso ou gaze​ previamente untado com a pomada. Troque o penso diariamente.​</p>
                <p className='text-accent text-md text-justify'>Fale com o seu médico ou farmacêutico se tiver dúvidas.​</p>
              </div>
            )}
          </div>


        </section>
        <section className='container max-w-[80%] mx-auto flex justify-center space-x-10'>
            <Link to={'/irritacoes'}>
                <img src={irritacoesIcon} className='max-w-[90px]' alt="" />
            </Link>
            <Link to={'/feridas'}>
                <img src={feridasIcon} className='max-w-[90px]' alt="" />
            </Link>
        </section>
    </>
  )
}

export default PomadaOriginal