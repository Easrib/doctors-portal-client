import React from 'react';
import Servicecard from './Servicecard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div class='mt-4'>
            <h4 class='text-primary text-center'>Our Services</h4>
            <h2 class='text-primary text-center'>Services We Provide</h2>
            <div class='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                <Servicecard image={fluoride} cardTitle='Fluoride Treatment'></Servicecard>
                <Servicecard image={cavity} cardTitle='Cavity Filling'></Servicecard>
                <Servicecard image={whitening} cardTitle=''></Servicecard>
            </div>
        </div >
    );
};

export default Services;