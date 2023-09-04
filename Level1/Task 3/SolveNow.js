function UpdateMonitor(txt) {
  let monitor = document.getElementById("exp").textContent;
  if (monitor == "Infinity" || monitor == "ERROR") monitor = "";
  if (txt == "CE") monitor = "";
  else if (txt == "open") monitor += "(";
  else if (txt == "close") monitor += ")";
  else if (txt == "bs") monitor = monitor.slice(0, -1);
  else if (txt == ".") monitor += ".";
  else if (txt == "1") monitor += "1";
  else if (txt == "2") monitor += "2";
  else if (txt == "3") monitor += "3";
  else if (txt == "4") monitor += "4";
  else if (txt == "5") monitor += "5";
  else if (txt == "6") monitor += "6";
  else if (txt == "7") monitor += "7";
  else if (txt == "8") monitor += "8";
  else if (txt == "9") monitor += "9";
  else if (txt == "0") monitor += "0";
  else if (txt == "+") monitor += "+";
  else if (txt == "-") monitor += "-";
  else if (txt == "×") monitor += "×";
  else if (txt == "÷") monitor += "÷";
  else if (txt == "mod") monitor += "%";
  else if (txt == "frac") monitor = "1/" + monitor;
  else if (txt == "powery") monitor += "^";
  else if (txt == "power2") monitor += "^2";
  else if (txt == "=") {
    monitor = monitor.replace(/×/g, "*");
    monitor = monitor.replace(/÷/g, "/");
    monitor = monitor.replace("^", "**");
    try {
      monitor = eval(monitor);
    } catch (error) {
      monitor = "ERROR";
    }
  }
  document.getElementById("exp").textContent = monitor;

  let m = document.getElementById("exp");
  m.scrollLeft = m.scrollWidth;
}
