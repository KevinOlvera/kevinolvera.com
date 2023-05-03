import React from "react";

import {data} from "../database";
import RecentPosts from "./blog/recentPosts";
import Footer from "./Footer";
import MainPost from "./blog/mainPost";

const posts = data;

function Blog() {
    return (
        <>
            <MainPost post={posts[0]}/>
            <RecentPosts posts={posts}/>
            <Footer/>
        </>
    )
}

export default Blog