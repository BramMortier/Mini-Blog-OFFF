import React, { useState, useEffect } from "react";
import { BlogPostCard } from "../../components";
import "./homepage.scss";

const Homepage = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const res = await fetch("/database/blogPosts.json");
            const data = await res.json();
            setBlogPosts(data);
        };
        fetchBlogPosts();
    }, []);

    const filteredPosts = blogPosts.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        const excerptMatch = post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || excerptMatch;
    });

    return (
        <React.Fragment>
            <section className="blogposts">
                <div className="blogposts__intro">
                    <h1 className="title">OFFF Barcelona</h1>
                    <p>
                        Een sneak peak van al onze avontuurtjes tijdens de week in Barcelona <span className="highlighted">@OFFFestival.</span>
                    </p>
                    <input
                        type="text"
                        placeholder="Search posts"
                        className="blogposts__search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <ul className="blogposts__list">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => <BlogPostCard key={post.id} post={post} />)
                    ) : (
                        <div className="blogposts__no-matches">No matching posts... :(</div>
                    )}
                </ul>
            </section>
        </React.Fragment>
    );
};

export default Homepage;
