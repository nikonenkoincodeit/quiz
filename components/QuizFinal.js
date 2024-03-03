export const QuizFinal = {
  template: `<div class="final-page">
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
                <img :src="'../img/'+messenger+'.svg'" alt="viber" width="32"/>
                <div class="messengers-name">{{messenger}}</div>
              </div>
            </div>
          </div>
          <form class="form" :class="{show: selectMessenger}" @submit.prevent="handlerOnSubmit">
              <div class="messengers-modal-title">
                <img :src="'../img/'+selectMessenger+'.svg'" :alt="selectMessenger"  width="40"/>
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
