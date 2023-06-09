import search from "/ui/search.svg";

export const SearchBar = () => {
  return (
    <label class="relative cursor-pointer hover:shadow duration-200">
      <img
        src={search}
        alt="search icon"
        class="w-4 h-4 absolute top-1/2 translate-y-[-50%] right-2"
      />
      <input
        type="text"
        placeholder="Search"
        class="w-40 rounded bg-secondary/100 dark:bg-semidark dark:text-white py-2 pl-4 pr-9 cursor-pointer focus:outline-none"
      />
    </label>
  );
};
