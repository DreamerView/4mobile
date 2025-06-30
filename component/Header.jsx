import Image from "next/image";
import LogoImg from "@/public/logo.png";

const Header = () => {
    return(
        <header className="container" data-aos="fade-in">
            <div className="row py-md-5 py-4 align-items-center">
                <div className="col-6" data-aos="fade-in" data-aos-delay="400">
                    <Image src={LogoImg} width={120} height={43} alt="" />
                </div>
                <div className="col-6 d-md-block d-none" data-aos="fade-in" data-aos-delay="600">
                    <ul className="d-flex gap-5 justify-content-end" style={{listStyleType:"none"}}>
                        <li>
                            <a className="btn btn-outline-light border-0 rounded-5 fw-bold fs-5" href="#">Телефон</a>
                        </li>
                        <li>
                            <a className="btn btn-outline-light border-0 rounded-5 fw-bold fs-5" href="#">Телефон</a>
                        </li>
                        <li>
                            <a className="btn btn-outline-light border-0 rounded-5 fw-bold fs-5" href="#">Телефон</a>
                        </li>
                        <li>
                            <a className="btn border-0 rounded-5 fw-bold fs-5 d-flex gap-2 px-4" style={{backgroundColor:"#25d366",color:"#000000"}} href="#"><i className="bi bi-whatsapp"></i>Написать</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;