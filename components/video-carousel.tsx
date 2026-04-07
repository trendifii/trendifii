import { Badge } from './ui/badge'

const members = [
    {
        userName: 'Takuya Igarashi',
        userId: 'takuya_04.17',
        avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#',
        video: '/video/video_1.mp4',
        euros: '€5.20'
    },
    {
        userName: 'f3rnandohh',
        userId: 'f3rnandohh',
        avatar: 'https://images.unsplash.com/photo-1633625763717-045645e9e739?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#',
        video: '/video/video_2.mp4',
        euros: '€6.50'
    },
    {
        userName: 'Isabelle Ikpeme',
        userId: 'isabelleikpeme',
        avatar: 'https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#',
        video: '/video/video_3.mp4',
        euros: '€7.30'
    },
    {
        userName: 'Muskan Chanchlani',
        userId: 'muskanchanchlani',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#',
        video: '/video/video_4.mp4',
        euros: '€3.70'
    },
    {
        userName: 'Abishek',
        userId: 'abishekjadwani',
        avatar: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#',
        video: '/video6.mp4',
        euros: '€4.30'
    }
]

export default function VideoCarousel() {
    return (
        <section className="overflow-x-auto bg-gray-50 py-16 md:py-32 dark:bg-indigo-950 pointer-events-none no-scrollbar">
            <h2 className='max-w-2xl text-center mx-auto text-balance text-3xl max-md:font-semibold md:text-5xl'>Real people. Real experiences. Real rewards.</h2>
            <h3 className='max-w-2xl text-center mx-auto py-8'>Be part of a community earning rewards for talking about brands they genuinely love.</h3>
            <div className='flex'>
            <div className="flex gap-8 pr-8 animate-[scroll_20s_linear_infinite]">
                {members.map((member, index) => (
                    <div
                        key={`${index}_video`}
                        className="min-w-2xs rounded-2xl overflow-hidden relative"
                        // style={{ backgroundImage: `url(${member.avatar})`, backgroundSize:"cover", backgroundPosition:"center" }}
                        >
                        {/* <Image
                            className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                            src={member.avatar}
                            alt="team member"
                            width="826"
                            height="1239"
                            sizes="(max-width: 768px) 100vw, 280px"
                        /> */}
                        <Badge className='text-xl p-4 absolute left-3 top-3'>{member.euros}</Badge>
                        <video width="320" height="512" preload="none" className=' min-h-[512px] object-cover' autoPlay muted loop>
                            <source src={member.video ? member.video : "/path/to/video.mp4"} type="video/mp4" />
                            <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <div className='absolute bottom-3 left-6'>
                            <p className='font-semibold text-gray-300'>{member.userName}</p>
                            <p>@{member.userId}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div aria-hidden className="flex gap-8 pr-8 animate-[scroll_20s_linear_infinite]">
                {members.map((member, index) => (
                    <div
                        key={`${index}_video`}
                        className="min-w-2xs rounded-2xl overflow-hidden relative"
                        // style={{ backgroundImage: `url(${member.avatar})`, backgroundSize:"cover", backgroundPosition:"center" }}
                        >
                        {/* <Image
                            className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                            src={member.avatar}
                            alt="team member"
                            width="826"
                            height="1239"
                            sizes="(max-width: 768px) 100vw, 280px"
                        /> */}
                        <Badge className='text-xl p-4 absolute left-3 top-3'>{member.euros}</Badge>
                        <video width="320" height="512" preload="none" className=' min-h-[512px] object-cover' autoPlay muted loop>
                            <source src={member.video ? member.video : "/path/to/video.mp4"} type="video/mp4" />
                            <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <div className='absolute bottom-3 left-6'>
                            <p className='font-semibold text-gray-300'>{member.userName}</p>
                            <p>{member.userId}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}
