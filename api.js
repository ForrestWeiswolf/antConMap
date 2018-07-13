import axios from 'axios'

const url = 'https://public.enigma.com/api/snapshots/a4bac19c-e333-45f8-a96e-1082d069217f?&query_mode=advanced&query=(antarctic)&row_limit=200&row_offset=0&include_serialids=true'
const coordListPromise = axios.get(url)
.then(res => res.data)
.then(data => data.table_rows)
.then(table_rows => table_rows.rows)
.then(rows => rows.map(row => [
	row[42], row[43]
]))
// .then(rows => rows[0].forEach((field, idx) => console.log(idx, field)))
// .then(rows => console.log(rows))

export default coordListPromise
