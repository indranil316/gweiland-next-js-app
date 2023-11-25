export {};

declare global{
    type NavLink = {
        linkName: string;
        hasSubCategory: boolean;
        url: string;
        subCategories?: NavLink[];
    };
    interface Slides{
        slides : Slide[]
    }
    type Slide = {
        slideName: string;
        image: string;
        alt: string;
        buttonText: string;
    }
}