import Link from 'next/link';
import {useRouter} from 'next/router';
import {server} from '../../../config/index';
import Meta from '../../../components/Meta';

// Artikel in der Einzelansicht, nach dem er aus der ArticleList angeklickt wurde
// prop {article} aus getStaticProps unten
const article = ({article}) => {
    // const router = useRouter();
    // const {id} = router.query;

    return (
        <>
            <Meta 
                title={article.title}
                description={article.excerpt}
            />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    );
};

// Artikeldaten werden geholt und als props weitergegeben
export const getStaticProps = async (context) => {
    const res = await fetch(
        `${server}/api/articles/${context.params.id}`
        )

    const article = await res.json();

    return {
       props: {
        article
       } 
    }
}

// erforderlich bei Verwendung von getStaticProps
export const getStaticPaths = async () => {
    const res = await fetch(
        `${server}/api/articles`
        )

    const articles = await res.json();

    const ids = articles.map(article => article.id);

    const paths = ids.map(id => ({
        params: {id: id.toString()}
    })
    )

    return {
        paths,
        fallback: false
    }
}

// mit externer API
// export const getStaticProps = async (context) => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//         )

//     const article = await res.json();

//     return {
//        props: {
//         article
//        } 
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts`
//         )

//     const articles = await res.json();

//     const ids = articles.map(article => article.id);

//     const paths = ids.map(id => ({
//         params: {id: id.toString()}
//     })
//     )

//     return {
//         paths,
//         fallback: false
//     }
// }

export default article;