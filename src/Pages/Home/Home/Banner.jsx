import React from 'react';


const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-full">
    <img src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" className="w-full object-cover rounded-2xl " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-full">
    <img src="https://img.freepik.com/free-vector/japanese-old-drift-car_236756-439.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" className="w-full object-cover rounded-2xl " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-full">
    <img src="https://img.freepik.com/free-photo/yellow-car-with-number-70-side_1340-23401.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" className="w-full object-cover rounded-2xl " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-full">
    <img src="https://img.freepik.com/free-photo/red-black-supercar-with-word-supercar-side_1340-23413.jpg?size=626&ext=jpg&uid=R89455352&ga=GA1.2.1757331744.1680202173&semt=ais" className="w-full object-cover rounded-2xl " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;