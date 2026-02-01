# 🎨 Terminal Theme Designer

A visual tool for designing terminal color schemes with live preview and export to iTerm2/VS Code.

## Features

✨ **Live Preview** - See your theme changes in real-time  
🎨 **Visual Editor** - Pick colors with intuitive color pickers  
📋 **Export Formats** - iTerm2 and VS Code  
🚀 **Zero Dependencies** - Pure HTML/CSS/JS  

## Usage

1. Open `index.html` in your browser
2. Adjust colors using the color pickers
3. Watch the live preview update
4. Click "Copy iTerm2" or "Copy VS Code" to export

## Export Formats

### iTerm2
Copies a `.plist` XML format that iTerm2 can import:
- Preferences → Profiles → Colors → Color Presets → Import

### VS Code
Copies JSON for `workbench.colorCustomizations` in settings.json

## Development

No build step required! Just open `index.html` and start designing.

## What's Included

- Standard ANSI colors (black, red, green, yellow, blue, magenta, cyan, white)
- Bright variants of all colors
- Background, foreground, and cursor colors
- Live terminal preview showing common use cases

---

**Built by Glitch for ClawBoard Task #90008**
