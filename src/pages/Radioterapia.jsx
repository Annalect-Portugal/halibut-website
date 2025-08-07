import { useState } from 'react'
import g60 from '../assets/60g.png'
import queimaduras from '../assets/queimaduras/queimaduras.png'
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import radioterapia from '../assets/radioterapia/radioterapia-icon.png'
import limpeza from '../assets/radioterapia/limpeza.png'
import conforto from '../assets/radioterapia/conforto.png'
import prevenirtrauma from '../assets/radioterapia/previnirtrauma.png'
import dor from '../assets/radioterapia/dor.png'
import infecao from '../assets/radioterapia/infecao.png'
import tratartrauma from '../assets/radioterapia/tratartrauma.png'
import { Helmet } from 'react-helmet-async';
import dermatite from '../assets/radioterapia/dermatite.png'

const Radioterapia = () => {

  const mlImages = [g60]

  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Helmet>
        <title>Gama Radioterapia e Terapia a Laser - Halibut</title>
      </Helmet>
      <div 
        className="w-full h-[600px] bg-cover bg-center sm:flex items-center justify-center hidden flex-col bg-gray-radioterapia"
      >
          <img src={radioterapia} alt="" />
          <h1 className='text-primary font-robotobold text-6xl my-6'>Cuidados durante a Radioterapia</h1>
          <a href='#sobreradioterapia'>
            <button className='text-primary bg-white text-lg rounded-md font-robotobold px-8 py-1 mt-8'>Saiba Mais</button>
          </a>
      </div>
      
      <div 
        className="h-[420px] bg-cover flex items-center justify-center sm:hidden flex-col bg-gray-radioterapia"
      >
        <img src={radioterapia} alt="" />
        <h1 className='text-primary font-robotobold text-2xl my-6'>Cuidados durante a Radioterapia</h1>
        <a href='#sobreradioterapia'>
          <button className='text-primary bg-white text-lg rounded-md font-robotobold px-8 py-1 mt-4'>Saiba Mais</button>
        </a>
      </div>
      
      <div className='container mx-auto flex flex-col justify-center items-center my-16' id='sobreradioterapia'>
        <div className='max-w-[80%] sm:max-w-[60%] mx-auto'>
          <h2 className='text-center text-accent text-3xl font-robotobold mb-12'>Para prevenir <sup className='text-sm'>1</sup></h2>

          <div className='grid grid-cols-4 text-accent mb-10'>
            <div className='col-span-1'>
              <img src={limpeza} className='h-16 sm:h-auto' alt="" />
            </div>
            <div className='col-span-3'>
              <h3 className="text-lg font-robotobold mb-2 text-primary">Limpeza</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Tomar <span className='text-secondary'>duches mornos</span>;</li>
                <li>Usar <span className='text-secondary'>produtos de higiene</span>, com <span className='text-secondary'>pH neutro</span> e <span className='text-secondary'>sem perfume</span> (ex: sabonete de glicerina, sabonete de bebé);</li>
                <li>Evitar produtos com fragrâncias ou álcool;</li>
                <li><span className='text-secondary'>Lavar de forma suave</span> com a palma da mão;</li>
                <li><span className='text-secondary'>Secagem sem esfregar</span> com uma toalha limpa e macia.</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-4 text-accent mb-10'>
            <div className='col-span-1'>
              <img src={conforto} className='h-16 sm:h-auto' alt="" />
            </div>
            <div className='col-span-3'>
              <h3 className="text-lg font-robotobold mb-2 text-primary">Conforto</h3>
              <ul className="list-disc list-inside mb-4">
                <li><span className='text-secondary'>Não friccionar</span> a pele;</li>
                <li><span className='text-secondary'>Aplicar creme emoliente 3x/dia</span> (deve ser recomendado pelo médico/enfermeiro assistente do Serviço de Radioterapia).</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-4 text-accent'>
            <div className='col-span-1'>
              <img src={prevenirtrauma} className='h-16 sm:h-auto' alt="" />
            </div>
            <div className='col-span-3'>
              <h3 className="text-lg font-robotobold mb-2 text-primary">Trauma</h3>
              <ul className="list-disc list-inside">
                <li>Usar <span className='text-secondary'>roupa larga</span> e de <span className='text-secondary'>algodão</span>;</li>
                <li><span className='text-secondary'>Proteger a pele da exposição solar direta</span> (ex: uso de chapéu, lenço);</li>
                <li>Usar um <span className='text-secondary'>detergente suave</span> para a lavagem da roupa.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>


      <div className='container mx-auto flex flex-col justify-center items-center my-16'>
        <div className='max-w-[80%] sm:max-w-[60%] mx-auto'>
          <h2 className='text-center text-accent text-3xl font-robotobold mb-12'>Para tratar e controlar<sup className='text-sm'>1</sup></h2>

          <div className='grid grid-cols-4 text-accent mb-10'>
            <div className='col-span-1'>
              <img src={dor} className='h-16 sm:h-auto' alt="" />
            </div>
            <div className='col-span-3'>
              <h3 className="text-lg font-robotobold mb-2 text-primary">Gestão da dor</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Cobrir as à reas abertas com <span className='text-secondary'>pensos de baixa aderência</span> para proteger as terminações nervosas;</li>
                <li><span className='text-secondary'>Gerir a terapêutica analgésica</span> prescrita;</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-4 text-accent mb-10'>
            <div className='col-span-1'>
              <img src={infecao} className='h-16 sm:h-auto' alt="" />
            </div>
            <div className='col-span-3'>
              <h3 className="text-lg font-robotobold mb-2 text-primary">Infeção</h3>
              <ul className="list-disc list-inside mb-4">
                <li><span className='text-secondary'>Vigiar sinais e sintomas</span> de infeção;</li>
                <li><span className='text-secondary'>Gerir a terapêutica analgésica</span> prescrita;</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-4 text-accent'>
            <div className='col-span-1'>
              <img src={tratartrauma} className='h-16 sm:h-auto' alt="" />
            </div>
            <div className='col-span-3'>
              <h3 className="text-lg font-robotobold mb-2 text-primary">Trauma</h3>
              <ul className="list-disc list-inside">
                <li><span className='text-secondary'>Não utilizar adesivos na área irradiada</span> (preferir malha tubular ou ligadura);</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='container mx-auto py-10'>
        <div className='max-w-[80%] sm:max-w-[60%] mx-auto'>
          <div className='sm:grid grid-cols-5 flex flex-col items-center text-accent'>
              <div className='col-span-2'>
                <img src={dermatite} className='h-40 sm:h-72' alt="" />
              </div>
              <div className='col-span-3 sm:mb-14'>
                <h3 className="text-lg font-robotobold mb-2 text-primary">Doentes com radiodermatite<sup>2</sup></h3>
                <p>Dos pacientes submetidos a radioterapia cerca de 95% desenvolvem manifestações clínicas cutâneas como alterações na aparência da pele, feridas, úlceras, necrose, fibrose e cancro de pele secundário.</p>
              </div>
            </div>
        </div>
      </div>


      <div className="max-w-[90%] sm:max-w-[70%] rounded-lg p-4 mx-auto flex flex-col sm:flex-row justify-center mt-20">
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
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Indicações  </h2>
                  <p className='text-accent text-sm mb-3 font-roboto'>Formulado para o tratamento de queimaduras de 1º e 2º graus, eritemas solares, vermelhidão da pele associada a radioterapia e terapia a laser e ainda feridas cutâneas superficiais não infetadas.  </p>
                  <p className='text-accent text-sm font-roboto'>Trolamina 6,7 mg/g </p>
                </div>
              )}

              {activeSection === 'application' && 
              (
                <div className='text-accent text-sm font-roboto'>
                  <h2 className='text-primary font-robotobold text-2xl mb-6'>Como aplicar ?  </h2>
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

      <div className='bg-[#116F77] bg-opacity-50 mb-[-32px] mt-8'>
        <div className="sm:max-w-[1280px] max-w-[90%] font-roboto text-white mx-auto text-xs py-4 space-y-1">
          <h4 className='font-robotobold'>Referências:</h4>
          <p>1. AEOP Linhas de Consenso Radiodermite: Linhas de Consenso em Enfermagem para uma melhor intervenção. 2015:1-11.</p>
          <p>2. Lopes AM, et al. Efeitos da radioterapia na pele e a intervenção da fisioterapia dermatofuncional: uma revisão de literatura. Higeia. 2020;iV(2):17-26.</p>
        </div>    
      </div>
    </>
  )
}

export default Radioterapia