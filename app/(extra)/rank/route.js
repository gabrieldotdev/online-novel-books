export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const nav = searchParams.get("nav");
  const filteredRanks = ranks.filter((rank) => rank.nav === nav);
  return {
    body: {
      ranks: filteredRanks,
    },
  };
}
