const load = async ({ fetch }) => {
  const getContributors = async () => {
    return [];
  };
  return { contributors: await getContributors() };
};
export {
  load
};
