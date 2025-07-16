export async function GET() {
    const req = await fetch(`https://api.4mobile.kz/api/content/items/products?fields={"title":1}`, {
        method: "GET",
        headers: {
        "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });

    const allProducts = await req.json();

    const reqCategory = await fetch(`https://api.4mobile.kz/api/content/items/categories?fields={"name":1}`, {
        method: "GET",
        headers: {
        "api-key": "USR-22f5347f0fba81f53ecba0abf04ef430bf7bd40d"
        },
        next: { revalidate: 120 }
    });

    const allCategories = await reqCategory.json();


    const baseUrl = 'https://4mobile.kz';

    const categories = allCategories.map(route => `
        <url>
            <loc>${baseUrl}/categories/${route["_id"]}</loc>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    `).join('');

    const view = allProducts.map(route => `
        <url>
            <loc>${baseUrl}/view/${route["_id"]}</loc>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    `).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}/</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        ${categories}
        ${view}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
