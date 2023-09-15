import "./audiocheck.css";

const AudioCheck = () => {
  return (
    <>
      <form className="radio-form">
        <input
          defaultChecked="true"
          defaultValue="high"
          name="hopping"
          type="radio"
          id="high"
        />
        <label htmlFor="high">
          <span />
          High
        </label>
        <input defaultValue="medium" name="hopping" type="radio" id="medium" />
        <label htmlFor="medium">
          <span />
          Medium
        </label>
        <input defaultValue="low" name="hopping" type="radio" id="low" />
        <label htmlFor="low">
          <span />
          Low
        </label>
        <div className="worm">
          <div className="worm__segment" />
        </div>
      </form>
    </>
  );
};

export default AudioCheck;
