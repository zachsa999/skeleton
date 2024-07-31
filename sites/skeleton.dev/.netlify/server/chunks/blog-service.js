const baseUrl = "https://skeleton.ghost.io/ghost/api/content";
const ghostKey = "c76a270f160dbf241b27b81dc2";
const headers = { "Accept-Version": "v5.0" };
async function getBlogList(page = 1) {
  const http = await fetch(`${baseUrl}/posts/?key=${ghostKey}&page=${page}&include=tags`, { headers });
  const res = await http.json();
  if (http.ok)
    return res;
  throw new Error(http.statusText);
}
async function getBlogPost(slug) {
  const http = await fetch(`${baseUrl}/posts/slug/${slug}/?key=${ghostKey}&include=tags,authors`, { headers });
  const res = await http.json();
  if (http.ok)
    return res;
  throw new Error(http.statusText);
}
function blogDateFormatter(date) {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const d = new Date(date);
  return d.toLocaleDateString("en-US", options);
}
export {
  getBlogPost as a,
  blogDateFormatter as b,
  getBlogList as g
};
