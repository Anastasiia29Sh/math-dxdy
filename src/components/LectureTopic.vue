<script setup>
import { computed } from "vue";

const props = defineProps(["currentLecture", "lecturesTopic"]);

const emit = defineEmits(["openLecture"]);

const indexLecture = computed(() =>
  props.lecturesTopic.indexOf(
    props.lecturesTopic.find((f) => f.id === props.currentLecture.id)
  )
);

function nextLecture() {
  const next = props.lecturesTopic.find(
    (f) => f.id === props.currentLecture.id + 1
  );

  emit("openLecture", next.topic, next.id, next.content);
}

function lastLecture() {
  if (props.currentLecture.id !== 1) {
    const last = props.lecturesTopic.find(
      (f) => f.id === props.currentLecture.id - 1
    );
    emit("openLecture", last.topic, last.id, last.content);
  }
}
</script>

<template>
  <div class="lecture">
    <h2>Лекция</h2>
    <div class="btn-lecture">
      <button @click="lastLecture" :disabled="indexLecture === 0">
        &larr; Назад
      </button>
      <button
        @click="nextLecture"
        :disabled="indexLecture + 1 >= lecturesTopic.length"
      >
        Вперед &rarr;
      </button>
    </div>

    <div v-html="currentLecture?.content"></div>
  </div>
</template>

<style scoped>
.lecture {
  margin-top: 15px;
}

.btn-lecture {
  display: flex;
  justify-content: space-between;
  margin: 0 !important;
  padding-top: 7px;
  padding-bottom: 7px;
  cursor: pointer;
  margin-bottom: 15px !important;
}

.btn-lecture button {
  margin-left: 0;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  background-color: #ffffff;
  border: none;
}

.btn-lecture button:nth-child(2n) {
  margin-right: 0;
}

.btn-lecture button:hover {
  color: #ff6600;
}

.btn-lecture button:disabled {
  color: #9b9b9b;
}
</style>
