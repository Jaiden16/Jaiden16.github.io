const posts = [
    {id:"1",
    title: "Hack-A-Thon 2020",
    content:``},
]

const getAll = () => posts;

const getOne = id => posts.find(post => post.id === id)

export default {
    getOne,
    getAll
}