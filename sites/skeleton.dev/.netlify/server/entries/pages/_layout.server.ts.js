import { d as private_env } from "../../chunks/shared-server.js";
const load = async () => {
  return { vercelEnv: private_env.VERCEL_ENV };
};
export {
  load
};
