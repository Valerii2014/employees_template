
import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Перелік працівників компанії N</h1>
            <h2>Загальна кількість працівників: {props.totalEmploye}</h2>
            <h2>Премію отримають: {props.hadIncrease()}</h2>
        </div>
    )
}

export default AppInfo;