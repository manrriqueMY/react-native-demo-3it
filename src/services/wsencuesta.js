import { get, post } from "./api";

export const report = async () => {
  const result = await get({ path: "/poll/report" });
  return {
    ...result,
    data: [
      ...result.data.map((item) => ({
        total: item[0],
        music: item[1],
      })),
    ],
  };
};
export const save = async ({ email, music }) =>
  await post({ path: "/poll/save", params: { email, music } });
