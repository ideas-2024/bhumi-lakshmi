
import React from "react";
import { Card } from "flowbite-react";
import { VisionCardInterface } from "../../shared/interface";

export const VisionCard: React.FC<{ props: VisionCardInterface }> = ({props}) => {
    return (
        <Card
            key={props.id}
            className="max-w-sm"
        >
            <div className="flex justify-center"> {/* Center-align container */}
                <img
                    width={200}
                    height={200}
                    src={props.logo}
                    alt="image 1"
                />
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                {props.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
        </Card>
    )
}