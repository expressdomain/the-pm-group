// export const onInitialClientRender = () => {
//   // wait to init GTM until after React has hydrated in this lifecycle
//   const dataLayer = window.dataLayer || []
//   dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
// }

// function initGTM() {
//   if (window.isGTMLoaded) {
//     return false
//   }

//   window.isGTMLoaded = true

//   const script = document.createElement("script")

//   script.type = "text/javascript"
//   script.async = true
//   script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}`

//   script.onload = () => {
//     const dataLayer = window.dataLayer || []
//     function gtag() {
//       dataLayer.push(arguments)
//     }
//     gtag("js", new Date())

//     gtag("config", `${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}`)
//   }

//   document.head.appendChild(script)
// }

// function loadGTM(event) {
//   initGTM()
//   event.currentTarget.removeEventListener(event.type, loadGTM)
// }

// exports.onClientEntry = () => {
//   document.onreadystatechange = () => {
//     if (document.readyState !== "loading") {
//       setTimeout(initGTM, 3500)
//     }
//   }

//   document.addEventListener("scroll", loadGTM)
//   document.addEventListener("mousemove", loadGTM)
//   document.addEventListener("touchstart", loadGTM)
// }
