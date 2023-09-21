import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react';
import store from './store';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';


const queryClient = new QueryClient();

function App() {
  return (
    
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <PostList/>
          <CreatePost/>
        </div>
      </QueryClientProvider>

    </Provider>
      
    
  );
}

export default App;
