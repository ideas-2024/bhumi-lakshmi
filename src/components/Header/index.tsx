
import React from "react";
import { Dropdown, Navbar } from "flowbite-react";

export const HeaderComponent: React.FC = () => {
    return (
        <Navbar rounded className="shadow-sm">
            <Navbar.Brand href="/">
                <img src="./../../assets//logo-1.png" className="mr-3 h-20 sm:h-20" alt="Bhumi Lakshmi" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bhumi Lakshmi</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" style={{padding:"10px", borderRadius:"5px"}}>
                    Home
                </Navbar.Link>
                <Dropdown label="Crop Solutions" placement="bottom" style={{backgroundColor:"transparent", color:"black",  }}> 

                    <Dropdown label="PGR" placement="right" style={{backgroundColor:"transparent", color:"black", width:"12rem" }}>
                        <Dropdown.Item href="/product/1">Diamond</Dropdown.Item>
                        <Dropdown.Item  href="/product/2">Silver Plus</Dropdown.Item>
                        <Dropdown.Item href="/product/3">Bhumi-Zyme</Dropdown.Item>
                        <Dropdown.Item href="/product/4">AMRIT</Dropdown.Item>
                        <Dropdown.Item href="/product/5">Suraksha</Dropdown.Item>
                        <Dropdown.Item href="/product/6">Stiker</Dropdown.Item>
                    </Dropdown>
                    <Dropdown label="PESTICIDE" placement="right" style={{backgroundColor:"transparent", color:"black", width:"12rem", alignItems:"center" }}>
                        <Dropdown.Item>Insecticides</Dropdown.Item>
                        <Dropdown.Item>Organophosphate</Dropdown.Item>
                        <Dropdown.Item>Herbicides</Dropdown.Item>
                        <Dropdown.Item>Carbamates</Dropdown.Item>
                        <Dropdown.Item>Fungicides</Dropdown.Item>
                        <Dropdown.Item>Pyrethroids</Dropdown.Item>
                        <Dropdown.Item>Rodenticides</Dropdown.Item>
                        <Dropdown.Item>Bactericides</Dropdown.Item>
                        <Dropdown.Item>Biochemical Pesticides</Dropdown.Item>
                        <Dropdown.Item>Biopesticides</Dropdown.Item>
                    </Dropdown>
                    <Dropdown label="FERTILIZER" placement="right" style={{backgroundColor:"transparent", color:"black", width:"12rem" }}>
                        <Dropdown.Item>Organic Fertilizers </Dropdown.Item>
                        <Dropdown.Item>Inorganic Fertilizers</Dropdown.Item>
                        <Dropdown.Item>Nitrogen Fertilizers</Dropdown.Item>
                        <Dropdown.Item>Phosphorus Fertilizers</Dropdown.Item>
                        <Dropdown.Item>Potassium Fertilizers</Dropdown.Item>
                        <Dropdown.Item>Livestock Manure</Dropdown.Item>
                        <Dropdown.Item>Compost</Dropdown.Item>
                        <Dropdown.Item>Micronutrient</Dropdown.Item>
                    </Dropdown>
                </Dropdown>
                <Navbar.Link href="/contactus" style={{padding:"10px", borderRadius:"5px"}}>Contact Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}