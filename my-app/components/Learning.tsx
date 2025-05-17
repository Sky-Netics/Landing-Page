import Article from "./Article"

export default function Learning() {
  const articles= [
    {
      tag: "Home Buying",
      image: "/family.png",
      title: "Down Payment Assistance To Purchase A Home",
      description: "HomeLoanGurus' preferred lender partner, Cardinal Financial is offering a down payment assistance program for first time home buyers. Qualification are similar to an FHA loan."
    },
    {
      image: "/phone.png",
      tag: "Credit Improvement",
      title: "Difference Between Vantage Scores and FICO Scores",
      description: "Learn the differences between a Vantage credit score and a FICO credit score."
    },
    {
      image: "/report.png",
      tag: "Rent Reporting",
      title: "Benefits Of HomeLoanGurus' Credit Monitoring Tools",
      description: "HomeLoanGurus offers credit monitoring tools so you can track the increases or decreases of your credit score as you prepare to purchase a home."
    }
  ]

  return (
    <section className="space-y-10 my-16 px-5 lg:px-15 xl:px-25 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-medium">Learning Hub</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) =>(
          <Article key={article.title} tag={article.tag} image={article.image} title={article.title} description={article.description}/>
        ))}
      </div>
      <button
        className="px-7 py-3 border text-[16px] border-blue-400 rounded-lg cursor-pointer font-normal hover:text-white hover:bg-blue-400"
      >
        View All
      </button>
    </section>
  )
}