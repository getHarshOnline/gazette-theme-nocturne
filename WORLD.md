# World: nocturne

## For

Nocturne is Sleepwalker’s dark-first world for inquiry, creative practice and authored narrative. Its accepted painted passage opens a familiar enclosure into a larger setting, passes through a human encounter and two world studies, then returns to an arrival and invitation. Painted layers emerge and withdraw slowly; pale-plum light marks interface attention while words remain exact. The opening is its loudest piece, and a sustained essay is its quietest.

Envelope: Atmosphere. Essays, explorations, books and scenes retain their own reading and continuation forms; not every article is a chapter. The world permits ambiguity and generative visual work without sacrificing reading or orientation. The accepted opening does not establish fictional canon or approve future artwork.

## Character

**Organizing idea: the familiar opens into an unexpected whole.** Patient attention can reveal a larger relationship while a person, gesture or ordinary place remains recognisable. Near warmth and distant atmosphere coexist. A night horizon is one expression of that distance; inhabited thresholds, graphic intervals and intimate particulars can carry it too.

**Controlled contrast: atmospheric distance against precise reading and orientation.** The field is deep, grained and slow; passage references, navigation and any chapter continuation remain exact and readable. Atmosphere never costs orientation.

This is the dark-first world: every world has a dark expression, and here it is the primary one.

## The accepted opening

The painted passage opens a familiar enclosure onto a larger setting, holds two centred lines, enters the human encounter, passes two alternating world studies and returns to an arrival and closing invitation. Source-owned layers preserve geography, anatomy and the painted emergence and withdrawal across that whole passage. The art reconstructs at rest; a generic oval reveal does not replace it.

Each scene completes its action and reading before departure. Image boundaries dissolve through the same painted material, and outgoing captions and marginal marks clear before the next passage claims attention. Copy stays on a clear reading field; the arrival adapts its caption placement to the available width. Navigation and colophon retain their shared anatomy.

The source owner supplies the edit, layers and words. Base supplies reversible playback, text progression and bounded scene boxes. Reduced motion, short screens and failed decoding expose the complete native storyboard. Optical controls preserve orientation over bright artwork without an opaque page-wide header.

The earlier single-doorway assembly is no longer the selected Home; the `painted-*` components carry the current composition. The [composition guide](docs/compositions.md) explains those components and their source bindings.

## Axes

These nine directions describe the world’s design, not nine completed interactive effects. Today’s implementation supplies plum stock, grain over the scene, wide Anybody display type, low figure and shell rules, spaced figures and captions, and the pale-plum focus glow. The scene uses authored layers and timing. Concentric horizon fields, rocking scene plates and spreading emulsion remain candidates below; token names alone do not establish that they have been drawn.

| Axis | Present expression | Values and remaining design |
| --- | --- | --- |
| Material character | Dark plum stock carries reading; pale plum-grey gives the light expression. Scene imagery has the photographic, film-like quality called emulsion. | `world.*.paper`, `world.*.sheet`, `world.*.tint`, `world.*.metal`; `world.material.emulsion` describes the intended material, not an independent renderer. |
| Raster and texture | Fine photographic grain lies over the scene, without a grid or lines. It must leave words clear. | `world.material.raster.opacity` is used by the scene grain. Pitch and `material.emulsion.grain` describe the intended grain structure. |
| Geometry | Long low rules, negative space and the crescent mark carry the horizon idea. Figures and the command surface end on a lower rule. | `world.*.line`, `world.*.strong-line`. Concentric tilted ellipses remain undrawn; `world.geometry.plate-edge` does not itself draw a plate. |
| Display inflection | Wide Anybody display type gives the opening its distant, patient voice. Numbering and small entry figures use the system voice. | `world.type.display.family`, `.width`, `.weight`, `world.type.numeric.family`, `world.type.system.case`. |
| Figure rhythm | Figures retain their complete contents at reading scale, with wide intervals beside prose rather than a data band. Captions keep their own gap. | `world.figure.interval` and `world.figure.caption.gap` are read by the world stylesheet. `world.figure.scale-step` has no current reader. |
| Emission hue and spectral light | Pale-plum glow marks focused navigation and index links. Light stays at the boundary, clear of text. Scene light follows the authored setting. | `world.illumination.emission` and `.emission-spread` supply the glow. Wider halation at a future scene peak remains a design permission, not a completed effect. |
| Crop behaviour | The opening can fill the view; gallery plates preserve their supplied ratio and keep the whole image. | `world.crop.bleed` expresses the intended permission for marginless scene plates; it is not a current layout control. |
| Optical depth | Source-owned layers establish scene depth and preserve a familiar anchor as the view changes. Optical controls separate their surface from the art without moving text. | The proposed four receding interface planes, soft casts and `world.depth.*` values are not a separate implemented field. |
| Expressive motion curve | The scene’s edit determines its action and painted joins. Base applies the shared expressive timing roles for interface response. | `world.motion.expressive-easing`, `.expressive-scale` and `.decay`. The intended interface curve is slow, with a small overshoot and long settling; any future optical drift follows explicit attention, not ambient movement. |

