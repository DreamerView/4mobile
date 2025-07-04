import Image from "next/image";
import LogoImg from "@/public/logo.png";
import Link from "next/link";

const Header = () => {
    
    return(
        <>
            <header className="container-xl d-lg-block d-none" data-aos="fade-in">
                <div className="row py-md-5 py-5 align-items-center justify-content-center">
                    <div className="col-lg-4 d-lg-block d-none">
                        <div className="d-inline-flex flex-column align-items-start">
                            <a className="btn btn-outline-light border-0 rounded-4 d-flex gap-3 btn-lg m-0" href="tel:+77716993434"><i className="bi bi-telephone-forward text-danger"></i>+7 (771) 699 34 34</a>
                            <button className="btn btn-outline-secondary border-0 rounded-4 btn-sm m-0">Обратный звонок</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center" data-aos="fade-in" data-aos-delay="400">
                        <Link href="/" className="d-block text-center">
                            <Image
                                src={LogoImg}
                                width={275}
                                height={98}
                                className="img-fluid"
                                alt="Логотип"
                                priority
                            />
                        </Link>
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
            <header className="container-fluid py-5 d-block d-lg-none" data-aos="fade-in">
                <div className="row align-items-center justify-content-center">
                    <div className="col-6" data-aos="fade-right">
                    <Link href="/" className="d-block">
                        <Image
                        src={LogoImg}
                        width={160} // можно адаптировать под твой размер
                        height={40}
                        className="img-fluid"
                        alt="Логотип"
                        priority
                        />
                    </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end" data-aos="fade-left">
                        <button className="btn btn-dark btn-lg">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;