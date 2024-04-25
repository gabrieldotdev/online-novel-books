import { BookInf } from "@/components/information/books/book-inf";
import { TableOfContents } from "@/components/information/books/list-of-contents";
import { PersonalInf } from "@/components/information/books/personal-inf";
import { SomeOtherWorks } from "@/components/information/books/some-other-works";
import { StoryLine } from "@/components/information/books/story-line";
import { WorksHonor } from "@/components/information/books/works-honor";
import { Ads } from "@/components/visuals/ads";
import { Shell } from "@/components/wrappers/shell-variants";

export default function ProfilePage({ params }) {
  const { profileId } = params;
  console.log(params);

  return (
    <Shell as="div" variant="none" className="max-w-[1200px] mx-auto">
      <section className="flex items-center w-[inherit]">
        <Ads
          src="https://images.unsplash.com/photo-1653762381632-2945469edb7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size="40"
        />
      </section>
      {/* <section className="flex items-start w-[inherit] gap-x-4">
        <div className="flex-grow space-y-4">
          <StoryLine />
          <TableOfContents />
        </div>
        <div className="w-72 shrink-0 space-y-4">
          <WorksHonor />
          <SomeOtherWorks />
        </div>
      </section> */}
    </Shell>
  );
}
