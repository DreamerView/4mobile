"use client";
import { useState } from "react";

const ProductPageDesc = ({desc}) => {
    const MAX_LENGTH = 225;
    const [expanded, setExpanded] = useState(false);
    
    const text = desc || "";
    const isLong = text.length > MAX_LENGTH;
    const visibleText = expanded ? text : text.slice(0, MAX_LENGTH);
    
    const renderDescription = (str) =>
        str.split("\n").map((line, i) => (
        <span key={i}>
            {line}
            <br />
        </span>
        ));
    return(
        <div className="bg-dark p-4 rounded-4 text-light">
            <p className="mb-3 text-muted">Описание</p>
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
    )
};

export default ProductPageDesc;