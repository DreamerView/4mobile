import CardList from "@/component/CardList";
import ProductPage from "@/component/ProductPage";
import VideoPlayerWrapper from "@/component/VideoPlayerWrapper";
import ProductPageDesc from "@/component/ProductPageDesc";

export async function generateMetadata({ params }) {
    const {id} = await params;
    const req = await fetch(`https://api.4mobile.kz/api/content/item/products/${id}`, {
        method: "GET",
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d",
        },
        next: { revalidate: 120 }
    });

    const res = await req.json();

    const baseUrl = 'https://4mobile.kz';
    const apiBaseUrl = 'https://api.4mobile.kz';
    const canonicalUrl = `${baseUrl}/view/${id}`;

    const title = res.title
        ? `${res.title} — Купить в 4mobile`
        : 'Аксессуары и товары для вашего телефона — 4mobile';

    let description = res.description || 'Аксессуары, гаджеты и товары для вашего смартфона в интернет-магазине 4mobile.';

    if (description.length > 140) {
        description = description.slice(0, 140) + '... Читать подробнее.';
    }

    // Формируем URL изображения, если оно есть
    const imageUrl = res.image?.path
        ? `${apiBaseUrl}/storage/uploads${res.image.path}`
        : null;

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
            type: 'website',
            ...(imageUrl && {
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: res.title || '4mobile'
                    }
                ]
            })
        },
        twitter: {
            card: imageUrl ? 'summary_large_image' : 'summary',
            title,
            description,
            ...(imageUrl && { images: [imageUrl] })
        }
    };
}




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

    const reqList = await fetch(`https://api.4mobile.kz/api/content/items/products?filter[category]=${res.category['_id']}&&fields={"title":1,"image":1}`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const listRes = await reqList.json();
    const list = listRes.filter(l=>l["_id"]!==id);

    const reqBrand = await fetch(`https://api.4mobile.kz/api/content/items/products?filter[brand]=${res.brand['_id']}&&fields={"title":1,"image":1,"category":1}&&populate=1`, {
        method: 'GET',
        headers: {
            "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });
    const listBrand = await reqBrand.json();

    const filterBrand = listBrand.filter(l=>l.category['_id']!==res.category['_id']);

    const brandCategoryExist = [];
    const brandCategoryArray = [];

    filterBrand.forEach(f => {
        const categoryId = f.category['_id'];

        if (brandCategoryExist.includes(categoryId)) {
            // Категория уже существует — добавляем товар в соответствующую группу
            const group = brandCategoryArray.find(l => l.category['_id'] === categoryId);
            if (group) {
                group.products.push(f);
            }
        } else {
            // Новая категория — создаём новую группу
            brandCategoryExist.push(categoryId);
            brandCategoryArray.push({
                category: f.category,
                products: [f]
            });
        }
    });

    const reqVar = await fetch(`https://api.4mobile.kz/api/content/items/variants?filter[product]=${id}&&populate=1&&fields={"color":1,"storage":1,"price":1,"in_stock":1}`, {
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
                <div className="row gap-lg-0 gap-4">
                    <ProductPageDesc desc={res.description} />
                    <VideoPlayerWrapper url={res.youtube} />
                </div>
            </div>
            <div className="d-flex flex-column gap-0">
                {list.length!==0 && <CardList list={list} title="Вам также может понравиться 💖"/>}
                {brandCategoryArray.map((render,index)=>render.products.length!==0 && (<CardList key={index} list={render.products} title={`Также от ${res.brand.name} (${render.category.name}) 💖`}/>))}
            </div>
        </div>
    );
};

export default Page;
