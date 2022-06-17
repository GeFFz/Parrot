import React from 'react';
import Container from '../../components/Container'
import FeedContent from '../../components/FeedContent';
import FeedContent2 from '../../components/FeedContent/FeedContent2';
import FeedContent3 from '../../components/FeedContent/FeedContent3';
import FeedContent4 from '../../components/FeedContent/FeedContent4';
import Header from '../../components/Header'
import NewPost from '../../components/NewPost'

const Feed: React.FC = () => {
    return (
        <Container>
            <Header />
            <NewPost />
            <FeedContent />
            <FeedContent2 />
            <FeedContent3 />
            <FeedContent4 />
        </Container>
    )
}

export default Feed;