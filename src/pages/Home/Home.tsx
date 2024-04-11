import Header from "../../components/Header/Header";
import SectionFive from "./Sections/SecionFive/SectionFive";
import SectionFour from "./Sections/SectionFour/SectionFour";
import SectionOne from "./Sections/SectionOne/SectionOne";
import SectionSix from "./Sections/SectionSix/SectionSix";
import SectionThree from "./Sections/SectionThree/SectionThree";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";



export default function Home() {
    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <div className="mx-auto w-[90%] h-1 bg-[#ff5d15] rounded-xl"/>
            <SectionSix />

            <footer className="py-10 text-white bg-[#ff5d15]">
                <div className="mx-auto my-10 w-[90%] h-[1px] bg-[#fff] rounded-xl"/>
                <div className=" px-5 md:px-[10%] flex flex-col md:flex-row justify-between">
                    <p>
                        @ 2024 Grupo Patense - Todos os direitos reservados
                    </p>
                   
                   <a href="https://bmouseproductions.com/" target="_blank" >
                        Desenvolvido por <span className="font-semibold">Bmouse Productions</span>
                   </a>
                </div>
            </footer>
        </>
    )
}