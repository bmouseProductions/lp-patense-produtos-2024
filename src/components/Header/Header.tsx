import banner from '../../assets/images/banner.svg'

export default function Header(){
    return (
        <div className="bg-[#f75d15] bg-blend-darken">
            <div className="flex flex-col-reverse md:flex-row md:gap-5">
                {/* BANNER */}
                <div className="flex md:w-[45%] ">
                    <div className="z-20">
                        <img src={banner} className='rounded-[30px] md:rounded-none ' alt="" />
                    </div>

                </div>

                <div className="w-full md:w-2/3 min-h-[300px] flex flex-col px-5 md:px-0">
                    <div className=" h-full overflow-hidden relative flex flex-col items-start gap-5 ">
                        {/* FAIXA ESCURA */}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/472477cb9ceb3ecdb02981483af55aaf99ce245d219b962c267e1a56807891f4?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                            className="z-0 object-cover absolute inset-0 size-full max-h-[775px] "
                        />

                        <div className='z-20 mt-10 mb-5 w-full flex justify-center'>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4af7a588a0df697518210e21bbc7d420733cb6bcbb2f5fd9e1282181f016d54a?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                                className=" md:hidden shrink-0 self-stretch max-w-full aspect-[2.94] w-[150px] "
                            />
                        </div>
                        

                        <div className="z-20 lg:pt-10 xl:pt-20 md:px-5 h-full flex flex-col gap-5 text-justify text-white ">
                            <h1 className='w-full text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold'>
                                HÁ 53 ANOS
                                <br />
                                PROMOVENDO A
                                <br /> SUSTENTABILIDADE
                            </h1>

                            <p className='max-w-[500px] text-base md:text-lg '>
                                <strong>Sustentabilidade</strong> é mais que compromisso para nós: é a essência desta atividade e nossa grande inspiraçao.
                            </p>
                        </div>

                        <div className="z-20 pb-10 md:absolute md:bottom-0 lg::bottom-[10%] w-full flex justify-center md:justify-around">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4af7a588a0df697518210e21bbc7d420733cb6bcbb2f5fd9e1282181f016d54a?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                                className="hidden md:block shrink-0 self-stretch max-w-full aspect-[2.94] w-[113px]"
                            />
                            <div className="shrink-0 self-stretch my-auto max-w-full bg-zinc-300 h-[3px] rounded-[55px] md:w-[100px] lg:w-[280px] xl:w-[454px]" />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/022981059a9a6e643db5981023cbc9fd11d913fb44ad3a904103618b740ff7bd?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                                className="shrink-0 self-stretch my-auto max-w-full aspect-[5.56] w-[168px]"
                            />  
                        </div>
                       
                    </div>
                </div>
            </div>
            
            <div className='hidden md:block w-full h-[50px] bg-[#106037] '/>
        </div>
    )
}