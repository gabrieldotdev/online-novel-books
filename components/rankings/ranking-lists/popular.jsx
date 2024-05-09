import { TopRanking } from "../ranking-tops/top-ranking";

const IMAGE_TYPE = {
  vn_t1: "nominations",
  vn_t2: "newly-released",
  vn_t3: "number-of-words",
};

export function Popular({ data }) {
  const sortedVote = data.sort((a, b) => b.vote - a.vote);

  return (
    <section className="space-y-4">
      <section className="flex justify-between">
        <TopRanking data={sortedVote} type={IMAGE_TYPE.vn_t1} />
        <TopRanking data={sortedVote} type={IMAGE_TYPE.vn_t2} />
        <TopRanking data={sortedVote} type={IMAGE_TYPE.vn_t3} />
        {/* <TopRanking sortedData={sortedAccess} type={"access"} /> */}
      </section>
      <section className="flex justify-between">
        <TopRanking data={sortedVote} type={IMAGE_TYPE.vn_t1} />
        <TopRanking data={sortedVote} type={IMAGE_TYPE.vn_t2} />
        <TopRanking data={sortedVote} type={IMAGE_TYPE.vn_t3} />
      </section>
    </section>
  );
}
