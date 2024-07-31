import { g as getBlogList } from "../../../chunks/blog-service.js";
function load() {
  return getBlogList(1);
}
export {
  load
};
