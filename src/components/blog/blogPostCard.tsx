import React from "react";
import {Card, CardMedia, Typography} from "@mui/material";

import {kevin} from "../../config/theme";

import {Post} from "../../utils/models";

interface BlogPostCardProps {
    post: Post
}

function BlogPostCard(props: BlogPostCardProps) {
    return (
        <>
            <Card
                sx={{
                    height: 250,
                    mb: 2,
                }}
            >
                <CardMedia
                    sx={{
                        height: '100%',
                        position: 'relative',
                        boxShadow: 'inset 1em 1em 10em 1em #000',
                        '&:hover::before': {
                            cursor: 'pointer',
                            opacity: '0.2',
                            backgroundColor: kevin.colors.primary.firefly,
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                            bottom: '0px',
                            left: '0px',
                            borderRadius: 'inherit',
                        }
                    }}
                    component={'a'}
                    href={props.post.url}
                    target={'_blank'}
                    image={props.post.coverImage}
                    title={props.post.slug}
                />
            </Card>
            <Typography
                variant={"h6"}
                component={'a'}
                href={props.post.url}
                target={'_blank'}
                sx={{
                    my: 2,
                    '&:hover': {
                        color: kevin.colors.primary.emerald,
                        cursor: 'pointer',
                    },
                    fontFamily: 'Cabin',
                    textDecoration: 'none',
                    color: 'inherit',
                }}
            >
                {props.post.title}
            </Typography>
            <Typography
                variant={'body1'}
                sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }}
            >
                {props.post.description}
            </Typography>
            <Typography
                variant={'body1'}
                sx={{my: 1}}
            >
                {props.post.author} <b style={{fontSize: 20}}>·</b> {props.post.creationDate}
            </Typography>
        </>
    );
}

export default BlogPostCard;