import React from "react";
import { useTransition, animated } from "react-spring";
import Bubble from "./bubble";
function AnimatedBubbles({ items, onClickHandlerDeleteTask }) {
  const some = items.map((v, i) => ({ value: v, key: i }));
  //   console.log(some, "list");
  const transitions = useTransition(some, (item) => item.key, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(10px)" },
    config: { duration: 500, mass: 1, tension: 180, friction: 12 },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {/* {console.log(item.key, item.value)} */}
      {
        <Bubble
          key={item.key}
          id={item.key}
          task={item.value}
          deleteTask={onClickHandlerDeleteTask}
        />
      }
    </animated.div>
  ));
}

export default AnimatedBubbles;
