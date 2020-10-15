import React from "react";

const AvatarModal = ({ onClose, isVisible, src }) => {
  return (
    <div
      className={
        isVisible ? "avatar-modal-wrapper show-avatar" : "avatar-modal-wrapper"
      }
    >
      <img className="avatar-modal-img" src={src} alt="avatar" />
      <span onClick={() => onClose()}>
        <i className="fa fa-times" aria-hidden="true" />
      </span>
    </div>
  );
};

AvatarModal.propTypes = {};

export default AvatarModal;
