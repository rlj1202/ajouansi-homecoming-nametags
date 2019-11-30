<template>
	<div id="random-main">
		<h1>재미있는 랜덤 게임</h1>
		<div id="random-person" v-if="person">
			{{ person.name }}
			{{ person.admission_year }}
			{{ person.group }}
			{{ person.status }}
		</div>
		<button v-on:click="choose()">랜덤</button>
		<Nametag v-bind="person" />
	</div>
</template>

<script>
import persons from '../data.csv'

import Nametag from '../components/Nametag.vue'

export default {
	data() {
		return {
			person: {
				name: "랜덤을 눌러라"
			}
		}
	},
	components: {
		Nametag
	},
	methods: {
		choose(event) {
			var random_index = Math.floor(Math.random() * (persons.length))
			this.person = persons[random_index]
			// console.log(persons.length + ', ' + random_index)
		}
	}
}
</script>

<style scoped>
.nametag {
    --ansi-red: #E1443D;
    --ansi-black: #383131;
    --ansi-white: #F6F1F1;
    --ansi-cyan: #75B5C4;
    --ansi-yellow: #EEE273;
    --ansi-green: #A6D3B2;
    --ansi-brown: #D5C195;
	--ansi-lightblue: #68ddbc;
}

.nametag {
	margin: 5pt 0;
}

#random-main {
	padding: 10pt;
}

#random-person {
	font-size: 20pt;
	margin: 5pt 0;
}
</style>
