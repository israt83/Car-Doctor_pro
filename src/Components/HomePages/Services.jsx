import React from 'react';
import ServicesCards from '../Cards/ServicesCards';
import {services} from '../../lib/Services'

const Services = () => {
    console.log()
    return (
        <div className="mt-10">
        <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
            <h2 className="text-5xl font-bold ">Our Service Area</h2>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {
                services.map((service) =><ServicesCards key={service.service_id} service={service}></ServicesCards>)
            }
        </div>
    </div>
    );
};

export default Services;