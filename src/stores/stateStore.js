import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('stateStore', () => {
  const contextMenu = ref({ show: false, x: 0, y: 0 })
  const activeTaskId = ref()
  const activeColumnId = ref()
  const activeTaskData = ref()
  const activeColumnTitle = ref()
  const taskEditable = ref(false)
  const newTaskEditable = ref(false)
  const editText = ref()

  const showContextMenu = (el, taskId, columnId, taskData, columnTitle) => {
    contextMenu.value.show = true
    contextMenu.value.x = el.left
    contextMenu.value.y = el.top + 20
    setActiveColumnId(columnId)
    setActiveColumnTitle(columnTitle)
    setActiveTaskId(taskId)
    setActiveTaskData(taskData)
  }
  const hideContextMenu = () => {
    contextMenu.value.show = false
  }
  const toggleTaskEditable = () => {
    taskEditable.value = !taskEditable.value
  }
  const toggleNewTaskEditable = () => {
    newTaskEditable.value = !newTaskEditable.value
  }
  const setActiveTaskId = (id) => {
    activeTaskId.value = id
  }
  const setActiveColumnId = (id) => {
    activeColumnId.value = id
  }
  const setActiveTaskData = (data) => {
    activeTaskData.value = data
  }
  const setActiveColumnTitle = (data) => {
    activeColumnTitle.value = data
  }

  return {
    contextMenu,
    activeTaskId,
    activeColumnId,
    activeTaskData,
    editText,
    setActiveTaskData,
    showContextMenu,
    setActiveTaskId,
    setActiveColumnId,
    hideContextMenu,
    toggleTaskEditable,
    taskEditable,
    newTaskEditable,
    toggleNewTaskEditable,
    setActiveColumnTitle,
    activeColumnTitle
  }
})
