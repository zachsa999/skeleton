const actions = {
  // This action is called when the user clicks the theme button
  setTheme: async ({ cookies, request }) => {
    const formData = await request.formData();
    const theme = formData.get("theme")?.toString() ?? "skeleton";
    cookies.set("theme", theme, { path: "/" });
    return { theme };
  }
};
export {
  actions
};
