
import React from "react";
import { VisionCardInterface } from "../../shared/interface";

export const VisionCard: React.FC<{ props: VisionCardInterface }> = ({props}) => {
    return (
        <div className="flex flex-col shadow-lg rounded-lg p-12">
            <div>
                <img src={props.logo} />
            </div>
            <div>
                <p className="text-2xl font-bold tracking-tight text-green-500 flex justify-center">
                {props.title}
                </p>
            </div>
            <div>
                <p className="font-normal text-gray-700 dark:text-gray-400 justify-center text-center pt-4">
                {props.description}
                </p>
            </div>
        </div>
    )
}