import React, { useState,useRef } from 'react'



const Card = ({ item, id, show = false }) => {
    const [value, setValue] = useState(null);
    const ref=useRef(null)
    function chengeValue(event) {
        setValue(event.target.value);
        ref.current=event.target.value;
    }

    const ans = item.a.map((i, n) => {
        const current = () => { return value === i.text }
        return <form key={n}>
            <input type="radio" checked={current()} onChange={chengeValue} id={i.text} name='ans' value={i.text} />
            <label forhtml={i.text} className='p-2'>{i.text}</label>
            <br />
        </form>
    })
    const chk = value && item.a.find(i=>i.text===value);
    const answer = chk?.isTrue? <span className='text-green-500 '>Неплохо, Анечка!</span> : <span className='text-red-600'>Иди готовься!! Нефиг спать</span>;
    return <div className='p-2'>
        <div className='bg-slate-100 p-6 rounded-md'>
            {value === null ? <div className='text-red-700'>Введите вариант ответа</div> : null}

            <h1 className='font-bold mb-3'>{item.q}</h1>
            {ans}
            {
                show && (
                    <div className='mt-5 text-2xl'>
                        <span className='font-bold'>Ответ: </span> {chk===null?'-':answer}
                    </div>
                )
            }
        </div>

    </div>

}

const Home = ({ data }) => {
    const [show, setShow] = useState(false)

    let list = data.map((card, i) => {
        return <div key={i}>
            <Card item={card} id={i} show={show} />
        </div>
    })

    return (
        <div className='w-full md:w-2/3 p-4'>
            {list}
            <button type='button' className='bg-blue-600 mt-2 w-1/3 text-xl py-2 px-4 text-white rounded-sm' onClick={() => setShow(true)}>Результат</button>
        </div>
    )
}

export default Home