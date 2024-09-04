interface CategoryType {
    name: string | undefined;
    imagePath: string;
}

type CategoriesType = CategoryType[]

export const Categories: CategoriesType = [
    { name: "Outlast", imagePath: "/categories/outlast.webp" },
    { name: "Lethal Company", imagePath: "/categories/lethalcompany.webp" },
    { name: "Minecraft", imagePath: "/categories/minecraft.webp" },
    { name: "Phasmophobia", imagePath: "/categories/phasmophobia.webp" },
    { name: "Software and Game Development", imagePath: "/categories/softwareandgame.webp" },
    { name: "Valorant", imagePath: "/categories/valorant.webp" },
    { name: "Just Chatting", imagePath: "/categories/justchatting.webp" },
    { name: undefined, imagePath: "/categories/boxart.webp" }
]