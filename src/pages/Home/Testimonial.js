import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonials = [
        {
            _id: 1,
            feedback: "Click the button to listen on Spotiwhy app.",
            img: people1,
            name: 'Winson Herry',
            town: 'California'

        },
        {
            _id: 2,
            feedback: "Click the button to listen on Spotiwhy app.",
            img: people2,
            name: 'Andrew',
            town: 'Newyork'

        },
        {
            _id: 3,
            feedback: "Click the button to listen on Spotiwhy app.",
            img: people3,
            name: 'Richard ',
            town: 'Los Angeles'

        }
    ]
    return (
        <div className='mb-4'>
            <div className='mt-4 flex justify-between'>
                <div className='mt-6'>
                    <h3 className='text-primary font-bold text-xl'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonials.map(testimonial => <TestimonialCard
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;