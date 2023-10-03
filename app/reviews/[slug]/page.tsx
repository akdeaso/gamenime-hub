import { getReview, getSlugs } from "@/lib/reviews";
import Heading from "../../../components/Heading";
import { Metadata } from "next";
import ShareButtons from "@/components/ShareButtons";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

// export const dynamic = "force-dynamic";

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
}

const ReviewPage = async ({ params: { slug } }: ReviewPageProps) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  const { title, date, image, body, subtitle } = review;
  return (
    <div className="flex flex-col items-center text-">
      <Heading>{title}</Heading>
      <p className="font-semibold pb-3">{subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareButtons />
      </div>
      <Image
        src={image}
        alt=""
        priority
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </div>
  );
};

export default ReviewPage;
