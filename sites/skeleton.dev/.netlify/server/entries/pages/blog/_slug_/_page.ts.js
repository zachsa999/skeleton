import { a as getBlogPost } from "../../../../chunks/blog-service.js";
const load = ({ params }) => {
  return getBlogPost(params.slug);
};
export {
  load
};
