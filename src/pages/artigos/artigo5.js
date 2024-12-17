/* import post5 from '../../assets/artigos/5.png'; */

const artigo5 = {
    categoria: "Saúde do Bebé",
    imagem: '/artigos/5.png',
    titulo: "O sono do bebé é fundamental para a sua saúde",
    data: "18 Setembro 2024",
    preview: "O sono é essencial para o desenvolvimento físico, mental e intelectual do bebé. A APEO recomenda boas práticas para promover um sono de qualidade.",
    conteudo: `
        <div className="sm:container max-w-[90%] mx-auto">
            <p className="text-lg mb-4">
                O sono do bebé é um foco de atenção dos pais e é um tema que gera alguma controvérsia e informações contraditórias.
            </p>
            <p className="text-lg mb-4">
                O sono é uma alteração de consciência, complementar ao estado de vigília, mas durante o qual existe uma intensa atividade cerebral, fundamental para o normal desenvolvimento físico, mental e intelectual da criança.
            </p>
            <p className="text-lg font-semibold mb-4">
                O sono de boa qualidade é muito importante porque contribui para:
            </p>

            <div className="">
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li>Promover o desenvolvimento cerebral</li>
                    <li>Promover o crescimento estato-ponderal</li>
                    <li>Estabilizar o humor</li>
                    <li>Aumentar a capacidade de atenção, memória e aprendizagem</li>
                    <li>Controlar o apetite e peso</li>
                    <li>Estimular o sistema imunitário</li>
                    <li>Regular a temperatura corporal</li>
                </ul>
                <br>
                <p className="text-lg font-semibold mb-4">
                    Consequências de um sono de má qualidade:
                </p>

                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li>Alterações do comportamento (agitação, birras, choro fácil)</li>
                    <li>Alterações do sistema imunitário e metabólico (maior risco de obesidade, diabetes, hipertensão e infeções)</li>
                    <li>Dificuldades na aprendizagem (menos atenção e memória)</li>
                    <li>Mais riscos de acidentes e quedas ao final do dia</li>
                    <li>Mais sonolência diurna</li>
                </ul>
                <br>
                <p className="text-lg font-semibold mb-4">
                    A APEO recomenda práticas para um sono de qualidade:
                </p>

                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li>Horários regulares de deitar e acordar, mesmo ao fim de semana!</li>
                    <li>Promover pequenas sestas ao longo do dia, evitando sestas tardias (depois das 16-17 horas)</li>
                    <li>Respeitar o sono do bebé: evitar luzes, barulhos fortes ou movimentar o bebé durante as sestas. Onde o bebé adormece, deveria ser idealmente o local onde ele permaneceria durante toda a sua sesta.</li>
                    <li>Realizar atividades pouco estimulantes a partir de 1/2h antes de dormir</li>
                    <li>Promover o gosto da criança pelo sono</li>
                    <li>Proteger o bebé de ecrãs de televisão, telemóveis ou tablets pelo menos 1h antes de deitar.</li>
                </ul>
                <br>
                <p className="italic text-lg my-4">
                    Estamos contigo! Acreditamos que uma parentalidade informada é o caminho para mães, pais e bebés felizes!
                </p>

                <p className="text-lg font-bold text-blue-600">#APEO #mãosdeconfiança</p>
            </div>
        </div>
    `
};

export default artigo5;
