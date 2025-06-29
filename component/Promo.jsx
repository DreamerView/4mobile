const Promo = () => {
    return(
        <div className="container" data-aos="fade">
            <div className="row mx-1 bg-danger pt-5 px-md-5 rounded-4 gap-md-0 gap-4" style={{background: "linear-gradient(to right, #1c1c1c, #2a2a2a)"}}>
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <img src="/logo-white.png" style={{maxWidth:350,width:"calc(100% - 64px)"}} height="auto" alt="" data-aos="fade" data-aos-delay="200" />
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="/promo.png" style={{maxWidth:600,width:"100%"}} alt="" data-aos="fade" data-aos-delay="400" />
                </div>
            </div>
        </div>
    )
}

export default Promo