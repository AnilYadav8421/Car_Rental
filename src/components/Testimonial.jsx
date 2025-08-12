import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Testimonial = () => {
    const Testimonial = [
        {
            image: assets.testimonial_image_1,
            name: 'John D.',
            testimonial: 'I have rented my car to many rental companies but the experiance with carRental was exceptional',
            rating: 4,
            location: 'Barcelona, Spain,'
        },
        {
            image: assets.testimonial_image_2,
            name: 'Jane S.',
            testimonial: 'carRental was really good.',
            rating: 5,
            location: 'NewYork, USA',
        },
        {
            image: assets.testimonial_image_1,
            name: 'David Lee',
            testimonial: 'I have rented my car to many rental companies but the experiance with carRental was exceptional',
            rating: 4,
            location: 'Australia',
        },
    ]
    return (

        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

            <Title title={'Whats our customer say.'} subTitle={'Discover why desciring traveller choose StayVenture for their luxury accomendation around the world.'} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {Testimonial.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 ">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial