/* import post23 from '../../assets/artigos/23.png'; */

const artigo23 = {
    categoria: "Cuidar do Bebé",
    imagem: '/artigos/23.png',
    titulo: "Como prevenir uma assadura no rabinho do meu bebé?",
    data: "18 Setembro 2024",
    preview: "O eritema de fralda é comum e causa desconforto ao bebé. Saiba como prevenir assaduras com os cuidados adequados recomendados pela APEO e MEDINFAR.",
    conteudo: `
        <div className="sm:container max-w-[90%] mx-auto">
            <p className="text-lg mb-4">
                O eritema de fralda ocorre pelo menos em 50% dos bebés e consiste numa desordem cutânea muito comum, sendo o seu pico de incidência dos 9 aos 12 meses de vida do bebé. Causa desconforto ao bebé, naturalmente, pelo que atuar na prevenção é essencial.
            </p>

            <p className="text-lg mb-4">
                O importante a reter é limitar o contacto das fezes e urina com a pele do seu bebé. Logo, é imperativo a troca frequente da fralda.
            </p>

            <p className="text-lg font-semibold mb-4">Outros cuidados essenciais incluem:</p>

            <div className="">
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li>Manter a pele limpa e seca, mas sem fricção.</li>
                    <li>Não utilizar produtos que contenham álcool ou fragrâncias na sua composição.</li>
                    <li>Privilegiar uma fralda com maior poder de absorção e idealmente biodegradável ou lavável. O nosso ambiente agradece ;)</li>
                    <li>Não apertar demasiado a fralda, prevenindo a fricção e o aquecimento.</li>
                    <li>Utilizar um creme protetor.</li>
                </ul>
                <br>
                <p className="italic text-lg my-4">
                    Estamos consigo! Acreditamos que uma parentalidade informada é o caminho para mães, pais e bebés felizes!
                </p>

                <p className="text-lg font-bold text-blue-600">#APEO #mãosdeconfiança</p>

                <p className="text-lg font-semibold mb-4">Referências bibliográficas:</p>
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li><a href="https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">HealthyChildren.org - Diapers and Clothing</a></li>
                    <li><a href="https://raisingchildren.net.au/newborns/health-daily-care/hygiene-keeping-clean/hygiene-daily-care" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">RaisingChildren.net.au - Hygiene and Daily Care</a></li>
                </ul>
            </div>
        </div>
    `
};

export default artigo23;
