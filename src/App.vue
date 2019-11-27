<template>
	<div id="app">
		<div id="nametags">
			<Nametag
				v-for="(person, index) in persons" v-bind:key="index"
				v-bind="person" v-bind:homecoming_year="homecoming_year" />
		</div>
	</div>
</template>

<script>
import Nametag from './components/Nametag'
import persons from './data.js'

export default {
	name: 'App',
	components: {
		Nametag
	},
	data() {
		return {
			homecoming_year: 2019,
			persons: persons
		}
	}
}
</script>

<style>
:root {
    --ansi-red: #E1443D;
    --ansi-black: #383131;
    --ansi-white: #F6F1F1;
    --ansi-cyan: #75B5C4;
    --ansi-yellow: #EEE273;
    --ansi-green: #A6D3B2;
    --ansi-brown: #D5C195;
	--ansi-lightblue: #68ddbc;
}

body {
	margin: 0;
}

@page {
	margin: 2mm;
}

#app {
	font-family: 'NanumGothic', serif;
}

.nametag {
	margin: 3pt;
	float: left;
	page-break-inside: avoid;
}
.nametag:nth-child(2n + 1) {
	clear: left;
}

@media print {
	#nametags {
	}
}
</style>
