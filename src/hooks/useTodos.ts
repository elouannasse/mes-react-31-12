import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTodo, toggleTodo } from "../store/todosSlice";


export const useTodos = () => {
  const todos = useAppSelector((state) => state.todos.items);

  return {
    data: todos,
    isLoading: false,
    isError: false,
  };
};


export const useAddTodo = () => {
  const dispatch = useAppDispatch();

  return {
    mutate: (title: string) => {
      const newTodo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      dispatch(addTodo(newTodo));
    },
    isPending: false,
  };
};


export const useToggleTodo = () => {
  const dispatch = useAppDispatch();

  return {
    mutate: (id: string) => {
      dispatch(toggleTodo(id));
    },
  };
};
