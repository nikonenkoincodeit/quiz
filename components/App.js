import { addFiles } from "../js/files.js";
import { sendData } from "../js/api.js";
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
import { QuizInfo } from "./QuizInfo.js";
import { SvgIconClose } from "./SvgIconClose.js";

export function createQuiz(data) {
  const appVue = {
    template: `<div>
    <QuizFinal 
    v-if="isFinish" 
    v-modal:phone="phone"
    :title="slideData?.title"
    :text="slideData?.text"
    :description="slideData?.description"
    :subtitle="slideData?.subtitle"
    :colLeft="slideData?.colLeft" 
    @onSubmit="onSubmit"/>
    <QuizInfo v-else-if="isInfo" 
    :title="slideData?.title" 
    :text="slideData?.text" 
    :btnText="slideData?.btnText" 
    @next="next" 
    @prev="prev"/>
    <div class="quiz-modal" v-else :class="{sidebar: slideData?.assistant}">
      <SvgIconClose />
      <div>
        <h2 v-if="slideData?.subtitle" class="quiz-subtitle">
        <svg viewBox="0 0 24 24" class="mdi-icon" width="19" height="19" fill="#d34085"><title>mdi-file-document-box-check-outline</title><path d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17" stroke-width="0" fill-rule="nonzero"></path></svg>
        {{slideData?.subtitle}}</h2>
        <h1 class="quiz-title">{{title}}</h1>
      </div>
      <QuizSidebar v-if="slideData?.assistant" :data="slideData?.assistant"/>
      <div class="quiz-content" ref="quizContent">
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
      QuizInfo,
      QuizSlider,
      QuizTextarea,
      QuizCheckbox,
      QuizInfoBox,
      QuizGalleryRadio,
      QuizCheckboxGallery,
      SvgIconClose,
    },
    data() {
      return {
        step: 1,
        quizContent: null,
        nameQuiz: data.name,
        data: data.items,
        phone: "",
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
      isInfo() {
        return this.slideData.type === "my-info";
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
        if (type === "push") {
          this.slideData.value.push(id);
        } else if (type === "add") {
          this.slideData.value[0] = id;
        } else if (type === "file") {
          this.slideData.value[0] = [...id];
        } else if (type === "lot") {
          this.slideData.value = [...id];
        }
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
      onSubmit({ phone = "", selectMessenger = "" } = {}) {
        const items = [];

        Object.values(this.data).forEach((item) => {
          const plainObject = { ...item };
          if (
            plainObject.value?.length > 0 &&
            plainObject.type !== "info-box"
          ) {
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

        const formData = new FormData();

        formData.append("phone", phone);
        formData.append("selectMessenger", selectMessenger);
        formData.append("nameQuiz", this.nameQuiz);

        data.forEach((el) => {
          if (el.type === "my-load-file") {
            addFiles(formData, el.questions[0]);
          } else {
            formData.append("title[]", el.title);
            formData.append("text[]", el.questions.join(", "));
          }
        });
        // console.log(data);
        // console.log(Object.fromEntries(formData));
        // console.log(formData.getAll("title[]"));
        // console.log(formData.getAll("text[]"));
        sendData(formData)
          .then((r) => {
            console.log("r ", r);
            location.href = "/quiz/email.html";
          })
          .catch((err) => console.error(err.message));
      },
    },
    mounted() {
      const osInstance = OverlayScrollbarsGlobal.OverlayScrollbars(
        this.$refs.quizContent,
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

  const app = Vue.createApp(appVue);
  app.mount("#app-quiz");
  return app;
}
