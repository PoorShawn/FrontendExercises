import { useRef } from "react";

export default function({addItem}) {
  const input = useRef();
  const onClick = (e) => {
    e.preventDefault();

    let date = new Date();
    const newTask = {
      content: input.current.value,
      createdAt: date.getMonth() + "." + date.getDate(),
      finished: false,
    };

    console.log(newTask);

    addItem(newTask);
  };
  return (
    <section className="form-area">
      <form>
        <input type="text" className="input" ref={input}/>
        <input type="submit" className="submit-btn" onClick={onClick}/>
      </form>
    </section>
  )
}