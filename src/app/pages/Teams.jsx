import TeamCard from "@/components/team/TeamCard"

export default function TeamsPage(){
    return (
        <main>
            <h1 className="text-5xl text-center font-extrabold m-20">The Team</h1>
            <section>
                <TeamCard/>
            </section>
        </main>
    )
}