"use client";
import { useRef, useEffect, useState } from "react";
import styles from "./CardList.module.css";
import Link from "next/link";
import Image from "next/image"; // добавили импорт

const CardList = ({ title = null, list = [] }) => {
    if (list.length === 0) return null;

    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;
        const updateButtons = () => {
            if (!el) return;
            setShowLeft(el.scrollLeft > 0);
            setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
        };

        updateButtons();
        el.addEventListener("scroll", updateButtons);
        return () => el.removeEventListener("scroll", updateButtons);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -220 : 220,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="position-relative container-xl" data-aos="fade-up" data-aos-delay="100">
            {title && <h2 className="d-flex align-items-center gap-3 pb-2">{title}</h2>}

            {showLeft && (
                <button
                    className={`btn btn-light rounded-circle p-0 ${styles.arrowButton} ${styles.left}`}
                    onClick={() => scroll("left")}
                    style={{ width: 48, height: 48 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M15.5831 4L8.9964 10.5866C8.62508 10.9633 8.41693 11.471 8.41693 12C8.41693 12.529 8.62508 13.0367 8.9964 13.4134L15.5831 20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}

            {showRight && (
                <button
                    className={`btn btn-light rounded-5 ${styles.arrowButton} ${styles.right}`}
                    onClick={() => scroll("right")}
                    style={{ width: 48, height: 48 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}

            <div
                className={`d-flex gap-3 ${styles.scrollContainer}`}
                ref={scrollRef}
                style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
                {list.map((item, index) => (
                    <Link
                        href={`/view/${item['_id']}`}
                        key={index}
                        className={styles.cardHover}
                        style={{ display: "block", textDecoration: "none", color: "inherit" }}
                        data-aos="fade-right"
                        data-aos-delay={index * 200}
                    >
                        <div className={`${styles.cardBox} rounded-4`}>
                            {item.image?.path && (
                                <Image
                                    src={`https://api.4mobile.kz/storage/uploads${item.image.path}`}
                                    alt={item.title || "Image"}
                                    width={220}
                                    height={180}
                                    style={{ width: "auto", height: 180 }}
                                    loading="lazy"
                                    unoptimized
                                />
                            )}
                        </div>
                        <h6 className="my-3 fw-bold text-break">{item.title}</h6>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CardList;
