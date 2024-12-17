import React, { useState } from 'react';
import Banner from '../components/Banner';
import Title from '../components/Title';
import desktopHomeBanner from '../assets/banners/fraldas/desktop.png';
import mobileHomeBanner from '../assets/banners/fraldas/mobile.png';
import g50 from '../assets/50g.png';
import g100 from '../assets/100g.png';
import g150 from '../assets/150g.png';
import ml200 from '../assets/200ml.png';
import ProductCard from '../components/ProductCard';
import linimento from '../assets/muda-fraldas/produtos/linimento.png';
import cremeProtetor from '../assets/muda-fraldas/produtos/creme-protetor.png';
import pomadaReparadora from '../assets/muda-fraldas/produtos/pomada-reparadora.png';
import { Helmet } from 'react-helmet';

const produtos = [
  {
    id: 1,
    image: linimento,
    title: 'HALIBUT Muda Fraldas® Linimento',
    description: 'A assadura da fralda é muito comum e a sua prevenção é essencial!',
    mlImages: [ml200],
    linkUrl: '/linimento'
  },
  {
    id: 2,
    image: cremeProtetor,
    title: 'HALIBUT Muda Fraldas® Creme Protetor',
    description: 'A assadura da fralda é muito comum e a sua prevenção é essencial!',
    mlImages: [g50, g100, g150],
    linkUrl: '/creme-protetor'
  },
  {
    id: 3,
    image: pomadaReparadora,
    title: 'HALIBUT Muda Fraldas® Pomada Reparadora',
    description: 'Reparação da pele na assadura da fralda, com miconazol para controlar a proliferação de microrganismos.',
    mlImages: [g50, g100],
    linkUrl: '/pomada-reparadora'
  },
];

