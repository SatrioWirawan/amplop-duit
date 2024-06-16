import Image from "next/image";
import { achievement } from "@/helpers/achievement";

export default function AchievementCard(){
    return (
        <div className="flex flex-wrap gap-6 justify-center p-4">
            {achievement.map((achievement) => (
                <div key={achievement.title} className="card bg-white rounded-xl shadow-lg w-full sm:w-80">
                    <figure className="rounded-t-xl w-full h-48 relative">
                        <Image 
                            src={achievement.photo}
                            alt={achievement.title} 
                            layout="fill" 
                            objectFit="cover" 
                            className="rounded-t-xl"
                        />
                    </figure>
                    <div className="card-body text-center p-6">
                        <h2 className="font-bold text-xl mb-2">{achievement.title}</h2>
                        <p className="text-gray-600 font-medium">{achievement.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}