---
title: Clipboard History Plugin Docs
---

# Clipboard History plugin for Unreal Engine

![Image](/img/clip-header.webp)

*Tired of losing track of your copied assets? Introducing the Clipboard History tool for Unreal Engine, your ultimate time-saving companion.*


## Key Features
- **Instant Access:** Quickly view and re-use previously copied assets, blueprints, materials, or any other clipboard content.
- **Seamless Integration:** Effortlessly integrate into your Unreal Engine workflow.
- **Extensive History:** Store a comprehensive history of your copied items, even those from weeks or months ago.
- **Powerful Search:** Efficiently search your history to find specific assets by name or keyword.
- **User-Friendly Interface:** A clean and intuitive interface for easy navigation and selection.

### Why Choose Our Clipboard History Tool?
- **Boost Productivity:** Save valuable time by avoiding repetitive copying and pasting.
- **Streamline Your Workflow:** Keep your workspace organized and clutter-free.
- **Enhance Creativity:** Quickly access and reuse past ideas and creations.

*Experience the convenience of a clipboard that remembers.*

---

## Installation

1. Install to Engine. After buying the plugin find it in your Epic Games Launcher library and "Install to Engine".
2. Enable Plugin. Open the Plugins menu of your project and enable the "Clipboard History" plugin.
3. Open Clipboard History Panel. After restarting the Engine make the panel visible by selecting Tools -> Clipboard History.

## Usage
To use the clipboard history simply start copying stuff. Every time you copy something in the editor it will add an entry to your clipboard history. Some entries will show a thumbnail to help you more easily see what is copied.

To get an entry back into your active clipboard simply click on the row in the Clipboard History panel or right click > copy.

To delete an entry from your history right click on it and select delete.


## Settings
#### Maximum Item Count
The maximum number of clipboard items to store. Set to 0 to keep infinite items.

#### Maximum Clipboard Size
The maximum size on disk before clipboard items are pruned. Set to 0 to disable max size. 

#### Maximum Clipboard Age
The maximum age of clipboard items before they are pruned. Set to 0 to keep items forever.

#### Record All Clipboard Data
Saves data copied from outside Unreal Engine.
*WARNING: Enabling this will save sensitive or private information copied from other applications.*
