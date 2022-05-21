import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, "PP");
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentid: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Your booking is set at ${formatedDate} on ${slot}`)
                } else {
                    toast.error(`You already booked appointment on ${data.booking.date} at ${data.booking.slot}`)
                }
                refetch()
                // to close the modal 
                setTreatment(null)

            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg">Booking for : {name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-2 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered  w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled defaultValue={user?.displayName || ''} className="input input-bordered  w-full max-w-xs" />
                        <input type="email" name='email' disabled defaultValue={user?.email || ''} className="input input-bordered  w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Type your phone number" className="input input-bordered  w-full max-w-xs" />
                        <input type="Submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;