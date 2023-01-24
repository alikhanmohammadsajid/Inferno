import React from 'react';
import brand1 from '../images/image_2023_01_12T18_44_19_143Z 1.png'
import brand2 from '../images/image_2023_01_12T18_45_27_236Z 1.png'
import brand3 from '../images/image_2023_01_12T18_46_19_997Z 1.png'
import brand4 from '../images/image_2023_01_12T18_47_09_805Z 1.png'
import brand5 from '../images/image_2023_01_12T18_47_51_388Z 1.png'

const Brand = () => {
    return (
        <div className='container text-center mt-5 mb-5'>
            <h1 className='text-danger'>Brand Partners</h1>
            <div >
                <img className='m-5' src={brand1} alt="" />
                <img className='m-5' src={brand2} alt="" />
                <img className='m-5' src={brand3} alt="" />
                <img className='m-5' src={brand4} alt="" />
                <img className='m-5' src={brand5} alt="" />
            </div>
        </div>
    );
};

export default Brand;