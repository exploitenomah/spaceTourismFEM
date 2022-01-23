

import utilStyles from '../styles/utils.module.css'

export const HeadingOne = ({ title, number }) => {
   
    return (
      <h1 className={utilStyles.headingDefault}>
        <b className={utilStyles.boldNum}>{number}</b>
        {title}
      </h1>
    );
}

export const DefaultParagraph = ({ text }) => {
    return <p className={utilStyles.paragraphDefault}>{text}</p>;
} 
export const HeadingTwo = ({ text }) => {
    return <h2 className={utilStyles.heading2default}>{text}</h2>;
}

export const ButtonList = ({ arrayList, buttonClick, btnClassName, named, numbered }) => {
    return(
        <ul>
            {arrayList.map((item, idx) => {
                return(
                    <li className={utilStyles.BellefairFF} key={item.id} id={item.id}>
                        <button
                        onClick={() => {buttonClick(item.id)}}
                        className={item.active ? btnClassName : '' }
                        >
                        {named ? item.name : numbered ? idx + 1 : ''}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

