export const QuizInput = {
  template: `<div >
        <input type="text" :value="myValue" class="input-question" @input="onChange"/>
      </div>`,
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
