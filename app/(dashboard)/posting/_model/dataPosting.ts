export interface dataCardVipProperty {
    id: number,
    level:number,
    price: string,
    borderUrl: string,
    benefits: {
        title: string,
        date?: string
    }[]
}

export const dataCardVip:dataCardVipProperty[]  = [
    {
        id: 1,
        level: 1,
        price: 'Benefits/year (VND) 600.000',
        borderUrl: '/dashboard/images/das-posting/vip-img/level-1.png',
        benefits: [
            {
                title: 'Posting news is usually free ',
                date: '1 news/day'
            },
            {
                title: 'Post 3-star vip news for free',
                date: '1 news/day'
            },
            {
                title: 'Post super vip news for free'
            }
        ]
    },
    {
        id: 2,
        level: 1,
        price: 'Benefits/year (VND) 800.000',
        borderUrl: '/dashboard/images/das-posting/vip-img/level-2.png',
        benefits: [
            {
                title: 'Posting news is usually free ',
                date: '2 news/day'
            },
            {
                title: 'Post 3-star vip news for free',
                date: '1 news/day'
            },
            {
                title: 'Post super vip news for free',
                date: '1 news/day'
            }
        ]
    },
    {
        id: 3,
        level: 3,
        price: 'Benefits/year (VND) 1,000.000',
        borderUrl: '/dashboard/images/das-posting/vip-img/level-3.png',
        benefits: [
            {
                title: 'Posting news is usually free ',
                date: '3 news/day'
            },
            {
                title: 'Post 3-star vip news for free',
                date: '2 news/day'
            },
            {
                title: 'Post super vip news for free',
                date: '2 news/day'
            }
        ]
    },
    {
        id: 3,
        level: 99,
        price: 'Benefits/year (VND) 10,000.000',
        borderUrl: '/dashboard/images/das-posting/vip-img/level-4.png',
        benefits: [
            {
                title: 'Posting news is usually free ',
                date: 'No limit'
            },
            {
                title: 'Post 3-star vip news for free',
                date: '5 news/day'
            },
            {
                title: 'Post super vip news for free',
                date: '5 news/day'
            }
        ]
    },
]