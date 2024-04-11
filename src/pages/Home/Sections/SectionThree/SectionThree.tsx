import iconAnimais from '../../../../assets/images/SectionThree/icons-animais.webp'
import vaca from '../../../../assets/images/SectionThree/vaca.webp'
import porco from '../../../../assets/images/SectionThree/porco.webp'
import galinha from '../../../../assets/images/SectionThree/galinha.webp'
import peixe from '../../../../assets/images/SectionThree/peixe.webp'

export default function SectionThree() {
    return (
        <section className="bg-[#f7ede2] py-20">
            <div className='container mx-auto px-5 md:px-10 flex flex-col gap-10'>
                <img src={iconAnimais} className='w-[200px] mx-auto' alt="" />
                <h1 className='text-2xl md:text-5xl lg:text-7xl text-center uppercase font-extrabold text-[#ff5d15] '>
                    RECICLAMOS RESíDUOS DE
                    BOVINOS, SUíNOS, AVES E PESCADOS
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center'>
                    <div className='w-full flex justify-end'>
                        <img src={vaca} className=' ' alt="" />
                    </div>

                    <div className='w-full flex justify-start'>
                        <img src={porco} className=' ' alt="" />
                    </div>

                    <div className='w-full flex justify-end'>
                        <img src={galinha} className=' ' alt="" />
                    </div>

                    <div className='w-full flex justify-start'>
                        <img src={peixe} className=' ' alt="" />
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </section>
    )
}