const EventBox = ({ image, name}) => {
    return (
        <div className="h-[30px] w-[27px] bg-gradient-to-r from-cyan-500 to-blue-500 top-2 right-2 rouned-[7px] flex justify-center items-center">
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default EventBox