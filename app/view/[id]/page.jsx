import CardList from "@/component/CardList";
import ProductPage from "@/component/ProductPage";
import VideoPlayerWrapper from "@/component/VideoPlayerWrapper";
import ProductPageDesc from "@/component/ProductPageDesc";

const Page = async ({ params }) => {
    const { id } = await params;

    const req = await fetch(`https://api.4mobile.kz/api/content/item/products/${id}?populate=1`, {
        method: "GET",
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d",
        },
        // Переиспользуем кеш при SSR
        next: { revalidate: 120 }
    });

    const res = await req.json();

    console.log(res);

    const reqList = await fetch(`https://api.4mobile.kz/api/content/items/products?filter[category]=${res.category['_id']}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const list = await reqList.json();

    const reqBrand = await fetch(`https://api.4mobile.kz/api/content/items/products?filter[brand]=${res.brand['_id']}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const listBrand = await reqBrand.json();

    console.log(listBrand)


    const reqVar = await fetch(`https://api.4mobile.kz/api/content/items/variants?filter[product]=${id}&&populate=1`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const resVar = await reqVar.json();
    return (
        <div className="d-flex flex-column gap-5">
            <ProductPage product={res} variants={resVar} />
            <div className="container-xl">
                <div className="row gap-lg-0 gap-5">
                    <ProductPageDesc desc={res.description} />
                    <VideoPlayerWrapper url={res.youtube} />
                </div>
            </div>
            {list.length!==0 && <CardList list={list} title="Вам также может понравиться 💖"/>}
            {listBrand.length!==0 && <CardList list={listBrand} title={`Также от ${res.brand.name} 💖`}/>}
        </div>
    );
};

export default Page;
