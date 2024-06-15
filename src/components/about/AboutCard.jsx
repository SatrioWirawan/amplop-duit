import Image from 'next/image';
import { services } from "@/helpers/services";

export default function AboutCard() {
    return (
        <div className="flex flex-wrap gap-6 justify-center p-4">
            {services.map((service) => (
                <div key={service.title} className="card bg-white rounded-xl shadow-lg w-full sm:w-80">
                    <figure className="rounded-t-xl w-full h-48 relative">
                        <Image 
                            src={service.photo}
                            alt={service.title} 
                            layout="fill" 
                            objectFit="cover" 
                            className="rounded-t-xl"
                        />
                    </figure>
                    <div className="card-body text-center p-6">
                        <h2 className="font-bold text-xl mb-2">{service.title}</h2>
                        <p className="text-gray-600 font-medium">{service.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
