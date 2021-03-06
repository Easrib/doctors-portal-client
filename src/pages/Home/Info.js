import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
// import Infocard from './Infocard';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary text-white shadow-xl px-4">
                <figure className='pt-4'><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-accent text-white shadow-xl px-4">
                <figure className='pt-4'><img src={marker} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary text-white shadow-xl px-4">
                <figure className='pt-4'><img src={phone} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;