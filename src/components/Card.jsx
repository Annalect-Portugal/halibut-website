const Card = ({ image, title, titleColor }) => {
    // Map titleColor hex values to CSS classes
    const getColorClass = (color) => {
        switch(color) {
            case '#AECC50': return 'card-title-green';    // Muda Fraldas
            case '#DD0029': return 'card-title-red';      // Queimaduras  
            case '#F57A07': return 'card-title-orange';   // Feridas
            case '#116F77': return 'card-title-teal';     // Irritações
            case '#9A9596': return 'card-title-gray';     // Radioterapia
            case '#FAC404': return 'card-title-yellow';   // Pele Sensibilizada
            default: return 'card-title-teal';            // Default fallback
        }
    };

    return (
        <div className="sm:w-[250px] min-h-[300px] space-y-5 rounded overflow-hidden shadow-2xl flex flex-col justify-center items-center font-roboto">
            <img className="w-[50%] pt-5" src={image} alt={title} />
            <div className="px-6 py-4">
                <p 
                    className={`font-bold text-xl mb-2 text-center card-title ${getColorClass(titleColor)}`}
                >
                    {title.split('<br/>').map((part, index, array) => (
                        <span key={index}>
                            {part}
                            {index < array.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Card;