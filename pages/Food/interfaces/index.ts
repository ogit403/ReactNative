import { ImageSourcePropType } from "react-native";

export interface CategoryType {
    id: string;
    title: string;
    thumb: ImageSourcePropType
}

export interface ProductType {
    id: string;
    categoryId: string;
    title: string;
    thumb: ImageSourcePropType,
    intro: string;
    ingredients: string;
    instructions: string;
    view: number;
    favorite: number;
}