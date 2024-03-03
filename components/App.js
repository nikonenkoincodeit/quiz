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
  template: `<div class="quiz-overlay">
    <QuizFinal v-if="isFinish" @onSubmit="onSubmit"/>
    <div class="quiz-modal" v-else :class="{sidebar: slideData?.assistant}">
      <h1 class="quiz-title">{{title}}</h1>
      <QuizSidebar v-if="slideData?.assistant" :data="slideData?.assistant"/>
      <div class="quiz-content">
        <component :is="myComponent" 
        :questions="slideData?.questions" 
        :value="slideData?.value"
        @selectItem="selectItem"
        @next="next"/>
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
    isFinish() {
      return this.slideData.type === "choice-of-comm-met";
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
        console.log("value ", this.slideData.value);
      } else if (type === "file") {
        this.slideData.value[0] = [...id];
        console.log("file ", this.slideData.value);
      }
    },
    next() {
      setTimeout(() => {
        if (this.slideData?.next) {
          this.step = this.slideData.next;
        } else {
          this.step = this.slideData?.questions?.find(({ id }) =>
            this.slideData.value.includes(id)
          )?.next;
        }
      }, 500);
    },
    prev() {
      setTimeout(() => {
        this.step = this.slideData.prev;
      }, 500);
    },
    onSubmit(obj) {
      const items = [];
      Object.values(this.quizMirrors).forEach((item) => {
        const plainObject = { ...item };
        if (plainObject.value?.length > 0) {
          items.push(plainObject);
        }
      });

      const data = items.map((el) => {
        return {
          title: el.title,
          type: el.type,
          questions: el?.questions
            ? el.questions
                .filter((item) => el.value.includes(item.id))
                .map((el) => el.text)
            : [el.value[0]],
        };
      });
      // console.log(obj);
      console.log(data);
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
});

app.mount("#app-quiz");
