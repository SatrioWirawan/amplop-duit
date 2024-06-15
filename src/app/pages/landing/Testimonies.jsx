import TestimoniesCarousel from "@/components/testimony/TestimonyCarousel";

export default function Testimonies(){
    return (
        <section className="flex flex-wrap gap-4 h-fit p-4 md:p-8 lg:p-12 m-4 md:m-12 lg:m-20 rounded-xl">
            <div>
                <h2 className="text-center font-extrabold text-2xl md:text-3xl lg:text-4xl py-8 md:py-12 lg:py-16">Our Customers</h2>
            </div>
            <div>
                <TestimoniesCarousel />
            </div>
        </section>
    )
}