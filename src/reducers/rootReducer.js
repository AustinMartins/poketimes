const initState  = {
    posts:[
        {
            id: 98,
            title: "laboriosam dolor voluptates",
            body: "doloremque ex facilis sit sint culpa soluta assumenda eligendi non ut eius nsequi ducimus vel quasi veritatis est dolores"
        },
        {
            id: 99,
            title: "temporibus sit alias delectus eligendi possimus magni",
            body: "quo deleniti praesentium dicta non quod aut est molestias molestias et officia quis nihil itaque dolorem quia"
        },
        {
            id: 100,
            title: "at nam consequatur ea labore ea harum",
            body: "cupiditate quo est a modi nesciunt soluta ipsa voluptas error itaque dicta in autem qui minus magnam et distinctio eum accusamus ratione error aut"
        }
    ]
};

const rootReducer = (state = initState,action) =>{
    if (action.type ==="DELETE_POST")
    {
        let newPost = state.posts.filter(post =>{
            return action.id  !== post.id
        });

        return{
            ...state,
            posts: newPost
        }
    }
    return state
};

export default rootReducer;