import classNames from 'classnames/bind';
import style from './SearchAccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function SearchAccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/977d14cc20eb4430562d49d2e4d9bcaf~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=3c4ea65a&x-expires=1754982000&x-signature=3QZavdBuY5Y5JDbIo82exEfrWio%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my"
                alt="Hien"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hiền</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <p className={cx('userName')}>h8th9</p>
            </div>
        </div>
    );
}

export default SearchAccountItems;
