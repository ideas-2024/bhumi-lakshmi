import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../shared/constant";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const ProductDetailsContainer: React.FC = () => {
    const { id } = useParams();
    const props = Products.find(product => product.id === id);
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="px-24">
                    <img height={100} width={300} src={props?.logo} className="rounded-lg" />
                </div>
                <div className="">
                    <h1 className="font-bold pb-4 text-lg sm:text-2xl ">{props?.title}</h1>
                    <p>{props?.description}</p>
                </div>
            </div>
            <div className="my-12 sm:my-24">
                <h1 className="text-bold text-green-500 text-lg">Benefits</h1>
                <ul className="space-y-2 pl-8 py-4">
                    {
                        props?.benefits.map((item: string) => (
                            <li className=""><VscDebugBreakpointLog className="inline-block"/>{item}</li>
                        ))
                    }
                </ul>

            </div>

        </div>
    )
}

export default ProductDetailsContainer;