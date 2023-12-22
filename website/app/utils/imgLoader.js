
export const imageLoader = ({ src, width, quality }) => {
    return `https://creativestudiobg.com${src}?w=${width}&q=${quality || 75}`;
};