Accent is a pale violet (`world.*.accent`, `world.*.focus`); the grain, low rules, wide type and authored depth must carry the world with accent removed.

The slow curve and pale-plum emission describe interface inquiry, not every character or light source. Scene movement follows its action. The horizon, crescent and optical islands are a motif vocabulary, not a requirement that every subject become a dark, empty landscape.

## Material and light

- **Registers:** film-like emulsion belongs to scene plates; stock carries reading. The material brief reserves anodised metal for the command surface and phosphor-like light for held state. The proposed horizon field is not yet drawn.
- **What emits and why:** focused navigation and index links currently glow. The intended extension marks the current chapter or sequence entry and a scene field under explicit attention. Bloom belongs at the boundary, never behind text.
- **Decay:** slow and soft, with a small overshoot before rest.

## States and contexts

- **Dark:** the default is deep, grained and cinematic, with its own plum stock. Reading and controls remain clear over each actual surface; the proposed four-plane field does not stand in for this check.
- **Dark reduced:** complete views preserve the familiar anchor and the unexpected relationship without drift or camera travel. Boundary light and material carry a scene peak without obscuring human particulars. A future ring field must have a complete still too.
- **Light:** a pale plum-grey stock with the same horizon geometry, width and grain; the world does not collapse into its siblings when light is chosen.
- **Light reduced:** complete views retain the same recognition on pale stock; a quiet bloom marks held state. Graphic depth, deliberate colour and the authored interval carry the passage.

| Page mode | Web-native | Mobile-native |
| --- | --- | --- |
| Home | anchor and wider setting: a broad field lets attention change their relation within one view | complete act of attention: in hand a closer view keeps the anchor before an authored next view reveals the whole |
| Narrative (intended, selector unfinished) | keyboard hints for back and next: at a desk the reader turns entries without the pointer | the next entry held within the thumb's reach: in hand a sitting continues without returning to the page head |

## Signature surfaces

Base’s `docs/page-families.md` governs component responsibilities and responsive continuity. Dark-first reading keeps corpus position, local navigation and source apparatus legible without atmospheric interference. Chapter continuation belongs to actual narratives; inquiry and craft essays keep their own related reading and Notes. Scene breaks and imagery never absorb the reading tools or replace exact destinations.

The range gives the least and most expressive treatment appropriate to each task. Baseline and Peak are design requirements; they do not automatically draw a page. A proposed motif in a row is not an implemented scene.

| Page mode | Dominant use in this world | Baseline | Peak |
| --- | --- | --- | --- |
| Home (publication) | An act of attention opens into an unexpected relationship and carries the peak. Textual inquiry, creative practice and any authored narrative retain distinct onward paths; no particular story supplies Home's permanent cosmology. | 2 | 4 |
| Reading (inquiry or craft essay) | Sustained reading on stable stock; source passages, technical detail and commentary retain their own apparatus. Peak at an earned illustration, without forcing chapter pacing. | 0 | 2 |
| Narrative (chapter and scene reader) | Long-form reading on stable dark stock; scene breaks paced; the peak at a scene change; back and next exact. | 2 | 4 |
| Sequence / journey (book, entries) | Numbered sequence with current position emitting; read entries quiet; published status as text. Peak at the passage to the next entry: the horizon rule bleeding past the margin. | 1 | 4 |
| Index | Rows grouped by the actual exploration, collection or book; numbering where supplied. Peak at the index head: its groups marked along one low horizon. | 1 | 2 |
| Utility | Complete and calm on dark. Peak below the task: grain at full strength under the closing horizon rule. | 0 | 1 |

