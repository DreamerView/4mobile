import CardList from "@/component/CardList";
import SocialNetwork from "@/component/SocialNetwork";
import Map from "@/component/Map"

const Home = async () => {
    const req = await fetch("https://api.4mobile.kz/api/content/items/products?populate=1", {
  method: "GET",
  headers: {
    "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
  }
});

const allProducts = await req.json();

// Группировка вручную через массив
const groupedArray = [];

for (const product of allProducts) {
  const cat = product.category;
  if (!cat || !cat._id) continue;

  // Проверяем, существует ли уже категория в массиве
  let group = groupedArray.find(g => g.id === cat._id);

  // Если нет — добавляем новую
  if (!group) {
    group = {
      id: cat._id,
      title: cat.name,
      json: []
    };
    groupedArray.push(group);
  }

  // Добавляем продукт в нужную категорию
  group.json.push(product);
}

// Теперь groupedArray выглядит так:

    return (
        <>
            <div className="d-flex flex-column gap-5">
                {groupedArray.map((product,index)=>(<CardList key={index} title={product.title} list={product.json}/>))}
                <SocialNetwork />
                <Map />
            </div>
        </>
    )
}

export default Home;