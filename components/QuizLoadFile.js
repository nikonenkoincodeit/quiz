export const QuizLoadFile = {
  template: ` <div class="file-uploader" @drop="handleDrop" @dragover.prevent>
  <input type="file" ref="fileInput" @change="handleFiles" multiple style="display: none" />
  <div class="drop-area" @click="openFilePicker">
    <slot>
      <p>Перетащите файлы сюда или кликните для загрузки</p>
    </slot>
  </div>
  <div class="file-list" v-if="fileNames.length > 0">
    <p v-for="fileName in fileNames" :key="fileName">{{ fileName.name }}</p>
  </div>
</div>`,
  props: ["selectItem"],
  data() {
    return {
      fileNames: [],
    };
  },
  methods: {
    addFile(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.fileNames.push({ name: file.name, file, id: Date.now() });
      }
      this.$emit("selectItem", "add", this.fileNames);
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      console.log(files);
      if (!files) return;
      this.addFile(files);
    },
    handleFiles(event) {
      const files = event.target.files;
      if (!files) return;
      this.addFile(files);
    },
    openFilePicker() {
      this.$refs.fileInput.click();
    },
  },
};
