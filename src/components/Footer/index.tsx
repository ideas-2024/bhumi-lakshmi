import { Footer } from "flowbite-react"
import React from "react"
import {BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

export const FooterComponent: React.FC = () => {
    return (
        <Footer container className="px-12 border-y-2">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-4">
                    <div className="">
                    <img
                            width={100}
                            height={200}
                            src="./../../assets//logo-1.png"
                            alt="logo"
                        /> 
                        <p>Bhumi Lakshmi Mishra Krishi Udyog</p>
                        <p>Kotulpur, Bankura - 722141, WB- India</p>
                        <p className="pt-4 text-sm">GST No: 19ABCFB4393G1ZC</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Links" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/">Home</Footer.Link>
                                <Footer.Link href="/products">Crop Solutions</Footer.Link>
                                <Footer.Link href="/contactus">Contact Us</Footer.Link>
                                <Footer.Link href="/contactus">Customer Area</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Contact us" />
                            <Footer.LinkGroup col>
                               <p>Phone no: +91-9800523964</p>
                               <p>Email: bhumilakshmi24@gmail.com</p>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://datawallah.s3.amazonaws.com/UDDYAM1.pdf" target="_blank">Certificate</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="BHUMI LAKSHMI MISHRA KRISHI UDYOG. All rights reserved." year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}