import Image from "next/image";
import LogoImg from "@/public/logo.png";

const Header = () => {
    return(
        <header className="container" data-aos="fade-in">
            <div className="row py-md-5 py-5 align-items-center justify-content-center">
                <div className="col-lg-4 d-lg-block d-none">
                    <div className="d-inline-flex flex-column align-items-start">
                        <a className="btn btn-outline-light border-0 rounded-4 d-flex gap-3 btn-lg m-0" href=""><i className="bi bi-telephone-forward text-danger"></i>+7 (771) 699 34 34</a>
                        <button className="btn btn-outline-secondary border-0 rounded-4 btn-sm m-0">Обратный звонок</button>
                    </div>
                </div>
                <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center" data-aos="fade-in" data-aos-delay="400">
                    <Image src={LogoImg} width={275} style={{maxWidth:275,width:"calc(100% - 64px)"}} height={98} alt="" />
                </div>
                <div className="col-lg-4 d-lg-block d-none">
                    <div className="d-flex gap-2 justify-content-end">
                        <button className="btn btn-outline-light border-0 rounded-4 d-flex gap-2" data-bs-toggle="modal" data-bs-target="#deliveryModal"><i className="bi bi-truck text-danger"></i>Доставка</button>
                        <button className="btn btn-outline-light border-0 rounded-4 d-flex gap-2" data-bs-toggle="modal" data-bs-target="#sellModal"><i className="bi bi-wallet2 text-danger"></i>Оплата</button>
                        <button className="btn btn-outline-light border-0 rounded-4 d-flex gap-2" data-bs-toggle="modal" data-bs-target="#contactModal"><i className="bi bi-geo-alt text-danger"></i>О нас</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;