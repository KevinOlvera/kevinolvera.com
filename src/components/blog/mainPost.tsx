import React from "react";
import {Box, Chip, Grid, Link, Paper, Typography} from "@mui/material";

import {kevin} from "../../config/theme";
import {Post} from "../../utils/models";

interface MainPostProps {
    post: Post
}

function MainPost(props: MainPostProps) {
    return (
        <>
            <Paper
                elevation={1}
                sx={{
                    position: 'relative',
                    m: 2,
                    p: 2,
                    minHeight: 'calc(100vh - 64px - 64px - 6px)',
                    color: kevin.colors.secondary.zircon,
                    backgroundImage: `url(${props.post.coverImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: 'inset -1em 1em 10em 1em #000',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                        backgroundColor: kevin.colors.primary.firefly,
                        opacity: '0.5',
                        borderRadius: 'inherit',
                    }
                }}
            >
                <Grid
                    container
                    padding={2}
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='flex-end'
                    sx={{
                        position: 'relative',
                        minHeight: 'calc(100vh - 64px - 64px - 6px)',
                    }}
                >
                    <Grid item xs={8}>
                        <Box sx={{my: 2}}>
                            {props.post.tags.map((tag) => (
                                <Chip
                                    key={`post_tag_${tag}`}
                                    label={tag}
                                    color={'primary'}
                                    clickable={true}
                                    sx={{
                                        mr: 1,
                                        mb: 2,
                                    }}
                                />
                            ))}
                            <br/>
                            <Link
                                href={props.post.url}
                                sx={{
                                    mb: 2,
                                    fontFamily: 'Cabin',
                                    fontSize: '3rem',
                                    color: kevin.colors.secondary.zircon,
                                    textDecoration: 'none',
                                    pointer: 'cursor',
                                }}
                            >
                                {props.post.title}
                            </Link>
                            <Typography variant={"h6"} sx={{width: '90%'}}>{props.post.description}</Typography>

                            <Typography variant={"body1"} sx={{mb: 1}}>
                                By&nbsp;
                                <Link
                                    href={'https://blog.kevinolvera.com/user/' + props.post.author.replace(' ', '_').toLowerCase()}
                                    sx={{
                                        mb: 2,
                                        fontFamily: 'Cabin',
                                        color: kevin.colors.secondary.zircon,
                                        textDecoration: 'none',
                                        pointer: 'cursor',
                                    }}
                                >
                                    {props.post.author}
                                </Link>
                            </Typography>
                            <Typography variant={"body1"} sx={{mb: 1}}>{props.post.readingTime} read</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default MainPost;