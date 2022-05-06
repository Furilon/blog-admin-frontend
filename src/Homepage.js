import { useEffect, useState } from 'react';

export default function Homepage(props) {
    const [published, setPublished] = useState([]);
    const [unpublished, setUnpublished] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = 'https://serene-headland-84051.herokuapp.com/';
            const postsData = await fetch(url);
            const postsJson = await postsData.json();

            let publishedPosts = [];
            let unpublishedPosts = [];
            postsJson.forEach((post) => {
                if (post.published === true) {
                    publishedPosts.push(post);
                    console.log('True');
                } else {
                    unpublishedPosts.push(post);
                    console.log('False');
                }
            });

            setPublished(publishedPosts);
            setUnpublished(unpublishedPosts);
        }
        getPosts();
        console.log(published, unpublished);
    }, []);

    const unpublish = () => {
        // Gotta adjust the back-end for this function to work
    };

    const deletePost = async (e) => {
        const postId = e.target.parentNode.id;
        const url =
            'https://serene-headland-84051.herokuapp.com/posts/' + postId;
        await fetch(url, {
            method: 'DELETE',
        });
    };

    return (
        <>
            <h3>Published</h3>
            <Posts
                posts={published}
                unpublish={unpublish}
                deletePost={deletePost}
            />
            <h3>Unpublished</h3>
            <Posts
                posts={unpublished}
                unpublish={unpublish}
                deletePost={deletePost}
            />
        </>
    );
}

function Posts(props) {
    return props.posts.map((post) => (
        <div className="post" id={post._id}>
            <h5>{post.title}</h5>
            <a href={`/admin/edit/${post._id}`}>Edit</a>
            <button onClick={props.unpublish}>Unpublish</button>
            <button onClick={props.deletePost}>Delete</button>
        </div>
    ));
}
