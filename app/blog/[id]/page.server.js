import data from "@/util/blog.json";

// Loader function to fetch blog data based on the ID
export async function loader({ params }) {
    const blogPost = data.find(post => post.id.toString() === params.id);
    return { blogPost };
}