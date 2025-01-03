import landmarkData from "./data.json";

export const allLandmarksReducedData = landmarkData.data.map((lm) => {
  return {
    id: lm.id,
    title: lm.title,
    title_short: lm.title_short,
    title_stub: lm.title_stub,
    number: lm.number,
    group: lm.group,
    slug: lm.slug,
  };
});
