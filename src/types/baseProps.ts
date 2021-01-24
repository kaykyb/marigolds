export interface BaseProps {
  className?: string;
  tabIndex?: number;
  role?: string;
  id?: string;
  style?: React.CSSProperties;
}

type extractReturnType<T> = {
  base: BaseProps;
  rest: Pick<T, Exclude<keyof T, keyof BaseProps>>;
};

export const extractBaseProps = <T extends BaseProps>(
  obj: T
): extractReturnType<T> => {
  const { id, className, style, tabIndex, role, ...rest } = obj;

  return {
    base: {
      id,
      className,
      style,
      tabIndex,
      role,
    },
    rest,
  };
};
