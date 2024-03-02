export const QuizTextarea = {
  template: `<div >
          <textarea class="textarea-question" @change="onChange"></textarea>
        </div>`,
  name: "QuizTextarea",
  props: ["selectItem"],
  methods: {
    onChange() {
      this.$emit("selectItem", "add", this.value);
    },
  },
};
