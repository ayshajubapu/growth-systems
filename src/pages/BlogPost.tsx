import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogListing from "@/components/blog/BlogListing";
import BlogArticle from "@/components/blog/BlogArticle";
import { getPostBySlug } from "@/data/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BlogPost() {
  const { slug } = useParams<{ slug?: string }>();

  if (!slug) return <BlogListing />;

  const post = getPostBySlug(slug);
  if (!post) {
    return (
      <main className="bg-background text-foreground min-h-screen flex flex-col">
        <Helmet>
          <title>Article not found | SmartPixel</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Nav />
        <div className="flex-1 flex items-center justify-center px-6 text-center pt-24">
          <div className="space-y-4 max-w-md">
            <p className="text-[10px] uppercase tracking-widest text-accent font-bold">404</p>
            <h1 className="font-display text-3xl font-bold text-foreground">Article not found</h1>
            <p className="text-muted-foreground">
              This post may have moved or been unpublished. Browse the blog for our latest playbooks.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Back to blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return <BlogArticle post={post} />;
}
