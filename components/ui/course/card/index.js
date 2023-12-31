import Image from "next/image";
import Link from "next/link";

export default function Card({ course, disabled, Footer }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex h-full">
        <Image
          className={`object-cover ${disabled && "filter grayscale"}`}
          src={course.coverImage}
          width="200"
          height="230"
          alt={course.title}
        />

        <div className="p-8 pb-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {course.type}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="h-12 block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {course.title}
          </Link>
          <p className="mt-2 text-gray-500">
            {course.description.substring(0, 100)}...
          </p>
          {Footer && <Footer />}
        </div>
      </div>
    </div>
  );
}
