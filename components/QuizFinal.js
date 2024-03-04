export const QuizFinal = {
  template: `<div class="final-page">
    <svg version="1.1" width="22" height="22" viewBox="0 0 32 32" class="icon-x">
    <path d="M3.514 0.077c-0.432 0.12-0.808 0.365-1.278 0.83-0.355 0.352-0.502 0.547-0.666 0.877-0.195 0.394-0.21 0.456-0.21 0.883 0 0.424 0.016 0.49 0.206 0.882 0.203 0.419 0.277 0.496 5.88 6.104l5.672 5.68-5.672 5.68c-5.603 5.61-5.677 5.686-5.88 6.104-0.19 0.392-0.206 0.459-0.206 0.883 0 0.426 0.014 0.49 0.21 0.883 0.293 0.594 0.954 1.254 1.547 1.547 0.394 0.195 0.458 0.21 0.883 0.21 0.424 0 0.491-0.016 0.883-0.206 0.418-0.203 0.494-0.277 6.104-5.88l5.68-5.672 5.68 5.672c5.608 5.603 5.685 5.677 6.104 5.88 0.392 0.19 0.458 0.206 0.882 0.206 0.427 0 0.49-0.014 0.883-0.21 0.33-0.163 0.525-0.31 0.878-0.666 0.726-0.733 1.002-1.403 0.859-2.098-0.155-0.752 0.082-0.493-6.069-6.654l-5.67-5.68 5.67-5.68c6.15-6.162 5.914-5.902 6.069-6.653 0.142-0.696-0.133-1.368-0.859-2.094s-1.398-1.002-2.094-0.859c-0.75 0.155-0.491-0.082-6.653 6.069l-5.68 5.67-5.68-5.669c-4.472-4.464-5.741-5.702-5.966-5.819-0.542-0.285-1.019-0.355-1.507-0.221z"></path>
    </svg>
    <div class="final-page-container">
        <div class="final-page-body">
            <p class="final-page-title">Отлично!</p>
            <p class="final-page-subtitle">МЫ ПОЛУЧИЛИ ВАШИ ОТВЕТЫ</p>
        </div>
        <div class="final-page-form">
          <div v-if="!selectMessenger">
            <h2 class="messengers-title">Сообщить результат по Телефону или в Viber?</h2>
            <div class="messengers-list">
              <div class="messengers-item" v-for="messenger of messengers" :key="messenger" @click="getMessenger(messenger)">
                <img :src="'https://nikonenkoincodeit.github.io/quiz/img/'+messenger+'.svg'" alt="viber" width="32"/>
                <div class="messengers-name">{{messenger}}</div>
              </div>
            </div>
          </div>
          <form class="form" :class="{show: selectMessenger}" @submit.prevent="handlerOnSubmit">
              <div class="messengers-modal-title">
                <img :src="'https://nikonenkoincodeit.github.io/quiz/img/'+selectMessenger+'.svg'" :alt="selectMessenger"  width="40"/>
              </div>
              <div class="messengers-label">Введите телефон {{selectMessenger}}</div>
              <input type="text" id="mobile-number" placeholder="Введите телефон" />
              <div class="messengers-modal-footer" @click="clearMessenger">Выбрать другой мессенджер</div>
              <button type="submit" class="lead-form-button" :disabled="!!phone">Готово</button>
            </form>
          <div>
            
            <label class="b-checkbox checkbox">
              <input type="checkbox" autocomplete="on" required="required" data-input-checkbox checked>
              <span class="check-input">
              &#x2713;
              </span>
              <span class="control-label"><span>Я соглашаюсь на <a href="https://www.marquiz.ru/agreement" target="_blank">обработку персональных данных</a> согласно <a href="https://www.marquiz.ru/policy" target="_blank">политике конфиденциальности</a></span></span></label>
            </div>
        </div>
    </div>
  </div>`,
  data() {
    return {
      messengers: ["phone", "viber"],
      selectMessenger: "",
      iti: null,
      input: null,
      phone: "",
    };
  },
  name: "QuizFinal",
  props: ["selectItem", "onSubmit"],
  methods: {
    getMessenger(messenger) {
      this.selectMessenger = messenger;
    },
    clearMessenger() {
      this.selectMessenger = "";
    },
    onChange() {
      this.$emit("selectItem", "add", this.value);
    },
    handlerOnSubmit() {
      const number = this.iti.getNumber(intlTelInputUtils.numberFormat.E164);
      this.phone = number;
      this.$emit("onSubmit", { number, selectMessenger: this.selectMessenger });
    },
  },
  mounted() {
    this.input = document.querySelector("#mobile-number");
    this.iti = intlTelInput(this.input, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.5/build/js/utils.js",
      defaultCountry: "auto",
      preferredCountries: ["ua"],
      showSelectedDialCode: true,
    });
  },
};
