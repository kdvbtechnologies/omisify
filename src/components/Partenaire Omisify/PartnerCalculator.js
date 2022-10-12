import { useState } from "react";

export default function PartnerCalculator() {
  const addChar = (char) => {
    if (result.length === 23) {
      setResult("REACHED LENGTH LIMIT");
      setFormula("");
    } else if (result === "REACHED LENGTH LIMIT") {
      setFormula("");
    } else if (!isNaN(char) && !isNaN(parseInt(char))) {
      //means its a number
      if (formula.split("").includes("=")) {
        setFormula("");
        setResult("");
      }
      setFormula((prev) => prev + char);
      if (result === "0") {
        setResult(char);
        setFormula(char);
      } //if its the intial zero, replace
      else if (["/", "+", "*"].includes(result)) {
        setResult(char);
      } else {
        setResult((prev) => prev + char);
      }
    } else if (["/", "+", "*"].includes(char)) {
      if (formula.split("").includes("=")) {
        setFormula(result + char);
        setResult(char);
      } else if (
        ["/", "+", "*", "-", "."].includes(formula[formula.length - 1]) &&
        ["/", "+", "*", "-", "."].includes(formula[formula.length - 2])
      ) {
        setResult(char);
        setFormula((prev) => prev.substring(0, prev.length - 2) + char);
      } else if (
        ["/", "+", "*", "-", "."].includes(formula[formula.length - 1])
      ) {
        setResult(char);
        setFormula((prev) => {
          return prev.substring(0, prev.length - 1) + char;
        });
      } else {
        // is number
        setFormula((prev) => {
          return prev + char;
        });
        setResult(char);
      }
    } else if (char === ".") {
      if (
        ["+", "-", "*", "/"].includes(formula[formula.length - 1]) ||
        result.split("").includes(".")
      ) {
        /*Do nothing*/
      } else {
        setFormula((prev) => prev + char);
        setResult((prev) => prev + char);
      }
    } else if (char === "-") {
      if (formula[formula.length - 1] === ".") {
        setResult(char);
        setFormula((prev) => {
          return prev.substring(0, prev.length - 1) + char;
        });
      } else if (["/", "+", "*", "-"].includes(formula[formula.length - 1])) {
        if (!["/", "+", "*", "-"].includes(formula[formula.length - 2])) {
          setResult(char);
          setFormula((prev) => {
            return prev + char;
          });
        }
      } else {
        //is number
        setFormula((prev) => {
          return prev + char;
        });
        setResult(char);
      }
    }
  };

  const calculate = () => {
    let num = eval(formula);
    setResult(num.toString());
    setFormula((prev) => prev + "=" + num.toString());
  };

  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("0");
  return (
    <main id="calculator">
      <section id="display-wrapper">
        <div id="formula">{formula}</div>
        <div id="display">{result}</div>
      </section>
      <section id="buttons">
        <button
          className="double button"
          id="clear"
          onClick={() => {
            setResult("0");
            setFormula("");
          }}
        >
          AC
        </button>
        <button
          className="operator button"
          id="divide"
          onClick={() => addChar("/")}
        >
          /
        </button>
        <button
          className="operator button"
          id="multiply"
          onClick={() => addChar("*")}
        >
          x
        </button>
        <button className="button" id="seven" onClick={() => addChar("7")}>
          7
        </button>
        <button className="button" id="eight" onClick={() => addChar("8")}>
          8
        </button>
        <button className="button" id="nine" onClick={() => addChar("9")}>
          9
        </button>
        <button
          className="operator button"
          id="subtract"
          onClick={() => addChar("-")}
        >
          -
        </button>
        <button className="button" id="four" onClick={() => addChar("4")}>
          4
        </button>
        <button className="button" id="five" onClick={() => addChar("5")}>
          5
        </button>
        <button className="button" id="six" onClick={() => addChar("6")}>
          6
        </button>
        <button
          className="operator button"
          id="add"
          onClick={() => addChar("+")}
        >
          +
        </button>
        <button className="button" id="one" onClick={() => addChar("1")}>
          1
        </button>
        <button className="button" id="two" onClick={() => addChar("2")}>
          2
        </button>
        <button className="button" id="three" onClick={() => addChar("3")}>
          3
        </button>
        <button
          className="tall button"
          id="equals"
          onClick={() => {
            calculate();
          }}
        >
          =
        </button>
        <button
          className="double button"
          id="zero"
          onClick={() => addChar("0")}
        >
          0
        </button>
        <button className="button" id="decimal" onClick={() => addChar(".")}>
          .
        </button>
      </section>
    </main>
  );
}
