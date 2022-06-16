import React from 'react';
import Container from '../../components/Container'
import FeedContent from '../../components/FeedContent';
import Header from '../../components/Header'
import NewPost from '../../components/NewPost'

const Feed: React.FC = () => {
    return (
        <Container>
            <Header />
            <NewPost />
            <FeedContent />
        </Container>
    )
}

export default Feed;