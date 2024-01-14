import { Montserrat, Inter,IBM_Plex_Sans } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin', 'vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700']
})

export const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700']
})

export const ibmPlex = IBM_Plex_Sans({  
    subsets: ['latin', 'vietnamese'],
    weight: ['400', '500', '600']
})