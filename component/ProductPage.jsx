import Image from "next/image";

const ProductPage = ({ product,variants }) => {
  return (
    <div className="container-xl pt-md-5">
      <div className="row">
        <div className="col-lg-5 col-md-6 px-lg-5" data-aos="fade-left">
          <div
            className="bg-body-secondary w-100 h-auto rounded-4"
            style={{ aspectRatio: 3 / 2, position: "relative" }}
          >
            {product.image?.path &&
            <Image
              src={`https://api.4mobile.kz/storage/uploads${product.image.path}`}
              alt={product.title}
              className="p-3"
              fill
              style={{ objectFit: "contain" }}
              loading="lazy"
            />}
          </div>
        </div>

        <div className="col-lg-7 my-5 mt-md-0 col-md-6 px-lg-5 d-flex flex-column justify-content-center gap-4" data-aos="fade-right" data-aos-delay="200">
          <h1 className="m-0">{product.title}</h1>
          <h6 className="m-0">Выберите модель</h6>
          <div className="d-inline-flex flex-wrap gap-2">
            {variants.map((render,index)=><button key={index} type="button" className="btn btn-dark rounded-4">{render.color.name}{render.storage.capacity===0?"":` (${render.storage.capacity} ГБ)`}</button>)}
          </div>
          <h2 className="m-0">Цена: <span className="badge text-bg-dark rounded-4">Выберите модель</span></h2>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
