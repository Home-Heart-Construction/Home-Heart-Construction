const fs = require('fs');
let code1 = fs.readFileSync('src/components/MediaHighlights.tsx', 'utf8');
code1 = code1.replace("import { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';");
fs.writeFileSync('src/components/MediaHighlights.tsx', code1);

let code2 = fs.readFileSync('src/pages/MediaGallery.tsx', 'utf8');
code2 = code2.replace("import { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';");
fs.writeFileSync('src/pages/MediaGallery.tsx', code2);
