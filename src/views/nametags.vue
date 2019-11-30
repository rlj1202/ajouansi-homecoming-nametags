<template>
	<div id="nametags">
		<Nametag
			v-for="(person, index) in persons" v-bind:key="index"
			v-bind="person" v-bind:homecoming_year="homecoming_year" />
	</div>
</template>

<script>
import Nametag from '../components/Nametag'

import persons from '../data.csv'

export default {
	name: 'Nametags',
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
	margin: 3pt;
	float: left;
	page-break-inside: avoid;
}
.nametag:nth-child(2n + 1) {
	clear: left;
}

@page {
	margin: 2mm;
}

@media print {
	#nametags {
	}
}
</style>
