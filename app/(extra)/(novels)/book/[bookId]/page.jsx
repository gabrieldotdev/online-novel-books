import { BookInf } from "@/components/information/books/book-inf";
import { ListOfContents } from "@/components/information/books/list-of-contents";
import { OtherRecommendedWorks } from "@/components/information/books/other-recommended-works";
import { PersonalInf } from "@/components/information/books/personal-inf";
import { SimilarRecommendations } from "@/components/information/books/similar-recommendations";
import { SomeOtherWorks } from "@/components/information/books/some-other-works";
import { StoryLine } from "@/components/information/books/story-line";
import { WorksHonor } from "@/components/information/books/works-honor";
import { Link } from "@/components/primitives/link";
import { Ads } from "@/components/visuals/ads";
import { Shell } from "@/components/wrappers/shell-variants";
import { honors } from "@/configs/other";
import { getNovelById } from "@/data/get-novels";
import { fullURL } from "@/data/meta/builder";

export const metadata = {
  metadataBase: fullURL(),
  title: "Chi tiết tiểu thuyết",
  description: "Một số thông tin chi tiết về tiểu thuyết",
};

export default async function BookPage({ params }) {
  const novel = await getNovelById(params.bookId);
  // const [posts, albums] = await Promise.all([postsPromise, albumsPromise]);

  return (
    <Shell as="div" variant="none" className="max-w-[1200px] mx-auto">
      <section className="flex items-center w-[inherit]">
        <BookInf />
        <PersonalInf />
      </section>
      <section className="flex items-start w-[inherit] gap-x-4">
        <div className="flex-grow space-y-4">
          <StoryLine />
          <ListOfContents />
          <SimilarRecommendations />
        </div>
        <div className="w-72 shrink-0 space-y-4">
          <WorksHonor items={honors} />
          <SomeOtherWorks />
          <OtherRecommendedWorks />
          <Link href="/profile/d.wxs" className="block">
            <Ads
              src="https://images.unsplash.com/photo-1653762381632-2945469edb7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              size="40"
            />
          </Link>
        </div>
      </section>
    </Shell>
  );
}
