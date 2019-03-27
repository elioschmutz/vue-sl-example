<template>
    <div class="sl-layout">
        <div class="layout-toolbar">
            <div class="toolbar-item">
                <ul @click="showRowModal = !showRowModal" v-if="showRowModal" class="layoutModal">
                    <li><i class="button small material-icons">view_column</i></li>
                    <li><i class="button small material-icons">view_array</i></li>
                    <li><i class="button small material-icons">view_column</i></li>
                    <li><i class="button small material-icons">view_array</i></li>
                </ul>
                <div @click="showRowModal = !showRowModal"><i class="button small material-icons">view_column</i></div>
            </div>
            <div class="toolbar-item">
                <div @click="addBlockTop" v-if="showAddModalTop" class="addModal">
                    <input placeholder="Filter..." />
                    <div>
                        <div class="portalType"><i class="small material-icons">folder</i> Folder</div>
                        <div class="portalType"><i class="small material-icons">image</i> Image</div>
                        <div class="portalType"><i class="small material-icons">label</i> Label</div>
                        <div class="portalType"><i class="small material-icons">list</i> List</div>
                        <div class="portalType"><i class="small material-icons">album</i> Album</div>
                        <div class="portalType"><i class="small material-icons">folder</i> Folder</div>
                        <div class="portalType"><i class="small material-icons">image</i> Image</div>
                        <div class="portalType"><i class="small material-icons">label</i> Label</div>
                        <div class="portalType"><i class="small material-icons">list</i> List</div>
                        <div class="portalType"><i class="small material-icons">album</i> Album</div>
                    </div>
                </div>
                <div @click="showAddModalTop = !showAddModalTop"><i class="button small material-icons">add</i></div>
            </div>
            <div class="toolbar-item">
                <div><i class="button small material-icons">delete</i></div>
            </div>

        </div>
        <draggable v-model="blocks" :options="layoutOptions">
          <template v-for="block in blocks">
            <TextBlock :block="block" v-if="block.kind == 'textblock'" :key="block.id"/>
            <Layout :layout="block" :slotid="slotid" v-if="block.kind == 'layout'" :key="block.id"/>
          </template>
        </draggable>
        <div class="layout-toolbar" v-if="blocks.length>0">
            <div class="toolbar-item">
                <div @click="addBlockBottom" v-if="showAddModalBottom" class="addModal">
                    <input placeholder="Filter..." />
                    <div>
                        <div class="portalType"><i class="small material-icons">folder</i> Folder</div>
                        <div class="portalType"><i class="small material-icons">image</i> Image</div>
                        <div class="portalType"><i class="small material-icons">label</i> Label</div>
                        <div class="portalType"><i class="small material-icons">list</i> List</div>
                        <div class="portalType"><i class="small material-icons">album</i> Album</div>
                        <div class="portalType"><i class="small material-icons">folder</i> Folder</div>
                        <div class="portalType"><i class="small material-icons">image</i> Image</div>
                        <div class="portalType"><i class="small material-icons">label</i> Label</div>
                        <div class="portalType"><i class="small material-icons">list</i> List</div>
                        <div class="portalType"><i class="small material-icons">album</i> Album</div>
                    </div>
                </div>
                <div @click="showAddModalBottom = !showAddModalBottom"><i class="button small material-icons">add</i></div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import TextBlock from './TextBlock'

export default {
  name: 'Layout',
  components: { draggable, TextBlock },
  data: () => {
    return {
        showRowModal: false,
        showAddModalTop: false,
        showAddModalBottom: false,
        layoutOptions: {
        group: {
          name: 'groups',
          put: function(to, from, element) {
            return element.classList.contains('sl-layout') || element.classList.contains('sl-block')
          }
        }
      }
    }
  },
  props: {
    slotid: String,
    layout: Object,
  },
  methods: {
      addBlockTop: function() {
          let block = {
                    id: Math.floor(Math.random() * 10000000),
                    kind: 'textblock',
                    title: 'Ein neuer Block',
                    text: '...'
                }
          this.blocks = [block].concat(this.layout.contents)
          this.showAddModalTop = false
      },
      addBlockBottom: function() {
          let block = {
                    id: Math.floor(Math.random() * 10000000),
                    kind: 'textblock',
                    title: 'Ein neuer Block',
                    text: '...'
                }
          this.blocks = this.layout.contents.concat([block])
          this.showAddModalTop = false
      }
  },
  computed: {
    blocks: {
      get() {
        return this.layout.contents
      },
      set(value) {
        this.$store.commit({
          type: 'updateLayout',
          slotid: this.slotid,
          layoutid: this.layout.id,
          values: value
        })
      }
    }
  }
}
</script>

<style scoped>
.sl-layout {
  border: 1px dashed #ddd;
  margin: 0.2em;
  padding: 1em;
}
.sl-layout:hover {
  cursor: pointer;
}
.button {
    cursor: pointer;
}
.layout-toolbar {
    display: flex;
    justify-content: center;
}
.layoutModal, .addModal {
    background-color: #efefef;
    border: 1px solid #0b0529;
    display: flex;
    padding: 1em;
    position: absolute;
    top: -70px;
    z-index: 1000;
}
.layoutModal li {
    margin-left: 1em;
}
.toolbar-item {
    position: relative;
}
.addModal {
    min-width: 20vw;
    justify-content: space-around;
    flex-direction: column;
}
.addModal .portalType {
    display: flex;
    flex-basis: 50%;
}
.addModal > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
