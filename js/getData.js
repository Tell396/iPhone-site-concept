const getData = () => {
    const list = document.querySelector('.cross-sell__list')
    console.log(list)

    const render = (data) => {
        list.innerHTML = ''

        data.forEach(item => {

            list.insertAdjacentHTML('beforeend', `
            <li>
                <article class="cross-sell__item">
                    <img class="cross-sell__image" src="${item.photo}>
                    <h3 class="cross-sell__title">${item.name}</h3>
                    <p class="cross-sell__price">${item.price}</p>
                    <button type="button" class="button button_buy cross-sell__button">Купить</button>
                </article>
            </li>
            `)
        })
    }

    fetch('./cross-sell-dbase/dbase.json')
        .then((response) => {

            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Value Error')
            }
        })
        .then((data) => {
            render(data)
        })
        .catch((error) => {
            console.error(error.message)
        })

}

getData()