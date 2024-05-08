import { getCategories } from "@/app/_api/getCategories";
import { getNovels } from "@/app/_api/getNovels";
import { EncyclopediaRankings } from "@/components/rankings/encyclopedia-rankings";
import { Shell } from "@/components/wrappers/shell-variants";
import { siteConfig } from "@/configs/app";

export default async function Page() {
  const novels = await getNovels();
  const categories = await getCategories();
  const workTabs = siteConfig.rankTheWorkTabs;
  const authorTabs = siteConfig.authorRankingTabs;
  const tabs = [...workTabs, ...authorTabs];

  return (
    <Shell as="div" variant="none" className="max-w-[1200px] mx-auto">
      <EncyclopediaRankings
        data={{
          novelData: novels,
          categoryData: categories,
        }}
        tabs={tabs}
        workTabs={workTabs}
        authorTabs={authorTabs}
      />
    </Shell>
  );
}
