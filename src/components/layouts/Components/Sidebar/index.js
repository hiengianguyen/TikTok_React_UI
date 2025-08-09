import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('wapper')}>
            <h2>Sidebar</h2>
        </div>
    );
}

export default Sidebar;
