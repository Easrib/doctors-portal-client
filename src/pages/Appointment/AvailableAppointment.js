import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date, setDate }) => {
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://desolate-plateau-79254.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className="text-secondary text-xl text-center">Available appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service =>
                    <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>
                )}
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;