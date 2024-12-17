/* import post8 from '../../assets/artigos/8.png'; */

const artigo8 = {
    categoria: "Cuidar do Bebé",
    imagem: '/artigos/8.png',
    titulo: "Recomendações na muda de fralda do bebé",
    data: "18 Setembro 2024",
    preview: "A pele dos bebés é frágil, e a zona da fralda é propensa a reações inflamatórias. A APEO recomenda cuidados preventivos na muda de fralda para evitar irritações.",
    conteudo: `
        <div className="sm:container max-w-[90%] mx-auto">
            <p className="text-lg mb-4">
                A pele dos bebés apresenta uma menor elasticidade tornando-se mais frágil e por isso é fundamental preservar a sua integridade.
            </p>
            <p className="text-lg mb-4">
                Sabemos que a zona da fralda é propensa a reações inflamatórias que podem provocar uma desordem cutânea comum, designada por dermatite da fralda.
            </p>
            <p className="text-lg mb-4">
                Esta desordem resulta numa combinação de fatores, sendo pelo menos dois deles prevenidos com cuidados específicos na muda de fralda: humidade prolongada e o contacto prolongado das fezes e da urina.
            </p>

            <p className="text-lg font-semibold mb-4">
                Assim a APEO recomenda como medidas preventivas:
            </p>

            <div className="">
                <ul className="list-disc list-inside space-y-3 pl-5 mb-4">
                    <li>Limitar o contacto das fezes e urina com a pele do bebé – troca frequente da fralda.</li>
                    <li>A limpeza da pele deve ser suave e sem fricção.</li>
                    <li>Utilize água morna na limpeza e produtos dermatologicamente testados.</li>
                    <li>No final, prima por deixar a pele do rabinho do bebé bem seca sem friccionar (mesmo após a limpeza com toalhitas, seque a pele no final com compressas macias).</li>
                    <li>No caso de irritação da pele, aplicar creme protetor/reparador.</li>
                    <li>E por último, não aperte demasiado a fralda, permitindo à pele respirar.</li>
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

export default artigo8;
