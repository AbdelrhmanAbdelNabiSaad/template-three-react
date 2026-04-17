
import cat1 from '../assets/cat-01.jpg'
import cat2 from '../assets/cat-02.jpg'
import cat3 from '../assets/cat-03.jpg'
import cat4 from '../assets/cat-04.jpg'
import cat5 from '../assets/cat-05.jpg'
import cat6 from '../assets/cat-06.jpg'
import cat7 from '../assets/cat-07.jpg'
import cat8 from '../assets/cat-08.jpg'
import ArticleBox from "./ArticleBox";

function Articles() {

    const articles = [
        { image: cat1, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
        { image: cat2, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
        { image: cat3, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
        { image: cat4, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
        { image: cat5, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
        { image: cat6, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
        { image: cat7, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
        { image: cat8, title: "Test Title", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit" },
    ];

    return ( 
        <>
            <div className="articles">
                <h2 className="main-title">Articles</h2>
                <div className="container">
                    {articles.map((article, index) => (
                        <ArticleBox article={article} key={index} />
                    ))}
                </div>
            </div>
        </>
     );
}

export default Articles;