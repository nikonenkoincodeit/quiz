export const QuizSidebar = {
  template: `<div class="quiz-sidebar">
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
    </div>
    <div class="assistant-block">
        <div class="assistant-text-arrow"></div>
        <div class="assistant-text">
        {{data.text}}
        </div>
    </div>
  </div>`,
  props: {
    data: Object,
  },
};
