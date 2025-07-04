"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({linkJson}) => {
    const path = usePathname();
    if(path!=="/") return null;
    return(
        <div className="container-xl pb-5" data-aos="fade-up">
            <div className="d-flex gap-3 justify-content-lg-center overflow-x-auto">
                {linkJson.map((link,index)=><Link key={index} href={`/categories/${link['_id']}`} data-aos="fade-right" data-aos-delay={index*100} className={`btn ${path==="/categories/"+link["_id"]?"btn-light":"btn-dark"} rounded-4 text-nowrap`}>{link['name']}</Link>)}
            </div>
        </div>
    )
}

export default Nav;