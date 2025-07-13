import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.maisonroselifestyle.com'; // Production domain name

// Add your routes here
const routes = [
    '/',
    '/about',
    '/products',
    '/contact',
    '/categories',
    // Add more routes as needed
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
            .map(route => `
    <url>
        <loc>${BASE_URL}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`
            )
            .join('')}
</urlset>`;

    // Ensure the public directory exists
    const publicDir = path.join(__dirname, '../../public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the sitemap
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
};

generateSitemap();
