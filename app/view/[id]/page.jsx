import CardList from "@/component/CardList";
import ProductPage from "@/component/ProductPage";
import VideoPlayerWrapper from "@/component/VideoPlayerWrapper";
import ProductPageDesc from "@/component/ProductPageDesc";

const Page = async ({ params }) => {
    const { id } = await params;

    const req = await fetch(`https://api.4mobile.kz/api/content/item/products/${id}?v=13`, {
        method: "GET",
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d",
        },
        // Переиспользуем кеш при SSR
        next: { revalidate: 60 }
    });

    const res = await req.json();
    const reqList = await fetch(`https://api.4mobile.kz/api/content/items/products?filter[category]=${res.category['_id']}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        }
    });
    const list = await reqList.json();

    const reqVar = await fetch(`https://api.4mobile.kz/api/content/items/variants?filter[product]=${id}&&populate=1`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        }
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
            <CardList list={list} title="Вам также может понравиться 💖"/>
        </div>
    );
};

export default Page;
