import Menu from "./ListItems/Menu";
import ListTitle from "./ListItems/ListTitle";
import yandex from "../assets/yandex.png";
import { CiKeyboard } from "react-icons/ci";
import photo from "../assets/photo.png";

function Searchbar() {
  return (
    <div className="input_container">
      <img src={yandex} alt="" className="yandex" />
      <input type="text" placeholder="" />
      <CiKeyboard
        style={{ marginRight: "1rem", float: "right" }}
        color="#623CEA"
        size="1.5em"
      />
      <button>Найти</button>
    </div>
  );
}

function SearchInfo() {
  return (
    <div className="search_info">
      <span>
        <strong>Найдется все. Например</strong>, фаза луны сегодня
      </span>
      <img src={photo} alt="" className="photo" />
    </div>
  );
}

const MainSection = () => {
  return (
    <main className="main">
      <div className="main_link">
        <Menu className="header_title">
          <ListTitle title="Видео" />
          <ListTitle title="Картинки" />
          <ListTitle title="Новости" />
          <ListTitle title="Карты" />
          <ListTitle title="Маркет" />
          <ListTitle title="Переводчик" />
          <ListTitle title="Эфир" />
          <ListTitle title="еще" />
        </Menu>
        <Searchbar />
        <SearchInfo />
      </div>
    </main>
  );
};

export default MainSection;
