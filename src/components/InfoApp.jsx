const InfoApp = () => {
    return (
        <div className='bg-zinc-500 shadow-lg w-[500px] h-[150px] rounded-xl m-auto relative px-6 top-[10%] flex flex-col items-center justify-center'>
            <div className='text-xl font-bold text-white animate-rightLeft'>
                Please enter a location to view the weather
            </div>
            <div className='text-gray absolute bottom-1'>© 2023 Nguyen Duc Huy</div>
        </div>
    );
};

export default InfoApp;
