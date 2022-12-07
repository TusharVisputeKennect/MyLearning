const app = Vue.createApp({
  data: function () {
    return {
      interpolation: "This is my first Interpolation",
      link: "https://vuejs.org/",
      greetMgs: "Hello! How are you?",
      underlineText: "<u>This is HTML Tag using V-html.</u>",
    };
  },
  methods: {
    // methods contain only function
    checkEligibility() {
      const random = Math.floor(Math.random() * 100);
      if (random % 2 == 0) {
        return random + " is even number";
      } else {
        return random + " is odd number";
      }
    },
    greeting() {
      return this.greetMgs;
    },
  },
});

app.mount("#mylearning");
