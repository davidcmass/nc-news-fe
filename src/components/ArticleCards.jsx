import { useEffect, useState } from "react";
import { fetchArticles } from '../Api'

const ArticleCards = ({ setIsLoading }) => {
    const [articles, setArticles] = useState([])
      useEffect(() => {
        setIsLoading(true)
        fetchArticles()
        .then((articles) => {
          setArticles(articles)
      })
      setIsLoading(false)
    }, [])
  
    return <>
    {
    articles.map((article) => {
      if (article.article_id < 10) {
      return <div className='articleCard flex flex-col p-5 text-left gap-1' key={article.article_id}>
      <img className='pb-2' src={article.article_img_url} alt="image" />
        <p className='topic'>{article.topic}</p>
      <a href={`Articles/${article.article_id}`}><h2 className="articleTitle">{article.title}</h2></a>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae quo tenetur similique, hic dolore at minima quis commodi.</p>
      <p className="author">By {article.author}</p>
      </div>
      }
    })
    }
   </>
  }

  export default ArticleCards