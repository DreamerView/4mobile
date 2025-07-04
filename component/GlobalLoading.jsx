"use client";

const GlobalLoading = () => {
    return (
        <div className="position-relative container-xl d-flex align-items-center justify-content-center" style={{height:450}} data-aos="fade" data-aos-delay="100">
            <div className="spinner-border m-5 p-5" style={{width: "3rem", height:"3rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default GlobalLoading;
