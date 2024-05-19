<script setup>
import { ref, nextTick, computed, watch, toRefs } from "vue";

const props = defineProps(["currentTask", "currentTest"]);

const { currentTest } = toRefs(props);

const emit = defineEmits(["nextTask"]);

const userAnswer = ref();
const mark = ref(null);

function checkTask() {
  if (
    userAnswer.value !== undefined &&
    userAnswer.value !== "" &&
    userAnswer.value !== null
  ) {
    userAnswer.value =
      typeof userAnswer.value === "string"
        ? userAnswer.value.replace(",", ".")
        : userAnswer.value;
    mark.value = +userAnswer.value === +props.currentTask.content.trueAnswer;
  }
}

function nextTask() {
  userAnswer.value = null;
  mark.value = null;

  emit("nextTask");

  nextTick(() => {
    MathJax.typeset();
  });
}

const hasTask = computed(
  () => props.currentTask.index + 1 < props.currentTest.length
);

watch(currentTest, () => {
  userAnswer.value = null;
  mark.value = null;
});
</script>

<template>
  <div>
    <h2>Тренажер</h2>

    <div class="test">
      <h4 class="question">
        <i>{{ currentTask.content.example.text }}</i>
      </h4>
      <p v-html="currentTask.content.example.formula"></p>

      <div v-if="currentTask.content.format === 'input'" class="answer">
        <label>Введите ответ:</label>
        <input v-model.trim="userAnswer" type="text" />
      </div>

      <div v-else-if="currentTask.content.format === 'choice'" class="answer">
        <label>Выберите правильный ответ:</label>
        <div
          v-for="(el, index) in currentTask.content.answers"
          :key="index"
          class="radio"
        >
          <input
            v-model="userAnswer"
            type="radio"
            :id="'el' + index"
            :value="index"
            name="answers"
          />
          <label :for="'el' + index">{{ el }}</label>
        </div>
      </div>
      <button @click="checkTask" class="check-btn btn">Проверить</button>

      <div v-if="mark !== null" class="show-mark">
        <span class="mark" :class="{ 'error-mark': !mark }">
          {{ mark ? "Правильно! &#128521;" : "Неверно &#128546;" }}
        </span>
        <button
          v-if="mark && hasTask"
          @click="nextTask"
          class="next-task-btn btn"
        >
          Следующий вопрос
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test {
  margin-top: 15px;
}

.question {
  margin-bottom: 10px;
}

.answer {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-top: 15px;
  padding-bottom: 10px;
}

.answer label {
  margin-left: 0;
}

.answer input {
  padding: 7px;
  border-radius: 8px;
  margin-left: 0;
  border: 1px solid #000;
}

.answer .radio {
  margin-left: 0;
}

.radio label {
  padding-left: 5px;
}

.btn {
  padding: 7px;
  padding-inline: 10px;
  cursor: pointer;
  border-radius: 10px;
}

.check-btn {
  background-color: #fff;
  border: 1px solid #000;
}

.check-btn:hover {
  background-color: #ff6600;
  color: #fff;
  border-color: #ff6600;
}

.show-mark {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
}

.mark {
  margin-left: 0;
  color: #318d00;
}

.error-mark {
  color: red;
}

.next-task-btn {
  margin-right: 0;
  background-color: #ff6600;
  color: #fff;
  border: 0;
}

.next-task-btn:hover {
  background-color: #ff9e20;
}
</style>
