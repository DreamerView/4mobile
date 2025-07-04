import Image from "next/image";

const ProductPage = ({ product }) => {
  return (
    <div className="container-xl pt-md-5">
      <div className="row">
        <div className="col-lg-5 col-md-6 px-lg-5" data-aos="fade-left">
          <div
            className="bg-body-secondary w-100 h-auto rounded-4"
            style={{ aspectRatio: 3 / 2, position: "relative" }}
          >
            <Image
              src={`https://api.4mobile.kz/storage/uploads${product.image.path}`}
              alt={product.title}
              className="p-3"
              fill
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-lg-7 my-5 mt-md-0 col-md-6 px-lg-5 d-flex flex-column justify-content-center gap-4" data-aos="fade-right" data-aos-delay="200">
          <h1 className="m-0">{product.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
