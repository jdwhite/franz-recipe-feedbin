# Feedbin for Franz
This is a [Feedbin](https://feedbin.com) recipe for [Franz](https://meetfranz.com).

## Installation

To install a new recipe:

1. Open the Franz `recipes` directory on your machine (create the `dev` directory if it doesn't exist):
* Mac: `~/Library/Application Support/Franz/recipes/dev/`
* Linux: `~/.config/Franz/recipes/dev/`
* Windows: `%appdata%/Franz/recipes/dev/`
2. Clone or copy the contents of this repo to a directory named `feedbin` in the `dev` folder.
3. Reload Franz.
4. Add a new service. Click the "Development" button under available services
to see the recipes added in `.../recipes/dev/`.


## Notes
- The "direct messages" badge is the number of unread messages.
- The stock Feedbin icon doesn't look good in either dark or light mode, so
the color was changed.

## ToDo
- Possible to change the color of the service icon based on whether light/dark 
mode is enabled such that light mode = black icon and dark mode = white icon?

## References
* [Franz Integration Documentation](https://github.com/meetfranz/plugins/tree/master/docs)
