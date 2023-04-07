import React, { useState, useEffect } from "react";
import { IconButton } from "../../components";
import { useParams } from "react-router-dom";
import "./postDetailPage.scss";

const PostDetailPage = () => {
    const { slug } = useParams();
    const [postInfo, setPostInfo] = useState({});
    const [highlightedImage, setHighlightedImage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const renderContent = (section, id) => {
        switch (section.type) {
            case "title":
                return (
                    <h1 className="subtitle" key={id}>
                        {section.content}
                    </h1>
                );
            case "subtitle":
                return (
                    <h3 className="section-title" key={id}>
                        {section.content}
                    </h3>
                );
            case "paragraph":
                return (
                    <p className="paragraph" key={id}>
                        {section.content}
                    </p>
                );
            default:
                return (
                    <p className="paragraph" key={id}>
                        {section.content}
                    </p>
                );
        }
    };

    useEffect(() => {
        const fetchPostInfo = async () => {
            try {
                setIsLoading(true);
                const res = await fetch("/database/blogPosts.json");
                const data = await res.json();
                const postInfo = data.filter((post) => {
                    return post.slug === slug;
                });
                setPostInfo(postInfo[0]);
                setHighlightedImage(postInfo[0].thumbnail);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };
        fetchPostInfo();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <React.Fragment>
            <nav className="nav">
                <IconButton />
            </nav>
            <section className="intro">
                <img className="intro__thumbnail" src={highlightedImage} alt="post thumbnail" />
                <div className="intro__gallery">
                    {postInfo.gallery &&
                        postInfo.gallery.map((image, index) => (
                            <img key={index} src={image} onClick={() => setHighlightedImage(image)} alt="gallery image" />
                        ))}
                </div>
            </section>
            <section className="body">{postInfo.body && postInfo.body.map((section, index) => renderContent(section, index))}</section>
        </React.Fragment>
    );
};

export default PostDetailPage;
