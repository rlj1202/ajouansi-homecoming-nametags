<template>
	<div v-bind:class="{
	'nametag': true,
	'group-graduate': (group == '졸업생'),
	'group-undergraduate': (group == '재학생'),
	'group-fresh': (group == '신입생'),
	'group-absense': (group == '휴학생'),
	'group-professor': (group == '교수님')
	}">
		<div class="nametag-info">
			<div v-if="admission_year" class="nametag-info-year">{{ admission_year }} 학번</div>
			<div v-if="name" class="nametag-info-name">{{ name }}</div>
			<div v-if="ext" class="nametag-info-ext">{{ ext }}</div>
		</div>
		<div class="nametag-footer">
			<img class="nametag-footer-logo" src="../assets/ansi-logo-white.svg" />
			<div class="nametag-footer-hangul">{{ homecoming_year }} A.N.S.I. 홈커밍데이</div>
			<div class="nametag-footer-english">A.N.S.I. Homecoming Day {{ homecoming_year }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Nametag',
	props: ['name', 'admission_year', 'group', 'ext', 'homecoming_year']
}
</script>

<style scoped>
.nametag {
	--theme-color: var(--ansi-red);

	border-width: 1.5pt;
	border-color: var(--theme-color);
	border-style: solid;

	min-width: 10cm;
	max-width: 10cm;
	min-height: 9cm;
	max-height: 9cm;

	display: flex;
	flex-flow: column;
	box-sizing: border-box;
}
.group-graduate.nametag {
	--theme-color: var(--ansi-red);
}
.group-undergraduate.nametag {
	--theme-color: var(--ansi-black);
}
.group-fresh.nametag {
	--theme-color: var(--ansi-lightblue);
}
.group-absense.nametag {
	--theme-color: var(--ansi-cyan);
}
.group-professor.nametag {
	--theme-color: var(--ansi-brown);
}

.nametag-info {
	color: var(--ansi-black);
	font-weight: bold;
	text-align: center;

	flex-grow: 1;

	display: flex;
	flex-flow: column;
	justify-content: space-around;
	padding: 25pt 0;

}
.nametag-info-year {
	font-size: 36pt;
}
.nametag-info-name {
	font-size: 80pt;
}
.nametag-info-ext {
	font-size: 24pt;
}

.nametag-footer {
	text-align: right;
	background-color: var(--theme-color);
	color: var(--ansi-white);

	padding: 5pt;
	box-sizing: border-box;

	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
}
.nametag-footer-logo {
	height: 15pt;
	
	place-self: center;

	grid-row-start: 1;
	grid-row-end: span 2;
}
.nametag-footer-hangul, .nametag-footer-english {
	padding: 1pt;
	box-sizing: border-box;
}
.nametag-footer-hangul {
	font-weight: bold;
	font-size: 14pt;

	grid-column-start: 2;
}
.nametag-footer-english {
	font-size: 13pt;

	grid-column-start: 2;
}
</style>
