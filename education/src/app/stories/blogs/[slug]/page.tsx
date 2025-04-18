import React from "react";
import { GET_POST_BY_SLUG } from "src/lib/graphqlRequest"; // Import the query

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  readingTime: string;
}

const fetchPost = async (slug: string) => {
  const response = await fetch("https://wp.yuvabeeducation.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_POST_BY_SLUG,
      variables: { slug },
    }),
  });

  const result = await response.json();
  return result?.data?.postBy || null;
};

const PostPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = await fetchPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="bg-color py-32">
        <div className="max-w-[1240px] flex flex-col m-auto gap-y-4">
          <div className="flex flex-col gap-x-4">
            <div className="flex flex-row gap-x-2">
              <p className="font-secondary font-normal leading-[30px] text-[18px]">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p>.</p>
              <p className="font-secondary font-normal leading-[30px] text-[18px]">
                {post.readingTime} <span>min read</span>
              </p>
            </div>

            <h1 className="text-[#592AC7] text-[48px] leading-[120%] font-semibold text-center">
              {post.title}
            </h1>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="blog"
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
