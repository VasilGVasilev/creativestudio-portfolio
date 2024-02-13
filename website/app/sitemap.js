const url = 'https://creativestudiobg.com/'

export default async function sitemap() {
    const routes = ['', '/dalia'].map((route) => ({
        url:`${url}${route}`,
        lastModified: new Date().toISOString()
    }))
    return [...routes]
}