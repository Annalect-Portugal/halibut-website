import { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import halibutLogo from '../assets/logo.png';
import ccmLogo from '../assets/cuidarmais-mais.png';
import { Instagram, Facebook, X, Menu } from 'lucide-react';

const Header = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const produtosPaths = [
        '/muda-fraldas', 
        '/linimento', 
        '/creme-protetor', 
        '/pomada-reparadora', 
        '/produtos',
        '/queimaduras',
        '/halibutqueimaduras',
        '/feridas',
        '/pomadaoriginal',
        '/irritacoes',
        '/radioterapia',
        '/pele-sensibilizada',
        '/dermaplus',
    ];

    const isActive = (path) => {
        if (Array.isArray(path)) {
            return path.includes(location.pathname);
        }
        return location.pathname === path;
    };

    return (
        <>
            <div className='bg-white w-full px-6 sm:px-12 lg:max-w-[1280px]  mx-auto z-20 flex flex-row items-center justify-between md:h-16'>
                <div>
                    <Link to={'/'}>
                        <img src={halibutLogo} className='sm:max-h-12 max-h-6 my-2 md:max-h-7 cursor-pointer' onClick={scrollToTop} alt="Halibut" />
                    </Link>
                </div>
                <div className='flex items-center space-x-12'>
                    <div className='hidden md:flex flex-row justify-between space-x-12 text-xs font-robotobold tracking-[2px] uppercase duration-500 text-accent'>
                        <Link to={'/'}>
                            <p className={isActive('/') ? 'border-b-2 border-primary py-[23px] hover:text-black' : 'py-[23px] hover:text-black'}>Home</p>
                        </Link>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative'>
                            <Link to={'/produtos'}>
                                <p className={isActive(produtosPaths) ? 'border-b-2 border-primary py-[23px] hover:text-black' : 'py-[23px] hover:text-black'}>Produtos</p>
                            </Link>
                            {isDropdownVisible && (
                                <div className='absolute top-full left-0 w-60 bg-white shadow-lg font-roboto rounded-b-md'>
                                    <Link to='/muda-fraldas' className='block px-4 py-2 text-black hover:bg-gray-200'>Muda Fraldas</Link>
                                    <Link to='/queimaduras' className='block px-4 py-2 text-black hover:bg-gray-200'>Queimaduras</Link>
                                    <Link to='/feridas' className='block px-4 py-2 text-black hover:bg-gray-200'>Feridas Superficiais</Link>
                                    <Link to='/irritacoes' className='block px-4 py-2 text-black hover:bg-gray-200'>Irritações da Pele</Link>
                                    <Link to='/radioterapia' className='block px-4 py-2 text-black hover:bg-gray-200'>Radioterapia</Link>
                                    <Link to='/pele-sensibilizada' className='block px-4 py-2 text-black hover:bg-gray-200 hover:rounded-b-md'>Pele Sensibilizada</Link>
                                </div>
                            )}
                        </div>
                        <Link to={'/blog'}>
                            <p className={isActive('/blog') ? 'border-b-2 border-primary py-[23px] hover:text-black' : 'py-[23px] hover:text-black'}>Artigos</p>
                        </Link>
                        
                    </div>
                    
                    <div className='gap-x-5 hidden md:flex'>
                        <a href="https://www.instagram.com/halibutportugal/">
                            <Instagram className='sm:hover:scale-105 duration-500 ease-in-out text-accent hover:text-black'/>
                        </a>
                        <a href="https://www.facebook.com/halibutportugal/">
                            <Facebook className='sm:hover:scale-105 duration-500 ease-in-out text-accent hover:text-black'/>
                        </a>
                    </div>
                    
                    <div className="hidden md:flex">
                        <div className='ccmais bg-white font-roboto'>
                            <a className='btn-ccmais' target="_blank" href="https://clubecuidarmais.com/">
                                CLUBE CUIDAR <img src={ccmLogo} alt="+" />
                            </a>
                        </div>
                    </div>
                </div>

                <div onClick={handleNav} className="block md:hidden cursor-pointer">
                    {nav ? <X size={45} color='#604a3c' /> : <Menu size={45} color='#604a3c'/>} 
                </div>

                <div className={nav ? "fixed left-0 top-0 w-[80%] h-full bg-white z-50 ease-in-out duration-500 md:hidden" : "ease-in-out top-0 w-[70%] h-full bg-primary duration-200 fixed left-[-100%] md:hidden" }>
                    <img className={nav ? "max-h-12 p-4 mt-4 mx-auto" : "hidden"} src={halibutLogo} alt="Halibut" />
                    <ul className={nav ? "uppercase px-10 flex flex-col font-helvemedium  space-y-5 mt-7" : "hidden"}>
                        <Link to={'/'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Home</li>
                        </Link>
                        <Link to={'/muda-fraldas'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/muda-fraldas') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Muda Fraldas</li>
                        </Link>
                        <Link to={'/queimaduras'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/queimaduras') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Queimaduras</li>
                        </Link>
                        <Link to={'/feridas'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/feridas') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Feridas Superficiais</li>
                        </Link>
                        <Link to={'/irritacoes'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/irritacoes') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Irritações da Pele</li>
                        </Link>
                        <Link to={'/radioterapia'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/radioterapia') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Radioterapia e Terapia a Laser</li>
                        </Link>
                        <Link to={'/pele-sensibilizada'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/pele-sensibilizada') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Pele Sensibilizada</li>
                        </Link>
                        <Link to={'/blog'}>
                            <li className={`border-b-2 pb-1 duration-500 ease-in-out hover:text-accent ${isActive('/blog') ? 'border-b-primary' : ' hover:border-b-primary'}`} onClick={handleNav}>Artigos</li>
                        </Link>
                        <li className="mt-4">
                            <a
                                className="btn-ccmais flex items-center justify-center gap-2 bg-white font-roboto px-4 py-2 rounded shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://clubecuidarmais.com/"
                            >
                                CLUBE CUIDAR <img src={ccmLogo} alt="+" className="inline h-5" />
                            </a>
                        </li>
                    </ul>
                </div>   
            </div>
        </>
    );
};

export default Header;
