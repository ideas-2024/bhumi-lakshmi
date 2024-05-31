
import React from "react";
import { Card } from "flowbite-react";
import { ProductCardV2Interface } from "../../shared/interface";



export const ProductCardV2: React.FC<{ props: ProductCardV2Interface }> = ({ props }) => {
    return (
        <Card key={props.id} className="w-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-full">
                {props.title}
            </h5>
        </Card>
    )
}