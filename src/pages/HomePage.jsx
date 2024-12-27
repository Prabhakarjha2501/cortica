import React from 'react';
import ColorSubmit from '../component/ColorSubmit';
//import FetchColor from '../component/FetchColor';

const HomePage = () => {
    return (
        <div>
            <h1>Select a Color</h1>
            <ColorSubmit />
            {/* <FetchColor/> */}
        </div>
    );
};

export default HomePage;