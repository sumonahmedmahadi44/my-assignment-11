import React from 'react'
import Banner from './Banner';
import ShopByCategory from '../ShopByCatergory/ShopByCategory';
import Gallery from './Gallery';
import ExtraSec1 from './ExtraSec1';
import ExtraSection2 from './ExtraSection2';
import ExtraSection from './ExtraSection';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
         <ShopByCategory></ShopByCategory>
         <ExtraSection2></ExtraSection2>
         <ExtraSection></ExtraSection>
         <ExtraSec1></ExtraSec1>
            
        </div>
    );
};

export default Home;