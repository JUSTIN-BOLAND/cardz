import Vue from 'vue'
import Router from 'vue-router'
import SpellBook from '@/components/SpellBook'
import SpellCard from '@/components/SpellCard'
import SpellSearch from '@/components/SpellSearch'
import SpellPrinter from '@/components/SpellPrinter'
import MigrateSpells from '@/components/MigrateSpells'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'spellBook', component: SpellBook },
    { path: '/migrate-spells/', name: 'migrateSpells', component: MigrateSpells },
    { path: '/search/', name: 'spellSearch', component: SpellSearch },
    { path: '/card/', name: 'spellCard', component: SpellCard },
    { path: '/spellbook/print/', name: 'spellPrinter', component: SpellPrinter, props: (route) => ({spellsHash: route.query.spells}) }
  ]
})
