"use client"

import { motion } from 'framer-motion'
import Comment from "@/components/Comment"

export default function Testimonials() {
  const comments= [
    {
      person: "Sarah M.",
      description: "The fresh produce section is amazing! Always stocked with the freshest fruits and vegetables. The staff is friendly and helpful. I love shopping here for my family's weekly groceries."
    },
    {
      person: "John D.",
      description: "Great selection of organic products and the prices are very competitive. The store is always clean and well-organized. Their loyalty program has saved me so much money!"
    },
    {
      person: "Maria L.",
      description: "I appreciate how they maintain high standards of cleanliness and organization. The bakery section has the best bread in town, and the deli counter staff is always so helpful."
    },
    {
      person: "David K.",
      description: "The online ordering and curbside pickup service is a game-changer! Everything is always fresh and exactly as ordered. Perfect for busy families like mine."
    },
    {
      person: "Emma R.",
      description: "Their weekly specials are fantastic, and I love the recipe cards they provide. The staff is knowledgeable about products and always ready to help. My favorite supermarket!"
    },
    {
      person: "Michael T.",
      description: "The meat and seafood department is top-notch. Quality products and the butchers are very helpful with special requests. Great place for all your grocery needs!"
    }
  ]

  const duplicatedComments = [...comments, ...comments, ...comments, ...comments]

  return (
    <section className="space-y-10 my-16">
      <h2 className="text-[40px] text-center font-bold text-gray-800">What Our Customers Say</h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-x-4"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: typeof window !== "undefined" && window.innerWidth> 640 ? 30 : 10,
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