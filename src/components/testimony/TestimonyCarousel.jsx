'use client'

import React, { useEffect, useState } from 'react';
import { contentfulClient } from "@/helpers/contentful-client";
import TestimonyCard from "./TestimonyCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

async function getTestimonies() {
    try {
        const client = contentfulClient();
        const res = await client.getEntries({ content_type: 'amplopDuit' });
        return res.items;
    } catch (error) {
        console.error('Error fetching testimonies:', error);
        return [];
    }
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1366 },
        items: 4,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1366, min: 1024 },
        items: 3,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 732 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 732, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const TestimoniesCarousel = (props) => {
    const [testimonies, setTestimonies] = useState([]);

    useEffect(() => {
        const fetchTestimonies = async () => {
            const fetchedTestimonies = await getTestimonies();
            console.log('Fetched Testimonies:', fetchedTestimonies);
            setTestimonies(fetchedTestimonies);
        };

        fetchTestimonies();
    }, []);

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={props.deviceType !== "mobile"}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {testimonies.map((testi) => (
                    <div key={testi.sys.id}>
                        <TestimonyCard testi={testi} />
                    </div>
                ))
            }
        </Carousel>
    );
};

export default TestimoniesCarousel;
