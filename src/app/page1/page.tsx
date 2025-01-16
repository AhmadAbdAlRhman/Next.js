
export const metadata = {
    title: "page1"
}
// Define the type for a Post object
interface Post {
    id: number;
    title: string;
}
export default async function Home() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 120,
        },
    });

    const posts: Post[] = await response.json();
    return (
        <div className="k">
            <div>hello world</div>
            {posts.map((post) => (
                <h1 key={post.id} style={{ color: "red" }}>
                    {post.title}
                </h1>
            ))}
        </div>
    );
}
