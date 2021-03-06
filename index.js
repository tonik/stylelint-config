module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": {
    "indentation": 2,
    "string-quotes": "double",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute"]
    }],
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "shorthand-property-no-redundant-values": true,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-newline-after": "always-multi-line",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "number-leading-zero": "always",
    "number-max-precision": 3,
    "function-url-quotes": "always",
    "function-parentheses-space-inside": "never-single-line",
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-unless-keyword",
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": "always",
    "at-rule-no-vendor-prefix": true,
    "rule-empty-line-before": ["always", {
      "except": ["first-nested", "after-single-line-comment"],
      "ignore": ["after-comment"]
    }],
    "at-rule-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment", "blockless-after-same-name-blockless"]
    }],
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-class-pattern": ["^[a-z0-9-_]+$", {
      "resolveNestedSelectors": true,
      "message": "Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)"
    }],
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",
    "order/order": [
      [
        "custom-properties",
        "declarations",
        {
          "type": "at-rule",
          "name": "media"
        },
        "rules"
      ]
    ],
    "order/properties-order": [
      // Positioning
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",

      // Model
      "display",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "grid",
      "grid-area",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-gap",
      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "grid-row-gap",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-column-gap",
      "grid-template",
      "grid-template-areas",
      "grid-template-rows",
      "grid-template-columns",
      "gap",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "justify-items",
      "justify-self",
      "order",
      "float",
      "clear",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",

      // Typography
      "color",
      "font",
      "font-weight",
      "font-size",
      "font-family",
      "font-style",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "line-height",
      "direction",
      "letter-spacing",
      "white-space",
      "text-align",
      "text-align-last",
      "text-transform",
      "text-decoration",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-indent",
      "text-justify",
      "text-outline",
      "text-wrap",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-orientation",
      "text-shadow",
      "vertical-align",
      "word-wrap",
      "word-break",
      "word-spacing",
      "overflow-wrap",
      "tab-size",
      "hyphens",
      "unicode-bidi",
      "columns",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "src",

      // Visual
      "border",
      "border-color",
      "border-style",
      "border-width",
      "border-top",
      "border-top-color",
      "border-top-width",
      "border-top-style",
      "border-right",
      "border-right-color",
      "border-right-width",
      "border-right-style",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-width",
      "border-bottom-style",
      "border-left",
      "border-left-color",
      "border-left-width",
      "border-left-style",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-collapse",
      "border-spacing",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "table-layout",
      "empty-cells",
      "caption-side",
      "background",
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-size",
      "background-clip",
      "background-origin",
      "background-attachment",
      "background-blend-mode",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "box-shadow",
      "box-decoration-break",
      "transform",
      "transform-origin",
      "transform-style",
      "backface-visibility",
      "perspective",
      "perspective-origin",
      "visibility",
      "cursor",
      "opacity",
      "filter",
      "isolation",
      "backdrop-filter",
      "mix-blend-mode",

      // Animation
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",

      // Misc
      "appearance",
      "content",
      "clip",
      "clip-path",
      "counter-reset",
      "counter-increment",
      "resize",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "pointer-events",
      "quotes",
      "touch-action",
      "will-change",
      "zoom",
      "fill",
      "fill-rule",
      "clip-rule",
      "stroke",
    ]
  }
};
