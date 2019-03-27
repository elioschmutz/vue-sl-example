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
                            id: 8,
                            rows: 2,
                            kind: 'layout',
                            contents: [
                                {
                                    id: 9,
                                    kind: 'textblock',
                                    title: 'Column 1',
                                    text: 'Column 1'
                                }
                            ]
                        },
                        {
                            id: 1,
                            kind: 'textblock',
                            title: 'Die Direktionen',
                            text:
                                'Die Präsidialdirektion erfüllt verschiedene Querschnittsaufgaben, leitet und koordiniert die politische Planung des Gemeinderats und die ganzheitliche Stadtentwicklung.'
                        },
                        {
                            id: 2,
                            kind: 'textblock',
                            title: 'Der Stab',
                            text:
                                'In seiner Arbeit wird der Gemeinderat von seiner Stabsstelle, der Stadtkanzlei, unterstützt.'
                        }
                    ]
                },
                {
                    id: '2',
                    kind: 'layout',
                    rows: 1,
                    contents: []
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
                        },
                        {
                            id: 4,
                            kind: 'textblock',
                            title: 'Fragen? Antworten!',
                            text:
                                'Wir stehen Ihnen gerne für Auskünfte und Hilfestellungen zur Verfügung.'
                        }
                    ]
                }
            ],
            right: [
                {
                    id: '4',
                    rows: 1,
                    kind: 'layout',
                    contents: []
                },
                {
                    id: '7',
                    rows: 2,
                    kind: 'layout',
                    contents: []
                }
            ],
            footer1: [
                {
                    id: '5',
                    rows: 1,
                    kind: 'layout',
                    contents: []
                }
            ],
            footer2: [
                {
                    id: '6',
                    rows: 1,
                    kind: 'layout',
                    contents: []
                }
            ]
        }
    },
    mutations: {
        updateSlot(state, payload) {
            state.slots[payload.slotid] = payload.values
        },
        updateLayout(state, payload) {
            const slot = state.slots[payload.slotid]
            slot.forEach(layout => {
                if (layout.id == payload.layoutid) {
                    layout.contents = payload.values
                    return
                }
                if (!layout.kind === 'layout') {
                    return
                }

                layout.contents.forEach(content => {
                    if (content.id == payload.layoutid) {
                        content.contents = payload.values
                        return
                    }
                })
            })
            // slot.filter(l => l.id === payload.layoutid)[0].contents = payload.values
        }
    }
})

export default store
