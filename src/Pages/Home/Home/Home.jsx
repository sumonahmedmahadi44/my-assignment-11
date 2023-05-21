import React from 'react'
import Banner from './Banner';
import ShopByCategory from '../ShopByCatergory/ShopByCategory';
import Gallery from './Gallery';
import ExtraSec1 from './ExtraSec1';
import ExtraSection2 from './ExtraSection2';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
         <ShopByCategory></ShopByCategory>
         <ExtraSec1></ExtraSec1>
         <ExtraSection2></ExtraSection2>
            
        </div>
    );
};

export default Home;