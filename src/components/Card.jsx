const Card = ({ image, title, titleColor }) => {
    return (
        <div className="sm:w-[250px] min-h-[300px] space-y-5 rounded overflow-hidden shadow-2xl flex flex-col justify-center items-center font-roboto">
            <img className="w-[50%] pt-5" src={image} alt={title} />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2 text-center" style={{color: titleColor, minHeight: '50px'}} dangerouslySetInnerHTML={{ __html: title }}></p>
            </div>
        </div>
    );
};

export default Card;