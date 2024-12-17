/* import post13 from '../../assets/artigos/13.png'; */

const artigo13 = {
    categoria: "Conforto e segurança",
    imagem: '/artigos/13.png',
    titulo: "O que é uma Unidade de Saúde Amiga dos Bebés?",
    data: "18 Setembro 2024",
    preview: "A Iniciativa Amiga dos Bebés, criada pela OMS e UNICEF, visa promover o aleitamento materno em instituições de saúde. Descubra as sete medidas que uma unidade precisa seguir para ser certificada.",
    conteudo: `
        <div className="sm:container max-w-[90%] mx-auto">
            <p className="text-lg mb-4">
                A Iniciativa Amiga dos Bebés foi criada pela OMS e a UNICEF, com a missão de proteger, promover e apoiar o aleitamento materno em instituições de saúde com serviços de maternidade, obstetrícia, neonatologia e pediatria.
            </p>

            <p className="text-lg font-semibold mb-4">
                Para uma unidade ser certificada como “Unidade Amiga dos Bebés” deve garantir o cumprimento de sete medidas:
            </p>

            <div className="">
                <ul className="list-decimal list-inside space-y-3 pl-5 mb-4">
                    <li>Ter uma política de aleitamento materno, escrita e afixada, para ser transmitida a toda a equipa de cuidados de saúde.</li>
                    <li>Dar formação a toda a equipa para que implemente essa política.</li>
                    <li>Informar todas as grávidas e suas famílias sobre as vantagens e a prática do aleitamento materno.</li>
                    <li>Apoiar as mães a estabelecerem e manterem o aleitamento materno exclusivo até aos 6 meses.</li>
                    <li>Encorajar o aleitamento materno após os 6 meses, e até aos dois anos ou mais, conjuntamente com a introdução de alimentação complementar apropriada, adequada e segura.</li>
                    <li>Providenciar um ambiente acolhedor que favoreça a prática do aleitamento materno.</li>
                    <li>Promover a colaboração entre a equipa de saúde, grupos de apoio ao aleitamento materno e a comunidade local.</li>
                </ul>
                <br>
                <p className="text-lg mb-4">
                    Uma Unidade de Saúde Amiga dos Bebés tem também que cumprir o Código Internacional de Marketing de Substitutos do Leite Materno (saiba mais sobre o código <a href="https://www.unicef.pt/o-que-fazemos/o-nosso-trabalho-em-portugal/iniciativa-amiga-dos-bebes/codigo-internacional-de-marketing-do-substituto-do-leite-materno/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">aqui</a>).
                </p>

                <p className="italic text-lg my-4">
                    Estamos contigo! Acreditamos que uma parentalidade informada é o caminho para mães, pais e bebés felizes!
                </p>

                <p className="text-lg font-bold text-blue-600">#APEO #mãosdeconfiança</p>

                <p className="text-lg font-semibold mb-4">Referências:</p>
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li><a href="https://www.unicef.pt/media/2179/7-medidas-unidade-amiga-dos-bebes-fev-2012.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Folheto da UNICEF “Sete Medidas para ser Considerada Unidade de Saúde Amiga dos Bebés”</a></li>
                </ul>
            </div>
        </div>
    `
};

export default artigo13;
