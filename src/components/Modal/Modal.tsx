import { useState } from "preact/hooks";
import type { FunctionComponent } from "preact";
import search from "/ui/search.svg";

import style from "./Modal.module.css";

export const Modal: FunctionComponent = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenSearchModal = () => setOpen(true);
  const handleCloseSearchModal = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpenSearchModal}
        type="button"
        class={style.openModalButton + " dark:bg-semidark"}
      >
        <img src={search} alt="search icon" class={style.searchIcon} />
      </button>
      {isOpen && (
        <div class={style.backdrop} onClick={handleCloseSearchModal}>
          <section
            onClick={(e) => e.stopPropagation()}
            class={style.window + " dark:bg-secondary/800"}
          >
            {children}
          </section>
        </div>
      )}
    </>
  );
};
