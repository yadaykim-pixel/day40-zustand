"use client";

import { useCounterStore } from "@/stores/counterStore";

export default function Home() {
  // TODO 4. Store에서 count를 가져오세요.
  const count = useCounterStore((state) => state.count);

  // TODO 5. Store에서 increase, decrease, reset 함수를 각각 가져오세요.
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <main className="container">
      <section className="card">
        <h1>Counter</h1>

        <p className="count">{count}</p>

        <div className="buttons">
          <button className="button" type="button" onClick={decrease}>
            -1
          </button>
          <button className="button" type="button" onClick={reset}>
            Reset
          </button>
          <button className="button" type="button" onClick={increase}>
            +1
          </button>
        </div>
      </section>
    </main>
  );
}
