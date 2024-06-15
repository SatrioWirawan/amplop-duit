'use client'

import { useEffect, useState } from 'react';
import { fetchUserWithJob } from './TeamLoader';
import Image from 'next/image';

export default function TeamCard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const fetchedUsers = await fetchUserWithJob();
            setUsers(fetchedUsers);
        }
        getUsers();
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {users.map((user, index) => (
                    <div key={index} className="bg-white overflow-hidden">
                        <div className="flex justify-center mt-4">
                            <Image src={user.photo} alt={user.name} 
                                width={160}
                                height={160} 
                                className="w-32 h-32 object-cover rounded-full border-2 border-gray-200" 
                            />
                        </div>
                        <div className="text-center p-4">
                            <h2 className="text-xl font-semibold text-blue-500">{user.name}</h2>
                            <p className="text-gray-800">{user.occupation}</p>
                            <p className='text-gray-800'>{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}