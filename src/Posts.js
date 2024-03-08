import {memo} from "react";

const Posts = memo(function Posts() {
    const posts = []
    for (let i = 1; i < 500; i++) {
        posts.push(buildPost(i))
    }
    return (
        <>
            {posts}
        </>
    )
})

function buildPost(index) {
    let startTime = performance.now()
    while(performance.now() - startTime < 1){

    }
    return (
        <div key={index}>{index}</div>
    )
}

export default Posts