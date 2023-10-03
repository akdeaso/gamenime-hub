import Link from "next/link";
import Heading from "../../components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

interface ReviewsPageProps {
  searchParams: { page?: string };
}

const parsePageParam = (paramValue: string): number => {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
};

const PAGE_SIZE = 10;

const ReviewsPage = async ({ searchParams }: ReviewsPageProps) => {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex flex-col sm:items-end items-center mb-3">
        <SearchBox />
      </div>
      <div className="flex flex-col items-center mb-3">
        <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
      </div>
      <ul className="flex flex-row flex-wrap gap-3 justify-center">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="border bg-white rounded w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t max-h-44 object-cover"
                priority
              />
              <h2 className="py-1 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;
