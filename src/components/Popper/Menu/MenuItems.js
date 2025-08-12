import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(style);

function MenuItems({ data }) {
    return (
        <Button className={cx('menu-btn')} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
