
export const imageLoader = ({ src, width, quality }) => {
    return `https://testvgv.net${src}?w=${width}&q=${quality || 75}`;
};

