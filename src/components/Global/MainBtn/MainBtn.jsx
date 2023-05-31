function MainBtn({text, actionEvent}) {
  return (
    <button className="mainBtn" onClick={actionEvent}>
      {text}
    </button>
  );
}

export default MainBtn;
