const Modal = () => {
    return(
        <>
            <div className="modal fade" id="deliveryModal" tabIndex="-1" aria-labelledby="deliveryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="deliveryModalLabel">Доставка</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Доставка по Караганде - <b className="text-danger">бесплатно</b></h5>

                            <h6 className="my-5">Доставка по Казахстану</h6>
                            <ul>
                                <li>Осуществляется курьерскими службами по всей территории Казахстана. Стоимость доставки – от 2000 тг.</li>
                                <li>Все заказы по Казахстану отправляются только по 100% предоплате</li>
                                <li>Все доставки можно отследить после отправки по трек-номеру, который высылается менеджером в личном письме.</li>
                            </ul>                                                       
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="sellModal" tabIndex="-1" aria-labelledby="sellModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="sellModalLabel">Способы оплаты</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Наличный расчет</h5>
                            <ul>
                                <li>Оплата производится при передаче товара курьером или в пункте самовывоза.</li>
                                <li>При получении товара обязательно проверьте комплектацию заказа, наличие гарантийного талона.</li>
                            </ul>
                            <h5>Безналичный расчёт</h5>
                            <ul>
                                <li>После оформления заказа будет сформирован счёт на оплату, который Вы можете оплатить. После оплаты отправляете нам чек о произведение оплаты.</li>
                                <li>Примечание! При безналичной оплате, доставка товара будет осуществлена после подтверждения факта поступления денежных средств заказчика на банковский счет магазина</li>
                            </ul>
                            <h5>Внимание!</h5>
                            <ul>
                                <li>При самовывозе необходимо заранее забронировать товар! Не забудьте связаться с нами перед приездом!</li>
                            </ul>                                                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="contactModalLabel">О нас</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>У вас есть вопросы? С радостью проконсультируем Вас!</p>
                            <h5 className="my-4">Время работы: </h5>
                            <ul>
                                <li>С понедельника по воскресенье – с 10:00 до 20:00</li>
                                <li>Без перерыва</li>
                            </ul>
                            <h5 className="my-4">Адрес</h5>
                            <ul>
                                <li>ТЦ ЦУМ​ - Проспект Бухар-жырау, 53/8​13 бутик; цокольный этаж.</li>
                            </ul>
                            <iframe loading="lazy" className="rounded-4" src="https://yandex.ru/map-widget/v1/?um=constructor%3A98b8a418894551bd968fcb1095d8bb431fe7b95a40626f7457a6872332e6ea49&amp;source=constructor" width="100%" height="200" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;