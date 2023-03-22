import React from "react";

export default function Team() {
  return (
    <section className="contributors" id="contributors">
      <div className="max-width">
        <h2 className="title">Staff</h2>
        <div className="carousel owl-carousel">
          <div className="cardd">
            <div className="boxx">
              <img src="https://i.imgur.com/47igt8M.png" alt="" />
              <div className="text">Saizuo</div>
              <p>
                <button className="badges owner">Owner</button>
                <button className="badges developer">Developer</button>
              </p>
            </div>
          </div>
          <div className="cardd">
            <div className="boxx">
              <img src="https://i.imgur.com/xHeG7N2.png" alt="" />
              <div className="text">Avalinn</div>
              <p>
                <button className="badges owner">Owner</button>
                <button className="badges developer">Developer</button>
                <button className="badges designer">Designer</button>
              </p>
            </div>
          </div>
          <div className="cardd">
            <div className="boxx">
              <img src="https://i.imgur.com/qXOLUKf.png" alt="" />
              <div className="text">Razik</div>
              <p>
                <button className="badges developer">Developer</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
