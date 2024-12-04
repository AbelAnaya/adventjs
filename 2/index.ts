function createFrame(names) {
  const longerName = names.reduce((prev, current, index) => {
    if (current.length > prev.length) return current;
    else return prev;
  });

  const maxStrlen = longerName.length;

  let output = "*".repeat(maxStrlen + 4) + "\n";

  names.forEach((element) => {
    output += `* ${element} ${" ".repeat(maxStrlen - element.length)}*\n`;
  });

  output += "*".repeat(maxStrlen + 4);

  return output;
}

createFrame(["midu", "midunombre", "eltercerodelmundo"]);
