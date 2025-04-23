import { FaFacebook } from "react-icons/fa6"

export const Footer: React.FC= () =>{
    const mainPages= [
        "Home",
        "Rent Reporting",
        "Buy a Home",
        "FAQs",
        "Learning Hub"
    ]
    const pages= [
        "Referral",
        "Privacy Policy",
        "Terms & Conditions",
        "Credit Consent",
        "Built by Quarter Digital"
    ]
    
    return(
        <footer className="px-6 sm:px-9 md:px-12 lg:px-16 xl:px-32 text-[12px]">
            <div className="py-6 text-gray-500 flex flex-col lg:flex-row gap-y-4 justify-between items-center">
                <span className="flex items-center gap-x-2">
                    <span className="bg-black text-white text-3xl font-semibold size-7 flex justify-center items-center">/</span>
                    <h2 className="text-lg font-semibold text-black"><span className="text-red-500">HOMELOAN</span>GURUS</h2>
                </span>
                <ul className="flex flex-col sm:flex-row items-center gap-5 text-black text-[16px] font-medium">
                    {mainPages.map((page, index) =>(
                        <li key={index} className="cursor-pointer">{page}</li>
                    ))}
                    <FaFacebook className="text-xl cursor-pointer hover:text-blue-400"/>
                </ul>
            </div>
            <div className="py-6 border-y border-y-gray-300 text-gray-500 flex justify-between items-center flex-col gap-y-2 lg:flex-row">
                <p>© 2024 HomeLoanGurus. All rights reserved. | 1560 E Southlake Blvd, Suite 100, Southlake, TX  76092</p>
                <ul className="flex gap-x-5 flex-wrap sm:flex-nowrap">
                    {pages.map((page, index) =>(
                        <li key={index} className="cursor-pointer text-nowrap">{page}</li>
                    ))}
                </ul>
            </div>
            <div className="py-6 text-gray-500">
                <p>HomeLoanGurus.com is not a mortgage lender or mortgage bank and does not directly offer any mortgage products. This site is not an advertiser for consumer credit as defined in 12 CFR1026.2(a)(2).</p>
            </div>
        </footer>
    )
}