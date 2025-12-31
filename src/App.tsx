import FilterButtons from './components/FilterButtons';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-600   px-4 py-8">
      <div className="max-w-xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-2 sm:text-3xl">📝 To-Do List Multi-Tool</h1>
          <p className="text-white/85 text-sm font-medium tracking-wide">React Hook Form • Zod • React Query • Redux Toolkit</p>
        </header>

        <main className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 sm:p-6 sm:rounded-2xl">
          <TodoForm />
          <FilterButtons />
          <TodoList />
        </main>

        <footer className="text-center mt-8 text-white/70 text-sm">
          <p>MES Express - 30 Minutes Challenge ⏱️</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
