import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { FunctionComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./SearchBar.module.css";

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
      <label class={style.inputWrapepr}>
        <input
          type="text"
          value={query}
          onInput={handleChangeQuery}
          placeholder="Search by post title"
          class={style.input + " dark:bg-semidark dark:text-white"}
        />
      </label>
      {query && filteredPosts && (
        <>
          <p class={style.posts + " dark:text-white"}>Posts:</p>
          <ul class={style.postList}>
            {filteredPosts.map(({ data, slug }, idx) => (
              <li key={idx}>
                <a
                  href={`/post/${slug}`}
                  class={style.postLink + " dark:border-semidark"}
                >
                  <img
                    src={data.post_image}
                    alt="post image"
                    class={style.postImage}
                  />
                  <div>
                    <h2 class={style.postTitle + " dark:text-white"}>
                      {data.title}
                    </h2>
                    <p class={style.postDate}>{data.date.toDateString()}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {!query && (
        <p class={style.notice}>
          Enter the title of the post in the input above
        </p>
      )}
      {filteredPosts?.length === 0 && (
        <p class={style.notice}>There are no posts for this query</p>
      )}
    </>
  );
};
