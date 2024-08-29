// components/Article.tsx
import Link from 'next/link';
import React from 'react';
import { FaThumbsUp, FaComment, FaShareAlt } from 'react-icons/fa';

interface ArticleProps {
  date: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  summary: string;
  readMoreLink: string;
}

const Article: React.FC<ArticleProps> = ({
  date,
  imageSrc,
  imageAlt,
  title,
  summary,
  readMoreLink,
}) => {
  const [year, monthDay] = date.split('-');

  return (
    <article className="flex bg-white transition hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime={date}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{year}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{monthDay}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <Link href={readMoreLink}>
            <h3 className="font-bold uppercase text-gray-900">{title}</h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {summary}
          </p>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-400 hover:text-gray-900">
              <FaThumbsUp className="w-5 h-5" />
              <span className="ml-1 text-sm">Like</span>
            </button>
            <button className="flex items-center text-gray-400 hover:text-gray-900">
              <FaComment className="w-5 h-5" />
              <span className="ml-1 text-sm">Comment</span>
            </button>
            <button className="flex items-center text-gray-400 hover:text-gray-900">
              <FaShareAlt className="w-5 h-5" />
              <span className="ml-1 text-sm">Share</span>
            </button>
          </div>

          <Link
            href={readMoreLink}
            className="bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read post
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
