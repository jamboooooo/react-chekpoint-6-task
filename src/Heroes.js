import { useState } from "react"

const heroes = [
    'Шерлок Холмс',
    'Доктор Ватсон',
    'Профессор Мариарти',
    'Миссис Хадсон',
    'Ирен Адлер'
]

function Heroes() {
    const [names, setNames] = useState(heroes)
    return <ul>
        {names.map((name, i) =>{
            return <li key={i}>{name}</li>
        })}
    </ul>
}

export default Heroes