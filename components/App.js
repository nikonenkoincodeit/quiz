import { quizMirrors } from "../data/quiz-data.js";
import { QuizSidebar } from "./QuizSidebar.js";
import { QuizNavbar } from "./QuizNavbar.js";
import { QuizGallery } from "./QuizGallery.js";
import { QuizRadio } from "./QuizRadio.js";
import { QuizInput } from "./QuizInput.js";
import { QuizTextarea } from "./QuizTextarea.js";
import { QuizLoadFile } from "./QuizLoadFile.js";
import { QuizFinal } from "./QuizFinal.js";

const app = Vue.createApp({
  template: `<div class="quiz-modal" :class="{sidebar: slideData?.assistant}">
    <h1 class="quiz-mob-title">{{title}}</h1>
    <QuizSidebar v-if="slideData?.assistant" :data="slideData?.assistant"/>
    <div class="quiz-main">
      <div class="quiz-content">
        <h1 class="quiz-title">{{title}}</h1>
        <div class="quiz-body">
        <component :is="myComponent" 
        :questions="slideData?.questions" 
        :value="slideData?.value"
        @selectItem="selectItem"
        @next="next"
        />
        </div>
      </div>
      <QuizNavbar @next="next" @prev="prev" :step="step" :value="slideData?.value" :percent="slideData?.percent"/>
    </div>
   
  </div>`,
  components: {
    QuizSidebar,
    QuizNavbar,
    QuizGallery,
    QuizRadio,
    QuizInput,
    QuizFinal,
    QuizTextarea,
  },
  data() {
    return {
      step: 1,
      quizMirrors: quizMirrors,
    };
  },
  computed: {
    myComponent() {
      if (this.slideData.type === "my-textarea") return QuizTextarea;
      if (this.slideData.type === "my-input") return QuizInput;
      if (this.slideData.type === "gallery") return QuizGallery;
      if (this.slideData.type === "radio") return QuizRadio;
      if (this.slideData.type === "my-load-file") return QuizLoadFile;
    },
    title() {
      return this.slideData.title;
    },
    slideData() {
      return this.quizMirrors.find(({ id }) => id === this.step);
    },
  },
  methods: {
    selectItem(type, id) {
      // console.log(type, id);
      if (type === "push") {
        this.slideData.value.push(id);
      } else if (type === "add") {
        this.slideData.value[0] = id;
      }
      // this.slideData.value[0] = id;
      console.log("this.slideData", this.slideData);
    },
    next() {
      if (this.slideData?.next) {
        this.step = this.slideData.next;
      } else {
        this.step = this.slideData?.questions?.find(({ id }) =>
          this.slideData.value.includes(id)
        )?.next;
      }
    },
    prev() {
      this.step = this.slideData.prev;
    },
  },
  mounted() {
    const osInstance = OverlayScrollbarsGlobal.OverlayScrollbars(
      document.querySelector(".quiz-body"),
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
});

app.mount("#app-quiz");
