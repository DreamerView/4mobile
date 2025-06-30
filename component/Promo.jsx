import Image from "next/image";
import LogoImg from "@/public/logo.png";
import PromoImg from "@/public/promo.png";

const Promo = () => {
  return (
    <div className="container" data-aos="fade">
      <div
        className="row mx-1 pt-5 px-md-5 rounded-4"
        style={{
          background: "linear-gradient(to right, #1c1c1c, #2a2a2a)",
        }}
      >
        {/* ЛОГОТИП */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div
            style={{
              position: "relative",
              width: "calc(100% - 8rem)",
              maxWidth: 350,
              aspectRatio: "14 / 5",
            }}
          >
            <Image
              src={LogoImg}
              fill
              sizes="(max-width: 768px) 80vw, 350px"
              style={{ objectFit: "contain" }}
              alt="Логотип 4mobile"
              data-aos="fade"
              data-aos-delay="200"
            />
          </div>
        </div>

        {/* ПРОМО */}
        <div className="col-md-6 d-flex justify-content-center">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 600,
              aspectRatio: "3 / 2",
            }}
          >
            <Image
              src={PromoImg}
              fill
              sizes="(max-width: 768px) 90vw, 600px"
              style={{ objectFit: "contain" }}
              alt="Промо изображение"
              data-aos="fade"
              data-aos-delay="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
