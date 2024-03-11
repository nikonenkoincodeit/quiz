export const QuizSlider = {
  template: `<div >
        <div class="field is-grouped">
            <div class="formatted-input">
                <input type="text" :value="firstVal" class="input" @input="onInputFirst">
            </div>
            <div class="answer-slider__dash">—</div>
            <div class="formatted-input">
                <input type="text" :value="lastVal" class="input" @input="onInputLast">
            </div>
        </div>
        <div class="range_container">
  <div class="sliders_control" ref="slidersControl">
    <div class="sliders-control-label" ref="slidersControlLeftLabel" :style="{left: leftFirstLabel + '%'}">{{firstVal}}</div>
    <input id="fromSlider" ref="fromSlider" type="range" :value="firstVal" min="500" max="7500" @input="controlFromSlider"/>
    <input id="toSlider" ref="toSlider" type="range" :value="lastVal" min="500" max="7500" @input="controlToSlider"/>
  </div>
  <div class="sliders-value">
    <div>500</div>
    <div>7500</div>
  </div>
</div>
    </div>`,
  name: "QuizSlider",
  emit: ["selectItem"],
  data() {
    return {
      leftFirstLabel: 100,
      slidersControlLeftLabel: null,
      slidersControl: null,
      fromSlider: null,
      toSlider: null,
      firstVal: 2200,
      lastVal: 5700,
    };
  },
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
    onInputFirst($event) {
      this.firstVal = $event.target.value;
      setTimeout(() => {
        this.controlToSlider();
      }, 0);
    },
    onInputLast($event) {
      this.lastVal = $event.target.value;
      setTimeout(() => {
        this.controlFromSlider();
      }, 0);
    },
    controlFromSlider() {
      const [from, to] = this.getParsed(
        this.$refs.fromSlider,
        this.$refs.toSlider
      );
      this.$emit("selectItem", "lot", [from, to]);
      this.fillSlider(
        this.$refs.fromSlider,
        this.$refs.toSlider,
        "#C6C6C6",
        "#d34085",
        this.$refs.toSlider
      );
      this.firstVal = from;
      if (from > to) {
        this.firstVal = to;
        this.lastVal = from;
      }
    },
    controlToSlider() {
      const [from, to] = this.getParsed(
        this.$refs.fromSlider,
        this.$refs.toSlider
      );
      this.$emit("selectItem", "lot", [from, to]);
      this.fillSlider(
        this.$refs.fromSlider,
        this.$refs.toSlider,
        "#C6C6C6",
        "#d34085",
        this.$refs.toSlider
      );
      this.setToggleAccessible(this.$refs.toSlider);
      this.lastVal = to;

      if (from > to) {
        this.firstVal = to;
        this.lastVal = from;
      }
    },
    getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    },
    fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
      let rangeDistance = to.max - to.min;
      let fromPosition = from.value - to.min;
      let toPosition = to.value - to.min;

      if (fromPosition > toPosition) {
        let spare = fromPosition;
        fromPosition = toPosition;
        toPosition = spare;
      }
      // this.moveLabel((fromPosition / rangeDistance) * 100);
      controlSlider.style.background = `linear-gradient(
                  to right,
                  ${sliderColor} 0%,
                  ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
                  ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
                  ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
                  ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
                  ${sliderColor} 100%)`;
    },
    setToggleAccessible(currentTarget) {
      if (Number(currentTarget.value) <= 0) {
        this.$refs.toSlider.style.zIndex = 2;
      } else {
        this.$refs.toSlider.style.zIndex = 0;
      }
    },
    moveLabel(fromPosition, toPosition, rangeDistance) {
      // const step = this.$refs.slidersControl.clientWidth / rangeDistance;

      // console.log(step);
      // console.log(fromPosition);
      this.leftFirstLabel = Math.floor(fromPosition);
    },
  },
  mounted() {
    this.fillSlider(
      this.$refs.fromSlider,
      this.$refs.toSlider,
      "#C6C6C6",
      "#d34085",
      this.$refs.toSlider
    );
    this.setToggleAccessible(this.$refs.toSlider);
  },
};
