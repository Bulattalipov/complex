import sliderModal from "./sliderModal";
import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {
      sliderModal();
    },
    isClose: (modal) => {
    },
  });

  window.complex_api.modal = modal;
};
