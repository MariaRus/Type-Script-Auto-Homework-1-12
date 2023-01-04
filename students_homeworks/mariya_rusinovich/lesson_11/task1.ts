import fetch from "node-fetch";

const URL: string = "https://jsonplaceholder.typicode.com/posts";

// Promise chaining

const fetchPost = (postId: number) => {
    return new Promise<void>(res => {
        fetch(`${URL}?id=${postId}`)
            .then((response: { json: () => any; }) => response.json())
            .then((resp: any) => {
                console.log(resp);
                res();
            }).catch((err: any) => {
                console.log(`Error message is: ${err}`)
        });
    });
};

const getPosts = (...postIds: number []) => {
    postIds.reduce((accum, id) => {
        return accum.then(() => fetchPost(id));
    }, new Promise<void>(resolve => resolve()))
};

getPosts(15, 23, 7, 3)

// Async / await

const fetchPost2 = async (postId1: number) => {
       const response1: any = await fetch(`${URL}?id=${postId1}`);
       return await response1.json();
};

const getPosts2 = async (...postIds1: number []) => {
   try {
       for (let id1 of postIds1) {
           console.log(await fetchPost2(id1));
       }
   } catch (ex) {
       console.log(`Error message is ${ex}`)
   }
};

getPosts2(15, 23, 7, 3)