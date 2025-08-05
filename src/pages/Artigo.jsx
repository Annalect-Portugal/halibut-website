import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet-async';
import { data as postDataLoaders } from './artigos';
import logo from '../assets/logo.png';
import logoApeo from '../assets/logo-apeo.png';

const Artigo = () => {
    const [artigos, setArtigos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [artigo, setArtigo] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);
    const { slug } = useParams();

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

    useEffect(() => {
        const loadArticles = async () => {
            const loadedArticles = await Promise.all(
                postDataLoaders.map(async (loader) => {
                    const module = await loader();
                    return module.default;
                })
            );
            setArtigos(loadedArticles);
            setTimeout(() => {
                setLoading(false);
            }, 1200);
        };

        loadArticles();
    }, []);

    useEffect(() => {
        if (!loading) {
            const foundArtigo = artigos.find((a) => generateSlug(a.titulo) === slug);
            setArtigo(foundArtigo);

            if (foundArtigo) {
                const otherArticles = artigos.filter(a => a !== foundArtigo);
                const shuffled = otherArticles.sort(() => 0.5 - Math.random());
                setRelatedArticles(shuffled.slice(0, 3));
            }
        }
    }, [loading, artigos, slug]);

    if (loading) {
        return <div className='flex justify-center items-center h-screen animate-pulse'>
            <img src={logo} alt="logo" className='w-[100px]' />
        </div>;
    }

    if (!artigo) {
        return <h2>Artigo não encontrado!</h2>;
    }

    const contentWithClasses = parse(artigo.conteudo, {
        replace: (domNode) => {
            if (domNode.name === 'p') {
                domNode.attribs = {
                    ...(domNode.attribs || {}),
                    class: 'mb-4 text-lg'
                };
            }
            if (domNode.name === 'ul') {
                domNode.attribs = {
                    ...(domNode.attribs || {}),
                    class: 'list-disc list-inside pl-5 space-y-2'
                };
            }
            if (domNode.name === 'li') {
                domNode.attribs = {
                    ...(domNode.attribs || {}),
                    class: 'mb-2 text-lg'
                };
            }
        }
    });

    return (
        <>  
            <Helmet>
                <title>{artigo.titulo} - Halibut - Blog</title>
            </Helmet>
            <div className='relative'>
                <div className='bg-white opacity-70 z-20 w-full absolute h-[100%]'></div>
                <p className='absolute text-md font-robotobold top-[20%] sm:top-[32%] left-[10%] z-30 text-primary'>{artigo.categoria}</p>
                <h1 className='absolute text-3xl sm:text-5xl font-robotobold top-[30%] sm:top-[45%] left-[10%] z-30 text-primary max-w-[80%] sm:text-left'>{artigo.titulo}</h1>
                <img src={artigo.imagem} className='w-full h-[300px] object-cover rounded-b-[10%] z-10' alt="" />
            </div>
            <div className='container mx-auto mt-10'>
                <div className='flex items-center gap-4 mb-6'>
                    <p className="text-sm">
                        Conteúdo elaborado pela Associação Portuguesa dos Enfermeiros Obstetras: APEO
                    </p>
                    <img src={logoApeo} className='w-[30px]' alt="Associação Portuguesa dos Enfermeiros Obstetras: APEO" />
                </div>
                <div className='text-xl'>{contentWithClasses}</div>
            </div>
            <div className='mx-auto my-16 max-w-[90%] sm:max-w-[85%]'>
                <h2 className='text-3xl font-robotobold text-primary mb-8'>Artigos Relacionados</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                    {relatedArticles.map((relatedArticle, index) => (
                        <Link key={index} to={`/artigo/${generateSlug(relatedArticle.titulo)}`} className='block'>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                                <img src={relatedArticle.imagem} alt={relatedArticle.titulo} className='w-full h-48 object-cover' />
                                <div className='p-4'>
                                    <h3 className='text-xl font-robotobold text-primary mb-2 line-clamp-2'>{relatedArticle.titulo}</h3>
                                    <p className='text-gray-600 line-clamp-3'>{relatedArticle.preview}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Artigo;
