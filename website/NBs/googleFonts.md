# Export fonts in fonts file:

```sh 
import { Roboto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const roboto = Roboto({
    weight: '400',
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
```

# Import for whole app:

```sh 
import { roboto } from './fonts'

return(
    <html className={`h-full bg-[#010026] text-white scroll-smooth ${roboto.className}`}>
    </html>
)
```

# Import locally:

```sh 
import { playfair } from "@/app/fonts";

return(
    <p className={`text-6xl ${playfair.className} z-10 text-center md:text-start`} >

)
```
