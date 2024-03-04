export const QuizSidebar = {
  template: `<div class="quiz-sidebar" :class="{show: isShow}">
    <div class="assistant-person">
        <div class="assistant-avatar">
            <img :src="data.avatar" alt="user" />
            <div class="assistant-avatar-badge"></div>
        </div>
        <div class="assistant-name">
            <p class="assistant-title">{{data.name}}</p>
            <div class="assistant-mobile-status"></div>
            <p class="assistant-subtitle"><span>{{data.specialty}}</span></p>
            <div class="assistant-mobile-text">
              {{data.text}}
            </div>
        </div>
          <svg version="1.1" class="toggle-sidebar"  @click="onClick" width="20" height="20" viewBox="0 0 32 32">
            <path fill="#97979a" d="M0 9.232c0.227-1.077 1.090-1.666 1.842-2.313 0.559-0.481 1.443-0.393 2.023 0.076 0.129 0.104 0.248 0.221 0.366 0.339 3.801 3.799 7.6 7.599 11.399 11.4 0.102 0.103 0.19 0.22 0.312 0.361 0.132-0.126 0.229-0.212 0.321-0.304 3.845-3.843 7.688-7.687 11.533-11.53 0.679-0.679 1.512-0.887 2.188-0.383 0.632 0.47 1.202 1.058 1.684 1.684 0.441 0.573 0.306 1.372-0.161 1.935-0.079 0.095-0.166 0.187-0.254 0.275-4.63 4.631-9.26 9.261-13.89 13.891-0.711 0.711-1.496 0.864-2.25 0.427-0.177-0.103-0.337-0.243-0.483-0.389-4.662-4.658-9.32-9.32-13.985-13.974-0.338-0.337-0.521-0.737-0.645-1.181 0-0.104 0-0.208 0-0.312z"></path>
          </svg>

    </div>
    <div class="assistant-block">
        <div class="assistant-text-arrow"></div>
        <div class="assistant-text">
        {{data.text}}
        </div>
    </div>
  </div>`,
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    data: Object,
  },
  methods: {
    onClick() {
      this.isShow = !this.isShow;
    },
  },
};
