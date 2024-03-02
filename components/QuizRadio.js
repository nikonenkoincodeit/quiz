export const QuizRadio = {
  template: `<div class="radio-list">
      <div class="radio-item" :class="{active: value?.includes(question.id)}" v-for="question in questions" :key="question.id" @click="onClick(question.id)">
        <div class="radio-check">
          <span></span>
        </div>
        <p class="radio-text">{{question.text}}</p>
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
