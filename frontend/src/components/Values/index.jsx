import "./style.scss"
import Value from "./Value.jsx"
import png1 from "../../assets/images/1.png"
import png2 from "../../assets/images/2.png"
import png3 from "../../assets/images/3.png"
import png4 from "../../assets/images/4.png"
import Heading from "../common/Heading"

function Values() {
    return (
        <div className="values-wrapper">
            <Heading heading={"Наши ценности"} />


            <div className="values-container">
                <Value img={png1}
                    h2={"Стабильность"}
                    text={"Сохранность капитала клиентов приоритетнее доходности - каждое решение взвешено, обдумано и оценено."}
                />
                <Value img={png2}
                    h2={"Устойчивость"}
                    text={"Устойчивое развитие — основа нашей бизнес-модели. Начиная с поиска и оценки предоставившихся возможностей для бизнеса до последовательного развития наших проектов и реаллокации капитала в новые возможности."}
                />
                <Value img={png3}
                    h2={"Команда"}
                    text={"Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата."}
                />
                <Value img={png4}
                    h2={"Репутация"}
                    text={"Ответственность и этика – основа нашей деятельности. Деятельность в рамках лучших практик (Корпоративный Кодекс этики и стандарты профессионального поведения) позволяет предлагать клиентам более качественные инвестиционные продукты, отвечающие высоким требованиям и ожиданиям самых требовательных клиентов."}
                />
            </div>
        </div>
    );
}

export default Values;