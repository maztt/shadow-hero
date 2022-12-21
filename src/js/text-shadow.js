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

const horizontal = document.querySelector('#horizontal')
const horizontalRef = document.querySelector('#horizontal-value')
const vertical = document.querySelector('#vertical')
const verticalRef = document.querySelector('#vertical-value')
const blur = document.querySelector('#blur')
const blurRef = document.querySelector('#blur-value')
const color = document.querySelector('#color')
const colorRef = document.querySelector('#color-value')
const opacity = document.querySelector('#opacity')
const opacityRef = document.querySelector('#opacity-value')

const previewText = document.querySelector('#text')

const rule = document.querySelector('#rule span')
const webkitRule = document.querySelector('#webkit-rule span')
const mozRule = document.querySelector('#moz-rule span')

const rulesArea = document.querySelector('#rules-area');
const copyConfig = document.querySelector("#copy-config")


const textShadow = new TextShadowGenerator(
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
)

textShadow.initialize()


// EVENTS

rulesArea.addEventListener('click', () => {
  const rules = rulesArea.innerText.replace(/^\s*\n/gm, "");

  navigator.clipboard.writeText(rules).then(() => {
    copyConfig.innerText = "Config copied! Apply it to your project.";

    setTimeout(() => {
      copyConfig.innerText = 'Click the area above to copy the current rules';
    }, 1000);
    })
 })

 

horizontal.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("horizontal", value)
})

vertical.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("vertical", value)
})

blur.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("blur", value)
})

color.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("color", value)
})

opacity.addEventListener("input", (e) => {
  const value = e.target.value

  textShadow.updateValue("opacity", value)
})