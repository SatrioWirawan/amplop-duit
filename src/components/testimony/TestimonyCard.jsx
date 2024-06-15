import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function TestimonyCard({testi}) {
    const {name, age, photo, occupation, testimony, rating} = testi.fields;

    return (
        <div className="min-w-[320px] max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <Image 
                className="w-full h-56 object-cover object-center bg-white" 
                src={`https:${photo.fields.file.url}`}
                width={photo.fields.file.details.image.width}
                height={photo.fields.file.details.image.height} 
                alt="avatar"
            />
            <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-gray-800">{name}, {age}</h1>
                <p className="py-2 text-lg text-gray-700">{occupation}</p>
                <div className="flex items-center mt-4 text-gray-700">
                    <h1 className="text-sm">
                        {documentToReactComponents(testimony)}
                    </h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                    {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                            key={index}
                            className="text-orange-400"
                            size={24}
                            color={index < rating ? "#FFA500" : "#E5E7EB"}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
