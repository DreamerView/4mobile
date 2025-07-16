import CardList from "@/component/CardList";
import SocialNetwork from "@/component/SocialNetwork";
import Map from "@/component/Map"
// &&fields={"title":1,"image":1}
const Page = async({params}) => {
    const {id} = await params;
    const res = await fetch(`https://api.4mobile.kz/api/content/items/products?filter[category]=${id}&&fields={"title":1,"image":1}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const list = await res.json();
    const currentCategory = await fetch(`https://api.4mobile.kz/api/content/item/categories/${id}?fields={"title":1,"image":1}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const category = await currentCategory.json();
    return(
    <div className="d-flex flex-column gap-5">
        <CardList title={category['name']} list={list} />
        <SocialNetwork />
        <Map />
    </div>)

};

export default Page;