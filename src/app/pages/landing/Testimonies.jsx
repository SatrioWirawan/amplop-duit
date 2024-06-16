import TestimoniesCarousel from "@/components/testimony/TestimonyCarousel";

export default function Testimonies(){
    return (
        <section className="h-fit p-4 md:p-8 lg:p-12 m-4 md:m-12 lg:m-20 rounded-xl">
            <div className="w-full text-center">
                <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl py-8 md:py-12 lg:py-16">Our Customers</h2>
            </div>
            <TestimoniesCarousel />
        </section>
    )
}