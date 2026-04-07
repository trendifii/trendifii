import Link from 'next/link'
import Image from 'next/image'

const members = [
    {
        name: 'Pawan Mukesh Badsewal',
        role: 'Team Lead',
        avatar: '/team/team_pawan.png',
        link: '#',
    },
    {
        name: 'Amit Kalwar',
        role: 'AI Engineering',
        avatar: '/team/team_amit.png',
        link: '#',
    },
    {
        name: 'Suman Manva',
        role: 'Public Relation/Marketing',
        avatar: '/team/team_suman.png',
        link: '#',
    },
    {
        name: 'Wee Yee Lau',
        role: 'Quality & Compliance Analyst',
        avatar: '/team/team_amy.jpeg',
        link: '#',
    },
    {
        name: 'Adekunle Abubakar Adewole',
        role: 'AI Engineering',
        avatar: '/team/team_ade.png',
        link: '#',
    },
    {
        name: 'Jibin Lawrance Valliamthadathil',
        role: 'Web Engineer',
        avatar: '/team/team_jibin.png',
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50 py-25 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="gap-4 sm:grid sm:grid-cols-2">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>Trust infrastructure requires data science, security, and compliance. Our team’s competencies map directly to the core risks.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <Image
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt="team member"
                                    width="826"
                                    height="1239"
                                    sizes="(max-width: 768px) 100vw, 280px"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                            href={member.link}
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Trendifii
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
