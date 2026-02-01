// Get all color inputs
const colorInputs = {
    black: document.getElementById('black'),
    red: document.getElementById('red'),
    green: document.getElementById('green'),
    yellow: document.getElementById('yellow'),
    blue: document.getElementById('blue'),
    magenta: document.getElementById('magenta'),
    cyan: document.getElementById('cyan'),
    white: document.getElementById('white'),
    brightBlack: document.getElementById('brightBlack'),
    brightRed: document.getElementById('brightRed'),
    brightGreen: document.getElementById('brightGreen'),
    brightYellow: document.getElementById('brightYellow'),
    brightBlue: document.getElementById('brightBlue'),
    brightMagenta: document.getElementById('brightMagenta'),
    brightCyan: document.getElementById('brightCyan'),
    brightWhite: document.getElementById('brightWhite'),
    background: document.getElementById('background'),
    foreground: document.getElementById('foreground'),
    cursor: document.getElementById('cursor')
};

// Update terminal preview when colors change
function updatePreview() {
    const root = document.documentElement;
    Object.keys(colorInputs).forEach(key => {
        root.style.setProperty(`--${key}`, colorInputs[key].value);
    });
}

// Add event listeners to all color inputs
Object.values(colorInputs).forEach(input => {
    input.addEventListener('input', updatePreview);
});

// Export to iTerm2 format
document.getElementById('exportBtn').addEventListener('click', () => {
    const colors = {};
    Object.keys(colorInputs).forEach(key => {
        colors[key] = colorInputs[key].value;
    });

    const hexToRGB = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16) / 255,
            g: parseInt(result[2], 16) / 255,
            b: parseInt(result[3], 16) / 255
        } : null;
    };

    const formatColor = (name, hex) => {
        const rgb = hexToRGB(hex);
        return `    <key>${name}</key>
    <dict>
      <key>Red Component</key>
      <real>${rgb.r.toFixed(6)}</real>
      <key>Green Component</key>
      <real>${rgb.g.toFixed(6)}</real>
      <key>Blue Component</key>
      <real>${rgb.b.toFixed(6)}</real>
    </dict>`;
    };

    const itermConfig = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
${formatColor('Ansi 0 Color', colors.black)}
${formatColor('Ansi 1 Color', colors.red)}
${formatColor('Ansi 2 Color', colors.green)}
${formatColor('Ansi 3 Color', colors.yellow)}
${formatColor('Ansi 4 Color', colors.blue)}
${formatColor('Ansi 5 Color', colors.magenta)}
${formatColor('Ansi 6 Color', colors.cyan)}
${formatColor('Ansi 7 Color', colors.white)}
${formatColor('Ansi 8 Color', colors.brightBlack)}
${formatColor('Ansi 9 Color', colors.brightRed)}
${formatColor('Ansi 10 Color', colors.brightGreen)}
${formatColor('Ansi 11 Color', colors.brightYellow)}
${formatColor('Ansi 12 Color', colors.brightBlue)}
${formatColor('Ansi 13 Color', colors.brightMagenta)}
${formatColor('Ansi 14 Color', colors.brightCyan)}
${formatColor('Ansi 15 Color', colors.brightWhite)}
${formatColor('Background Color', colors.background)}
${formatColor('Foreground Color', colors.foreground)}
${formatColor('Cursor Color', colors.cursor)}
</dict>
</plist>`;

    navigator.clipboard.writeText(itermConfig).then(() => {
        alert('iTerm2 theme copied to clipboard! 🎨\n\nTo install:\n1. Open iTerm2\n2. Preferences → Profiles → Colors\n3. Color Presets → Import\n4. Paste the XML');
    });
});

// Export to VS Code format
document.getElementById('exportVSCodeBtn').addEventListener('click', () => {
    const colors = {};
    Object.keys(colorInputs).forEach(key => {
        colors[key] = colorInputs[key].value;
    });

    const vscodeConfig = {
        "terminal.background": colors.background,
        "terminal.foreground": colors.foreground,
        "terminalCursor.foreground": colors.cursor,
        "terminal.ansiBlack": colors.black,
        "terminal.ansiRed": colors.red,
        "terminal.ansiGreen": colors.green,
        "terminal.ansiYellow": colors.yellow,
        "terminal.ansiBlue": colors.blue,
        "terminal.ansiMagenta": colors.magenta,
        "terminal.ansiCyan": colors.cyan,
        "terminal.ansiWhite": colors.white,
        "terminal.ansiBrightBlack": colors.brightBlack,
        "terminal.ansiBrightRed": colors.brightRed,
        "terminal.ansiBrightGreen": colors.brightGreen,
        "terminal.ansiBrightYellow": colors.brightYellow,
        "terminal.ansiBrightBlue": colors.brightBlue,
        "terminal.ansiBrightMagenta": colors.brightMagenta,
        "terminal.ansiBrightCyan": colors.brightCyan,
        "terminal.ansiBrightWhite": colors.brightWhite
    };

    navigator.clipboard.writeText(JSON.stringify(vscodeConfig, null, 2)).then(() => {
        alert('VS Code theme copied to clipboard! 🎨\n\nTo install:\n1. Open VS Code settings.json\n2. Paste these values into "workbench.colorCustomizations"');
    });
});

// Initialize preview
updatePreview();
