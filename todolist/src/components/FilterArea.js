export default function({setFilter}) {
  return (
    <section className="filter-area">
      <button id="all-btn" onClick={() => setFilter(0)}>全部任务</button>
      <button id="pending-btn" onClick={() => setFilter(1)}>未完成任务</button>
      <button id="finished-btn" onClick={() => setFilter(2)}>已完成任务</button>
    </section>
  );
}