"use client"
import Image from "next/image";
import PlaceholderImg from "@/public/placeholder.png";
import { useState } from "react";

const ProductPage = ({ product,variants }) => {
  console.log(variants);
  const [loading,setLoading] = useState(false);
  const [price,setPrice] = useState("Выберите модель");
  const [selected,setSelected] = useState("");
  const hasInStock = variants.some(v => v["in_stock"] === true);
  const handleSelection = (price,id) => {
    setLoading(true);
    setPrice(price);
    setSelected(id);
    setTimeout(()=>{
      setLoading(false);
    },200)
  };
  return (
    <div className="container-xl pt-md-5">
      <div className="row">
        <div className="col-lg-5 col-md-6 px-lg-5" data-aos="fade-left">
          <div
            className="w-100 h-auto rounded-4"
            style={{ aspectRatio: 3 / 2, position: "relative", backgroundColor:"#cccccc"}}
          >
            <Image
              src={product.image?.path ? `https://api.4mobile.kz/storage/uploads${product.image.path}` : PlaceholderImg}
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
          <h6 className="m-0">Выберите модель</h6>
          {variants.length!==0?
          
            <>
              <div className="d-inline-flex flex-wrap gap-2">
                {variants.filter(f => f["in_stock"] === true).map((render, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelection(render.price, render["_id"])}
                    type="button"
                    className={`btn ${selected===render["_id"]?"btn-light":"btn-dark"} rounded-4`}
                  >
                    {render.color.name}
                    {render.storage.capacity === 0 ? "" : `${render.storage.capacity !==0 && ` (${render.storage.capacity} ГБ)`}`}
                  </button>
                ))}
              </div>

              {hasInStock ? (
                <h2 className="m-0">
                  Цена:{" "}
                  <span className="badge text-bg-dark rounded-4">
                    {loading 
                    ? 
                      <div className="spinner-border text-danger mx-5" role="status" style={{width:"1.5rem",height:"1.5rem"}}>
                        <span className="visually-hidden">Loading...</span>
                      </div> 
                    : 
                      !price || price === 0 ? "Договорная" : Number.isInteger(price) ? new Intl.NumberFormat('ru-RU').format(price) + " ₸" : price}
                  </span>
                </h2>
              ):<h2 className="m-0 text-danger">Нету в наличии</h2>}
            </>
          :
              <h2 className="m-0 text-danger">Нету в наличии</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
