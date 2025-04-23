"use client"

import Comment from "@/components/Comment"
import { motion } from 'framer-motion'

export default function Testimonials() {
  const comments= [
    {
      person: "Paula S",
      description: "Bernie is always knowledgeable and helpful! She is always quick to answer questions and concerns. Looking forward to purchasing a home when we are finished, and Bernie and HomeLoanGurus are helping me reach that goal!"
    },
    {
      person: "Karem L H",
      description: "Bernie is very good at her job! She can answer your questions & calm your concerns! Very helpful. Very responsive & on time. She does what she says she will do, in the timeframe of when she says it will happen, very ethical & honest. She’s a keeper and she SHOULD be well compensated for her work & commitment!"
    },
    {
      person: "Kiva T",
      description: "My experience with Home Loan Gurus has been amazing. They were attentive and quickly responsive. Bernie has helped me tremendously. I would recommend them too everyone."
    },
    {
      person: "Daniel F",
      description: "This company has really gone out of their way to help us navigate through the home buying process not only giving personal attention but being there when we have questions and concerns. Bernie has been amazing!!! Thanks for everything!!!!"
    },
    {
      person: "Brenda H",
      description: "Very professional but super personable. I felt safe to work along side Bernie to get my credit back to good!"
    },
    {
      person: "Eric P",
      description: "Bernie does a great job. Got me connected with a lender and I bought a home when no one else would work with me. Thanks!"
    }
  ]

  const duplicatedComments = [...comments, ...comments, ...comments, ...comments]

  return (
    <section className="space-y-10 my-16">
      <h2 className="text-[40px] text-center">Customer Testimonials</h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-x-4"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {duplicatedComments.map((comment, index) => (
            <Comment key={index} person={comment.person} description={comment.description}/>
          ))}
        </motion.div>
      </div>
    </section>
  )
}