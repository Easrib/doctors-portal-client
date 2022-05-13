import React from 'react';

const Servicecard = ({ service }) => {

    const { img, description, name } = service
    return (
        <div class="card w-60 md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Servicecard;