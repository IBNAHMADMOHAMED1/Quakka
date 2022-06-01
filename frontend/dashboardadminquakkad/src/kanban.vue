<script setup>
import { ref, reactive, watch, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import KanbanBoard from './components/kanban/KanbanBoard.vue'
import ContainerModal from '@/components/modals/ContainerModal.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import SaveIcon from '@/components/icons/SaveIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'






const store = useStore()
const displayContainerModal = ref(false)
const displayCardModal = ref(false)
const state = reactive({
  is_editing_title: false,
  temp_title: null,
})
const payload = computed(() => {
  return store.getters['vuello/getVuelloDatas']
})

onBeforeMount(async () => {
  const data = store.getters['vuello/getVuelloDatas']
  if (!data) {
    await axios.get('/sample-data.json').then(({ data }) => {
      store.dispatch('vuello/setVuello', data)
    })
  }
})

const openRepo = () => {
  window.open('https://github.com/MOHAMEDIBNAHMAD1')
}

const handleEditTitle = (type) => {
  if (type === 'edit') {
    state.is_editing_title = true
    state.temp_title = payload.value.title
  } else if (type === 'save') {
    state.is_editing_title = false
    payload.value.last_modified = new Date().toLocaleString('en-GB')
    store.dispatch('vuello/setVuello', payload.value)
  } else {
    state.is_editing_title = false
    payload.value.title = state.temp_title
  }
}

</script>

<template>
  <div v-if="payload" class="flex h-screen flex-col ">
    <KanbanBoard
      :payload="payload"
      @addContainer="displayContainerModal = true"
    />
  </div>
  <!-- Container Modal -->

  <ContainerModal
    :value="displayContainerModal"
    @close="displayContainerModal = false"
  />
</template>
