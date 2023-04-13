function Acordeon() {
  return (
    <div>
      <h1>Acordeon</h1>
      <div className="accordion-wrapper">
        <div className="accordion">
          <input type="radio" name="radio-a" id="check1" checked />
          <label className="accordion-label" for="check1">Acordeon 1</label>
          <div className="accordion-content">
            <p>Hey there, you are watching codiesbugs &#128522;</p>
          </div>
        </div>
        <div className="accordion">
          <input type="radio" name="radio-a" id="check2" />
          <label className="accordion-label" for="check2">Acordeon 2</label>
          <div className="accordion-content">
            <p>I hope you are enjoing the video, don't forget to give your feedback in comment section</p>
          </div>
        </div>
        <div className="accordion">
          <input type="radio" name="radio-a" id="check3" />
          <label className="accordion-label" for="check3">Acordeon 3</label>
          <div className="accordion-content">
            <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
          </div>
        </div>
      </div>

    </div>

  );
}
