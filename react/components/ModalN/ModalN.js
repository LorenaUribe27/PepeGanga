import React, { useEffect, useState } from "react";
import usePortal from "react-useportal";
import ModalStyle from "./ModalN.css";

const ModalN = ({
  children,
  idModal,
  closeButton,
  opemModal,
  maxWidth,
  actionClose,
}) => {
  const [modalOpen, setModalOpen] = useState(true);
  const { Portal } = usePortal();
  

  return (
    <Portal>
     
      <div
        id={`${idModal}--ModalN`}
        className={`${ModalStyle.ModalN__container} ${idModal}`}
        style={{ display: modalOpen ? "flex" : "none" }}
      >
        <div
          className={`${ModalStyle.ModalN__container__cont}`}
          style={{ maxWidth: maxWidth ? `${maxWidth}px` : "" }}
        >
          <button
            className={`${ModalStyle.ModalN__container__closeButton}`}
            type="button"
            style={{ display: closeButton ? "block" : "none" }}
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(false);
              actionClose(false);
            }}
          >
          </button>

          <div className={`${ModalStyle.ModalN__container__box__content}`}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ModalN;
