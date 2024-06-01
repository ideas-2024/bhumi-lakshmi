import React from "react";
import { Products, ProductsFertilizer, ProductsPesticides } from "../../shared/constant";
import { ProductCardInterface, ProductCardV2Interface } from "../../shared/interface";
import { ProductCardV2 } from "../../components/Card/productcardv2";
import { ProductCard } from "../../components/Card/productcard";
import CS from "./../../assets/Crop Solutions.png";
import PGR from "./../../assets/Plant Growth Regulators.jpg"
import Pesticide from "./../../assets/Pesticide.jpg";
import Fertilizer from "./../../assets/fertilizer.jpg";

const ProductContainer: React.FC = () => {
    return (
        <div className="">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green sm:py-24 sm:px-12">
                    <p className="text-4xl italic text-green-700">Crop Solutions </p>
                    <p className="text-lg sm:pt-4">Crop solutions encompass a comprehensive suite of products and strategies aimed at addressing the multifaceted challenges faced by modern agriculture. These solutions integrate various tools, including crop protection products, fertilizers, Biostimulant, pesticides and precision agriculture technologies to optimize crop health, enhance yields, and promote sustainability.</p>
                </div>
                <div className="">
                    <img src={CS} className="width:20px rounded-lg" />
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="font-bold text-xl">Plant Growth Regulators (PGRs)</h1>
                <div className="flex justify-center py-12">
                    <img src={PGR} className="width:20px rounded-lg" />
                </div>
                <p><b>Plant Growth Regulators (PGRs)</b> are special substances that help plants grow better and healthier. They can be either natural or made in a lab and work by changing how plants grow and develop. PGRs can make seeds sprout faster, help roots and stems grow stronger, and improve the size and quality of fruits and flowers. Farmers and gardeners use PGRs to get bigger harvests, make fruits and vegetables taste better, and help plants survive tough conditions like drought or extreme temperatures.</p>
                <p>Using PGRs can make farming more efficient and sustainable. By making plants grow in a more controlled way, farmers can use their land and resources better, producing more food with less waste. PGRs also help plants stay strong against diseases and pests, which means fewer chemicals are needed to protect the crops. Overall, PGRs are a valuable tool for anyone looking to grow healthier plants and achieve better yields in a way that’s good for the environment.</p>

                <h2 className="font-bold py-12">List of PGR Products and their details:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4">
                    {
                        Products.map((item: ProductCardInterface) => (
                            <ProductCard props={item} />
                        ))
                    }
                </div>
            </div>

            <div className="space-y-4 py-12">
                <h1 className="font-bold text-xl">Pesticides</h1>
                <div className="flex justify-center py-12">
                    <img src={Pesticide} className="width:20px rounded-lg" />
                </div>
                <p>About <b>Pesticides:</b> Pesticides are non-hazardous chemicals or natural substances used to prevent, control, or eliminate pests that can harm crops, animals, and humans. These pests include insects, weeds, fungi, and rodents that can cause significant damage to crops, leading to lower yields and poor-quality produce. By using pesticides, farmers and gardeners can protect their plants from these harmful pests, ensuring healthier growth and better harvests.</p>
                <p>Pesticides play a crucial role in modern agriculture by helping to secure food production and maintain high-quality standards. However, it's essential to use them responsibly to minimize potential risks to humans, animals, and the environment. Proper application, following safety guidelines, and choosing environmentally friendly options can help reduce negative impacts. By using pesticides wisely, we can achieve a balance between effective pest control and sustainable farming practices.</p>

                <h2 className="font-bold py-12">List of Pesticides  Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 px-4">
                    {
                        ProductsPesticides.map((item: ProductCardV2Interface) => (
                            <ProductCardV2 props={item} />
                        ))
                    }
                </div>
            </div>

            <div className="space-y-4 py-12">
                <h1 className="font-bold text-xl">Fertilizer</h1>
                <div className="flex justify-center py-12">
                    <img src={Fertilizer} className="width:20px rounded-lg" />
                </div>
                <p>About <b>Fertilizer:</b> Fertilizers are essential nutrients applied to soil or plants to improve their growth and health. These nutrients include nitrogen, phosphorus, potassium, and various micronutrients required for plants to thrive. Fertilizers can be either natural, like compost and manure, or synthetic, produced in factories. They are crucial for replenishing soil nutrients depleted by farming and ensuring crops have everything they need to grow strong and produce abundant yields.</p>
                <p>Fertilizers come in different forms, such as granules, liquids, and powders, and are applied through various methods like broadcasting, drip irrigation, or foliar spraying. When used correctly, fertilizers can boost crop yields, improve plant health, and enhance the nutritional quality of produce. However, it's important to apply fertilizers judiciously to avoid overuse, which can lead to environmental pollution and damage to ecosystems. By understanding the nutritional needs of crops and the properties of different fertilizers, farmers can optimize their use to promote sustainable agriculture and achieve better results.</p>

                <h2 className="font-bold py-12">List of Fertilizer  Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 px-4">
                    {
                        ProductsFertilizer.map((item: ProductCardV2Interface) => (
                            <ProductCardV2 props={item} />
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default ProductContainer;