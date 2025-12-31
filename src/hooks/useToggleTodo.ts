export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Todo[]>(['todo'], (oldTodos) => {
        return oldTodos?.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
      });
    },
  });
};import { useMutation, useQueryClient } from "@tanstack/react-query";