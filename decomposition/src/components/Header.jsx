import icon1 from "../assets/1.png";
import icon2 from "../assets/2.png";
import icon3 from "../assets/3.png";
import icon4 from "../assets/4.png";
import icon5 from "../assets/5.png";
import profileImg from "../assets/profileImg.png";
import Menu from "./ListItems/Menu";
import ListTitle from "./ListItems/ListTitle";
import List from "./ListItems/List";
import ListPrice from "./ListItems/ListPrice";

const Header = () => {
  return (
    <header className="header">
      <div className="header_left">
        <Menu className="header_title">
          <ListTitle title="Сейчась в СМИ" />
          <ListTitle title="в Германи" />
          <ListTitle title="Рекомендуем" />
          <ListTitle title="31 июя, среда 02 32" color="gray" font="15px" />
        </Menu>
        <Menu className="header_menu">
          <List
            text="Путин упростил получкение автомобильных номеров"
            icon={icon1}
          />
          <List
            text="В команде Зеленского раскрыли план реформ на Украине"
            icon={icon2}
          />
          <List
            text="Tурпомощь прокомментировала гибель десятков россиян в Анталье"
            icon={icon3}
          />
          <List
            text="Суд закрыл дело Демпартии США против России"
            icon={icon4}
          />
          <List
            text="На Украине призвали создать Ядерный удара по Москве"
            icon={icon5}
          />
        </Menu>
        <Menu className="header_body">
          <ListPrice currency="USD MOEX" price="63,52" action="+0,09" />
          <ListPrice currency="EUR MOEX" price="70,86" action="+0,14" />
          <ListPrice currency="Нефть" price="64,90" action="+1,63%" />
        </Menu>
      </div>
      <div className="header_right">
        <img src={profileImg} alt="img" />
        <div>
          <a href="">Работа над ошибками</a>
        </div>
        <p>Смотрите на Яндексе и запрминайте</p>
      </div>
    </header>
  );
};

export default Header;
