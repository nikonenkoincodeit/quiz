import { SvgIconClose } from "./SvgIconClose.js";
export const QuizFinal = {
  template: `<div class="final-page" :class="{'left-col': colLeft}">
    <SvgIconClose />
    <div class="final-page-container">
        <div class="final-page-body">
            <p class="final-page-title">{{title}}</p>
            <p class="final-page-subtitle">{{text}}</p>
            <p class="final-page-description" v-if="description">{{description}}</p>
        </div>
        <div class="final-page-form">
          <div v-if="!selectMessenger">
            <h2 class="messengers-title">{{subtitle}}</h2>
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
  components: { SvgIconClose },
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
  emit: ["selectItem", "onSubmit"],
  props: {
    colLeft: {
      type: Boolean,
      default: false,
    },
    title: { type: String },
    text: { type: String },
    description: { type: String },
    subtitle: { type: String },
  },
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
