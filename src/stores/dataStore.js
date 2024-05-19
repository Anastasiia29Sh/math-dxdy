import { ref, computed, nextTick } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {

  async function getLectures(topic, lecture) {
    try {
    const response = await fetch(`./lectures/${topic}/${lecture}.html`);
    const data = await response.text();

    if (typeof MathJax !== "undefined") {
      nextTick(() => {
        MathJax.typeset();
      });
    }

    return data;
  } catch (error) {
    console.error("Failed to load HTML file:", error);
  }
  }

  return { getLectures }
})
