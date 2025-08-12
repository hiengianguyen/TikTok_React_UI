import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import SearchAccountItems from '../../../SearchAccountItems';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon className="" icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon className="" icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon className="" icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

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
                    interactive
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

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-brn')}>
                            <FontAwesomeIcon className="icon" icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
