import React, {useEffect, useState} from "react";

import {data} from "../database";
import RecentPosts from "./blog/recentPosts";
import Footer from "./Footer";
import MainPost from "./blog/mainPost";
import {Client} from "@notionhq/client";
import {getPosts, getPostsAxios} from "../utils/notion";

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