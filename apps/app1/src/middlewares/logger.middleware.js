export default async function logger(req, res, next) {
    const { method, url } = req;
    console.log(`${method} ${url} ${new Date().toISOString()}`);
    next();
}