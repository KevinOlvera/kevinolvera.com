import React from "react";
import {Box, Button, Grid, Typography} from "@mui/material";

import BlogPostCard from "./blogPostCard";
import {Post} from "../../utils/models";

interface RecentPostsProps {
    posts: Post[]
}

function RecentPosts(props: RecentPostsProps) {
    return (
        <>
            <Box>
                <Grid
                    container
                    padding={8}
                    spacing={2}
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xs={12} sx={{my: 2}}>
                        <Typography variant={"h5"} sx={{}}>Recent blog posts</Typography>
                    </Grid>
                    {props.posts.map((post) => (
                        <Grid key={`recent_post${post.id}`} item xs={12} sm={12} md={4} sx={{}}>
                            <BlogPostCard post={post}/>
                        </Grid>
                    ))}
                    <Button
                        variant={'contained'}
                        size={'large'}
                        color={'primary'}
                        sx={{my: 5}}
                    >
                        Loading more...
                    </Button>
                </Grid>
            </Box>
        </>
    );
}

export default RecentPosts;