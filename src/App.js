import Navbar from "./component/navbar/Navbar";
import { DropdownSimple } from "./component/dropdown/Dropdown";
const App = () => {
  return (
    <div>
      <Navbar logo={"logo"} appName={"appName"} auth={false} />
      <DropdownSimple
        dropdownName={"dropdownName"}
        dropdownOptions={["option1", "option2", "option3"]}
      ></DropdownSimple>
    </div>
  );
};

export default App;
