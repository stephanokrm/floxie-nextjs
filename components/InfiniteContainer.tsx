import { FC, PropsWithChildren, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InfiniteContainer: FC<
  PropsWithChildren<{ onView: () => unknown }>
> = ({ children, onView }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onView();
    }
  }, [inView, onView]);

  return (
    <>
      {children}
      <span ref={ref} />
    </>
  );
};
