"use client";
import { useState } from "react";
import Image from "next/image";

const ProductPage = ({ product }) => {
  const MAX_LENGTH = 225;
  const [expanded, setExpanded] = useState(false);

  const text = product.description || "";
  const isLong = text.length > MAX_LENGTH;
  const visibleText = expanded ? text : text.slice(0, MAX_LENGTH);

  const renderDescription = (str) =>
    str.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));

  return (
    <div className="container-xl py-lg-5">
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

          <div className="bg-dark p-4 rounded-4 text-light">
            <p style={{ whiteSpace: "pre-line" }}>{renderDescription(visibleText)}</p>
            {isLong && (
              <button
                className="btn btn-sm btn-outline-secondary border-0 rounded-4 mt-1 px-3"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? "Скрыть" : "Показать больше"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
