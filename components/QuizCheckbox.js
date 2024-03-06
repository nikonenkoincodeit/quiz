export const QuizCheckbox = {
  template: `<div class="file-uploader-tag mtb-15">
        <span class="circle">&#10004;</span>
        выберите один или несколько</div>
        <div class="checkbox-list">
            <div class="checkbox-item" :class="{active: value?.includes(question.id)}" v-for="question in questions" :key="question.id" @click="onClick($event, question.id)">
            <div class="checkbox-label">
              <div class="checkbox-check" >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff" class="checkbox-icon">
                      <path d="M21.293 6.707a1 1 0 0 0-1.414 0L9 18.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l13-13a1 1 0 0 0 0-1.414z"/>
                    </svg>
                  </span>
              </div>
            </div>
            <input type="text" class="checkbox-input" v-if="question?.type === 'input'" placeholder="Другое..." v-model="question.text" />
            <p class="checkbox-text" v-else>{{question.text}}</p>
            </div>
        </div>`,
  date() {
    items: [];
  },
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
  emit: ["selectItem"],
  methods: {
    onClick($event, id) {
      if ($event.target.classList.contains("checkbox-input")) return;
      if (this.items.includes(id)) {
        this.items = this.items.filter((el) => el !== id);
      } else {
        this.items.push(id);
      }
      this.$emit("selectItem", "lot", this.items);
    },
  },
  mounted() {
    this.items = this.$props.value[0] || [];
  },
};
