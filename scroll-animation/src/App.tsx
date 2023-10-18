import { Content } from './components/Content';
import { checkBoxes } from './helpers/checkBoxes';
function App() {
  window.addEventListener('scroll', checkBoxes);

  return (
    <>
      <h1>Scrool to see the animation</h1>
      <div>
        {Array(13)
          .fill(0)
          .map((_, index) => {
            return <Content classStyle="box" key={index} />;
          })}
      </div>
    </>
  );
}
export default App;
