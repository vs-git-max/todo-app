import React from "react";

const Tabs = ({ tabs, todos, setCurrentTab, currentTab }) => {
  const filters = {
    All: () => todos.length,
    Open: () => todos.filter((todo) => !todo.complete).length,
    Completed: () => todos.filter((todo) => todo.complete).length,
  };

  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => (
        <button
          onClick={() => setCurrentTab(tab)}
          key={index}
          className={`tab-button ${tab === currentTab ? " tab-selected" : " "}`}
        >
          <h4>
            {tab} <span>({filters[tab]?.() ?? 0})</span>
          </h4>
        </button>
      ))}
      <hr />
    </nav>
  );
};

export default Tabs;
