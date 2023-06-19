import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { FunctionComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";

export const SearchBar: FunctionComponent = () => {
  const [posts, setPosts] = useState<CollectionEntry<"posts">[] | null>(null);
  const [query, setQuery] = useState<string>("");

  const handleChangeQuery = ({
    currentTarget,
  }: h.JSX.TargetedEvent<HTMLInputElement, Event>) =>
    setQuery(currentTarget.value);

  const filteredPosts =
    posts &&
    posts.filter(({ data }) =>
      data.title.toLowerCase().includes(query.toLowerCase())
    );

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getCollection("posts");
      setPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <section>
      <label class="cursor-pointer hover:shadow duration-200">
        <input
          type="text"
          value={query}
          onInput={handleChangeQuery}
          placeholder="Search by post title"
          class="mb-5 w-full rounded bg-secondary/100 dark:bg-semidark dark:text-white py-2 pl-4 pr-9 cursor-pointer focus:outline-none"
        />
      </label>
      {query && filteredPosts && (
        <>
          <p class="text-secondary/800 dark:text-white font-semibold text-2xl pb-5">
            Posts:
          </p>
          <ul class="flex flex-col gap-5">
            {filteredPosts.map(({ data, slug }, idx) => (
              <li key={idx}>
                <a
                  href={`/post/${slug}`}
                  class="flex gap-5 items-center rounded-xl border-[1px] border-secondary/100 dark:border-semidark"
                >
                  <img
                    src={data.post_image}
                    alt="post image"
                    class="w-1/3 rounded-xl"
                  />
                  <div>
                    <h2 class="text-secondary/800 dark:text-white font-semibold text-2xl">
                      {data.title}
                    </h2>
                    <p class="text-secondary/400 text-base">
                      {data.date.toDateString()}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {!query && (
        <p class="text-secondary/400 text-base text-center">
          Enter the title of the post in the input above
        </p>
      )}
      {filteredPosts?.length === 0 && (
        <p class="text-secondary/400 text-base text-center">
          There are no posts for this query
        </p>
      )}
    </section>
  );
};
