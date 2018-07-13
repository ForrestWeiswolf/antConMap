import axios from 'axios'

const antConUrl = 'https://public.enigma.com/api/snapshots/a4bac19c-e333-45f8-a96e-1082d069217f?&query_mode=advanced&query=(antarctic)&row_limit=200&row_offset=0&include_serialids=true'
const bBuildUrl = 'https://public.enigma.com/api/snapshots/8a2bb8d2-dc5a-4e42-bd01-862a02a1ee46?&query_mode=advanced&query=(permittee_s_business_name%3A(%22Bronx%20Builders%22%20-%22Be%22%20-%22B.E.%22))&row_limit=200&row_offset=0&include_serialids=true'

function getCoordList(url) {
	return axios.get(url)
		.then(res => res.data)
		.then(data => data.table_rows)
		.then(table_rows => table_rows.rows)
		.then(rows => rows.map(row => [
			row[42], row[43]
		]))
	// .then(rows => rows[0].forEach((field, idx) => console.log(idx, field)))
	// .then(rows => console.log(rows))
}

export const antConCoordsPromise = getCoordList(antConUrl)
export const bBuildCoordsPromise = getCoordList(bBuildUrl)
