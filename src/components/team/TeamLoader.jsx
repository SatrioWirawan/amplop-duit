const jobTitles = [
    "Founder & CEO",
    "Head of Educational Programs",
    "Financial Consultant",
    "Product Manager",
    "Operations Manager",
    "Sales Manager",
    "Software Engineer",
    "UX Designer",
    "Data Scientist",
    "Financial Analyst",
    "Marketing Specialist",
    "Graphic Designer",
    "Human Resources",
];

export async function fetchUserWithJob() {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${jobTitles.length}&nat=AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, NL, NZ, US`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (!data.results || data.results.length === 0) {
            throw new Error('No user data found');
        }

        const userWithJob = data.results.map((user, index) => ({
            name: `${user.name.first} ${user.name.last}`,
            age: user.dob.age,
            photo: user.picture.large,
            occupation: jobTitles[index],
            email: user.email
        }));

        // console.log(userWithJob);
        return userWithJob
    } catch (error){
        console.error('Error fetching user data:', error);
    }
}