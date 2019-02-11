<template>
    <div class="sl-block">
        <div class="layout-toolbar">
            <div class="toolbar-item">
                <div><i class="button small material-icons">edit</i></div>
            </div>
            <div class="toolbar-item">
                <div><i class="button small material-icons">delete</i></div>
            </div>
        </div>
        <b>{{block.title}}</b>
        <p>{{block.text}}</p>
    </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    block: Object,
  },
}
</script>

<style scoped>
.sl-block {
  padding: 2em;
  border: 1px dashed #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sl-block:hover {
  cursor: pointer;
}
.layout-toolbar {
    display: flex;
    justify-content: flex-end;
}
.layout-toolbar.blockEnd {
    justify-content: center;
}
</style>
