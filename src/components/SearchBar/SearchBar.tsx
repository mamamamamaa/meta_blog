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
    <>
      <label class="cursor-pointer hover:shadow duration-200">
        <input
          type="text"
          value={query}
          onChange={handleChangeQuery}
          placeholder="Search by post title"
          class="w-full rounded bg-secondary/100 dark:bg-semidark dark:text-white py-2 pl-4 pr-9 cursor-pointer focus:outline-none"
        />
      </label>
      {query && filteredPosts && (
        <div>
          {filteredPosts.map((post) => (
            <div>{post.data.title}</div>
          ))}
        </div>
      )}
    </>
  );
};
