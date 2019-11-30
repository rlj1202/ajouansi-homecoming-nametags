<template>
	<div id="seats-page">
		<div id="seat-tables">
			<div class="seat-table" v-for="table in dist.tables">
				<div>
					평균 학번 : {{ table.avg.toFixed(2) }}
				</div>
				<div>
					표준 편차 : {{ table.deviation.toFixed(2) }}
				</div>
				<div class="seat-table-persons">
					<div class="seat-table-person" v-for="person in table.persons">
						<span
							v-if="person"
							v-bind:style="person.group == '졸업생' ? { 'font-weight': 'bold' } : {}">
							<span v-bind:style="person.status == '미정' ? { 'color': 'red' } : {}">
								{{ person.name }} {{ person.admission_year }}
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>

		<ul>
			<li>표준편차 합 : {{ dist.deviation_sum.toFixed(2) }}</li>
			<li>표준편차 의 표준편차 : {{ dist.deviation_of_deviation.toFixed(2) }}</li>
		</ul>
	</div>
</template>

<style scoped>
#seats-page {
	margin: 5pt;
}

#seat-tables {
	display: inline-grid;
	grid-template-columns: auto auto auto;
}

.seat-table {
	border-width: 1pt;
	border-color: black;
	border-style: solid;

	margin: 5pt;
	padding: 5pt;
}
.seat-table-persons {
	display: inline-grid;
	grid-template-rows: auto auto;
	grid-template-columns: auto auto;
}
.seat-table-person {
	padding: 5pt;
	text-align: center;

	place-self: center;
}
</style>

<script>
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function calc(a) {
	var avg = a.reduce((accum, value) => accum + value) / a.length
	var variance = a.reduce((accum, value) => accum + (avg - value)*(avg - value)) / a.length
	var deviation = Math.sqrt(variance)

	return {
		avg: avg,
		variance: variance,
		deviation: deviation
	}
}

function random_dist(persons, nr_persons_per_table = 7) {
	var undergraduate = persons
		.filter(person => person.group == "재학생" || person.group == "휴학생")
	var freshman = persons
		.filter(person => person.group == "신입생")
	var graduate = persons
		.filter(person => person.group == "졸업생")

	var nr_persons = undergraduate.length + freshman.length + graduate.length
	var nr_tables = Math.ceil(nr_persons / nr_persons_per_table)

	// init tables
	var tables = []
	for (var i = 0; i < nr_tables; i++) {
		tables[i] = {
			persons: [],
			avg: 0,
			deviation: 0
		}
	}

	// shuffle all students
	shuffle(freshman)
	shuffle(undergraduate)
	shuffle(graduate)

	// dist freshman
	var cur_table_idx = 0
	freshman.forEach((person, index) => {
		cur_table_idx++
		cur_table_idx %= nr_tables
		var max_iter = nr_tables
		while (max_iter-- && tables[cur_table_idx].persons.length > nr_persons_per_table) {
			cur_table_idx++
			cur_table_idx %= nr_tables
		}
		tables[cur_table_idx].persons.push(person)
	})

	// dist undergraduate
	undergraduate.forEach((person, index) => {
		cur_table_idx++
		cur_table_idx %= nr_tables
		var max_iter = nr_tables
		while (max_iter-- && tables[cur_table_idx].persons.length > nr_persons_per_table) {
			cur_table_idx++
			cur_table_idx %= nr_tables
		}
		tables[cur_table_idx].persons.push(person)
	})

	// dist graduate
	graduate.forEach((person, index) => {
		cur_table_idx++
		cur_table_idx %= nr_tables
		var max_iter = nr_tables
		while (max_iter-- && tables[cur_table_idx].persons.length > nr_persons_per_table) {
			cur_table_idx++
			cur_table_idx %= nr_tables
		}
		tables[cur_table_idx].persons.push(person)
	})

	// calculate deviation for each table
	tables.forEach((table, index) => {
		var result = calc(table.persons.map(person => Number(person.admission_year)))

		table.avg = result.avg
		table.deviation = result.deviation
	})

	// return result
	return {
		tables: tables,
		deviation_sum: tables.map(table => table.deviation).reduce((accum, value) => accum + value),
		deviation_of_deviation: calc(tables.map(table => table.deviation)).deviation
	}
}

import persons from '../data.csv'

var iters = 10000

var nr_persons_per_table = 4
var dist = random_dist(persons, nr_persons_per_table)

for (var i = 0; i < iters; i++) {
	var result = random_dist(persons, nr_persons_per_table)

	if (dist.deviation_sum > result.deviation_sum
		&& dist.deviation_of_deviation > result.deviation_of_deviation) {
		dist = result
	}
}

export default {
	data() {
		return {
			persons: persons,
			dist: dist
		}
	}
}
</script>
