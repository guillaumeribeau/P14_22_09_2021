import React from 'react';
import Header from '../components/Header';
import Forms from '../components/FormsEmployee.jsx';

const Home = () => {
    return (
        <div className='container_home'>
          <Header/>
          <Forms/>
        </div>
    );
};

export default Home;