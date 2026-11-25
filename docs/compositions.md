# Composing Nocturne pages

Nocturne supplies atmosphere around the owner’s words and selected art. Base supplies the common page anatomy and browser behavior. The [world brief](../WORLD.md) records why the current composition has this shape; [presentation.toml](../presentation.toml) is the exact component and resource contract.

## The illustrated opening

The painted passage uses the `painted-*` components. The workspace binds `shared/painted-film.mjs`, including the `films` scene records and `passage` configuration. The [scene adapter](../scripts/painted-film.js) and [interval adapter](../scripts/painted-interval.js) delegate playback and text progression to Base’s cinematic-film module; they do not own a separate animation clock.

| Component | What the author supplies |
| --- | --- |
| `painted-film` | A scene selected by `scene`: `opening`, `encounter` or `coda`, containing its native account. |
| `painted-beat`, `painted-copy`, `painted-still` | The scene’s reading beat, copy and still image. The still and text remain a complete account without the enhanced player. |
| `painted-frames` | Frame links grouped by required `variant`: `landscape` or `portrait`. |
| `painted-interval` | Paired verse by default, or `treatment: closing` for the closing invitation without its decorative seal. |
| `painted-gallery`, `painted-plate`, `painted-caption` | Alternating studies and their captions. A plate may supply positive `width` and `height` together to preserve the source ratio. |
| `painted-study` | The `forest` or `city` scene, with its native content and source-owned film record. These are component selectors, not claims about story canon. |
| `painted-margin`, `painted-cue` | Supporting marks or copy. A margin selects `side: left` or `right`; these decorations never carry the only account of a destination or instruction. |

Wide studies alternate image and caption positions; handheld layouts stack each complete pair in source order. The arrival adapts its copy placement to the available width. Short screens, reduced motion and unavailable decoding expose the native storyboard; print keeps images and text without fixed scene geometry. Source records establish the painted joins and anatomy. Base’s `docs/films-and-scenes.md` explains shared playback, interruption and restoration.

## Reading, collections and projects

Ordinary articles retain Base’s compact reading rows: linked title, supplied author, date and summary in one track. Missing metadata stays absent. Authored collection and ordered sequence contents keep their `publication-index` forms. `nocturne/collection-directory.html` selects Base’s responsive bookmarks, with Nocturne type, material and artwork. Membership, order and destinations come from Content and Gazette.

`nocturne/product.html`, `nocturne/product-listing.html` and `nocturne/services.html` inherit Base’s detail, directory and service compositions. The selectors add the world’s font declarations. Content supplies introductions, demonstrations, status, actions, questions and answers; a service composition is selected only where actual offers exist. Neither a project account nor an essay becomes a narrative by using Nocturne.

The authored account uses its source headings while the native document title remains available to navigation and metadata. Base’s `docs/page-families.md`, `docs/listings-and-cards.md` and `docs/reading.md` describe the shared anatomy.

## Frame and focus

The film’s contrast treatment supports optical navigation over bright artwork while a pinned scene is active. Outside that state, the header returns to readable stock. The opened directory has its own ground. Base owns focus painting, menu behavior and the shared footer; Nocturne supplies contextual colors and low horizon rules. Reading and command surfaces retain their own contours.

Part of [gazette-theme-nocturne](../README.md).

## Performance fixture

The painted scene fixture selects Nocturne’s story regions from the composed page. Base measures forward and reverse scrolling through each region and counts the delivered painted-frame requests. The composing workspace chooses the served page and browser conditions. [Theme fixture](../fixtures/performance.json)
