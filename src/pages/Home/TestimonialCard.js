import React from 'react';

const TestimonialCard = ({ testimonial }) => {

    const { img, name, town } = testimonial;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo aut quod provident explicabo unde at aspernatur et, qui sint.</p>
                <div className="flex items-center ">
                    <div>
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{town}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;