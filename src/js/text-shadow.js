class TextShadowGenerator {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    previewText,
    rule,
    webkitRule,
    mozRule
  ) {
    this.horizontal = horizontal
    this.horizontalRef = horizontalRef
    this.vertical = vertical
    this.verticalRef = verticalRef
    this.blur = blur
    this.blurRef = blurRef
    this.color = color
    this.colorRef = colorRef
    this.opacity = opacity
    this.opacityRef = opacityRef
    this.previewText = previewText
    this.rule = rule
    this.webkitRule = webkitRule
    this.mozRule = mozRule
  }

  initialize() {
    this.horizontalRef.value = this.horizontal.value
    this.verticalRef.value = this.vertical.value
    this.blurRef.value = this.blur.value
    this.colorRef.value = this.color.value
    this.opacityRef.value = this.opacity.value

    this.applyRule()
    this.showRule()
  }

  applyRule() {
    const rgbValue = this.hexToRgb(this.colorRef.value);

    const shadowRule = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px rgba(${rgbValue}, ${this.opacityRef.value})`;

    this.previewText.style.textShadow = shadowRule;
    this.currentRule = shadowRule;
  }

  showRule() {
    this.rule.innerText = this.currentRule;
    this.webkitRule.innerText = this.currentRule;
    this.mozRule.innerText = this.currentRule;
  }

  hexToRgb(hex) {
    return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${("0x" + hex[5] + hex[6]) | 0}`;
  }

  updateValue(type, value) {

    switch(type) {
      case "horizontal":
        this.horizontalRef.value = value;
        break
      case "vertical":
        this.verticalRef.value = value;
        break
      case "blur":
        this.blurRef.value = value;
        break
      case "color":
        this.colorRef.value = value;
        break
      case "opacity":
        this.opacityRef.value = value;
        break
    }

    this.applyRule()
    this.showRule()
  }
}

const textHorizontal = document.querySelector('#text-horizontal')
const textHorizontalRef = document.querySelector('#text-horizontal-value')
const textVertical = document.querySelector('#text-vertical')
const textVerticalRef = document.querySelector('#text-vertical-value')
const textBlur = document.querySelector('#text-blur')
const textBlurRef = document.querySelector('#text-blur-value')
const textColor = document.querySelector('#text-color')
const textColorRef = document.querySelector('#text-color-value')
const textOpacity = document.querySelector('#text-opacity')
const textOpacityRef = document.querySelector('#text-opacity-value')

const previewText = document.querySelector('#text')

const textRule = document.querySelector('#text-rule span')
const textWebkitRule = document.querySelector('#text-webkit-rule span')
const textMozRule = document.querySelector('#text-moz-rule span')

const textRulesArea = document.querySelector('#text-rules-area');
const textCopyConfig = document.querySelector("#text-copy-config")


const textShadow = new TextShadowGenerator(
  textHorizontal,
  textHorizontalRef,
  textVertical,
  textVerticalRef,
  textBlur,
  textBlurRef,
  textColor,
  textColorRef,
  textOpacity,
  textOpacityRef,
  previewText,
  textRule,
  textWebkitRule,
  textMozRule
)

textShadow.initialize()


// EVENTS

textRulesArea.addEventListener('click', () => {
  const textRules = textRulesArea.innerText.replace(/^\s*\n/gm, "");

  navigator.clipboard.writeText(textRules).then(() => {
    textCopyConfig.innerText = "Config copied! Apply it to your project.";

    setTimeout(() => {
      textCopyConfig.innerText = 'Click the area above to copy the current rules';
    }, 1000);
    })
 })

 

textHorizontal.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("horizontal", value)
})

textVertical.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("vertical", value)
})

textBlur.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("blur", value)
})

textColor.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("color", value)
})

textOpacity.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("opacity", value)
})