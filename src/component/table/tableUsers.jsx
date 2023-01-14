import React, { useState } from "react"; // импорт реакт 
import api from "../../api"; // импорт данных из api

const TableUsers = () => {
  const [users, setUsers] = useState(api.users.fetchAll()); // создание таблицы по данным из api

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user !== id));
  }; // кнопка удалить 

  const renderTitle = () => {
    let colorsTitle = "badge bg-danger m-2";

    if (users.length === 0) {
      colorsTitle = "badge bg-danger m-2";
    } else {
      colorsTitle = "badge bg-primary m-2";
    }

    let person = "Никто не тусанет с тобой сегодня";

    if (users.length) {
      person = `${users.length} ${
        (1 < users.length) & (users.length < 5)
          ? "человека тусанут"
          : "человек тусанет"
      }  с тобой сегодня`;
    }

    const title = () => {
      return <h1 className={colorsTitle}>{person}</h1>;
    }; 

    return title();
  }; // рендер заголовка

  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((qualiti) => (
            <span key={qualiti._id} className={`badge bg-${qualiti.color} m-1`}>
              {qualiti.name}
            </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <button
            className='btn btn-danger button-btn btn-sm'
            onClick={() => handleDelete(user)}
          >
            delete
          </button>
        </td>
      </tr>
    ));
  }; // рендер таблицы

  return (
    <>
      <span>{renderTitle()}</span>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Встретился, раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  ); // создание динамической таблицы
};

export default TableUsers; // экспорт в index.js 
