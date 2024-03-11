import {
  quizMirrors,
  quizShowerRoom,
  quizSkin,
  quizKitchen,
} from "../data/quiz-data.js";
import { QuizSidebar } from "./QuizSidebar.js";
import { QuizNavbar } from "./QuizNavbar.js";
import { QuizGallery } from "./QuizGallery.js";
import { QuizRadio } from "./QuizRadio.js";
import { QuizInput } from "./QuizInput.js";
import { QuizTextarea } from "./QuizTextarea.js";
import { QuizLoadFile } from "./QuizLoadFile.js";
import { QuizGalleryRadio } from "./QuizGalleryRadio.js";
import { QuizCheckbox } from "./QuizCheckbox.js";
import { QuizInfoBox } from "./QuizInfoBox.js";
import { QuizFinal } from "./QuizFinal.js";
import { QuizCheckboxGallery } from "./QuizCheckboxGallery.js";
import { QuizSlider } from "./QuizSlider.js";

const app = Vue.createApp({
  template: `<div class="quiz-overlay">
    <QuizFinal v-if="isFinish" @onSubmit="onSubmit"/>
    <div class="quiz-modal" v-else :class="{sidebar: slideData?.assistant}">

      <svg version="1.1" width="22" height="22" viewBox="0 0 32 32" class="icon-x">
      <path d="M3.514 0.077c-0.432 0.12-0.808 0.365-1.278 0.83-0.355 0.352-0.502 0.547-0.666 0.877-0.195 0.394-0.21 0.456-0.21 0.883 0 0.424 0.016 0.49 0.206 0.882 0.203 0.419 0.277 0.496 5.88 6.104l5.672 5.68-5.672 5.68c-5.603 5.61-5.677 5.686-5.88 6.104-0.19 0.392-0.206 0.459-0.206 0.883 0 0.426 0.014 0.49 0.21 0.883 0.293 0.594 0.954 1.254 1.547 1.547 0.394 0.195 0.458 0.21 0.883 0.21 0.424 0 0.491-0.016 0.883-0.206 0.418-0.203 0.494-0.277 6.104-5.88l5.68-5.672 5.68 5.672c5.608 5.603 5.685 5.677 6.104 5.88 0.392 0.19 0.458 0.206 0.882 0.206 0.427 0 0.49-0.014 0.883-0.21 0.33-0.163 0.525-0.31 0.878-0.666 0.726-0.733 1.002-1.403 0.859-2.098-0.155-0.752 0.082-0.493-6.069-6.654l-5.67-5.68 5.67-5.68c6.15-6.162 5.914-5.902 6.069-6.653 0.142-0.696-0.133-1.368-0.859-2.094s-1.398-1.002-2.094-0.859c-0.75 0.155-0.491-0.082-6.653 6.069l-5.68 5.67-5.68-5.669c-4.472-4.464-5.741-5.702-5.966-5.819-0.542-0.285-1.019-0.355-1.507-0.221z"></path>
      </svg>
      <div>
        <h2 v-if="slideData?.subtitle" class="quiz-subtitle">
        <svg viewBox="0 0 24 24" class="mdi-icon" width="19" height="19" fill="#d34085"><title>mdi-file-document-box-check-outline</title><path d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17" stroke-width="0" fill-rule="nonzero"></path></svg>
        {{slideData?.subtitle}}</h2>
        <h1 class="quiz-title">{{title}}</h1>
      </div>
      <QuizSidebar v-if="slideData?.assistant" :data="slideData?.assistant"/>
      <div class="quiz-content">
        <component :is="myComponent" 
        :questions="slideData?.questions" 
        :value="slideData?.value"
        @selectItem="selectItem"
        @next="next"/>
      </div>
      <QuizNavbar 
      @next="next" 
      @prev="prev" 
      :step="step" 
      :value="slideData?.value" 
      :percent="slideData?.percent" 
      :buttonText="slideData?.buttonText"/>
    </div>
</div>`,
  components: {
    QuizSidebar,
    QuizNavbar,
    QuizGallery,
    QuizRadio,
    QuizInput,
    QuizFinal,
    QuizSlider,
    QuizTextarea,
    QuizCheckbox,
    QuizInfoBox,
    QuizGalleryRadio,
    QuizCheckboxGallery,
  },
  data() {
    return {
      step: 1,
      data: quizKitchen,
    };
  },
  computed: {
    myComponent() {
      if (this.slideData.type === "my-textarea") return QuizTextarea;
      if (this.slideData.type === "my-input") return QuizInput;
      if (this.slideData.type === "gallery") return QuizGallery;
      if (this.slideData.type === "radio") return QuizRadio;
      if (this.slideData.type === "my-load-file") return QuizLoadFile;
      if (this.slideData.type === "gallery-radio") return QuizGalleryRadio;
      if (this.slideData.type === "my-checkbox") return QuizCheckbox;
      if (this.slideData.type === "info-box") return QuizInfoBox;
      if (this.slideData.type === "my-slider") return QuizSlider;
      if (this.slideData.type === "checkbox-gallery")
        return QuizCheckboxGallery;
    },
    isFinish() {
      return this.slideData.type === "choice-of-comm-met";
    },
    title() {
      return this.slideData.title;
    },
    slideData() {
      return this.data.find(({ id }) => id === this.step);
    },
  },
  methods: {
    selectItem(type, id) {
      // console.log(type, id);
      if (type === "push") {
        this.slideData.value.push(id);
      } else if (type === "add") {
        this.slideData.value[0] = id;
      } else if (type === "file") {
        this.slideData.value[0] = [...id];
      } else if (type === "lot") {
        this.slideData.value = [...id];
      }
      //
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
    onSubmit(obj) {
      const items = [];
      console.log("data ", this.data);
      Object.values(this.data).forEach((item) => {
        const plainObject = { ...item };
        if (plainObject.value?.length > 0 && plainObject.type !== "info-box") {
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
