"use client";

import CountUp from "react-countup";

interface FunFactItem {
  value: number;
  subTitle: string;
}

interface FunFactProps {
  fClass?: string;
}

const funFactData: FunFactItem[] = [
  { value: 3210, subTitle: "Happy Couples" },
  { value: 230, subTitle: "Location" },
  { value: 3325, subTitle: "Wedding" },
  { value: 526, subTitle: "Decoration" },
];

export default function FunFact({ fClass = "" }: FunFactProps) {
  return (
    <section className={`wpo-fun-fact-section ${fClass}`}>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {funFactData.map((item, index) => (
                <div className="grid" key={index}>
                  <div className="info">
                    <h3>
                      <span>
                        <CountUp
                          end={item.value}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </span>
                      +
                    </h3>
                    <p>{item.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Counter Trigger */}
      <span id="counter" className="d-none" />
    </section>
  );
}
