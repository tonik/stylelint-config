module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": {
    "indentation": 2,
    "string-quotes": "double",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "selector-no-qualifying-type": true,
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "shorthand-property-no-redundant-values": true,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "number-max-precision": 3,
    "function-url-quotes": "always",
    "function-parentheses-space-inside": "never-single-line",
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-where-required",
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": "always",
    "at-rule-no-vendor-prefix": true,
    "rule-empty-line-before": ["always", {
      "except": ["first-nested"]
    }],
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        {
          "type": "at-rule",
          "name": "media"
        },
        "rules"
      ]
    ]
  }
};
