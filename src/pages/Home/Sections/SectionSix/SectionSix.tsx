import caminhao1 from '../../../../assets/images/SectionSix/caminhao1.webp'
import caminhao2 from '../../../../assets/images/SectionSix/caminhao2.webp'
import caminhao3 from '../../../../assets/images/SectionSix/caminhao3.webp'
import caminhao4 from '../../../../assets/images/SectionSix/caminhao4.webp'

export default function SectionSix(){
    return (
        <section className='py-20'>
            <div className='container px-5 md:px-10 mx-auto'>
                <div className='mx-auto'>
                    <h1 className='text-2xl md:text-5xl lg:text-7xl text-center uppercase font-extrabold text-[#106037] '>
                        MAIS DE <span className='text-[#ff5d15] '>500 VEÍCULOS</span> PRÓPRIOS
                        PARA UMA LOGíSTlCA PRECISA
                    </h1>
                    <div className="mx-auto my-7 px-4 lg:px-2 py-4 max-w-[600px] 2xl:max-w-[700px]  rounded-[30px] ">
                        <p className='mx-auto 2xl:max-w-[600px] text-center'>
                            Nossa frota embarca tecnologia, profissionais especializados e responsabilidade antes mesmo de
                            coletar as matérias-primas.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-5 '>
                    <img src={caminhao1} className=' lg:w-[600px] lg:h-[600px] ' alt="" />
                    <div className='flex flex-col gap-5'>
                        <img src={caminhao2} className='lg:w-[280px] ' alt="" />
                        <img src={caminhao3} className='lg:w-[280px] ' alt="" />
                        <img src={caminhao4} className='lg:w-[280px] ' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}