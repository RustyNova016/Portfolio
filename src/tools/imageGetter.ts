export function imageGetter(path: string){
    const images = require.context('../../public/images', true);
    return images("./" + path);
}