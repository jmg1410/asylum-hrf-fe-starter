import paperStack from '../../assets/paper-stack.jpg'

export default function InfoSection () {
    return (
        <section className='bg-white text-gray-800 py-10 px-6 md:px-20'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto'>
                <img src={paperStack} alt='paper stack' className='rounded-lg w-[300px] md:w-[350px]' />
                <p className='text-lg leading-relaxed text-center md:text-left max-w-xl'>
                    <span className='font-semibold'>Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</span>
                </p>
                
            </div>
        </section>
    )
}