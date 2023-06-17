import { useState } from "preact/hooks";
import type { FunctionComponent } from "preact";
import search from "/ui/search.svg";

export const Modal: FunctionComponent = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenSearchModal = () => setOpen(true);
  const handleCloseSearchModal = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpenSearchModal}
        type="button"
        class="rounded-md bg-secondary/100 dark:bg-semidark p-1 hover:shadow-md duration-300"
      >
        <img src={search} alt="search icon" class="w-6" />
      </button>
      {isOpen && (
        <div
          class="backdrop-blur-sm fixed top-0 z-10 left-0 w-screen h-screen"
          onClick={handleCloseSearchModal}
        >
          <section
            onClick={(e) => e.stopPropagation()}
            class="text-secondary/800 bg-white rounded-xl dark:text-white dark:bg-secondary/800 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {children}
          </section>
        </div>
      )}
    </>
  );
};
