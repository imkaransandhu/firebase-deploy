import Header from "./Components/Header";
import FormGroup from "./Components/FormGroup";

const App = () => {
  return (
    <div className="text-center md:px-16 p-4 bg-red-800">
      <Header mission="Mission-3" />
      <FormGroup />
    </div>
  );
};

export default App;
