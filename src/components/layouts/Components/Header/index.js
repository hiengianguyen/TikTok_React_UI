import style from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faClose, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tik Tok" />
                </div>

                <div className={cx('search-box')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} className="close-icon" />
                    </button>

                    <FontAwesomeIcon icon={faSpinner} className="loading-icon" />

                    <div className={cx('dash-height')}></div>

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </button>
                </div>

                <div className={cx('actions')}></div>
            </div>
        </div>
    );
}

export default Header;
