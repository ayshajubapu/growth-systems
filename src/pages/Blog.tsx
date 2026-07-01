import { Navigate } from "react-router-dom";

// /blog is now handled directly by BlogPost (which renders
// the directory view when no slug param is present).
// This redirect exists only to preserve any stale bookmarks or links.
const Blog = () => <Navigate to="/blog" replace />;

export default Blog;