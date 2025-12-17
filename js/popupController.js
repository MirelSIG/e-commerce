import { popup } from "../components/popup/popup.js";

export const popupController = {
  init() {
    // Llamar directamente sin esperar DOMContentLoaded, ya que main.js se ejecuta al final del body
    this.setup();
  },

  setup() {
    // Solo mostrar popup si no se ha mostrado antes
    if (!popup.isAlreadyShown()) {
      this.delayTrigger();
      this.exitIntentTrigger();
    }
  },

  delayTrigger() {
    setTimeout(() => popup.show(), 7000);
  },

  exitIntentTrigger() {
    const exitHandler = (e) => {
      if (e.clientY <= 0) {
        popup.show();
      }
    };
    document.addEventListener("mouseleave", exitHandler);
  },
};
