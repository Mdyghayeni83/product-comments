import './App.css';
import CommentsBox from './components/CommentsBox';
import Line from './components/Line';
import PostedPicturesBox from './components/PostedPicturesBox';
import ProductHeader from './components/ProductHeader';
import ViewsBox from './components/productViews/ViewsBox';

function App() {
  return (
    <div className="max-w-[500px] m-auto pb-12">
      <ProductHeader />
      <Line />
      <ViewsBox />
      <PostedPicturesBox />
      <CommentsBox />
    </div>
  );
}

export default App;
