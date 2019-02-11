import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slots: {
        main: [
        {
            id: '1',
            kind: 'layout',
            rows: 1,
            contents: [
                {
                    id: 1,
                    kind: 'textblock',
                    title: 'Die Direktionen',
                    text: 'Die Präsidialdirektion erfüllt verschiedene Querschnittsaufgaben, leitet und koordiniert die politische Planung des Gemeinderats und die ganzheitliche Stadtentwicklung.'
                },{
                    id: 2,
                    kind: 'textblock',
                    title: 'Der Stab',
                    text: 'In seiner Arbeit wird der Gemeinderat von seiner Stabsstelle, der Stadtkanzlei, unterstützt.'
                },
            ]
        },
         {
            id: '2',
            kind: 'layout',
            rows: 1,
            contents: [
            ]
        }
        ],
        left: [
        {
            id: '3',
            kind: 'layout',
            rows: 1,
            contents: [
                {
                    id: 3,
                    kind: 'textblock',
                    title: 'Bauinspektorat',
                    text: 'Wer bauen will, braucht eine rechtsgültige Baubewilligung.'
                },{
                    id: 4,
                    kind: 'textblock',
                    title: 'Fragen? Antworten!',
                    text: 'Wir stehen Ihnen gerne für Auskünfte und Hilfestellungen zur Verfügung.'
                },
            ]
        }
        ],
        right: [{
            id: '4',
            rows: 1,
            kind: 'layout',
            contents: []
        }]
    }
  },
  mutations: {
    updateSlot (state, payload) {
      state.slots[payload.slotid] = payload.values
    },
    updateLayout (state, payload) {
        console.log(state.slots[payload.slotid].filter((l) => l.id === payload.layoutid)[0])
      state.slots[payload.slotid].filter((l) => l.id === payload.layoutid)[0].contents = payload.values
    }
  }
})

export default store
