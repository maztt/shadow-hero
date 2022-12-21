class ImageFilterGenerator {
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
    previewImg,
    contrast,
    contrastRef,
    brightness,
    brightnessRef,
    grayscale,
    grayscaleRef,
    hueRotation,
    hueRotationRef,
    saturation,
    saturationRef,
    sepia,
    sepiaRef,
    dropshadow,
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
    this.previewImg = previewImg
    this.contrast = contrast
    this.contrastRef = contrastRef
    this.brightness = brightness
    this.brightnessRef = brightnessRef
    this.grayscale = grayscale
    this.grayscaleRef = grayscaleRef
    this.hueRotation = hueRotation
    this.hueRotationRef = hueRotationRef
    this.saturation = saturation
    this.saturationRef = saturationRef
    this.sepia = sepia
    this.sepiaRef = sepiaRef
    this.dropshadow = dropshadow
    this.dropshadowRef = dropshadow.checked; // Validar
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
    this.contrastRef.value = this.contrast.value
    this.brightnessRef.value = this.brightness.value
    this.grayscaleRef.value = this.grayscale.value
    this.hueRotationRef.value = this.hueRotation.value
    this.saturationRef.value = this.saturation.value
    this.sepiaRef.value = this.sepia.value


    this.applyRule()
    this.showRule()
  }

  applyRule() {
    const rgbValue = this.hexToRgb(this.colorRef.value);

    const shadowRule = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px rgba(${rgbValue}, ${this.opacityRef.value})`;

    this.previewImg.style.imgFilter = shadowRule;
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
      case "contrast":
        this.contrastRef.value = value;
        break
      case "brightness":
        this.brightnessRef.value = value;
        break
      case "grayscale":
        this.grayscaleRef.value = value;
        break
      case "hueRotation":
        this.hueRotationRef.value = value;
        break
      case "saturation":
        this.saturationRef.value = value;
        break
      case "sepia":
        this.sepiaRef.value = value;
        break
      case "dropshadow":
        if (dropshadow.checked) {
          this.dropshadowRef = value;
        } else {
          this.dropshadowRef = "";
        }
        break
      case "other":
        if (other.checked) {
          this.otherRef = value;
        } else {
          this.otherRef = "";
        }
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

const contrast = document.querySelector('#contrast')
const contrastRef = document.querySelector('#contrast-value')
const brightness = document.querySelector('#brightness')
const brightnessRef = document.querySelector('#brightness-value')
const grayscale = document.querySelector('#grayscale')
const grayscaleRef = document.querySelector('#grayscale-value')
const hueRotation = document.querySelector('#hueRotation')
const hueRotationRef = document.querySelector('#hueRotation-value')
const saturation = document.querySelector('#saturation')
const saturationRef = document.querySelector('#saturation-value')
const sepia = document.querySelector('#sepia')
const sepiaRef = document.querySelector('#sepia-value')


const other = document.querySelector('#other')
const dropshadow = document.querySelector('#dropshadow')

const previewImg = document.querySelector('#box')

const rule = document.querySelector('#rule span')
const webkitRule = document.querySelector('#webkit-rule span')
const mozRule = document.querySelector('#moz-rule span')

const rulesArea = document.querySelector('#rules-area');
const copyConfig = document.querySelector("#copy-config")


const imgFilter = new ImageFilterGenerator(
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
  previewImg,
  contrast,
  contrastRef,
  brightness,
  brightnessRef,
  grayscale,
  grayscaleRef,
  hueRotation,
  hueRotationRef,
  saturation,
  saturationRef,
  sepia,
  sepiaRef,
  dropshadow,
  rule,
  webkitRule,
  mozRule
)

imgFilter.initialize()


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

  imgFilter.updateValue("horizontal", value)
})

vertical.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("vertical", value)
})

blur.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("blur", value)
})

color.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("color", value)
})

opacity.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("opacity", value)
})

contrast.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("contrast", value)
})

brightness.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("brightness", value)
})

grayscale.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("grayscale", value)
})

hueRotation.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("hueRotation", value)
})

saturation.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("saturation", value)
})

sepia.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("sepia", value)
})

dropshadow.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("dropshadow", value)
})

other.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("other", value)
})