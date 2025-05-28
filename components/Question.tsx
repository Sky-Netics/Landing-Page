"use client"

import React from "react"
import { Accordion } from "./Accardion"

export default function Question() {
  const questions= [
    {
      title: "What are your store hours?",
      description: "Our store is open Monday through Saturday from 7:00 AM to 10:00 PM, and Sunday from 8:00 AM to 9:00 PM. Holiday hours may vary."
    },
    {
      title: "Do you offer home delivery?",
      description: "Yes, we offer home delivery for orders over $50. Delivery is available within a 10-mile radius of our store. Orders can be placed through our website or mobile app."
    },
    {
      title: "How does the loyalty program work?",
      description: <ol className="list-decimal space-y-2">
        <li>
          Sign up for free at any register or online
        </li>
        <li>
          Earn 1 point for every $1 spent
          <ol className="list-decimal pl-8 space-y-1 mt-3">
            <li>Redeem 100 points for $1 off your purchase</li>
            <li>Get exclusive member-only deals</li>
            <li>Receive personalized offers based on your shopping habits</li>
          </ol>
        </li>
      </ol>
    },
    {
      title: "Do you accept returns?",
      description: "Yes, we accept returns within 7 days of purchase with a receipt. Perishable items must be returned within 24 hours if there's a quality issue. Please bring the item and your receipt to our customer service desk."
    },
    {
      title: "How can I apply for a job?",
      description: "You can apply for positions at FreshMart through our careers page on the website, or by visiting our store and filling out an application at the customer service desk. We're always looking for enthusiastic team members!"
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
    <section className="mb-8 px-5">
      <div ref={ref} className={`transform transition-all text-start space-y-5 duration-1000 ease-out bg-green-900 rounded-3xl justify-between text-white p-16 gap-5 flex flex-col md:flex-row
        ${visible ? "translate-x-0 opacity-100" : "translate-x-[-4rem] opacity-0"}
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