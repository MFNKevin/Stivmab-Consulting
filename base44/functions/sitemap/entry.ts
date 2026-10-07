Deno.serve(async (req) => {
    const baseUrl = 'https://stivmabconsulting.com';
    const langs = ['fr', 'en', 'de'];
    
    // We add all the service pages to be exhaustive
    const pages = [
        '', 
        '/About', 
        '/Services', 
        '/Contact', 
        '/MentionsLegales', 
        '/PolitiqueConfidentialite',
        '/ServiceAllemand',
        '/ServiceMentoring',
        '/ServiceImmobilier',
        '/ServiceRetraite',
        '/ServiceBusiness',
        '/ServiceImmigration',
        '/ServiceSystemeAllemand'
    ];
    
    const today = new Date().toISOString().split('T')[0];

    const urls = pages.flatMap(page =>
        langs.map(lang => {
            const loc = `${baseUrl}${page}?lang=${lang}`;
            
            let priority = '0.5';
            let changefreq = 'monthly';
            
            if (page === '') {
                priority = '1.0';
                changefreq = 'weekly';
            } else if (page === '/Services') {
                priority = '0.9';
            } else if (page.startsWith('/Service')) {
                priority = '0.8';
            } else if (page === '/Contact' || page === '/About') {
                priority = '0.7';
            }

            return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
        })
    );

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' }
    });
});