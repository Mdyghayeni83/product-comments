import ProductImage from '../../src/assets/images/ex_product_pic.jpeg'

export const _product = {
    name: 'کراپ تاپ آستین بلند زنانه',
    image: ProductImage
}

export const _views = {
    five: 487,
    four: 60,
    three: 115,
    two: 2,
    one: 50
}

export const _all_media = [
    {
        url: ProductImage,
        type: 'image'
    },
    {
        url: ProductImage,
        type: 'image'
    },
    {
        url: ProductImage,
        type: 'image'
    },
    {
        url: ProductImage,
        type: 'video'
    },
    {
        url: ProductImage,
        type: 'video'
    },
    {
        url: ProductImage,
        type: 'image'
    },
    {
        url: ProductImage,
        type: 'video'
    },
]

export const _product_comments = [
    {
        name: 'تیشرت دوست داشتنی کوتون',
        author: 'مهناز افشار',
        role: 'خریدار',
        time: '4 ساعت پیش',
        stars_number: 5,
        is_suggested: true,
        color: {
            name: 'کرم روشن',
            code: '#B49988'
        },
        size: 'M',
        description: 'لورم اپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است',
        images: [ProductImage, ProductImage],
        likes: 23,
        dislikes: 12
    },
    {
        name: 'تیشرت دوست داشتنی کوتون',
        author: 'مهناز افشار',
        role: 'خریدار',
        time: '10 ساعت پیش',
        stars_number: 2,
        is_suggested: false,
        color: {
            name: 'سفید',
            code: '#fff'
        },
        size: 'M',
        description: 'لورم اپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است',
        images: [ProductImage],
        likes: 23,
        dislikes: 12
    }
]