import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

// anklickbarer Artikel in der Listenansicht aus ArticleList
const ArticleItem = ({article}) => {
    return (
        <Link 
        // Link auf Seite die angezeigt werden soll (in /pages enthalten mit /article/id/index.js)
        href="/article/[id]" 
        // as = Import der article.id
        as={`/article/${article.id}`}
        className={articleStyles.card}
        >
            <h3>{article.title} &rarr;</h3>
            <p>{article.excerpt}</p> 
        </Link>
    );
};

export default ArticleItem;