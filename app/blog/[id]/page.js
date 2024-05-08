import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/PopupVideo";
import Link from "next/link";
import { useLoaderData } from "next/navigation";

export default function BlogDetails() {
    const { blogPost } = useLoaderData();

    return (
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Blog Details">
            {blogPost ? (
                <div className="blog__details-area">
                    <div className="container">
                        <div className="blog__inner-wrap">
                            <div className="row">
                                <div className="col-70">
                                    <div className="blog__details-wrap">
                                        <div className="blog__details-thumb">
                                            <img src={`/assets/img/blog/${blogPost.img}`} className="w-100" alt="" />
                                        </div>
                                        <div className="blog__details-content">
                                            <h2 className="title">{blogPost.title}</h2>
                                            {/* Other blog details elements */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-30">
                                    <aside className="blog__sidebar">
                                        {/* Sidebar content */}
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No blog post found.</div>
            )}
        </Layout>
    );
}
