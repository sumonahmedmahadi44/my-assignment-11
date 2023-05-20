import React from 'react'
import Banner from './Banner';
import ShopByCategory from '../ShopByCatergory/ShopByCategory';
import Gallery from './Gallery';
import ExtraSec1 from './ExtraSec1';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
         <ShopByCategory></ShopByCategory>
         <ExtraSec1></ExtraSec1>
            
        </div>
    );
};

export default Home;