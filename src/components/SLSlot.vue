<template>
  <div class="hello">
    <h4>Slot: {{ slotid }}</h4>
    <draggable v-model="layouts" :options="{group:'layouts'}" class="sl-layout">
      <Layout class="sl-block" v-for="layout in layouts" :key="layout.id"
              :layoutid="layout.id"
              :slotid="slotid" />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Layout from './Layout'

export default {
  components: { draggable, Layout},
  name: 'SLSlot',
  props: {
    slotid: String
  },
  computed: {
    layouts: {
      get() {
        return this.$store.state.slots[this.slotid]
      },
      set(value) {
        this.$store.commit({
          type: 'updateSlot',
          slotid: this.slotid,
          values: value
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
