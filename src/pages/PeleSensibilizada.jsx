import { useState } from 'react'
import peleIcon from '../assets/pelesensibilizada/sensibilizadaIcon.png'
import dermaProduct from '../assets/pelesensibilizada/derma.png'
import { Link } from 'react-router-dom'
import g30 from '../assets/30g.png'
import Title from '../components/Title'
import { Helmet } from 'react-helmet-async'

const PeleSensibilizada = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const mlImages = [g30]

  return (
    <>
      <Helmet>
        <title>Gama Pele Sensibilizada - Halibut</title>
      </Helmet>
      <div 
        className="w-full h-[600px] bg-cover bg-center sm:flex items-center justify-center hidden flex-col"
        style={{ backgroundColor:'#FAC404' }}
      >
          <img src={peleIcon} alt="" />

      </div>
      
      <div 
        className="h-[420px] bg-cover flex items-center justify-center sm:hidden flex-col bg-yellow-halibut"
      >
        <img src={peleIcon} alt="" />
      </div>

      <Title title={'Pele Sensibilizada'} />

      <div className="max-w-[90%] sm:max-w-[70%] rounded-lg p-4 mx-auto flex flex-col sm:flex-row justify-center mt-20">
        <div className='mb-7 sm:mb-0 sm:mr-14'>
          <Link to={'/dermaplus'} className='flex justify-center sm:justify-end items-center sm:items-end'>
            <img src={dermaProduct} alt={'Halibut Derma plus'} className="max-w-[130px] sm:max-w-[180px] rounded-md mb-4 cursor-pointer" />
          </Link>
        </div>
        
        <div className='flex flex-col sm:max-w-[40%]'>
          <div>
            <h2 className="text-xl font-robotobold mb-2 sm:max-w-[80%] text-[#116F77]">{'HALIBUT Derma® Plus'}</h2>
            <div className='min-h-[100px] sm:max-w-[80%]'>
              <p className="text-[#3A3A3A] mb-4 font-roboto">{'Ideal para todo o tipo de pele fragilizada, Halibut Derma® Plus creme repara a sua pele e a pele da sua família.'}</p>
            </div>
          </div>
          
          <div >
            <div className="flex sm:w-[80%] my-4">
              {mlImages.map((mlImage, index) => (
                <img key={index} src={mlImage} alt={`ml-icon-${index}`} className="h-10 mx-1" />
              ))}
            </div>
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
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Indicações  </h2>
                  <p className='text-accent text-sm mb-3 font-roboto'>O creme Halibut Derma® Plus foi desenvolvido para reparar a pele de crianças e adultos exposta a agressões devidas a excessiva exposição solar, pele fragilizada e desconforto cutâneo. Hidrata e diminui a vermelhidão, proporcionando uma sensação de conforto. De fácil aplicação, com clorexidina, um antissético que desinfeta e diminui o risco de contaminação da ferida por microrganismos. </p>
                </div>
              )}

              {activeSection === 'application' && 
              (
                <div className='text-accent text-sm font-roboto'>
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Como aplicar ?  </h2>
                  <p>Deve ser aplicado sobre a pele a reparar de forma a espalhar suavemente o produto, evitando o  contacto com os olhos. Não usar na zona coberta pela fralda.</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default PeleSensibilizada