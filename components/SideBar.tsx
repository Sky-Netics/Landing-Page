"use client"

import { Color } from "./Color"
import { Switch } from "./Switch"
import { CheckBox } from "./Checkbox"
import { IoSearch } from "react-icons/io5"
import { SideBarAccordion } from "./SideBarAccordion"

const SideBar= () =>{
    
    return (
        <div className="px-5 py-4 border border-gray-300 rounded-lg">
            <h2 className="font-medium text-2xl mb-5">Filters</h2>
            <Switch title="Shipping today"/>
            <Switch title="Shipping seller"/>
            <Switch title="Available items only"/>
            <SideBarAccordion title="Brand" description={
                <div className="space-y-2">
                    <div className="relative mt-3">
                        <input type="search" className="pr-2 pl-7 h-11 w-full text-sm rounded-lg border border-gray-300 focus:outline-none" placeholder="Search..." onFocus={(e) => (e.target.nextElementSibling as HTMLElement).style.display = 'none'}
                            onBlur={(e) => e.target.value === '' && ((e.target.nextElementSibling as HTMLElement).style.display = 'block')}
                        />
                        <button type="submit" className="absolute top-3 start-2 text-lg font-medium">
                            <IoSearch/>
                        </button>
                    </div>
                    <CheckBox title="Beauty"/>
                    <CheckBox title="Fruit"/>
                    <CheckBox title="Laptop"/>
                    <CheckBox title="Clothes"/>
                </div>
            }/>
            <SideBarAccordion title="Color" description={
                <div className="flex flex-wrap mt-3 px-2 gap-x-3 gap-y-1.5">
                    <Color name="white" type="simple"/>
                    <Color name="black" type="simple"/>
                    <Color name="purple" type="gradient"/>
                    <Color name="blue" type="gradient"/>
                    <Color name="red" type="gradient"/>
                    <Color name="yellow" type="gradient"/>
                </div>
            }/>
            <SideBarAccordion title="Price" description={
                <>
                    <input type="range" min={0} max={100} step={25} className="range w-full accent-blue-500"/>
                    <div className="flex justify-between px-2.5 text-xs text-gray-300">
                        {Array(5).fill("|").map((item, index) =>(
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                </>
            }/>
        </div>
    )
}
export default SideBar;