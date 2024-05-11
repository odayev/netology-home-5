import Menu from "./ListItems/Menu";
import ListTitle from "./ListItems/ListTitle";
import ListPrice from "./ListItems/ListPrice";
import List from "./ListItems/List";
import play from "../assets/play.png";
import Weather from "./ListItems/Weather";

const Footer = () => {
  return (
    <footer className="footer">
      <Menu className="header_footer">
        <ListTitle title="Погода" />
        <li>
          <Weather />
        </li>
      </Menu>
      <Menu className="header_footer">
        <ListTitle title="Карта Германии" />
        <List text="Расписание" />
      </Menu>
      <Menu className="header_footer">
        <ListTitle title="Эфир" />
        <div>
          <List text="Управление как исскусство" icon={play} />
          <List text="Ночь. Мир в это время" icon={play} />
          <List text="Андрей Возн..." icon={play} />
        </div>
      </Menu>
      <Menu className="header_footer">
        <ListTitle title="Посещаемое" />
        <div>
          <ListPrice currency="Недвижимость" price="-" action="о сталинках" />
          <ListPrice
            currency="Маркет"
            price="-"
            action="люстры и светильники"
          />
          <ListPrice
            currency="Авто.ру"
            price="-"
            action="привод 4х4 до 500 000"
          />
        </div>
      </Menu>
      <Menu className="header_footer">
        <ListTitle title="Телепрограмма" className="" />
        <div>
          <ListPrice
            currency="02:00"
            price="ТНТ. Best"
            action="ТНТ International"
          />
          <ListPrice currency="02:15" price="Джингилики" action="Карусель" />
          <ListPrice
            currency="02:25"
            price="Наедине со всеми"
            action="Первый"
          />
        </div>
      </Menu>
    </footer>
  );
};

export default Footer;
