import React from "react"


export const Modal = ({modalActive, onClickModalHandler, article}) => {

    const btnHandler = (e) => {
        e.preventDefault()
        onClickModalHandler()
    }

    console.log(article);
    const openNodal = () => onClickModalHandler()
    return(
        <div className={modalActive ? 'modal active' : 'modal'} onClick={openNodal}>
            <div className="modal_content">
                <div>{article.title}</div>
                <img src={article.photo} alt="" />
                <div>{article.artical}</div>
                <div>{article.time}</div>
                <button onClick={btnHandler} className="button">x</button>
            </div>
        </div>
    )
}
