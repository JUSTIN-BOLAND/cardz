import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import SpaceCardBuilder from '@/components/cardBuilder/SpaceCardBuilder'
import SpaceCardPrinter from '@/components/cardPrinter/SpaceCardPrinter'
import CharacterSheetBuilder from '@/components/cardBuilder/CharacterSheetBuilder'
import CharacterSheetPrinter from '@/components/cardPrinter/CharacterSheetPrinter'
import SpellCardBuilder from '@/components/cardBuilder/SpellCardBuilder'
import WngMonsterSheetBuilder from '@/components/cardBuilder/WngMonsterSheetBuilder'
import SpellSearch from '@/components/SpellSearch'
import SpellBook from '@/components/SpellBook'
import SpellCardPrinter from '@/components/cardPrinter/SpellCardPrinter'
import MigrateSpells from '@/components/MigrateSpells'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    { path: '/migrate-spells/', name: 'migrateSpells', component: MigrateSpells },
    { path: '/search/', name: 'spellSearch', component: SpellSearch },
    { path: '/spellbook/', name: 'spellBook', component: SpellBook },
    {path: '/builder/future', name: 'spaceCardBuilder', component: SpaceCardBuilder},
    {path: '/builder/char-a5', name: 'characterSheetBuilder', component: CharacterSheetBuilder},
    {path: '/builder/wng-monster', name: 'wngMonsterSheetBuilder', component: WngMonsterSheetBuilder},
    {path: '/builder/dnd-spell', name: 'spellCardBuilder', component: SpellCardBuilder},
    {path: '/printer/future', name: 'spaceCardPrinter', component: SpaceCardPrinter},
    {path: '/printer/char-a5', name: 'characterSheetPrinter', component: CharacterSheetPrinter},
    {path: '/printer/spellbook', name: 'spellBookPrinter', component: SpellCardPrinter},
    {
      path: '/spellbook/print/:spellHash',
      name: 'spellPrinter',
      component: SpellCardPrinter,
      props: (route) => ({spellsHash: route.params.spellHash})
    }
  ]
})
