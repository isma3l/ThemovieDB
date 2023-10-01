import { Provider } from 'react-redux';
import { store } from '@/store';
import { PopularMoviesPage } from '@/features/movies';

function App() {
  return (
    <Provider store={store}>
      <div className="bg-custom-color h-full">
        <PopularMoviesPage />
      </div>
    </Provider>  
      
  );
}

export default App
