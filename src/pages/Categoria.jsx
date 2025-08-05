import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { getVisibleArticles } from './artigos';
import logo from '../assets/logo.png';

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

const slugToCategory = {
  'crescimento-desenvolvimento-do-bebe': 'Crescimento & Desenvolvimento do Bebé',
  'conforto-seguranca' : 'Conforto & Segurança',
  'saude-do-bebe' : 'Saúde do Bebé',
  'amamentacao' : 'Amamentação',
  'cuidar-do-bebe' : 'Cuidar do Bebé',
  'gravidez' : 'Gravidez',
  'saude-mental-dos-pais' : 'Saúde Mental dos Pais'
};

const Categoria = () => {
  const { categoriaSlug } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const artigosPorPagina = 3;
  const [currentArticles, setCurrentArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(true);

  const currentCategory = slugToCategory[categoriaSlug] || categoriaSlug;

  const categories = [ 
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

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      const startIndex = (currentPage - 1) * artigosPorPagina;
      const allArticles = await getVisibleArticles(0, 1000);
      
      const filteredArticles = allArticles.filter((artigo) => {
        const slugPComparacao = generateSlug(artigo.categoria);
        return slugPComparacao.toLowerCase() === categoriaSlug.toLowerCase();
      });

      setTotalArticles(filteredArticles.length);
      
      const visibleArticles = filteredArticles.slice(startIndex, startIndex + artigosPorPagina);
      setCurrentArticles(visibleArticles);
      
      window.setTimeout(() => {
        setLoading(false);
      }, 1200);
    };

    loadArticles();
  }, [currentPage, categoriaSlug]);

  const totalPages = Math.ceil(totalArticles / artigosPorPagina);

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

  const handleCategoriaClick = (slug) => {
    navigate(`/categoria/${slug}`);
  };

  if (loading) {
    return <div className='flex justify-center items-center h-screen animate-pulse'>
        <img src={logo} alt="logo" className='w-[100px]' />
    </div>;
}

  return (
    <>
      <Helmet>
        <title>{currentCategory} - Halibut - Blog</title>
      </Helmet>
      
      <div className='container mx-auto sm:grid grid-cols-4 gap-12 my-16'>
        <div id='artigosSection' className='col-span-3 flex flex-col gap-8 px-6 sm:px-0'>
          <h1 className='text-3xl font-robotobold text-primary'>
            Categoria: {currentCategory}
          </h1>
          {currentArticles.map((artigo, index) => {
            const slug = generateSlug(artigo.titulo);

            return (
              <Link to={`/artigo/${slug}`} key={index} className='flex flex-col sm:flex-row gap-3 sm:gap-12 font-roboto shadow-lg shadow-gray-300 rounded-lg'>
                <img src={artigo.imagem} className='sm:max-w-[40%] h-[300px] object-cover rounded-l-lg' alt={artigo.titulo} />
                <div className='flex flex-col gap-4 pb-6 sm:pb-0 sm:pr-12 justify-center px-8 sm:px-0'>
                  <span className='text-primary font-robotobold'>{artigo.data}</span>
                  <h2 className='text-primary text-3xl sm:text-4xl font-robotobold line-clamp-2'>{artigo.titulo}</h2>
                  <p className='line-clamp-2'>{artigo.preview}</p>
                  <span className='border-b-2 border-primary'></span>
                  <a className='text-secondary flex gap-1 cursor-pointer hover:underline underline-secondary underline-offset-4 text-lg'>
                    <ChevronRight />Ler mais
                  </a>
                </div>          
              </Link>
            );
          })}

          {/* Pagination buttons */}
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

        <div className='col-span-1'>
          <h3 className='text-2xl font-robotobold mb-4'>Categorias</h3>
          {categories.map((categoria, index) => (
            <div
              key={index}
              onClick={() => handleCategoriaClick(categoria.slug)}
              className='cursor-pointer hover:text-secondary mb-2 flex gap-2 items-center'
            >
              <ChevronRight color='#116F77' /> {categoria.categoria}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categoria;