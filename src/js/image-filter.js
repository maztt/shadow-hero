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
    checkOpacity,
    previewImg,
    contrast,
    contrastRef,
    checkContrast,
    brightness,
    brightnessRef,
    checkBrightness,
    grayscale,
    grayscaleRef,
    checkGrayscale,
    hueRotation,
    hueRotationRef,
    checkHueRotation,
    saturation,
    saturationRef,
    checkSaturation,
    sepia,
    sepiaRef,
    checkSepia,
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
    this.checkOpacity = checkOpacity
    this.checkOpacityRef = checkOpacity.checked;
    this.previewImg = previewImg
    this.contrast = contrast
    this.contrastRef = contrastRef
    this.checkContrast = checkContrast
    this.checkContrastRef = checkContrast.checked;
    this.brightness = brightness
    this.brightnessRef = brightnessRef
    this.checkBrightness = checkBrightness
    this.checkBrightnessRef = checkBrightness.checked;
    this.grayscale = grayscale
    this.grayscaleRef = grayscaleRef
    this.checkGrayscale = checkGrayscale
    this.checkGrayscaleRef = checkGrayscale.checked;
    this.hueRotation = hueRotation
    this.hueRotationRef = hueRotationRef
    this.checkHueRotation = checkHueRotation
    this.checkHueRotationRef = checkHueRotation.checked;
    this.saturation = saturation
    this.saturationRef = saturationRef
    this.checkSaturation = checkSaturation
    this.checkSaturationRef = checkSaturation.checked;
    this.sepia = sepia
    this.sepiaRef = sepiaRef
    this.checkSepia = checkSepia
    this.checkSepiaRef = checkSepia.checked;
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

    const shadowRule = `${this.dropshadowRef ? `drop-shadow(${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px rgba(${rgbValue}))` : ""} ${this.checkContrastRef ? `contrast(${this.contrastRef.value}%)` : ""} ${this.checkBrightnessRef ? `brightness(${this.brightnessRef.value}%)` : ""} ${this.checkGrayscaleRef ? `grayscale(${this.grayscaleRef.value}%)` : ""} ${this.checkHueRotationRef ? `hue-rotate(${this.hueRotationRef.value}deg)` : ""} ${this.checkOpacityRef ? `opacity(${this.opacityRef.value}%)` : ""} ${this.checkSaturationRef ? `saturate(${this.saturationRef.value}%)` : ""} ${this.checkSepiaRef ? `sepia(${this.sepiaRef.value}%)` : ""}`;

    
    this.previewImg.style.filter = shadowRule;
    this.currentRule = shadowRule;
    
    if (
      !this.dropshadowRef &&
      !this.checkBrightnessRef &&
      !this.checkContrastRef &&
      !this.checkGrayscaleRef &&
      !this.checkHueRotationRef &&
      !this.checkOpacityRef &&
      !this.checkSaturationRef &&
      !this.checkSepiaRef
    ) {
      this.previewImg.style.filter = 'none';
    }
  }

  showRule() {
    this.rule.innerText = this.currentRule;
    this.webkitRule.innerText = this.currentRule;
    this.mozRule.innerText = this.currentRule;

    if (
      !this.dropshadowRef &&
      !this.checkBrightnessRef &&
      !this.checkContrastRef &&
      !this.checkGrayscaleRef &&
      !this.checkHueRotationRef &&
      !this.checkOpacityRef &&
      !this.checkSaturationRef &&
      !this.checkSepiaRef
    ) {
      this.rule.innerText = 'none';
      this.webkitRule.innerText = 'none';
      this.mozRule.innerText = 'none';
    }
  }

  hexToRgb(hex) {
    return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${("0x" + hex[5] + hex[6]) | 0}`;
  }

  updateValue(type, value) {

    switch(type) {

      // SLIDERS
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

      // CHECKBOXES
      case "dropshadow":
        if (filterDropshadow.checked) {
          this.dropshadowRef = value;
        } else {
          this.dropshadowRef = "";
        }
        break
      case "checkContrast":
        if (checkContrast.checked) {
          this.checkContrastRef = value;
        } else {
          this.checkContrastRef = "";
        }
        break
      case "checkBrightness":
        if (checkBrightness.checked) {
          this.checkBrightnessRef = value;
        } else {
          this.checkBrightnessRef = "";
        }
        break
      case "checkGrayscale":
        if (checkGrayscale.checked) {
          this.checkGrayscaleRef = value;
        } else {
          this.checkGrayscaleRef = "";
        }
        break
      case "checkHueRotation":
        if (checkHueRotation.checked) {
          this.checkHueRotationRef = value;
        } else {
          this.checkHueRotationRef = "";
        }
        break
      case "checkOpacity":
        if (checkOpacity.checked) {
          this.checkOpacityRef = value;
        } else {
          this.checkOpacityRef = "";
        }
        break
      case "checkSaturation":
        if (checkSaturation.checked) {
          this.checkSaturationRef = value;
        } else {
          this.checkSaturationRef = "";
        }
        break
      case "checkSepia":
        if (checkSepia.checked) {
          this.checkSepiaRef = value;
        } else {
          this.checkSepiaRef = "";
        }
        break
    }

    this.applyRule()
    this.showRule()
  }
}

const filterHorizontal = document.querySelector('#filter-horizontal')
const filterHorizontalRef = document.querySelector('#filter-horizontal-value')
const filterVertical = document.querySelector('#filter-vertical')
const filterVerticalRef = document.querySelector('#filter-vertical-value')
const filterBlur = document.querySelector('#filter-blur')
const filterBlurRef = document.querySelector('#filter-blur-value')
const filterColor = document.querySelector('#filter-color')
const filterColorRef = document.querySelector('#filter-color-value')
const filterOpacity = document.querySelector('#filter-opacity')
const filterOpacityRef = document.querySelector('#filter-opacity-value')

const filterContrast = document.querySelector('#filter-contrast')
const filterContrastRef = document.querySelector('#filter-contrast-value')
const filterBrightness = document.querySelector('#filter-brightness')
const filterBrightnessRef = document.querySelector('#filter-brightness-value')
const filterGrayscale = document.querySelector('#filter-grayscale')
const filterGrayscaleRef = document.querySelector('#filter-grayscale-value')
const filterHueRotation = document.querySelector('#filter-hueRotation')
const filterHueRotationRef = document.querySelector('#filter-hueRotation-value')
const filterSaturation = document.querySelector('#filter-saturation')
const filterSaturationRef = document.querySelector('#filter-saturation-value')
const filterSepia = document.querySelector('#filter-sepia')
const filterSepiaRef = document.querySelector('#filter-sepia-value')

const filterDropshadow = document.querySelector('#filter-dropshadow')
const checkContrast = document.querySelector('#check-contrast')
const checkBrightness = document.querySelector('#check-brightness')
const checkGrayscale = document.querySelector('#check-grayscale')
const checkHueRotation = document.querySelector('#check-hueRotation')
const checkOpacity = document.querySelector('#check-opacity')
const checkSaturation = document.querySelector('#check-saturation')
const checkSepia = document.querySelector('#check-sepia')

const previewImg = document.querySelector('#image')

const filterRule = document.querySelector('#filter-rule span')
const filterWebkitRule = document.querySelector('#filter-webkit-rule span')
const filterMozRule = document.querySelector('#filter-moz-rule span')

const filterRulesArea = document.querySelector('#filter-rules-area');
const filterCopyConfig = document.querySelector("#filter-copy-config")


const imgFilter = new ImageFilterGenerator(
  filterHorizontal,
  filterHorizontalRef,
  filterVertical,
  filterVerticalRef,
  filterBlur,
  filterBlurRef,
  filterColor,
  filterColorRef,
  filterOpacity,
  filterOpacityRef,
  checkOpacity,
  previewImg,
  filterContrast,
  filterContrastRef,
  checkContrast,
  filterBrightness,
  filterBrightnessRef,
  checkBrightness,
  filterGrayscale,
  filterGrayscaleRef,
  checkGrayscale,
  filterHueRotation,
  filterHueRotationRef,
  checkHueRotation,
  filterSaturation,
  filterSaturationRef,
  checkSaturation,
  filterSepia,
  filterSepiaRef,
  checkSepia,
  filterDropshadow,
  filterRule,
  filterWebkitRule,
  filterMozRule
)

imgFilter.initialize()


// EVENTS

filterRulesArea.addEventListener('click', () => {
  const filterRules = filterRulesArea.innerText.replace(/^\s*\n/gm, "");

  navigator.clipboard.writeText(filterRules).then(() => {
    filterCopyConfig.innerText = "Config copied! Apply it to your project.";

    setTimeout(() => {
      filterCopyConfig.innerText = 'Click the area above to copy the current rules';
    }, 1000);
    })
 })

 

filterHorizontal.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("horizontal", value)
})

filterVertical.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("vertical", value)
})

filterBlur.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("blur", value)
})

filterColor.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("color", value)
})

filterOpacity.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("opacity", value)
})

filterContrast.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("contrast", value)
})

filterBrightness.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("brightness", value)
})

filterGrayscale.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("grayscale", value)
})

filterHueRotation.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("hueRotation", value)
})

filterSaturation.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("saturation", value)
})

filterSepia.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("sepia", value)
})

filterDropshadow.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("dropshadow", value)
})

checkContrast.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("checkContrast", value)
})

checkBrightness.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("checkBrightness", value)
})

checkGrayscale.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("checkGrayscale", value)
})

checkHueRotation.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("checkHueRotation", value)
})

checkOpacity.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("checkOpacity", value)
})

checkSaturation.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("checkSaturation", value)
})

checkSepia.addEventListener("input", (e) => {
  const value = e.target.value

  imgFilter.updateValue("checkSepia", value)
})
