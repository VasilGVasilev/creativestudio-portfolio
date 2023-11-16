
export const imageLoader = ({ src, width, quality }) => {
    return `https://vgvweb.com${src}?w=${width}&q=${quality || 75}`;
};

