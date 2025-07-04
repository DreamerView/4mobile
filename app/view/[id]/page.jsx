import CardList from "@/component/CardList";
import ProductPage from "@/component/ProductPage";
// import CardList from "@/component/CardList";

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
        <>
            <ProductPage product={res} />
            <CardList list={list} title="Вам также может понравиться 💖"/>
        </>
    );
};

export default Page;
