const form = document.querySelector('.search__header')

let store = [

]


const list = document.querySelector('.search__ul')


const createItem = (el) => {


	return (
		`
	<div class="search__list-wrapper">
		<li class="search__list-item">${el.name}</li>
		<div class="search__button-wrapper">
			<button class="search-delete" onClick="deleteTodo(${el.id})"></button>
			<input type="checkbox" id="${el.id}" onClick="checkboxToggle(${el.complated})" class="search-complete"></input>
		</div>
	</div>
`
	)
}

store.forEach((el) => {
	list.insertAdjacentHTML("beforeend", createItem(el))
})

form.addEventListener('submit', (el) => {
	el.preventDefault()
	const submitValue = () => {
		const value = form.children[0].value
		if (value !== "") {
			return value
		} return
	}

	const storeObject = (name) => {
		const value = form.children[0].value
		if (value !== "") {
			const obj = {
				name: name,
				id: Math.random(),
				complated: false,
			}
			store.push(obj)

			const filterArr = store.filter(el => el.id === obj.id)

			filterArr.forEach((el) => {
				list.insertAdjacentHTML("beforeend", createItem(el))
			})
		}

	}
	storeObject(submitValue())
	form.children[0].value = ''
})

const deleteTodo = (id) => {
	newStore = store.filter(el => el.id != id)

	store = newStore
	list.innerHTML = ''
	store.forEach((el) => {
		list.insertAdjacentHTML("beforeend", createItem(el))
	})
}

const checkboxToggle = (el) => {
	this.complated = true
	const wrapper = document.querySelector(".search__list-wrapper")
	filterStore = store.filter(el => el.complated == true)
	store = filterStore

	console.log(filterStore);
	store.forEach((el) => {
		wrapper.classList.toggle("wrapper-active")


	})




}
