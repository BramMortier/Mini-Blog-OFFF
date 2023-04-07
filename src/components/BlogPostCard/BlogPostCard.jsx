import React from "react";
import { Link } from "react-router-dom";
import "./blogPostCard.scss";

const BlogPostCard = ({ post }) => {
    return (
        <Link to={`/post/${post.slug}`}>
            <article className="card">
                <img src={post.thumbnail} alt="card thumbnail" className="card__thumbnail" />
                <div className="card__info">
                    <h3 className="card__title small-subtitle">{post.title}</h3>
                    <p className="card__excerpt">{post.excerpt}</p>
                </div>
            </article>
        </Link>
    );
};

export default BlogPostCard;
