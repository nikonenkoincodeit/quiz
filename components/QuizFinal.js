export const QuizFinal = {
  template: `<div class="final-page">
    <div className="final-page-container">
        <div class="final-page-body">
            <p class=" final-page-title">Отлично!</p>
            <p class="final-page-subtitle">МЫ ПОЛУЧИЛИ ВАШИ ОТВЕТЫ</p>
        </div>
        
    </div>
  </div>`,
  name: "QuizFinal",
  props: ["selectItem"],
  methods: {
    onChange() {
      this.$emit("selectItem", "add", this.value);
    },
  },
};
