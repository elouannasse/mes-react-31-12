import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAddTodo } from '../hooks/useTodos';

// Schéma Zod pour la validation
const todoSchema = z.object({
  title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères'),
});

type TodoFormData = z.infer<typeof todoSchema>;

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
  });

  const addTodoMutation = useAddTodo();

  const onSubmit = (data: TodoFormData) => {
    addTodoMutation.mutate(data.title);
    reset();
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche..."
          {...register('title')}
          className={`flex-1 px-4 py-3 rounded-xl bg-white/20 border text-white placeholder-white/60 
            outline-none transition-all duration-200 focus:bg-white/30 focus:shadow-lg
            ${errors.title ? 'border-red-400 focus:border-red-400' : 'border-white/30 focus:border-white/50'}`}
        />
        <button 
          type="submit" 
          disabled={addTodoMutation.isPending}
          className="px-5 py-3 bg-white text-purple-600 font-bold rounded-xl shadow-lg 
            hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {addTodoMutation.isPending ? '⏳' : '➕'}
        </button>
      </div>
      {errors.title && (
        <span className="block mt-2 text-red-300 text-sm font-medium">{errors.title.message}</span>
      )}
    </form>
  );
};

export default TodoForm;
