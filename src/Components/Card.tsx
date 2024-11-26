const Card = ({ children }: { children: React.ReactNode }) => {
    return <div className="p-24 m-3 border-2 flex justify-center items-center shadow-xl rounded-md">{children}</div>
};

export default Card;
