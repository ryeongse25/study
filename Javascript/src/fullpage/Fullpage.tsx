import ReactFullpage from "@fullpage/react-fullpage";
import "./Fullpage.css";

const anchors = ["fistPage", "secondPage", "thirdPage"];

const Fullpage = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state }) => {
      console.log(state);

      return (
        <div>
          <div className="section">
            <h3>Section 1</h3>
          </div>
          <div className="section">
            <h3>Section 2</h3>
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
        </div>
      );
    }}
  />
);
export default Fullpage;
