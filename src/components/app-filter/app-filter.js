
import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Всі працівники'},
        {name: 'rise', label: 'На підвищення'},
        {name: 'moreSalary', label: 'З/П більше 40000грн'}
    ]

    const buttons = buttonsData.map(({name, label}) => {

        const active = props.filterBtn === name,
              clazz = active ? 'btn btn-light' : 'btn btn-outline-light';

        return ( 
            <button className={clazz}
            key={name}
            onClick={() => {
                props.onUpdateBtn(name)
                }}
            type='button'>
                {label}
            </button>
        )
    }) 
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
}

export default AppFilter;