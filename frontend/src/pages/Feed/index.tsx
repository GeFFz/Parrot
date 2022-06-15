import React from 'react';
import Container from '../../components/Container'
import Header from '../../components/Header'
import NewPost from '../../components/NewPost'

const Feed: React.FC = () => {
    return (
        <Container>
            <Header />
            <NewPost />
        </Container>
    )
}

export default Feed;