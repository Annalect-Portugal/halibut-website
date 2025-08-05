/* import post20 from '../../assets/artigos/20.png'; */

const artigo20 = {
    categoria: "Cuidar do Bebé",
    imagem: '/artigos/20.png',
    titulo: "Como proteger a pele dos bebés durante o verão?",
    data: "18 Setembro 2024",
    preview: "Durante o verão, os cuidados com a pele do bebé devem ser redobrados devido �  maior exposição ao sol. A APEO recomenda dicas essenciais para proteger o seu bebé.",
    conteudo: `
        <div className="sm:container max-w-[90%] mx-auto">
            <p className="text-lg mb-4">
                Verão é sinônimo de temperaturas altas, praia e piscina para boa parte da população. Pelas características da pele do recém-nascido e pela maior exposição ao sol, reforçamos a necessidade de ter alguns cuidados com a pele do seu bebé:
            </p>

            <div className="">
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li>Evite exposição nos horários de maior incidência solar. Consulte diariamente a previsão de UVA/UVB.</li>
                    <li>Escolha roupas adequadas, frescas, com tecidos naturais, adequadas �  estação e que protejam a pele do bebé dos raios solares.</li>
                    <li>Mantenha o bebé num local fresco e �  sombra, especialmente se for um bebé com menos de 6 meses.</li>
                    <li>Não é recomendado protetor solar num bebé com menos de 6 meses. Caso não consiga proteger a pele, aplique o protetor nas zonas expostas em pequena quantidade.</li>
                    <li>Privilegie um FPS mínimo de 30 e reaplique a cada 2 horas.</li>
                    <li>Reforce a hidratação no seu bebé. Se o bebé mamar, ofereça mais mama, pois o leite materno tem a hidratação que o seu bebé precisa.</li>
                </ul>
                <br>
                <p className="italic text-lg my-4">
                    Estamos consigo! Acreditamos que uma parentalidade informada é o caminho para mães, pais e bebés felizes!
                </p>

                <p className="text-lg font-bold text-blue-600">#APEO #mãosdeconfiança</p>

                <p className="text-lg font-semibold mb-4">Referências bibliográficas:</p>
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li><a href="https://www.aad.org/public/diseases/skin-cancer/prevent/sun-babies" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Sun Protection for Babies - AAD</a></li>
                    <li><a href="http://www.spdv.pt" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Proteção Solar Infantil - SPDV</a></li>
                </ul>
            </div>
        </div>
    `
};

export default artigo20;
