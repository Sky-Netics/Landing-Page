import Article from "./Article"

export default function Learning() {
  const articles= [
    {
      tag: "Fresh & Healthy",
      image: "/vegetable.jpg",
      title: "Smart Shopping for Fresh Produce",
      description: "Discover the best times to buy fresh fruits and vegetables, how to spot the freshest items, and tips for storing them to maintain freshness longer. Our produce experts share their insider knowledge."
    },
    {
      image: "/supermarket2.jpg",
      tag: "Savings Guide",
      title: "Unlock Maximum Savings at FreshMart",
      description: "Learn the secrets to saving big on your grocery shopping. From timing your visits to match our restocking schedule to combining loyalty points with weekly deals, become a savvy FreshMart shopper."
    },
    {
      image: "/supermarket3.jpg",
      tag: "Seasonal Specials",
      title: "Your Guide to Seasonal Shopping",
      description: "Stay ahead with our comprehensive seasonal shopping guide. Find out which products are at their peak freshness and best value each month, plus exclusive seasonal recipes and meal ideas."
    }
  ]

  return (
    <section className="space-y-10 my-16 px-5 lg:px-15 xl:px-25 flex flex-col justify-center items-center">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-medium">Smart Shopping Made Easy</h2>
        <p className="text-gray-600 max-w-2xl">Discover expert tips, seasonal guides, and money-saving strategies to make your FreshMart shopping experience even better. From fresh produce selection to maximizing your savings, we've got you covered.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) =>(
          <Article key={article.title} tag={article.tag} image={article.image} title={article.title} description={article.description}/>
        ))}
      </div>
      <button
        className="px-7 py-3 border text-[16px] border-green-600 rounded-lg cursor-pointer font-normal hover:text-white hover:bg-green-600"
      >
        Explore More Tips
      </button>
    </section>
  )
}