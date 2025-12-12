export const dateTime = {
  lang: "es",
  intervalId: null,

  init() {
    const selector = document.getElementById("langSelector");
    const display = document.getElementById("datetimeDisplay");

    if (!selector || !display) return;

    this.update(display);

    selector.addEventListener("change", (e) => {
      this.lang = e.target.value;
      this.update(display);
    });

    this.intervalId = setInterval(() => {
      this.update(display);
    }, 1000);
  },

  update(display) {
    const now = new Date();
    const day = now.getDay();
    const date = now.toLocaleDateString(this.lang);
    const time = now.toLocaleTimeString(this.lang);

    const days = {
      es: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      eus: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
    };

    const dayName = days[this.lang]?.[day] || days["es"][day];
    display.innerHTML = `${dayName}, ${date} - ${time}`;
  }
};
