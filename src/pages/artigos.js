export const data = [
    () => import("./artigos/artigo1.js"), // Promova a segurança do seu bebé enquanto ele dorme
    () => import("./artigos/artigo2.js"), // Breast Crawl: A capacidade inata do bebé ao nascimento para rastejar em direção �  mama e começar a mamar
    () => import("./artigos/artigo3.js"), // Babywearing – Uma forma segura de transportar o bebé ao colo
    () => import("./artigos/artigo4.js"), // Garanta a segurança do bebé durante o transporte automóvel
    () => import("./artigos/artigo5.js"), // O sono do bebé é fundamental para a sua saúde
    () => import("./artigos/artigo6.js"), // Como atuar em situações de congestão nasal do bebé
    () => import("./artigos/artigo7.js"), // 4 Passos que protegem, promovem e apoiam ao aleitamento materno
    () => import("./artigos/artigo8.js"), // Recomendações na muda de fralda do bebé
    () => import("./artigos/artigo9.js"), // Promover a saúde da pele do bebé
    () => import("./artigos/artigo10.js"), // Prevenção de acidentes aquando do banho do seu bebé
    () => import("./artigos/artigo11.js"), // Conforto e segurança durante o banho do bebé
    () => import("./artigos/artigo12.js"), // Massaje regularmente o bebé
    () => import("./artigos/artigo13.js"), // O que é uma Unidade de Saúde Amiga dos Bebés?
    () => import("./artigos/artigo14.js"), // Quais os cuidados a ter com a roupa do recém-nascido?
    () => import("./artigos/artigo15.js"), // Quais os cuidados a ter com a mama durante a amamentação?
    () => import("./artigos/artigo16.js"), // Que vacinas estão recomendadas realizar na gravidez?
    () => import("./artigos/artigo17.js"), // Como cuidar das unhas do recém-nascido?
    () => import("./artigos/artigo18.js"), // Como cuidar da sua saúde mental após o parto?
    () => import("./artigos/artigo19.js"), // O que é a icterícia neonatal?
    () => import("./artigos/artigo20.js"), // Como proteger a pele dos bebés durante o verão?
    () => import("./artigos/artigo21.js"), // Partilhar a cama de forma segura com o seu bebé
    () => import("./artigos/artigo22.js"), // Como manter a temperatura corporal do meu bebé
    () => import("./artigos/artigo23.js"), // Como prevenir uma assadura no rabinho do meu bebé?
    () => import("./artigos/artigo24.js"), // Desenvolvimento Psicomotor do Recém-Nascido
    () => import("./artigos/artigo25.js"), // O que fazer em caso de engasgamento?
    () => import("./artigos/artigo26.js"), // Adaptação dos animais domésticos �  chegada de um bebé
    () => import("./artigos/artigo27.js"), // O cheiro da mãe ajuda o bebé a manter-se calmo e a conectar-se com outras pessoas
    () => import("./artigos/artigo28.js"), // Estimular o seu bebé antes de nascer, criando memórias auditivas
    () => import("./artigos/artigo29.js"), // Porque se oferece vitamina K a todos os recém-nascidos, nas primeiras horas após o parto?
    () => import("./artigos/artigo30.js"), // Promover a vinculação pai-bebé em unidades de cuidados intensivos neonatais
];

export const getArticleMetadata = async (index) => {
    if (index < 0 || index >= data.length) {
        return null;
    }
    
    const module = await data[index]();
    const article = module.default;
    return {
        categoria: article.categoria,
        titulo: article.titulo,
        preview: article.preview,
        imagem: article.imagem,
        slug: generateSlug(article.titulo),
    };
};

export const getVisibleArticles = async (startIndex, count) => {
    const visibleArticles = [];
    for (let i = startIndex; i < startIndex + count && i < data.length; i++) {
        const metadata = await getArticleMetadata(i);
        if (metadata) {
            visibleArticles.push({ ...metadata, index: i });
        }
    }
    return visibleArticles;
};

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