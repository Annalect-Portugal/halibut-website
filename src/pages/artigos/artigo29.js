/* import post29 from '../../assets/artigos/29.png'; */

const artigo29 = {
    categoria: "Saúde do Bebé",
    imagem: '/artigos/29.png',
    titulo: "Porque se oferece vitamina K a todos os recém-nascidos, nas primeiras horas após o parto?",
    data: "18 Setembro 2024",
    preview: "A administração de vitamina K aos recém-nascidos previne a doença hemorrágica, uma condição rara mas grave. Saiba mais sobre a importância da vitamina K nas primeiras horas de vida.",
    conteudo: `
        <div className="sm:container max-w-[90%] mx-auto">
            <p className="text-lg mb-4">
                A vitamina K é necessária para a coagulação no sangue. Ou seja, a deficiência de vitamina K pode levar a hemorragia. O organismo humano não sintetiza a vitamina K, nem tem a capacidade de a armazenar em grande quantidade.
            </p>

            <p className="text-lg mb-4">
                A baixa transferência desta vitamina pela placenta, a ausência de colonização por bactérias a nível intestinal e a imaturidade do fígado dos recém-nascidos justificam os baixos níveis de vitamina K aquando do nascimento. Embora os fatores de coagulação estejam presentes em valores normais, eles não estão completamente ativos. A Doença Hemorrágica do Recém-nascido, causada pela deficiência de vitamina K, é um distúrbio hemorrágico raro, mas potencialmente fatal, que pode começar de forma súbita e sem aviso.
            </p>

            <p className="text-lg mb-4">
                Para evitar este desfecho e com base nas recomendações da OMS (revistas em 2017), recomenda-se:
            </p>

            <p className="text-lg font-semibold mb-4">Recomendação forte, evidência de qualidade moderada:</p>

            <div className="">
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li>A via de administração privilegiada é a intramuscular: “Todos os recém-nascidos devem receber 1 mg de vitamina K por via intramuscular (IM) após o nascimento (ou seja, após a primeira hora em que o bebé deve estar em contacto pele a pele com a mãe e a amamentação deve ser iniciada).”</li>
                    <li>Os recém-nascidos que necessitam de procedimentos cirúrgicos, os que sofreram traumas de parto, os recém-nascidos pré-termo e os expostos no útero a medicamentos maternos que interferem com a vitamina K correm um risco especialmente elevado de hemorragia e devem receber vitamina K (1 mg IM).</li>
                    <li>A administração deve ocorrer nas primeiras horas após o nascimento.</li>
                </ul>
                <br>
                <p className="text-lg mb-4">
                    Por estes motivos, após o nascimento do seu bebé, os profissionais de saúde vão oferecer a administração de uma injeção intramuscular de vitamina K nas primeiras horas de vida.
                </p>

                <p className="italic text-lg my-4">
                    Estamos consigo! Acreditamos que uma parentalidade informada é o caminho para mães, pais e bebés felizes!
                </p>

                <p className="text-lg font-bold text-blue-600">#APEO #mãosdeconfiança</p>

                <p className="text-lg font-semibold mb-4">Referências:</p>
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li><a href="https://evidencebasedbirth.com/evidence-for-the-vitamin-k-shot-in-newborns/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Dekker R, Bertone A. Evidence on: The Vitamin K Shot in Newborns</a></li>
                    <li><a href="https://doi.org/10.1542/peds.2021-056036" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Ivan Hand, MD; Lawrence Noble, MD; Steven A. Abrams, MD. Vitamin K and the Newborn Infant</a></li>
                    <li><a href="https://doi.org/10.1186/s12887-021-02701-4" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Jullien S. Vitamin K prophylaxis in newborns</a></li>
                    <li><a href="https://apps.who.int/iris/bitstream/handle/10665/259269/WHO-MCA-17.07-eng.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">World Health Organization. WHO recommendations on newborn health</a></li>
                </ul>
            </div>
        </div>
    `
};

export default artigo29;
