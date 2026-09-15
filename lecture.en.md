# Designing Better Page Layouts

One learning dashboard, from clutter to clarity

## 6.1 Information & Visual Hierarchy

Decide what users need to see before placing elements. Throughout this chapter, we improve one learning dashboard: students first check progress, then explore trends and course distribution.

### Experiment task

Place key metrics before the trend chart and inspect groups using region outlines. Compare the two versions: can you find weekly study time more quickly?

### Let the task set the order

The primary task is to check learning progress; the secondary task is to understand why it changed. Show summary metrics before trends and course distribution. List the content and rank its importance before styling it, so every module does not compete equally.

### Group related content into regions

Navigation selects a location, the toolbar offers actions, and the main area presents results. Keep content serving the same task close together and separate groups with space. Backgrounds and borders support grouping but cannot replace clear organization.

### Build a recognizable hierarchy

Emphasize key values such as weekly study time, followed by module titles, then supporting units and time ranges. Use size, weight, position and spacing together. Do not rely only on color or enlarge every heading.

### Document order is reading order

Semantic structure should remain readable without decoration. CSS positioning does not necessarily change keyboard or screen-reader order. This case places summaries before charts in the document. The “Before” view is a teaching counterexample, not a final layout.

### Key point

Use grouping and order to decide what is shown, then hierarchy to guide what is seen first.

### Why this code

The sidebar has a fixed width while minmax(0,1fr) gives remaining space to the content. Metrics precede charts in the document so visual order supports the reading task.

### Common pitfalls

Do not rely only on CSS order to promote important content: keyboard and assistive reading order may still follow the document. The Before view illustrates a problem; the final document should use a sensible content order.

[Standalone demo](demo/index.html?lesson=1&lang=en)

## 6.2 Whitespace & Spacing

Keep the previous information structure and adjust the metric card’s internal space. Whitespace should communicate relationships while keeping the card readable within a limited width.

### Experiment task

Keep the declared width fixed, increase padding, then switch box models. Observe whether content width or border-box width changes and explain why.

### Closer within groups, wider between groups

“Weekly study” and “18.5 hours” form one group and should be closer to each other than to the next card. This illustrates proximity: distance helps people recognize relationships. Whitespace is a tool for organizing information, not leftover space.

### Use a scale, not rigid numbers

A scale such as 4, 8, 16, 24 and 32px reduces arbitrary choices. It does not prohibit other values. Adapt spacing to content density, text length and available space, while keeping similar components consistent.

### Separate declared width from occupied width

With content-box, width sets the content width; add horizontal padding and borders to obtain the border-box width. With border-box, width already includes them. Margin is outside the border and belongs to neither declared width. This demo reports actual box dimensions and horizontal footprint including margins.

### Make spacing serve reading

Too little padding crowds text against the edge; too much reduces content space and may cause excessive wrapping. No single number is correct for every page. Judge the title, value and note together, and compare the English version.

### Key point

Decide whether space belongs inside a component or between components, then choose padding, gap or margin.

### Why this code

Border-box includes padding and borders in the declared width, helping control card boundaries. Content-box makes the additional space outside content visible. Margins are accounted for separately in both modes.

### Common pitfalls

Do not call the horizontal footprint including margins the element width, or increase padding without limits. At a fixed declared width, border-box reduces content space, so text wrapping needs checking.

[Standalone demo](demo/index.html?lesson=2&lang=en)

## 6.3 Local Alignment with Flexbox

Arrange the same dashboard’s filter bar: let the search field flex, keep the course selector readable, and allow wrapping when space is limited.

### Experiment task

Use longer labels and reduce preview width to 390px. Compare wrapping on and off, then inspect changes to the main and cross axes.

### Alignment creates a stable reference

Search and filtering belong to one task group. Shared edges and vertical alignment reduce visual jumps. When text sizes or control heights differ, deliberately choose center, start or baseline alignment instead of moving each element individually.

### Identify the one-dimensional relationship

A toolbar mainly arranges items along one line, so Flex is suitable. Direction sets the main axis; justify-content distributes space along it, while align-items aligns the cross axis. With column, the main axis becomes vertical and the property directions change accordingly.

### Decide what may flex

The search region uses flex:1 1 220px to share available space; the course region retains its content size. These rules express priorities better than fixed widths on every control, but minimum readable sizes still need checking.

### Wrapping is a layout decision

When space is limited, wrapping is often clearer than squeezing text. Gap keeps consistent spacing between items without adding outer-edge space. If columns must align across rows, use Grid rather than repeatedly adjusting Flex items.

### Key point

Use Flex to describe local relationships: what flexes, how items align, and when they wrap.

### Why this code

The search area may grow and shrink while the filter retains its content size. Wrap and gap preserve relationships on narrow screens. Column direction changes the main axis, so alignment must be interpreted with direction.

### Common pitfalls

Fixed widths combined with no wrapping can overflow with long text. Disable wrap to observe the problem, then check long labels in both languages when choosing a final layout.

