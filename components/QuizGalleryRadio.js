export const QuizGalleryRadio = {
  template: `<div class="gallery-radio">
          <div class="gallery-radio-group">
          <div class="radio-item" :class="{active: value?.includes(question.id)}" v-for="question in questions" :key="question.id" @click="onClick(question.id)">
          <div class="radio-check">
            <span></span>
          </div>
          <p class="radio-text">{{question.text}}</p>
        </div>
          </div>
          <div class="gallery-radio-box-image">
            <img :src="picture" alt="image" v-if="picture"/>
            <div class="gallery-radio-box-image-title" v-else>
                Выберите вариант ответа снизу
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
  emit: ["selectItem"],
  computed: {
    picture() {
      const img = this.$props.questions?.find(
        (el) => el.id === this.$props.value[0]
      )?.img;
      if (!img) return;
      return img;
    },
  },
  methods: {
    onClick(id) {
      console.log(id);
      this.$emit("selectItem", "add", id);
    },
  },
};
