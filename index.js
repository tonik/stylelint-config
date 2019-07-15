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
    "number-leading-zero": "never",
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
      "display",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "order",
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
      "float",
      "clear",
      "clip",
      "columns",
      "column-gap",
      "column-fill",
      "column-rule",
      "column-span",
      "column-count",
      "column-width",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
      "background-size",
      "color",
      "font",
      "font-family",
      "font-size",
      "font-smoothing",
      "font-style",
      "font-variant",
      "font-weight",
      "letter-spacing",
      "line-height",
      "list-style",
      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-wrap",
      "white-space",
      "word-spacing",
      "border-collapse",
      "border-spacing",
      "box-shadow",
      "caption-side",
      "content",
      "cursor",
      "empty-cells",
      "opacity",
      "overflow",
      "quotes",
      "speak",
      "table-layout",
      "vertical-align",
      "visibility"
    ]
  }
};
