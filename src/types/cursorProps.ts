export interface CursorProps<T = HTMLElement> {
  onMouseEnter?: (e: React.MouseEvent<T>) => unknown;
  onMouseLeave?: (e: React.MouseEvent<T>) => unknown;
  onClick?: (e: React.MouseEvent<T>) => unknown;
}

type extractReturnType<T> = {
  cursor: CursorProps;
  rest: Pick<T, Exclude<keyof T, keyof CursorProps>>;
};

export const extractCursorProps = <T extends CursorProps>(
  obj: T
): extractReturnType<T> => {
  const { onClick, onMouseEnter, onMouseLeave, ...rest } = obj;

  return {
    cursor: {
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    rest,
  };
};
