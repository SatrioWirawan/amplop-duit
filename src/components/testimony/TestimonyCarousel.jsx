import Image from "next/image";

import { contentfulClient } from "@/helpers/contentful-client";
import TestimonyCard from "./TestimonyCard";

async function getTestimonies() {
    try{
        const client = contentfulClient();
        const res = await client.getEntries({ content_type: 'amplopDuit' });
        return res.items;
    } catch (error) {
        console.error(error);
    }
};


export default async function TestimoniesCarousel(){

    const testimony = await getTestimonies();
    
    return (
        <div className="carousel carousel-center rounded-box flex flex-wrap gap-6 justify-center">
            {testimony.map((testi) => {
                return (
                    <div key={testi.sys.id} className="carousel-item">
                        <TestimonyCard testi={testi}/>
                    </div> 
                ) 
            })}
        </div>
    ) 
}