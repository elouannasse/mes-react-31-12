import { useAppDispatch } from "../store/hooks";
import { toggleTodo } from "../store/todosSlice";

export const useToggleTodo = () => {
  const dispatch = useAppDispatch();

  return (id: string) => {
    dispatch(toggleTodo(id));
  };
};
