import React from 'react';
import Servicecard from './Servicecard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'lorem',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'lorem',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'lorem',
            img: whitening
        }
    ]
    return (
        <div className='mt-4'>
            <h4 className='text-primary text-center font-bold text-xl'>Our Services</h4>
            <h2 className='text-center text-4xl'>Services We Provide</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    services.map(service => <Servicecard
                        key={service._id}
                        service={service}
                    ></Servicecard>)
                }
            </div>
        </div >
    );
};

export default Services;