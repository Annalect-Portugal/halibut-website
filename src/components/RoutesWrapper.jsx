import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Lazy load components
const Home = lazy(() => import('../pages/Home'));
const Error404 = lazy(() => import('../pages/Error404'));
const Produtos = lazy(() => import('../pages/Produtos'));
const SaibaMais = lazy(() => import('../pages/SaibaMais'));
const Fraldas = lazy(() => import('../pages/Fraldas'));
const Queimaduras = lazy(() => import('../pages/Queimaduras'));
const Feridas = lazy(() => import('../pages/Feridas'));
const Irritacoes = lazy(() => import('../pages/Irritacoes'));
const Radioterapia = lazy(() => import('../pages/Radioterapia'));
const PeleSensibilizada = lazy(() => import('../pages/PeleSensibilizada'));
const FraldasLinimento = lazy(() => import('../pages/FraldasLinimento'));
const FraldasProtetor = lazy(() => import('../pages/FraldasProtetor'));
const FraldasReparadora = lazy(() => import('../pages/FraldasReparadora'));
const FraldasRegeneradora = lazy(() => import('../pages/FraldasRegeneradora'));
const QueimadurasProduct = lazy(() => import('../pages/QueimadurasProduct'));
const PomadaOriginal = lazy(() => import('../pages/PomadaOriginal'));
const Cookies = lazy(() => import('../pages/Cookies'));
const Privacidade = lazy(() => import('../pages/Privacidade'));
const Termos = lazy(() => import('../pages/Termos'));
const PeleSensivelDermaPlus = lazy(() => import('../pages/PeleSensivelDermaPlus'));
const Artigo = lazy(() => import('../pages/Artigo'));
const Categoria = lazy(() => import('../pages/Categoria'));

import { data as artigosData } from '../pages/artigos'

function RoutesWrapper() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const MotionWrapper = ({ children }) => (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/produtos" element={<MotionWrapper><Produtos /></MotionWrapper>} />
        <Route path="/blog" element={<MotionWrapper><SaibaMais /></MotionWrapper>} />
        <Route path="/muda-fraldas" element={<MotionWrapper><Fraldas /></MotionWrapper>} />
        <Route path="/linimento" element={<MotionWrapper><FraldasLinimento /></MotionWrapper>} />
        <Route path="/creme-protetor" element={<MotionWrapper><FraldasProtetor /></MotionWrapper>} />
        <Route path="/pomada-reparadora" element={<MotionWrapper><FraldasReparadora /></MotionWrapper>} />
        <Route path="/pomada-regeneradora" element={<MotionWrapper><FraldasRegeneradora /></MotionWrapper>} />
        <Route path="/queimaduras" element={<MotionWrapper><Queimaduras /></MotionWrapper>} />
        <Route path="/halibutqueimaduras" element={<MotionWrapper><QueimadurasProduct /></MotionWrapper>} />
        <Route path="/feridas" element={<MotionWrapper><Feridas /></MotionWrapper>} />
        <Route path="/pomadaoriginal" element={<MotionWrapper><PomadaOriginal /></MotionWrapper>} />
        <Route path="/irritacoes" element={<MotionWrapper><Irritacoes /></MotionWrapper>} />
        <Route path="/radioterapia" element={<MotionWrapper><Radioterapia /></MotionWrapper>} />
        <Route path="/pele-sensibilizada" element={<MotionWrapper><PeleSensibilizada /></MotionWrapper>} />
        <Route path="/dermaplus" element={<MotionWrapper><PeleSensivelDermaPlus /></MotionWrapper>} />
        <Route path="/politica-de-cookies" element={<MotionWrapper><Cookies /></MotionWrapper>} />
        <Route path="/politica-de-privacidade" element={<MotionWrapper><Privacidade /></MotionWrapper>} />
        <Route path="/termos-e-condicoes" element={<MotionWrapper><Termos /></MotionWrapper>} />
        <Route path="*" element={<MotionWrapper><Error404 /></MotionWrapper>} />
        <Route path="/artigo/:slug" element={<MotionWrapper><Artigo artigos={artigosData}/></MotionWrapper>} />
        <Route path="/categoria/:categoriaSlug" element={<MotionWrapper><Categoria /></MotionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesWrapper;