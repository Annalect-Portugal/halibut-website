import { useState } from 'react'
import Banner from '../components/Banner'
import Title from '../components/Title'
import desktopHomeBanner from '../assets/banners/fraldas/desktop.png';
import mobileHomeBanner from '../assets/banners/fraldas/mobile.png';
import cremeprotetorImg from '../assets/muda-fraldas/produtos/creme-protetor.png'
import g50 from '../assets/50g.png';
import g100 from '../assets/100g.png';
import g150 from '../assets/150g.png';
import protetorIcons from '../assets/muda-fraldas/produtos/protetor/protetor-icons.png'
import mudafraldasIcon from '../assets/muda-fraldas/produtos/linimento/linimento-mudafraldas.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FraldasProtetor = () => {
  const [activeSection, setActiveSection] = useState('indications');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
        <Helmet>
          <title>HALIBUT Muda Fraldas® Creme Protetor - Halibut</title>
        </Helmet>
        <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
        <Title title={"HALIBUT Muda Fraldas® Creme Protetor"} subtitle={"Para prevenir a assadura da fralda"} />
        <section className='grid sm:grid-cols-2 max-w-[80%] mx-auto sm:gap-10'>

          <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-3'>
            <div className='flex flex-col justify-center items-center'>
              <img src={cremeprotetorImg} className='w-[200px] sm:w-[400px]' alt="" />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='font-robotobold text-2xl text-accent mb-2'>HALIBUT Muda Fraldas® Creme Protetor </h2>
                <p className='font-roboto text-xl text-accent'>A assadura da fralda é muito comum e a sua prevenção é essencial!</p>
              </div>
              <div>
                <div className='flex space-x-2 mt-12 sm:mt-20 mb-10'>
                    <img src={g50} alt="" />
                    <img src={g100} alt="" />
                    <img src={g150} alt="" />
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
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Indicações HALIBUT Muda Fraldas® Creme Protetor  </h2>
                <p className='text-accent text-md text-justify'>A prevenção é a melhor forma para evitar o aparecimento de uma assadura da fralda. Após a limpeza, utilize o HALIBUT Muda Fraldas® Creme Protetor (com óleo de girassol e óxido de zinco) e mantenha o rabinho do seu bebé protegido, beneficiando da ação calmante e hidratante do Creme Protetor. </p>
              </div>
            )}

            {activeSection === 'application' && 
            (
              <div>
                <h2 className='text-[#9CD061] font-robotobold text-3xl mb-6'>Como aplicar HALIBUT Muda Fraldas® Creme Protetor ?  </h2>
                <p className='text-accent mb-5 text-md'>A utilização Halibut Muda Fraldas® Creme Protetor pode prevenir as assaduras da fralda. Para isso, deve ser utilizado em todas as mudas da fralda massajando suavemente a pele do bebé. Por fim, não aperte demasiado a fralda, este gesto ajudará a manter a pele do seu bebé saudável!   </p>
                <p className='text-accent mb-5 text-md'>Para a reparação da pele, utilize <Link to={'/pomada-reparadora'} className='underline'>Halibut Muda Fraldas®  Pomada Reparadora </Link></p>
                <p className='text-accent text-md'>Principais vantagens:</p>
                <ul className='text-accent text-md'>
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
            <img src={protetorIcons} className='max-w-[80%] sm:max-w-[500px]' alt="" />
            <Link to={'/muda-fraldas'}>
              <img src={mudafraldasIcon} className='max-w-[90px]' alt="" />
            </Link>
        </section>
    </>
  )
}

export default FraldasProtetor