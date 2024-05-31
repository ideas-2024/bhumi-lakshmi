import React from "react";

import { CompanyMVG } from "../../shared/constant";
import { VisionCardInterface } from "../../shared/interface";
import { VisionCard } from "../../components/Card/visioncard";

const HomeContainer: React.FC = () => {
    return (
        <div className="py-4 sm:py-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green sm:py-24 sm:px-12">
                    <p className="text-4xl italic text-green-700">Welcome to, </p>
                    <p className=" text-green-700 text-2xl sm:pt-4">Bhumi Lakshmi (BLMKU)</p>
                    <p className="text-xl sm:pt-4">where innovation meets sustainability in the realm of agricultural solutions. From farming to fork, we nourish.</p>
                </div>
                <div className="">
                    <img src="./src/assets/First Image.jpg" className="width:20px rounded-lg" />
                </div>
            </div>


            <div className=" space-y-4 my-12">

                <p>At Bhumi Lakshmi, we pride ourselves on being pioneers in the ﬁeld of all kinds of agricultural commodities including all types Agricultural inputs. With a steadfast commitment to enhancing crop yields while respecting the environment, we have revolutionized farming practices.</p>

                <p>Our journey began with a simple yet powerful vision: To harness the power of nature to create products that promote healthier crops and sustainable agricultural practices. Through relentless research and development, we have perfected a range of Bio Stimulant that nourish plants from the inside out, unlocking their innate potential for growth and resilience.</p>

                <p>What sets us apart is our unwavering dedication to quality and eﬃcacy. Every product that bears the <b>Bhumi Lakshmi</b> stamp undergoes rigorous testing to ensure it meets the highest standards of performance and safety. From formulation to production, we adhere to strict protocols to guarantee consistency and reliability in every batch.</p>

                <p>But our commitment extends beyond just providing superior products. We are advocates for change, leading the charge towards a more sustainable future for agriculture. By promoting organic farming practices and reducing reliance on synthetic inputs, we are helping farmers cultivate healthier soils, produce bountiful harvests, and safeguard the planet for future generations.</p>

                <p>At Bhumi Lakshmi, we believe in the power of collaboration. We work closely with farmers, researchers and industry experts to continually innovate and reﬁne our products, staying at the forefront of agricultural science. Together, we are shaping a world where farming is not just a livelihood, but a force for positive change.</p>

                <p>Join us in our mission to cultivate a greener, more prosperous future. Together, we can nourish the world, one harvest at a time.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12">
                {
                    CompanyMVG.map((item: VisionCardInterface) => (
                        <VisionCard props={item} />
                    ))}
            </div>


            <div className="flex flex-col text-center text-green-500 my-12 sm:my-24 font-bold text-2xl">
                <p>Bhumi Lakshmi Mishra Krishi Udyog</p>
                <p className="text-black">Bloom with Us</p>
                <p>Deal in with All Agri-Commodities</p>
            </div>

        </div>
    )
}

export default HomeContainer;