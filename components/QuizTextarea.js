export const QuizTextarea = {
  template: `<div >
          <textarea class="textarea-question" :value="myValue" @input="onChange"></textarea>
        </div>`,
  name: "QuizTextarea",
  emit: ["selectItem"],
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    myValue() {
      return this.$props.value[0];
    },
  },
  methods: {
    onChange($event) {
      this.$emit("selectItem", "add", $event.target.value.trim());
    },
  },
};
