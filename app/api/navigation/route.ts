import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest){
    const navlinks = [
        {
            linkName : 'brands',
            hasSubCategory : true,
            url:'/brands',
            subCategories : [
                {
                    linkName : 'all brands',
                    url: '/all-brands',
                    hasSubCategory: false
                },
                {
                    linkName : '$hosky',
                    url: '/hosky',
                    hasSubCategory: false
                },
                {
                    linkName : 'bitfins',
                    url: '/bitfins',
                    hasSubCategory: false
                },
            ]
        },
        {
            linkName : 'shop',
            hasSubCategory : true,
            url:'/shop',
            subCategories : [
                {
                    linkName : 'unisex hoodies',
                    url: '/unisex-hoodies',
                    hasSubCategory: false
                },
                {
                    linkName : 'unisex zip hoodies',
                    url: '/unisex-zip-hoodies',
                    hasSubCategory: false
                },
                {
                    linkName : 'unisex sweatshirts',
                    url: '/unisex-sweatshirts',
                    hasSubCategory: false
                },
            ]
        },
        {
            linkName : 'premium',
            hasSubCategory : false,
            url:'/premium',
        },
        {
            linkName : 'gift cards',
            hasSubCategory : false,
            url:'/gift-cards',
        }
    ]
    return new NextResponse(JSON.stringify(navlinks));
}