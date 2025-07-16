import CardList from "@/component/CardList";
import SocialNetwork from "@/component/SocialNetwork";
import Map from "@/component/Map"

export async function generateMetadata({ params }) {
    const {id} = await params;
    const currentCategory = await fetch(`https://api.4mobile.kz/api/content/item/categories/${id}?fields={"name":1,"image":1}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const res = await currentCategory.json();

    console.log(res);

    const baseUrl = 'https://4mobile.kz';
    const canonicalUrl = `${baseUrl}/view/${id}`;

    const title = res.name
        ? `${res.name} — Купить`
        : 'Аксессуары и товары для вашего телефона';

    let description = res.description || 'Аксессуары, гаджеты и товары для вашего смартфона в интернет-магазине 4mobile.';

    if (description.length > 140) {
        description = description.slice(0, 140) + '... Читать подробнее.';
    }

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: '4mobile',
            type: 'website'
        },
        twitter: {
            card: 'summary',
            title,
            description
        }
    };
}


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
    const currentCategory = await fetch(`https://api.4mobile.kz/api/content/item/categories/${id}?fields={"name":1,"image":1}`, {
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