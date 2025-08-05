import React from 'react'
import error404 from '../assets/404error.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Error404 = () => {
  return (
    <>
    <Helmet>
      <title>Erro 404 - Halibut</title>
    </Helmet>
    <div className='pb-8 pt-6'>
      <div className="container mx-auto flex flex-col justify-center items-center font-robotobold text-accent">
        <img src={error404} className='w-[130px]' alt="" />
        <h1 className='text-2xl mb-5'>Essa página não foi encontrada</h1>
        <Link to={'/'}>
          <button className='px-5 bg-primary text-white py-1 rounded-lg'>Voltar ao início</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Error404