const Box = (props) => {
  //  Write your code here. 4
  const { className, text } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 class="title">Boxes</h1>
    <div class="boxes-container">
      <Box text="small" className="small-box" />
      <Box text="medium" className="medium-box" />
      <Box text="large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
