import React from 'react';

const Gallery = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center font-extrabold text-4xl p-2 text-red-500 border border-slate-900 border-spacing-2 bg-pink-200 rounded-2xl'>Gallery Section !!!</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-10'>
            <img className='h-full hover:p-5 hover:animate-spin duration-200 delay-150 ' src="https://img.freepik.com/premium-photo/funny-illustrated-car-painted-rainbow-colors_183364-23794.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
            <img className='h-full hover:p-5 hover:animate-ping duration-200 delay-150 ' src="https://img.freepik.com/free-vector/toys-illustrations-vectors_23-2147500929.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
            <img className='h-full hover:p-5 hover:animate-bounce duration-200 delay-150 ' src="https://img.freepik.com/premium-vector/sticker-design-with-tricycle-other-toys_1308-4215.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
            <img className='h-full hover:p-5 hover:animate-ping duration-200 delay-150 ' src="https://img.freepik.com/free-vector/children-repairing-car-together_1308-77962.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
            <img className='h-full hover:p-5 hover:animate-spin duration-200 delay-150 ' src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
            <img className='h-full hover:p-5 hover:animate-ping duration-200 delay-150 ' src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8180.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
            <img className='h-full hover:p-5 hover:animate-bounce duration-200 delay-150 ' src="https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
            <img className='h-full hover:p-5 hover:animate-ping duration-200 delay-150 ' src="https://img.freepik.com/free-vector/frame-template-with-toys-red-wagon_1308-8466.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" alt="" />
        </div>
        </div>
    );
};

export default Gallery;