const Fraldas = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (productId, section) => {
    setActiveProduct(productId);
    setActiveSection(section);
  };


  return (
    <>
      <Helmet>
        <title>Gama Muda Fraldas - Halibut</title>
      </Helmet>           
      <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
      <Title title={"Muda Fraldas"} subtitle={"Quando tudo parece mudar, há algo que nunca muda"} />
      <div className="space-y-20 sm:space-y-0 sm:max-w-[80%] mx-auto flex flex-wrap sm:grid grid-cols-3 2xl:flex justify-center items-center p-4">
        <div>
          <ProductCard 
            image={produtos[0].image}
            title={produtos[0].title}
            description={produtos[0].description}
            mlImages={produtos[0].mlImages}
            linkUrl={produtos[0].linkUrl}
            onButton1Click={() => handleButtonClick(produtos[0].id, 'indications')}
            onButton2Click={() => handleButtonClick(produtos[0].id, 'application')}
            button1Style={activeProduct === produtos[0].id && activeSection === 'indications' ? 'bg-[#9CD061] text-white' : 'bg-white text-black'}
            button2Style={activeProduct === produtos[0].id && activeSection === 'application' ? 'bg-[#9CD061] text-white' : 'bg-white text-black'}
          />
          <div className='sm:hidden'>
            { activeSection === 'indications' && activeProduct === produtos[0].id && (
            <div className='max-w-[80%] mx-auto'>
              <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Indicações</h2>
              <p className='mb-5'>A pele da zona da fralda é particularmente frágil, sendo por isso fundamental manter uma boa higiene​ e prevenir a irritação. HALIBUT Muda Fraldas® Linimento proporciona uma limpeza suave a cada muda de fralda, removendo as impurezas da pele do bebé.​​</p>
              <p>​Testada dermatológica e pediatricamente, a sua composição com Óleo de Girassol e Óleo de Linhaça, ricos em ácidos gordos, apresenta similaridade com o filme lipídico da pele, contribuindo para a função protetora da pele do bebé.</p>
            </div>
            )}
            { activeSection === 'application' && activeProduct === produtos[0].id && (
            <div className='max-w-[80%] mx-auto'>
              <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Como aplicar?</h2>
              <p className='mb-4'>A aplicação deve ser feita com uma compressa ou algodão, em todas as mudas da fralda. Agitar antes de usar.​</p>
              <p>Principais vantagens:</p>
              <ul>
                <li>• Inclui na sua composição ingredientes de origem natural ​</li>
                <li>• Ajuda a eliminar microrganismos e resíduos de creme ou pomada​</li>
                <li>• Limpeza, proteção e hidratação num só gesto​</li>
                <li>• Sem sabão</li>
                <li>• Evita o desperdício de toalhitas descartáveis</li>
              </ul>
            </div>
            )}
          </div>
        </div>

        <div>
          <ProductCard 
              image={produtos[1].image}
              title={produtos[1].title}
              description={produtos[1].description}
              mlImages={produtos[1].mlImages}
              linkUrl={produtos[1].linkUrl}
              onButton1Click={() => handleButtonClick(produtos[1].id, 'indications')}
              onButton2Click={() => handleButtonClick(produtos[1].id, 'application')}
              button1Style={activeProduct === produtos[1].id && activeSection === 'indications' ? 'bg-[#9CD061] text-white' : 'bg-white text-black'}
              button2Style={activeProduct === produtos[1].id && activeSection === 'application' ? 'bg-[#9CD061] text-white' : 'bg-white text-black'}
            />
            <div className='sm:hidden'>
              { activeSection === 'indications' && activeProduct === produtos[1].id && (
              <div className='max-w-[80%] mx-auto'>
                <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Indicações</h2>
                <p>A prevenção é a melhor forma para evitar o aparecimento de uma assadura da fralda. Após a limpeza, utilize o HALIBUT Muda Fraldas® Creme Protetor (com óleo de girassol e óxido de zinco) e mantenha o rabinho do seu bebé protegido, beneficiando da ação calmante e hidratante do Creme Protetor.</p>
              </div>
              )}
              { activeSection === 'application' && activeProduct === produtos[1].id && (
              <div className='max-w-[80%] mx-auto'>
                <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Como aplicar?</h2>
                <p className='mb-5'>A utilização Halibut Muda Fraldas® Creme Protetor pode prevenir as assaduras da fralda.<br/>Para isso, deve ser utilizado em todas as mudas da fralda massajando suavemente a pele do bebé.<br/>Por fim, não aperte demasiado a fralda, este gesto ajudará a manter a pele do seu bebé saudável!​<br/>Para a reparação da pele, utilize Halibut Muda Fraldas®​ Pomada Reparadora.</p>
                <p>Principais vantagens:</p>
                <ul>
                  <li>• Textura cremosa e de fácil aplicação​</li>
                  <li>• Cheiro agradável​</li>
                  <li>• Não deixa resíduos brancos​</li>
                  <li>• Ideal para o bebé e recém-nascido na zona da fralda e das pregas</li>
                </ul>
              </div>
              )}
          </div>
        </div>

        <div>
          <ProductCard 
              image={produtos[2].image}
              title={produtos[2].title}
              description={produtos[2].description}
              mlImages={produtos[2].mlImages}
              linkUrl={produtos[2].linkUrl}
              onButton1Click={() => handleButtonClick(produtos[2].id, 'indications')}
              onButton2Click={() => handleButtonClick(produtos[2].id, 'application')}
              button1Style={activeProduct === produtos[2].id && activeSection === 'indications' ? 'bg-[#9CD061] text-white' : 'bg-white text-black'}
              button2Style={activeProduct === produtos[2].id && activeSection === 'application' ? 'bg-[#9CD061] text-white' : 'bg-white text-black'}
            />
            <div className='sm:hidden'>
              { activeSection === 'indications' && activeProduct === produtos[2].id && (
                <div className='max-w-[80%] mx-auto'>
                  <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Indicações</h2>
                  <p>Pomada para a reparação da pele quando existe irritação, assadura da fralda e/ou vermelhidão no​ rabinho do bebé. Com miconazol que ajuda a controlar a proliferação de microrganismos na pele e óxido de zinco com uma ação regeneradora dos tecidos e ainda de uma ação protetora e calmante.</p>
                </div>
                )}
                { activeSection === 'application' && activeProduct === produtos[2].id && (
                <div className='max-w-[80%] mx-auto'>
                  <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Como aplicar?</h2>
                  <p className='mb-5'>Aplicar em cada muda da fralda, durante 7 dias, em camada fina e homogénea, na pele limpa e seca. Se ​após estes dias a zona da fralda continuar alterada, consulte o médico. Antes da utilização de HALIBUT Muda Fraldas® Pomada Reparadora recomendamos que limpe suavemente a pele do bebé com​ HALIBUT Muda Fraldas® Linimento, para um cuidado completo na prevenção da assadura da fralda.</p>
                  <p>Principais vantagens:</p>
                  <ul>
                    <li>• Textura cremosa e fácil de espalhar​</li>
                    <li>• Cheiro agradável​</li>
                    <li>• Controla a proliferação de microrganismos</li>
                    <li>• Não deixa resíduos brancos​</li>
                    <li>• Permite ver a evolução da vermelhidão no rabinho do bebé</li>
                  </ul>
                </div>
                )}
            </div>
        </div>

      </div>


      <div className='max-w-[50%] mx-auto font-roboto pt-6 text-center text-[#3A3A3A] hidden sm:block'>
        {activeProduct && (
          <>
            {activeSection === 'indications' && (
              <section id='indications' className='mt-8'>
                <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Indicações</h2>
                {produtos.find(p => p.id === activeProduct)?.id === 1 && (
                  <>
                    <p className='mb-5'>A pele da zona da fralda é particularmente frágil, sendo por isso fundamental manter uma boa higiene​ e prevenir a irritação. HALIBUT Muda Fraldas® Linimento proporciona uma limpeza suave a cada muda de fralda, removendo as impurezas da pele do bebé.​​</p>
                    <p>​Testada dermatológica e pediatricamente, a sua composição com Óleo de Girassol e Óleo de Linhaça, ricos em ácidos gordos, apresenta similaridade com o filme lipídico da pele, contribuindo para a função protetora da pele do bebé.</p>
                  </>
                )}
                {produtos.find(p => p.id === activeProduct)?.id === 2 && (
                  <>
                    <p>A prevenção é a melhor forma para evitar o aparecimento de uma assadura da fralda. Após a limpeza, utilize o HALIBUT Muda Fraldas® Creme Protetor (com óleo de girassol e óxido de zinco) e mantenha o rabinho do seu bebé protegido, beneficiando da ação calmante e hidratante do Creme Protetor.</p>
                  </>
                )}
                {produtos.find(p => p.id === activeProduct)?.id === 3 && (
                  <>
                    <p>Pomada para a reparação da pele quando existe irritação, assadura da fralda e/ou vermelhidão no​ rabinho do bebé. Com miconazol que ajuda a controlar a proliferação de microrganismos na pele e óxido de zinco com uma ação regeneradora dos tecidos e ainda de uma ação protetora e calmante.</p>
                  </>
                )}
              </section>
            )}
            {activeSection === 'application' && (
              <section id='application' className='mt-8'>
                <h2 className='text-[#9CD061] font-robotobold text-3xl my-8'>Como aplicar?</h2>
                {produtos.find(p => p.id === activeProduct)?.id === 1 && (
                  <>
                    <p className='mb-4'>A aplicação deve ser feita com uma compressa ou algodão, em todas as mudas da fralda. Agitar antes de usar.​</p>
                    <p>Principais vantagens:</p>
                    <ul>
                      <li>• Inclui na sua composição ingredientes de origem natural ​</li>
                      <li>• Ajuda a eliminar microrganismos e resíduos de creme ou pomada​</li>
                      <li>• Limpeza, proteção e hidratação num só gesto​</li>
                      <li>• Sem sabão</li>
                      <li>• Evita o desperdício de toalhitas descartáveis</li>
                    </ul>
                  </>
                )}
                {produtos.find(p => p.id === activeProduct)?.id === 2 && (
                  <>
                    <p className='mb-5'>A utilização Halibut Muda Fraldas® Creme Protetor pode prevenir as assaduras da fralda.<br/>Para isso, deve ser utilizado em todas as mudas da fralda massajando suavemente a pele do bebé.<br/>Por fim, não aperte demasiado a fralda, este gesto ajudará a manter a pele do seu bebé saudável!​<br/>Para a reparação da pele, utilize Halibut Muda Fraldas®​ Pomada Reparadora.</p>
                    <p>Principais vantagens:</p>
                    <ul>
                      <li>• Textura cremosa e de fácil aplicação​</li>
                      <li>• Cheiro agradável​</li>
                      <li>• Não deixa resíduos brancos​</li>
                      <li>• Ideal para o bebé e recém-nascido na zona da fralda e das pregas</li>
                    </ul>
                  </>
                )}
                {produtos.find(p => p.id === activeProduct)?.id === 3 && (
                  <>
                    <p className='mb-5'>Aplicar em cada muda da fralda, durante 7 dias, em camada fina e homogénea, na pele limpa e seca. Se ​após estes dias a zona da fralda continuar alterada, consulte o médico. Antes da utilização de HALIBUT Muda Fraldas® Pomada Reparadora recomendamos que limpe suavemente a pele do bebé com​ HALIBUT Muda Fraldas® Linimento, para um cuidado completo na prevenção da assadura da fralda.</p>
                    <p>Principais vantagens:</p>
                    <ul>
                      <li>• Textura cremosa e fácil de espalhar​</li>
                      <li>• Cheiro agradável​</li>
                      <li>• Controla a proliferação de microrganismos</li>
                      <li>• Não deixa resíduos brancos​</li>
                      <li>• Permite ver a evolução da vermelhidão no rabinho do bebé</li>
                    </ul>
                  </>
                )}
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Fraldas;
