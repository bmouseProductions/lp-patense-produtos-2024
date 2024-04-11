import clenio from '../../../../assets/images/SectionTwo/clenio.webp'

export default function SectionTwo() {
    return (
        <section className="bg-green py-[100px] md:py-[150px] ">
            <div className='relative z-20 container mx-auto px-5 md:px-10 flex flex-col items-center text-white'>
                <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 xl:gap-20'>
                    <div>
                        <h2 className="lg:hidden text-center text-6xl md:text-7xl leading-[80px] font-extrabold">
                            NOSSA <br />
                            HISTÓRIA
                        </h2>

                        <img src={clenio} alt="" className='mt-[-20px] w-full max-w-[400px]  ' />
                    </div>
                    
                    <div className="flex flex-col gap-5">
                        <h2 className="hidden lg:block text-7xl leading-[80px] font-extrabold">
                            NOSSA <br />
                            HISTÓRIA
                        </h2>

                        <p className=' xl:max-w-[700px] '>
                            Fundada no ano de 1970 por Antônio Gonçalves, a empresa iniciou os seus trabalhos
                            em Patos de Minas ainda de maneira arcaica. Um simples açougueiro da cidade
                            percebeu que existia um mercado muito diferente que agregaria muito para o
                            planeta no que tange sustentabilidade e valores. Nosso projeto consiste em coletar 
                            resíduos animais, que antes eram descartados de forma incorreta no meio ambiente, 
                            e agregar valor a eles, produzindo novas matérias-primas para diversos setores da economia nacional, 
                            como óleos e farinhas.
                        </p>

                        <div>
                            <h3 className='text-xl font-bold'>
                                Clênio Antônio Gonçalves
                            </h3>

                            <p className=' xl:max-w-[700px] '>
                                Desde os seus 17 anos, após um processo de emancipação, Clênio Antônio
                                Gonçalves se tornou o responsável por gerir o Grupo Patense. Seu apetite
                                empreendedor elevou ainda mais o nome do grupo não só nacionalmente, como
                                também internacionalmente. O CEO fundou e presidiu, por 14 anos, a Associação Brasileira de Reciclagem Animal (ABRA), que foi a primeira entidade a entregar o Código de Conduta Empresarial — Compliance, aderindo ao Programa de Conformidade do Agronegócio Brasileiro.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-[50px] lg:mt-[150px] '>
                    <iframe
                        className="mx-auto w-full max-w-[1300px] h-[200px] md:h-[400px] xl:h-[620px] rounded-3xl"
                        src='https://www.youtube.com/embed/IzJNe3TiC38?si=szGTdmFLurjqEgVe'
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                </div>
            </div>
        </section>
    )
}