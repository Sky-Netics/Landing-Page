"use client"

import React from "react"
import { Accordion } from "./Accardion"

export default function Question() {
  const questions= [
    {
      title: "What is rent reporting?",
      description: "Rent reporting allows renters to report their on time rent payments to the credit bureaus on a monthly basis, which establishes a new trade line on their credit report. Since rent payments are not automatically reported to the credit bureaus by property management companies, HomeLoanGurus provides the service to verify the rent payments and submit the data to the credit bureaus. This allows renters assistance in building a stronger credit profile by reporting an activity they are already doing."
    },
    {
      title: "How does it work?",
      description: <ol className="list-decimal">
        <li>
          Step 1:  To enroll, you will need to speak with a HomeLoanGurus representative by calling 469-828-2393. During your call, you will be sent an enrollment link to complete the enrollment process. Due to compliance requirements, when you enroll, you will need to provide the following:
          <ol className="list-decimal pl-8 my-4">
            <li>Your Social Security Number, date of birth, address where you rent, and a copy of your lease agreement.</li>
            <li>You will need to confirm your identity and/or provide a copy of your ID if requested.</li>
            <li>
              You will need to link your bank account from which your rent payment is made. This is done through Plaid during the enrollment process.
            </li>
          </ol>
          <ul className="list-disc pl-12 mb-4">
            <li>
              Only payments made through your bank, Zelle, Cash App, Venmo, or check can be accepted. We cannot accept or confirm payments made by cash, money orders, or cashiers checks.
            </li>
          </ul>
        </li>
        <li className="mb-2">
          Step 2:  Once enrollment is complete, and you have provided a copy of your Lease, HomeLoanGurus will verify the data provided and will activate your rent reporting. It may take up to 48 hours to activate your rent reporting after we receive a copy of your Lease. It is important to provide a copy of your Lease in a timely manner to avoid any reporting delays. You can upload a copy during the enrollment process, or you can return to your account and upload it later.
        </li>
        <li>
          Step 3:  Once your account is verified and activated, HomeLoanGurus will report your current and past rental payments to the credit bureaus. Using your credit monitoring dashboard in your account, you will be able to see a new rental tradeline on your credit report. As you continue to pay your rent, you will see additional payments added to your credit report. Important:  HomeLoanGurus can only report your successful rent    payments as long as your account is connected to your form of payment with Plaid. If you receive a notification from HomeLoanGurus that your Plaid connection needs updated, be sure to reconnect it.
        </li>
      </ol>
    },
    {
      title: "What are the benefits of rent reporting?",
      description: "Credit bureaus are now accepting rent payment data, and that rent payment data can be established as a new rental tradeline on your credit report. Each positive tradeline on your credit report can help you improve or build your credit. You are already paying your rent monthly, so it is an easy way to receive the credit score benefits by reporting it. Even though every person is different, customers have seen their scores increase by over 105 points during the period of their Lease. With a higher credit score, you can reach your goals of qualifying to purchase a home and rent reporting has been proven to help people accomplish that."
    },
    {
      title: "Who is eligible for rent reporting?",
      description: <ol className="list-decimal space-y-2">
        <li>
          Most people are eligible for rent reporting, and the requirements are simple. You need to have an active Lease, and you have to pay your rent through your bank account or an account linked to your bank account.
        </li>
        <li>
          What is not acceptable:some tex
          <ol className="list-decimal pl-8 space-y-1 mt-3">
            <li>You have to be renting a residential property. Commercial properties do not qualify.</li>
            <li>
              You cannot be the owner of the property you are trying to report rent payments on. Meaning, you cannot be on the title or deed of the property.
            </li>
            <li>An invalid Lease agreement.</li>
          </ol>
        </li>
      </ol>
    },
    {
      title: "How do I get started?",
      description: "Call HomeLoanGurus at to start your enrollment and account verification."
    }
  ]

  const ref= React.useRef(null)
    const [visible, setVisible] = React.useState(false)
  
    React.useEffect(() =>{
      const observer= new IntersectionObserver(
        ([entry]) =>{
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect()
          }
        }
      )
      if (ref.current) observer.observe(ref.current);
    }, [])

  return (
    <section className="px-4 mb-8">
      <div ref={ref} className={`transform transition-all text-start space-y-5 duration-1000 ease-out bg-blue-950 rounded-3xl justify-between text-white p-16 gap-5 flex flex-col md:flex-row
        ${visible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}
      `}>
        <h2 className="text-[28px] md:text-[40px]">Frequently Asked Questions</h2>
        <div className="max-w-[800px] w-full">
          {questions.map((question, index) =>(
            <Accordion key={index} title={question.title} description={question.description}/>
          ))}
        </div>
      </div>
    </section>
  )
}