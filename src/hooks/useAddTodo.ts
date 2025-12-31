export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      // Simulation d'ajout asynchrone
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      return newTodo;
    },
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(['todo'], (oldTodos) => {
        return oldTodos ? [...oldTodos, newTodo] : [newTodo];
      });
    },
  });
};