const linkJson = [
    {link:"",title:"IPhone"},
    {link:"",title:"Apple Watch"},
    {link:"",title:"iPad"},
    {link:"",title:"Mac"},
    {link:"",title:"Наушники"},
    {link:"",title:"Аксессуары"},
    {link:"",title:"Dyson"},
    {link:"",title:"Sony Playstation "}
]

const Nav = () => {
    return(
        <div className="container pb-5" data-aos="fade-up">
            <div className="d-flex gap-3 justify-content-lg-center overflow-x-auto">
                {linkJson.map((link,index)=><a key={index} href="" data-aos="fade" data-aos-delay={index*100} className="btn bg-body-secondary rounded-4 text-nowrap">{link['title']}</a>)}
            </div>
        </div>
    )
}

export default Nav;