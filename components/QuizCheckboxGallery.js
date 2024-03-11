export const QuizCheckboxGallery = {
  template: `<div class="file-uploader-tag mtb-15">
        <span class="circle">&#10004;</span>
        выберите один или несколько</div>
  <div class="gallery сheckbox-gallery">
  <div class="gallery-card" :class="{active: value?.includes(question.id)}" v-for="question in questions" :key="question.id" @click="onClick(question.id)">
      <div class="check">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" width="21" height="21"><path style="fill:#fff" d="M.04.627.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z"/></svg>
      </div>
      <div class="gallery-box-img">
          <div class="gallery-box-info tooltip" v-if="question?.tooltip">
            <span class="tooltiptext">{{question?.tooltip}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="rgba(54, 54, 54, 0.7)"><path d="M7.125 4.625H5.875V3.375H7.125M7.125 9.625H5.875V5.875H7.125M6.5 0.25C5.67924 0.25 4.86651 0.411661 4.10823 0.725753C3.34994 1.03984 2.66095 1.50022 2.08058 2.08058C0.90848 3.25269 0.25 4.8424 0.25 6.5C0.25 8.1576 0.90848 9.74732 2.08058 10.9194C2.66095 11.4998 3.34994 11.9602 4.10823 12.2742C4.86651 12.5883 5.67924 12.75 6.5 12.75C8.1576 12.75 9.74732 12.0915 10.9194 10.9194C12.0915 9.74732 12.75 8.1576 12.75 6.5C12.75 5.67924 12.5883 4.86651 12.2742 4.10823C11.9602 3.34994 11.4998 2.66095 10.9194 2.08058C10.3391 1.50022 9.65006 1.03984 8.89177 0.725753C8.13349 0.411661 7.32076 0.25 6.5 0.25Z"></path></svg>
          </div>
          <img :src="question.img" alt="image"/>
      </div>
      <div class="gallery-info">
          <h2 class="gallery-title">{{question.text}}</h2>
      </div>
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
    onClick(id) {
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
