export const QuizGallery = {
  template: `<div class="gallery">
    <div class="gallery-card" :class="{active: value?.includes(question.id)}" v-for="question in questions" :key="question.id" @click="onClick(question.id)">
        <div class="check">
            <span></span>
        </div>
        <div class="gallery-box-img">
            <img :src="question.img" alt="image"/>
        </div>
        <div class="gallery-info">
            <h2 class="gallery-title">{{question.text}}</h2>
        </div>
    </div>
  </div>`,
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  emit: ["selectItem", "next"],
  methods: {
    onClick(id) {
      this.$emit("selectItem", "add", id);
      this.$emit("next");
    },
  },
};