Intended page-mode exception: Narrative for actual chapter and scene readers, not a blanket family `article` → narrative override. Inquiry and craft essays keep Reading. A narrower selector must be admitted before that exception is implemented; until then the base defaults remain as described in Base’s `docs/page-families.md`.

Where a manuscript is absent, the reader layout is complete and says plainly what is present; it never pretends the text exists.

The selected `nocturne/collection-directory.html` uses Base’s bookmark anatomy and responsive behaviour. This world supplies its material and typography; titles, premises and destinations remain complete. Ordinary article indexes retain Base’s compact reading rows.

## Crossing signature

`crossing.nocturne`: a small half-disc, a crescent, bound to the last word, with a soft, slightly lower underline. Violet may tint the mark.

## Must never become

- a sequence that cannot be navigated because atmosphere took its place;
- unpublished content leaking into public feeds, search, previews or indexes; authorised private draft review remains distinct from distribution;
- figures suppressed or rewritten into approximate prose for atmosphere;
- a generative-storytelling or production claim made by the design;
- an empty monumental landscape standing for every inquiry, or fictional imagery presented as textual or scientific evidence;
- an intake or selling surface the world's content does not own;
- default browser controls on dark ground;
- decorative effects that replace the subject, obscure the reading or imply evidence the source does not supply.
- unconsidered design choices covered by the catalogue in [the shared review instructions](AGENTS.md#shared-design-review).

## Still to implement

- A chapter-specific selector is not implemented. Existing chapter content keeps the Reading family; an absent manuscript does not become an empty story page.

## Not yet drawn

These remain design work because the accepted opening uses authored paintings and scene records, not these general-purpose effects. Each needs its own composition and review; none should replace the accepted passage merely to demonstrate a token.

- **Horizon field:** many concentric tilted ellipses around a low centre, with a crescent set above; under inquiry the rings spread and soften outward from the centre, thinning as they go, and release draws them back to the composed still.
- **Scene plate:** a full-bleed emulsion plate between passages, no margin; as the reader arrives, focus rocks about its rest plane across the depth planes, near then far, each pass shallower, and settles into the composed still. This would use the proposed four receding planes and soft casts.
- **Emulsion substrate:** for one region deeper emulsion spreads outward from the passage and softens its margins, then recedes as the reader resumes. Dissolving through the ground, moving through a surface and an object passing across the view are possible joins; the subject’s action must justify each one.

## Why it has this shape

**Keep the illustrated journey one place.** A source-owned edit establishes the relation between near and distant views. Cropping or deforming a figure cannot substitute for an authored action. Each study reconstructs its painting at rest, and emergence follows its painted material rather than a generic oval mask.

**Finish one scene before the next takes attention.** Action resolves into a reading hold, captions and marginal marks clear, and the join dissolves through the same material. This keeps a finished scene from covering the next heading. Source layers, edit and words have one owner; Base supplies reversible playback and text progression through bounded scene boxes. A second controller would create competing timing and geometry.

**Keep orientation through the atmosphere.** A clear reading field, responsive caption placement and complete native storyboard preserve the account when motion, screen height or decoding cannot support the enhanced passage. Optical navigation stays legible over bright art, with a solid reading surface when the film is not pinned. Collection bookmarks, article rows, focus and reading tools retain Base’s behavior.

**Let an essay remain an essay.** Inquiry and craft writing keep Reading. Actual chapters can earn Narrative and ordered continuation; atmosphere supplies neither a manuscript nor serial fiction in every article, establishes no story canon and gives Home no permanent cosmology.

**Make dark a deliberate expression.** Dark is the default, with a complete light expression rather than a loss of choice. Scene light follows the setting. Interface bloom marks held state and stays clear of text; it does not dictate every character or light source. Captured [tokens](tokens/SOURCE.md) and [fonts](fonts/SOURCE.md) preserve the implementation inputs, not a new design approval.
