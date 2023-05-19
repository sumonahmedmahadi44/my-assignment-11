import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allToy/${subCategory}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, []);
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>{subCategory}</Tab>
      <Tab>{subCategory}</Tab>
      <Tab>{subCategory}</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopByCategory;