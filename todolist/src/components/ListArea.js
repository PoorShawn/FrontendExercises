import React from "react";

export default function({list, deleteItem, finishItem}) {
  return (
    <section className="list-area">
      <ul>
        {list ? list.map((task, id) => (
          <li key={id}>
            <div className="task-content" style={task.finished ? {textDecoration: "line-through"} : {}}>
              <p>{task.content.trim()}</p>
              <time>{task.createdAt}</time>
            </div>
            <div className="task-process">
              <button className="delete-btn" onClick={() => deleteItem(id)}>删除</button>
              <button className="finish-btn" onClick={() => finishItem(id)}>已完成</button>
            </div>
          </li>
        )) : "暂无任务"}
      </ul>
    </section>
  );
}