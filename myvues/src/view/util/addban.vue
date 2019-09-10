<template>
  <div class="adds">
      <input v-model="txt" type="text" placeholder="选择加班日期" @click="openPicker">
       <mt-datetime-picker
    ref="picker"
    type="date"
    v-model="pickerValue"
    @confirm="handleConfirm">
  </mt-datetime-picker>
  </div>
</template>

<script>

export default {
    data(){
        return {
            pickerValue:"",
            txt:""
        }
    },
  methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(e){
         this.txt=e.toLocaleDateString()
      }
    }
}
</script>

<style>

</style>