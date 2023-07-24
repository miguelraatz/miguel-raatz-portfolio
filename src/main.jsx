import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ProjectsProvider from './context/ProjectsProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <ProjectsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectsProvider>,
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA