import Link from "next/link";
import Heading from "../components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const { reviews } = await getReviews(3);
  return (
    <>
      <Heading>Gamenime Hub</Heading>
      <p className="pb-3">Only the best game and anime, reviewed for you</p>
      <ul className="flex flex-col gap-3 items-center">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80
                       hover:shadow-xl sm:w-full"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row "
            >
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t sm:rounded-l sm:rounded-r-none max-h-44 object-cover"
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-orbitron font-semibold">{review.title}</h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
