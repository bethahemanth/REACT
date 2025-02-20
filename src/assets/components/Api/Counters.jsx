import React, { useState } from "react";
import UseEffectCounter from "./Counter";

function UseEffectCounters() {
  const [visibleCounters, setVisibleCounters] = useState({
    counter1: true,
    counter5: true,
    counter10: true,
    counter20: true,
  });

  const handleRemoveCounter = (event) => {
    event.preventDefault();
    //console.log(event.target.elements.selectCounter.value);
    const counterToRemove = event.target.elements.selectCounter.value;
    setVisibleCounters({ ...visibleCounters, [counterToRemove]: false });
  };
  const handleAddCounter = (event) => {
    event.preventDefault();
    //console.log(event.target.elements.selectCounter.value);
    const counterToRemove = event.target.elements.selectCounter.value;
    setVisibleCounters({ ...visibleCounters, [counterToRemove]: true });
  };

  return (
    <>
      <section className="counters-container">
        <section className="counters">
          {visibleCounters.counter1 && (
            <UseEffectCounter initialValue={0} incrementValue={1} />
          )}
          {visibleCounters.counter5 && (
            <UseEffectCounter initialValue={0} incrementValue={5} />
          )}
          {visibleCounters.counter10 && (
            <UseEffectCounter initialValue={0} incrementValue={10} />
          )}
          {visibleCounters.counter20 && (
            <UseEffectCounter initialValue={0} incrementValue={20} />
          )}
        </section>
        <section className="remove-con">
          <form className="remove-form" onSubmit={handleRemoveCounter}>
            <select name="selectCounter" id="selectCounter">
              <option value="counter1">Remove Counter 1</option>
              <option value="counter5">Remove Counter 5</option>
              <option value="counter10">Remove Counter 10</option>
              <option value="counter20">Remove Counter 20</option>
            </select>
            <button type="submit">Remove Counter</button>
          </form>
        </section>
        <section className="remove-con">
          <form className="remove-form" onSubmit={handleAddCounter}>
            <select name="selectCounter" id="selectCounter">
              <option value="counter1">Add Counter 1</option>
              <option value="counter5">Add Counter 5</option>
              <option value="counter10">Add Counter 10</option>
              <option value="counter20">Add Counter 20</option>
            </select>
            <button type="submit">Add Counter</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default UseEffectCounters;