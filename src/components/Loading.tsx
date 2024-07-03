const Loading = () => {

    return (
        <div className="relative inline-flex">
            <div className="w-16 h-16 bg-red rounded-full"></div>
            <div className="w-16 h-16 bg-red rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-16 h-16 bg-red rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    );
}

export default Loading;