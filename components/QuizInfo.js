import { SvgIconClose } from "./SvgIconClose.js";
export const QuizInfo = {
  template: `<div class="my-info-box">
          <SvgIconClose />
          <div class="my-info-box-body quiz-content">
            <div class="my-info-box-container ">
                <h1 class="my-info-box-title">{{title}}</h1>
                <p class="my-info-box-text" v-for="t of text" :key="t" v-html="t"></p>
               <button type="button" class="my-info-btn" @click="prevPage">
               <svg viewBox="0 0 24 24" class="mdi-icon" width="24" height="24" fill="#777b95" ><title>mdi-reload</title><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" stroke-width="0" fill-rule="nonzero"></path></svg>
               Пройти заново
               </button>
            </div>
          </div>
          <div class="my-info-box-btn">
            <button type="button" class="quiz-navbar-btn-next" @click="nextPage">{{btnText}}</button>
          </div>
        </div>`,
  emit: ["next", "prev"],
  components: { SvgIconClose },
  props: {
    title: {
      type: String,
    },
    text: {
      type: Array,
      default: () => [],
    },
    btnText: {
      type: String,
      default: "Далее",
    },
  },
  methods: {
    nextPage() {
      this.$emit("next");
    },
    prevPage() {
      this.$emit("prev");
    },
  },
  mounted() {
    const osInstance = OverlayScrollbarsGlobal.OverlayScrollbars(
      document.querySelector(".quiz-content"),
      {
        scrollbars: {
          visibility: "auto",
          autoHide: "never",
          autoHideDelay: 1300,
          autoHideSuspend: false,
          dragScroll: true,
          pointers: ["mouse", "touch", "pen"],
        },
      }
    );
  },
};
