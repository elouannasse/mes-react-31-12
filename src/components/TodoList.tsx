import { useTodos, useToggleTodo } from '../hooks/useTodos';
import { useAppSelector } from '../store/hooks';

const TodoList = () => {
  const { data: todos, isLoading, isError } = useTodos();
  const toggleMutation = useToggleTodo();
  const filterValue = useAppSelector((state) => state.filter.value);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-white/80">
        <div className="spinner mb-4"></div>
        <p>Chargement des tâches...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8 px-4 bg-red-500/20 rounded-xl text-red-200 font-medium">
        Erreur lors du chargement des tâches
      </div>
    );
  }

  // Filtrage des todos en fonction du filtre Redux
  const filteredTodos = todos?.filter((todo) => {
    if (filterValue === 'active') return !todo.completed;
    if (filterValue === 'completed') return todo.completed;
    return true; // 'all'
  });

  if (!filteredTodos || filteredTodos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-white/60">
        <span className="text-5xl mb-4">📋</span>
        <p>Aucune tâche à afficher</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {filteredTodos.map((todo) => (
        <li 
          key={todo.id} 
          className={`group flex items-center gap-3 p-4 rounded-xl transition-all duration-200
            ${todo.completed 
              ? 'bg-green-500/20 border border-green-500/30' 
              : 'bg-white/10 border border-white/20 hover:bg-white/15'
            }`}
        >
          <label className="flex items-center gap-3 cursor-pointer flex-1">
            <div className="relative">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleMutation.mutate(todo.id)}
                className="peer sr-only"
              />
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200
                ${todo.completed 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-white/40 group-hover:border-white/60'
                }`}>
                {todo.completed && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className={`text-white font-medium transition-all duration-200
              ${todo.completed ? 'line-through opacity-60' : ''}`}>
              {todo.title}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
