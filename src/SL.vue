<template>
    <SLSlot :slotid="slotid"/>
</template>

<script>
import SLSlot from './components/SLSlot.vue'

export default {
  name: 'simplelayout',
  components: {
    SLSlot
  },
  props: {
    slotid: String
  },
}
</script>
