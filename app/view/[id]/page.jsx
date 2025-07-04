import CardList from "@/component/CardList";
import ProductPage from "@/component/ProductPage";
import VideoPlayerWrapper from "@/component/VideoPlayerWrapper";
import ProductPageDesc from "@/component/ProductPageDesc";

const Page = async ({ params }) => {
    const { id } = await params;

    const req = await fetch(`https://api.4mobile.kz/api/content/item/products/${id}`, {
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
    return (
        <div className="d-flex flex-column gap-5">
            <ProductPage product={res} />
            <div className="container-xl">
                <div className="row gap-lg-0 gap-5">
                    <div className="col-lg-6 px-md-5 d-flex flex-column justify-content-center">
                        <ProductPageDesc desc={res.description} />
                    </div>
                    <div className="col-lg-6 px-md-5">
                        <VideoPlayerWrapper url="https://www.youtube.com/watch?v=08ZzCYdYCXs" />
                    </div>

                </div>
            </div>
            <CardList list={list} title="Вам также может понравиться 💖"/>
        </div>
    );
};

export default Page;
