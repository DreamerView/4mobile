const SocialNetwork = () => {
    return(
        <div>
            <h1 className="text-center d-flex gap-2 justify-content-center">
                Мы в социальных сетях 
                <img loading="lazy" height="32" width="auto" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhlOWN5cWxueTFyMG9rZTM2M3h0Y3M2b2YwbHNvNTh0ZWhqNmNnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LlngFXftGiC6Ha4Wit/giphy.gif"/>
            </h1>
            <p className="text-center text-muted mt-4">Подписывайся, тут много чего интересного</p>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 my-5">
                <a href="" className="btn btn-lg btn-light d-flex gap-3 rounded-4"><i className="bi bi-instagram"></i>Подписаться</a>
                <a href="" className="btn btn-lg btn-light d-flex gap-3 rounded-4"><i className="bi bi-tiktok"></i>Подписаться</a>
                <a href="" className="btn btn-lg btn-light d-flex gap-3 rounded-4"><i className="bi bi-whatsapp"></i>Написать</a>
            </div>
        </div>
    )
};

export default SocialNetwork;