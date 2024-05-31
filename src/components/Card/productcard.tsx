
import React from "react";
import { Button, Card } from "flowbite-react";
import { ProductCardInterface } from "../../shared/interface";



export const ProductCard: React.FC<{ props: ProductCardInterface }> = ({ props }) => {
    return (
        <Card key={props.id} className="w-full" imgSrc={props.logo} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.description.slice(0,200) + " ..."}
            </p>
            <Button className="rounded-2xl bg-green-500 hover:bg-white hover:border-2 hover:border-green-500 hover:text-green-500"  href={`/product/${props.id}`} >
                Read More
            </Button>
        </Card>
    )
}