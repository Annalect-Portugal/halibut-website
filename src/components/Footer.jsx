import React from 'react';
import { Link } from 'react-router-dom';
import logoMedinfar from '../assets/logo-medinfar.png'
import logoRecicla from '../assets/logo-recicla.png'

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-6 mt-8 font-roboto text-xs">
      <div className="container mx-auto text-left space-y-5 my-5">
        <p className='text-justify'>
            <span className='font-robotobold'>HALIBUT® pomada</span> é um medicamento não sujeito a receita médica regenerador dos tecidos, protetor, calmante, adstringente e antissético devido à presença do óxido de zinco como 
            substância ativa. Indicações: dermatite das fraldas (assaduras dos bebés), queimaduras do 1º grau e na cicatrização de feridas superficiais. Contraindicações: se tem alergia ao óxido de 
            zinco ou a qualquer outro componente do medicamento. Leia atentamente o Folheto Informativo e, em caso de dúvida ou de persistência dos sintomas, consulte o seu médico ou 
            farmacêutico. (20/04/2018) Medinfar Consumer Health - Produtos Farmacêuticos, Lda. Rua Henrique Paiva Couceiro, Nº 27, Venda Nova, 2700-451 Amadora, NIF: 504 939 980.
        </p>
        <p className='text-justify'>
            <span className='font-robotobold'>HALIBUT Muda Fraldas®</span> Linimento, <span className='font-robotobold'>HALIBUT Muda Fraldas®</span> Creme Protetor, <span className='font-robotobold'>HALIBUT Muda Fraldas®</span> Pomada Reparadora, <span className='font-robotobold'>HALIBUT Derma® Plus</span> 30 g, são produtos cosméticos. Consulte a informação sobre o produto. 
        </p>
        <p className='text-justify'>
            <span className='font-robotobold'>HALIBUT® queimaduras</span> é um dispositivo médico indicado para uso cutâneo, em queimaduras de primeiro ou segundo grau, queimaduras solares e outras feridas não infetadas. Está também indicado na vermelhidão da pele 
            devido a radioterapia (eritema) ou após terapia laser. É adequado para bebés, crianças, mulheres grávidas e adultos. Aplicação: Queimaduras de primeiro grau e queimaduras solares: aplicar uma camada espessa e 
            deixar penetrar sem esfregar, 2 a 4 vezes ao dia; Queimaduras de segundo grau e outras feriadas não infetadas: após limpar, aplicar uma camada espessa na zona afetada e repetir as aplicações várias vezes ao dia. 
            Na vermelhidão da pele devido a radioterapia e terapia com laser: aplicar 2-3 vezes por dia, de acordo com a recomendação do médico e massajar suavemente até penetrar na pele. Não utilizar se a ferida estiver a 
            sangrar ou infetada e em caso de hipersensibilidade a qualquer um dos seus componentes. Leia cuidadosamente as informações constantes do folheto de instruções do produto. Em caso de dúvida ou persistência dos sintomas 
            consulte o seu médico ou farmacêutico (08/2023). Medinfar Consumer Health - Produtos Farmacêuticos, Lda. Rua Henrique Paiva Couceiro, Nº 27, Venda Nova, 2700-451 Amadora, NIF: 504 939 980.
        </p>
        <p>
            Medinfar Consumer Health - Produtos Farmacêuticos, Lda.<br/>
            Rua Henrique de Paiva Couceiro, 27, Venda Nova<br/>
            2700-451 Amadora, Portugal<br/>
            +351 21 499 74 00<br/>
            apoio.cliente@medinfar.pt
        </p>
        <p>
            2407D_920161
        </p>
        <div>
            <p className='mb-2 font-robotobold'>Parceria com</p>
            <img src={logoRecicla} className='max-h-[50px]' alt="" />
        </div>
      </div>

      <div className='container mx-auto sm:flex flex-row justify-between items-center font-robotobold hidden'>
            <div>
                <img src={logoMedinfar} className='max-h-[30px]' alt="Medinfar Consumer Health" />
            </div>
            <div className='w-[50%] flex justify-between'>
                <div>
                    <p>&copy; Copyright 2024 Medinfar</p>
                </div>
                <div className="divide-x-[3px] flex flex-end">
                    <Link to="/termos-e-condicoes" className="px-1">Termos e Condições</Link>
                    <Link to="/politica-de-privacidade" className="px-1">Política de Privacidade</Link>
                    <Link to="/politica-de-cookies" className="px-1">Política de Cookies</Link>
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
