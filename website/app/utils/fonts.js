import { Roboto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Raleway } from 'next/font/google';


export const raleway = Raleway({
    weight: '800',
    subsets: ['latin'],
    display: 'swap',
});

export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
});

export const opensans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});