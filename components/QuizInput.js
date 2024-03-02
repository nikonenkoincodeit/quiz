export const QuizInput = {
  template: `<div >
        <input type="text" class="input-question" @change="onChange"/>
      </div>`,
  props: ["selectItem"],
  methods: {
    onChange() {
      this.$emit("selectItem", "add", this.value);
    },
  },
};
