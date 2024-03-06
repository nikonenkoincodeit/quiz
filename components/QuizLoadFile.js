export const QuizLoadFile = {
  template: ` 
  <div class="file-uploader-tag mtb-15">
    <span class="circle">&#10004;</span>
    выберите один или несколько</div>
  <div class="file-uploader" @drop="handleDrop" @dragover.prevent @click="openFilePicker">
  <div class="file-uploader-label">10MB max</div>
  <input type="file" ref="fileInput" @change="handleFiles" multiple style="display: none" />
  <div class="drop-area" >
 
<svg width="40"  viewBox="0 0 24 24" fill="none" ><path d="m8 8 4-4 4 4" stroke="#d34085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4v12M19 17v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17" stroke="#d34085" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>

      <p class="file-uploader-title">Нажмите, чтобы загрузить файл</p>
      <p class="file-uploader-subtitle">Или перетяните его из папки в это поле</p>
    
  </div>
</div>
<div class="file-list" v-if="fileNames.length > 0">
    <div class="file-uploader-tag" v-for="file in fileNames" :key="file.id">{{ file.name }}
    <button type="button" class="delete-file" @click="deleteFile(file.id)">x</button>
    </div>
  </div>
`,
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  emit: ["selectItem"],
  data() {
    return {
      fileNames: [],
    };
  },
  methods: {
    addFile(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > 10 * 1024 * 1024) {
          new AWN().alert(
            "Файл" +
              file.name +
              "слишком большой. Максимальный размер файла 10MB.",
            {
              position: "top-right",
            }
          );
          continue;
        }
        this.fileNames.push({ name: file.name, file, id: Date.now() });
      }
      if (this.fileNames.length > 0)
        this.$emit("selectItem", "file", this.fileNames);
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
    deleteFile(id) {
      this.fileNames = this.fileNames.filter((file) => file.id !== id);
      this.$emit("selectItem", "add", this.fileNames);
    },
  },
  mounted() {
    this.fileNames = this.$props.value[0] || [];
  },
};
