const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

// Remove BeforeAfter from current position
code = code.replace("      <BeforeAfter />\n", "");

// Insert BeforeAfter right above Features
code = code.replace(
  "      <Features />",
  "      <BeforeAfter />\n      <Features />"
);

// Swap Contact and FAQ
code = code.replace(
  "      <Contact />\n      <FAQ />",
  "      <FAQ />\n      <Contact />"
);

fs.writeFileSync('src/App.tsx', code);
console.log("Reordered sections in App.tsx");
