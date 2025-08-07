import { useState } from 'react'
import Title from '../components/Title'
import peleIcon from '../assets/pelesensibilizada/sensibilizadaIcon.png'
import dermaProduct from '../assets/pelesensibilizada/derma.png'
import g60 from '../assets/60g.png';
import sensibilizadaIcon from '../assets/section-icons/sensibilizada.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const PeleSensivelDermaPlus = () => {
  const [activeSection, setActiveSection] = useState('indications');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
        <Helmet>
          <title>HALIBUT Derma® Plus - Halibut</title>
        </Helmet>
        <div 
            className="w-full h-[600px] bg-cover bg-center sm:flex items-center justify-center hidden flex-col bg-yellow-halibut"
        >
            <img src={peleIcon} alt="" />

        </div>
        
        <div 
            className="h-[420px] bg-cover flex items-center justify-center sm:hidden flex-col bg-yellow-halibut"
        >
            <img src={peleIcon} className='max-w-[50%]' alt="" />
        </div>

        <Title title={'HALIBUT Derma® Plus'} />

        <section className='grid sm:grid-cols-2 max-w-[80%] mx-auto sm:gap-10'>

          <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-3'>
            <div className='flex flex-col justify-center items-center mr-4'>
              <img src={dermaProduct} className='w-[150px] sm:min-w-[180px]' alt="" />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='font-robotobold text-2xl text-accent mb-2'>HALIBUT Derma® Plus </h2>
                <p className='font-roboto text-xl text-accent'>Ideal para todo o tipo de pele fragilizada, Halibut Derma® Plus Creme repara a sua pele e a pele da sua família. </p>
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
                <h2 className='text-primary font-robotobold text-3xl mb-6'>Indicações HALIBUT<br/>Derma® Plus </h2>
                <p className='text-accent text-lg text-justify'>O creme Halibut Derma® Plus foi desenvolvido para reparar a pele de crianças e adultos exposta a agressões devidas a excessiva exposição solar, pele fragilizada e desconforto cutâneo. Hidrata e diminui a vermelhidão, proporcionando uma sensação de conforto. De fácil aplicação, com clorexidina, um antissético que desinfeta e diminui o risco de contaminação da ferida por microrganismos.</p>
              </div>
            )}

            {activeSection === 'application' && 
            (
              <div>
                <h2 className='text-primary font-robotobold text-3xl mb-6'>Como aplicar HALIBUT Derma® Plus ?  </h2>
                <p className='text-justify'>Deve ser aplicado sobre a pele a reparar de forma a espalhar suavemente o produto, evitando o  contacto com os olhos. Não usar na zona coberta pela fralda.</p>
              </div>
            )}
          </div>


        </section>
        <section className='container max-w-[80%] mx-auto flex justify-center space-x-10'>
            <Link to={'/pele-sensibilizada'}>
                <img src={sensibilizadaIcon} className='max-w-[90px]' alt="" />
            </Link>
        </section>
    </>
  )
}

export default PeleSensivelDermaPlus