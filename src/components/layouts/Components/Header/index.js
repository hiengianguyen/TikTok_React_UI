import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import SearchAccountItems from '../../../SearchAccountItems';
import Button from '../../../Button';

const cx = classNames.bind(style);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2000);
    });

    return (
        <div className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tik Tok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-account-title')}>Accounts</h4>
                                <SearchAccountItems />
                                <SearchAccountItems />
                                <SearchAccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search-box')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} className="close-icon" />
                        </button>

                        <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon')} />

                        <div className={cx('dash-height')}></div>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button onClick={() => alert('say hiii')} text>
                        Upload
                    </Button>
                    <Button onClick={() => alert('say hiii')} primary>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
