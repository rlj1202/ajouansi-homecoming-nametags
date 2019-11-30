import Vue from 'vue'
import Router from 'vue-router'

import index from './views/index.vue'
import seats from './views/seats.vue'
import nametags from './views/nametags.vue'
import random from './views/random.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: index
		},
		{
			path: '/seats',
			component: seats
		},
		{
			path: '/nametags',
			component: nametags
		},
		{
			path: '/random',
			component: random
		}
	]
})
