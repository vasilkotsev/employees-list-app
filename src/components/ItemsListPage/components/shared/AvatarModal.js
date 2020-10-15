import React from "react";
// import AvatarImage from "../../../../common/components/AvatarImage";
import ModalImage from "../../../../common/components/ModalImage";

const AvatarModal = ({ onClose, isVisible, src }) => {
  return (
    <div
      className={
        isVisible ? "avatar-modal-wrapper show-avatar" : "avatar-modal-wrapper"
      }
    >
      <ModalImage className="avatar-modal-img" src={src} />
      <span onClick={() => onClose()}>
        <i className="fa fa-times" aria-hidden="true" />
      </span>
    </div>
  );
};

AvatarModal.propTypes = {};

export default AvatarModal;
