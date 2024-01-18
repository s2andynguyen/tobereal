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
export interface dataCardPackageProperty {
    id: number,
    package:number,
    price: string,
    bonus: string,
    total: string,
    time: string
}
export interface dataOnlineTradingProperty {
    id: number,
    title: string,
    suitable: string,
    introducing: boolean,
    pathMap: boolean,
    listTradingFloor: boolean,
    contact: boolean
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

export const dataCardPackage:dataCardPackageProperty[]  = [
    {
        id: 1,
        package:1,
        price: ' 1,000.000',
        bonus: '100,000',
        total: '1,100.000',
        time: '2 months'
    },
    {
        id: 2,
        package: 2,
        price: ' 2,000.000',
        bonus: '300,000',
        total: '2,300.000',
        time: '3 months'
    },
    {
        id: 3,
        package: 3,
        price: ' 4,000.000',
        bonus: '800,000',
        total: '4,800.000',
        time: '4 months'
    },
    {
        id: 4,
        package: 4,
        price: ' 8,000.000',
        bonus: '2,400,000',
        total: '10,00.000',
        time: '5 months'
    },
    {
        id: 5,
        package: 5,
        price: ' 10,000.000',
        bonus: '4,000,000',
        total: '14,00.000',
        time: '5 months'
    },
    {
        id: 6,
        package: 6,
        price: ' 20,000.000',
        bonus: '10,000,000',
        total: '14,00.000',
        time: '6 months'
    },
    {
        id: 7,
        package: 7,
        price: ' 50,000.000',
        bonus: '35,000,000',
        total: '85,00.000',
        time: '12 months'
    },

]
export const dataOnlineTrading:dataOnlineTradingProperty[] = [
    {
        id: 1,
        title: 'Common trading floor',
        suitable: 'Group, small enterprise',
        introducing: true,
        pathMap: true,
        listTradingFloor: true,
        contact: true
    },
    {
        id: 2,
        title: 'VIP trading floor',
        suitable: 'Enterprise',
        introducing: true,
        pathMap: true,
        listTradingFloor: true,
        contact: true
    }
]