[Standalone demo](demo/index.html?lesson=3&lang=en)

## 6.4 Grid & Content Priority

Place metrics, the learning trend and course distribution in one grid. Use proportions and spans to give primary information enough reading space.

### Experiment task

Compare equal columns, primary/secondary columns and a spanning layout. Observe the main chart’s readable width, enable column guides and compare the tracks with the code below.

### A grid coordinates regions

A grid creates shared column edges, bringing order to summaries, charts and notes. It is more than dividing content into equal parts. Decide each module’s role and minimum space requirements before choosing columns and spans.

### Proportion should reflect information value

A learning trend shows change over time and often needs more width than course distribution. This case starts with a 2:1 ratio; equal columns may be appropriate when comparing courses is the main task. Quality depends on the task, not a universal best ratio.

### Understand free space and minimum sizes

The fr unit distributes available track space. minmax(0,1fr) allows tracks to shrink; children still need rules such as min-width:0 to avoid content expansion. Allowing shrinkage does not ensure readable text, so narrow layouts still need reflow.

### Spanning establishes shared edges

A summary spanning two columns aligns with the combined outer edges of the charts below. The demo guides use the same column template and current gap. They show actual tracks rather than decorative background squares.

### Key point

Let content determine the grid, then use shared tracks to keep module boundaries consistent.

### Why this code

Shared tracks align module boundaries. The 2:1 option gives the trend more space, while spanning aligns the summary with the whole grid. Guides use the same tracks and gap.

### Common pitfalls

Do not assign 50% to each of two cards and then add a gap, or interpret fr as fixed pixels. Shrinkable tracks still need readability checks; narrow layouts may need one column.

[Standalone demo](demo/index.html?lesson=4&lang=en)

## 6.5 Responsive Layout & Content

Resize the same dashboard and observe its transition between one and multiple columns. The demo uses an independent page viewport and real media queries; the number is the inner viewport width.

### Experiment task

Inspect 519, 520, 759 and 760px and explain which rule becomes active. Verify that course distribution remains available, then try the narrow-screen navigation menu.

### Let content determine breakpoints

This case uses 520px and 760px as demonstration breakpoints chosen for its layout. They are not universal device categories. In a real project, narrow the page gradually and choose reflow points where modules become crowded or difficult to read.

### Support narrow-screen tasks first

The default layout is one column. At 520px, metrics become multiple columns; at 760px, a sidebar and two chart columns appear. This progressively enhances a simple baseline. Wider screens show more information together rather than enlarging text indefinitely.

### Reflow without losing content

On narrow screens, course distribution moves below the main chart and navigation becomes an expandable menu. Important content must remain accessible. Preserve a sensible document order and verify that controls still work.

### Separate preview and host page

The slider changes the preview’s inner viewport, not the whole browser window. If the preview exceeds the host screen, scroll horizontally; the system does not silently shrink it or alter its label. The teaching page itself also needs its own responsive layout.

### Key point

Responsive design preserves tasks and information by reorganizing content for different spaces.

### Why this code

One column is the baseline; 520px and 760px progressively add columns and navigation space. The demo uses a real independent viewport and shares media queries between the code and rendering.

### Common pitfalls

Do not treat 520/760px as universal device standards or hide charts merely to save space. Check around 519/520/759/760px and verify access to content after expanding navigation.

[Standalone demo](demo/index.html?lesson=5&lang=en)

## 6.6 Composition & Review

Apply the previous five lessons to the same learning dashboard and compare the initial counterexample with the improved version. The result should look clear and explain the reasoning behind each layout choice.

### Experiment task

Compare both versions at desktop and phone widths. Review hierarchy, spacing, alignment and content retention, then switch language to check longer text.

### Validate hierarchy against the task

Can users first find weekly study time, completed courses and goal progress? Can they then locate trends and course distribution? Concrete finding tasks validate the reading path more reliably than asking only whether the page looks attractive.

### Compose tools rather than patches

Grid arranges major regions, Flex organizes the local toolbar, and normal flow structures cards. Connect them with shared spacing and minimum-width constraints. Local components should tolerate content changes without depending on accidental dimensions elsewhere.

### Check language and size changes

English may require more horizontal space. Language switching should preserve the current lesson and demo parameters; then inspect wrapping in buttons, headings and cards. Hiding primary content is not a valid way to conceal overflow.

### Distinguish a layout prototype from a data product

Charts and values are simulated teaching content focused on module layout; they do not support conclusions about real learning performance. The filter bar demonstrates arrangement. Full data querying and export are outside this chapter, so there is no inactive export button.

### Key point

Demonstrate improvements through explainable principles, working code and observable interaction.

### Why this code

Grid organizes the whole page, Flex handles the toolbar, and cards use normal flow. Shared rules maintain content relationships across screen sizes and languages.

### Common pitfalls

Do not confuse decorative squares with real column guides or remove secondary charts to claim successful adaptation. Compare finding tasks, content retention and readability before refining colors or shadows.

[Standalone demo](demo/index.html?lesson=6&lang=en)

