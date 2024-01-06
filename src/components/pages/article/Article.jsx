import React, { useEffect, useState } from 'react'
import './Article.css'
import { Link, useParams } from 'react-router-dom';
import Loading from '../../layout/loading/Loading';
import { getArticle } from '../../../services/articles/articlesService';

import { BsFillPatchCheckFill } from 'react-icons/bs'
import Footer from '../../layout/footer/Footer';
import ShareIcons from '../../shared/shareIcons/shareIcons';
import HeadImage from '../../shared/headImage/HeadImage';

const Article = () => {
    const { id } = useParams();


    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articleData = await getArticle(id);
                setArticle(articleData);

                setIsLoading(false);

            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchData();
    }, [id]);


    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='article'>
            <section className='content'>
                <section className='label'>
                    <p className='category'>{article.category}</p>
                    <ShareIcons />
                </section>
                <div className='header'>
                    <h1>{article.title}</h1>
                    <div className='details'>
                        <p className='source'>
                            {article.source}
                            <span className='icon'>
                                <BsFillPatchCheckFill />
                            </span>
                        </p>
                        <p className='date'>{article.date}</p>
                    </div>
                </div>
                <img className="article-image" src={`../../src/assets/articles/${id}.png`} alt={`Article ${id}`} />
                <section className='article-content'>
                    {article.content.map(content => (
                        <p key={article.id}>{content}</p>
                    ))}
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Article