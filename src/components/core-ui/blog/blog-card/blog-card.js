import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../../assets/png/placeholder.png';
import { timeConverter } from '../../../../utils/timeConverter';
import './blog-card.css';

function BlogCard({ blog, theme }) {
    console.log(blog)

    return (
        <Fade bottom>
            <a className="singleBlog"
                key={blog.id} href={blog.link}
                target="_blank" rel="noreferrer"
                style={{ backgroundColor: theme.quaternary }}>
                <div
                    className="singleBlog--image"
                    style={{ backgroundColor: theme.secondary }}>
                    <img
                        src={blog.thumbnail ? blog.thumbnail : placeholder}
                        alt={blog.title} />
                </div>
                <div className="singleBlog--body">
                    <div className="blog-card-header">
                        <p style={{ color: theme.primary }}>
                            {timeConverter(blog.pubDate)}
                        </p>
                        <div className="public-reaction">
                            <p
                                style={{ color: theme.primary }}
                                className="blog-card-reaction"
                            >
                                <BsHeartFill />
                                <span>{blog.public_reactions_count}</span>
                            </p>
                            {blog.comments_count > 0 &&
                                <p
                                    style={{ color: theme.primary }}
                                    className="blog-card-reaction"
                                >
                                    <FaCommentAlt />
                                    <span>{blog.comments_count}</span>
                                </p>
                            }
                        </div>
                    </div>
                    <h3
                        style={{ color: theme.tertiary, fontWeight: 500 }}>
                        {blog.title}
                    </h3>
                    {/* <h6 style={{ color: theme.tertiary }}>{blog.description}</h6> */}
                </div>
            </a>
        </Fade>
    )
}

export default BlogCard
