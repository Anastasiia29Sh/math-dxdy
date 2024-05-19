<script setup>
import { ref, nextTick, onUpdated } from "vue";

import { lectures } from "/lectures";
import { derivativesTests } from "/math_tests/derivatives";
import { integralsTests } from "/math_tests/integrals";

import { useDataStore } from "@/stores/dataStore";

import LectureTopic from "./components/LectureTopic.vue";
import TestLecture from "./components/TestLecture.vue";

const dataStore = useDataStore();

const topic = [
  { en: "derivatives", ru: "Производные" },
  { en: "integrals", ru: "Интегралы" },
];

const topicTests = { derivatives: derivativesTests, integrals: integralsTests };

const showMain = ref(true);
const showTopic = ref({ derivatives: false, integrals: false });
const showLecture = ref(false);

const lecturesTopic = ref();
const currentLecture = ref({ id: null, content: "" });
const currentTest = ref();
const currentTask = ref({ index: null, content: "" });

function openTopic(topic) {
  Object.keys(showTopic.value).forEach((key) => {
    showTopic.value[key !== topic && key] = false;
  });

  showTopic.value[topic] = !showTopic.value[topic];

  if (showTopic.value[topic])
    lecturesTopic.value = lectures.filter((f) => f.topic === topic);
}

function openLecture(topic, lectureId, lectureContent) {
  currentLecture.value.id = lectureId;
  dataStore.getLectures(topic, lectureContent).then((data) => {
    currentLecture.value.content = data;
    nextTick(() => {
      MathJax.typeset();
    });
  });

  currentTest.value = topicTests[topic].filter(
    (f) => f.idLectures === lectureId
  );

  currentTask.value = {
    index: 0,
    content: currentTest.value[0],
  };

  showMain.value = false;
  showLecture.value = true;
}

function openMain() {
  showMain.value = true;
  showLecture.value = false;
}

function nextTask() {
  currentTask.value = {
    index: currentTask.value.index + 1,
    content: currentTest.value[currentTask.value.index + 1],
  };
}

onUpdated(() => {
  nextTick(() => {
    MathJax.typeset();
  });
});
</script>

<template>
  <div class="container">
    <header class="header">
      <h1>dxdy</h1>
    </header>

    <main class="main">
      <div v-if="showMain" class="">
        <div class="math-topics">
          <div v-for="(topic, index) in topic" :key="index" class="list-topic">
            <button
              @click="openTopic(topic.en)"
              class="topic-btn"
              :class="{ 'topic-btn-active': showTopic[topic.en] }"
            >
              {{ topic.ru }}
              <span class="icon-arrow">&lsaquo;</span>
            </button>

            <!-- Лекции выбранной темы -->
            <div v-if="showTopic[topic.en]" class="list-lectures">
              <button
                v-for="lecture in lecturesTopic"
                :key="lecture.id"
                class="lecture-btn"
                @click="openLecture(topic.en, lecture.id, lecture.content)"
              >
                {{ lecture.title }}
              </button>
              <span v-if="!lecturesTopic.length" class="empty-lectures"
                >Нет лекций</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Лекции -->
      <div v-if="showLecture">
        <span @click="openMain" class="back-main-btn" style="cursor: pointer">
          <u>На главную</u>
        </span>

        <LectureTopic
          :currentLecture="currentLecture"
          :lecturesTopic="lecturesTopic"
          @openLecture="openLecture"
        />

        <TestLecture
          v-if="currentTest.length"
          :currentTask="currentTask"
          :currentTest="currentTest"
          @nextTask="nextTask"
          class="test"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #ff6600;
  min-height: 100vh;
}

.header {
  height: 50px;
  background-color: #ff6600;
  color: #fff;
  text-align: center;
}

.main {
  padding: 20px;
}

.math-topics {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.math-topics button {
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

@media (max-width: 400px) {
  .math-topics button {
    width: 250px;
  }
}

.list-topic {
  border: 1px solid #ff6600;
  border-radius: 10px;
}

.topic-btn {
  font-size: 20px;
  border: 1px solid #ff6600;
  background-color: #fff;
}

.topic-btn-active {
  background-color: #ff6600;
  color: #ffffff;
}

.list-lectures {
  display: flex;
  flex-direction: column;
}

.lecture-btn {
  border: none;
  border-bottom: 1px solid #ff6600;
  background-color: #fff;
}

.lecture-btn:last-child {
  border-bottom: 0;
}

.math-topics button:hover {
  background-color: #ffb27e;
  color: #fff;
}

.empty-lectures {
  padding: 10px;
}

.icon-arrow {
  float: inline-end;
  transform: rotate(-90deg);
  font-size: 20px;
}

.test {
  margin-top: 20px;
}
</style>
