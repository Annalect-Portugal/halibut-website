import { useState, useEffect } from 'react'
import { data as postDataLoaders, getVisibleArticles } from './artigos'
import { ChevronRight } from 'lucide-react'
import Banner from '../components/Banner';
import desktopHomeBanner from '../assets/banners/blog/desktop.png';
import mobileHomeBanner from '../assets/banners/blog/mobile.png';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const SaibaMais = () => {
  const [currentArticles, setCurrentArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1);
  const artigosPorPagina = 3;

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      const startIndex = (currentPage - 1) * artigosPorPagina;
      const visibleArticles = await getVisibleArticles(startIndex, artigosPorPagina);
      setCurrentArticles(visibleArticles);
      window.setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    loadArticles();
  }, [currentPage])
  
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9 -]/g, '') 
      .replace(/\s+/g, '-') 
      .trim();
  };

  const totalPages = Math.ceil(postDataLoaders.length / artigosPorPagina);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const categoriasComSlug = [
    {
        "categoria": "Crescimento & Desenvolvimento do Bebé",
        "slug": "crescimento-desenvolvimento-do-bebe"
    },
    {
        "categoria": "Conforto & Segurança",
        "slug": "conforto-seguranca"
    },
    {
        "categoria": "Saúde do Bebé",
        "slug": "saude-do-bebe"
    },
    {
        "categoria": "Amamentação",
        "slug": "amamentacao"
    },
    {
        "categoria": "Cuidar do Bebé",
        "slug": "cuidar-do-bebe"
    },
    {
        "categoria": "Gravidez",
        "slug": "gravidez"
    },
    {
        "categoria": "Saúde Mental dos Pais",
        "slug": "saude-mental-dos-pais"
    }
]

  const handleCategoriaClick = (slug) => {
    navigate(`/categoria/${slug}`);
  };

  return (
    <>
      <Helmet>
        <title>Blog - Halibut</title>
      </Helmet>
      
      <div className='relative'>
        <Banner image={desktopHomeBanner} mobileImage={mobileHomeBanner} />
        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary lg:text-7xl text-4xl font-robotobold'>Artigos</p>
      </div>
      
      
      <div className='container mx-auto sm:grid grid-cols-4 gap-12 my-16'>
        
        <div id='artigosSection' className='col-span-3 flex flex-col gap-8 px-6 sm:px-0'>
        {loading ? (
           <div className='flex justify-center items-center animate-pulse'>
                <img src={logo} alt="logo" className='w-[100px]' />
            </div>
        ) : (
          currentArticles.map((artigo, index) => {
            const slug = generateSlug(artigo.titulo);

            return (
              <Link to={`/artigo/${slug}`} key={index} className='flex flex-col sm:flex-row gap-3 sm:gap-12 font-roboto shadow-lg shadow-gray-300 rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300'>
                <img 
                  src={artigo.imagem} 
                  alt={artigo.titulo}
                  className='sm:max-w-[40%] h-[300px] object-cover rounded-l-lg'
                />
                <div className='flex flex-col gap-4 pb-6 sm:pb-0 sm:pr-12 justify-center px-8 sm:px-0'>
                  <span className='text-primary font-robotobold'>{artigo.categoria}</span>
                  <h2 className='text-primary text-3xl sm:text-4xl font-robotobold line-clamp-2'>{artigo.titulo}</h2>
                  <p className='line-clamp-2'>{artigo.preview}</p>
                  <span className='border-b-2 border-primary'></span>
                  <div className='text-secondary flex gap-1 hover:underline underline-secondary underline-offset-4 text-lg'>
                    <ChevronRight />Ler mais
                  </div>
                </div>          
              </Link>
            );
          })
        )}

        <div className='flex items-center justify-center gap-4 mt-8'>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200' : 'bg-primary'} text-white`}
          >
            Anterior
          </button>
          <span className='text-primary font-robotobold'>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-200' : 'bg-primary'} text-white`}
          >
            Próxima
          </button>
        </div>

        </div>

        <div id='sidebarSection' className='col-span-1 mt-12 sm:mt-0 px-6 sm:px-0'>
          <div className="flex flex-col">
            <h3 className='font-robotobold text-2xl text-primary'>CATEGORIAS</h3>
            <span className='border-b-2 border-primary pb-2'></span>
            <div className='pt-2 font-roboto flex flex-col gap-2 mt-2'>
              {categoriasComSlug.map(({ categoria, slug }, index) => (
                <p
                  key={index}
                  className='cursor-pointer hover:text-secondary mb-2 flex gap-2 items-center'
                  onClick={() => handleCategoriaClick(slug)} 
                >
                  <ChevronRight color='#116F77' /> {categoria}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SaibaMais