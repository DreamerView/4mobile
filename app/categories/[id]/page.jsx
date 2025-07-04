import CardList from "@/component/CardList";
import SocialNetwork from "@/component/SocialNetwork";
import Map from "@/component/Map"

const Page = async({params}) => {
    const {id} = await params;
    const res = await fetch(`https://api.4mobile.kz/api/content/items/products?filter[category]=${id}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        }
    });
    const list = await res.json();
    const currentCategory = await fetch(`https://api.4mobile.kz/api/content/item/categories/${id}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        }
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