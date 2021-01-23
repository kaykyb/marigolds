export interface CursorProps<T = HTMLElement> {
  onMouseEnter?: (e: React.MouseEvent<T>) => unknown;
  onMouseLeave?: (e: React.MouseEvent<T>) => unknown;
  onClick?: (e: React.MouseEvent<T>) => unknown;
}
