<template>
    <div>
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
          <div class="layout-toolbar blockEnd">
      <div class="toolbar-item">
          <div @click="addBlock" v-if="showAddModal" class="addModal">
              <div class="portalType"><i class="small material-icons">folder</i> Folder</div>
              <div class="portalType"><i class="small material-icons">image</i> Image</div>
              <div class="portalType"><i class="small material-icons">label</i> Label</div>
              <div class="portalType"><i class="small material-icons">list</i> List</div>
              <div class="portalType"><i class="small material-icons">album</i> Album</div>
          </div>
          <div @click="showAddModal = !showAddModal"><i class="button small material-icons">add</i></div>
      </div>

  </div>
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
