import { TopRanking } from "../ranking-tops/top-ranking";

export function Popular({ data }) {
  const sortedVote = data.sort((a, b) => b.vote - a.vote);

  return (
    <section className="space-y-4">
      <section className="flex justify-between">
        <TopRanking data={sortedVote} type={"nominations"} />
        <TopRanking data={sortedVote} type={"newly-released"} />
        <TopRanking data={sortedVote} type={"number-of-words"} />
        {/* <TopRanking sortedData={sortedAccess} type={"access"} /> */}
      </section>
      <section className="flex justify-between">
        <TopRanking data={sortedVote} type={"number-of-words"} />
        <TopRanking data={sortedVote} type={"nominations"} />
        <TopRanking data={sortedVote} type={"newly-released"} />
        {/* <TopRanking sortedData={sortedAccess} type={"access"} /> */}
      </section>
    </section>
  );
}
