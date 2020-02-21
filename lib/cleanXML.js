
module.exports = function cleanXML(xml, escapeEndLines) {
    let escapedXml = xml.replace(/>\s*</g, '><') //remove white spaces between elements
						.replace(/<\?xml.*\?>/g, '') //remove the root element
						.replace(/<!--.*-->/g,'') //remove comments
						.replace(/>\s*/g, '>') // remove any white spaces at the end of the xml string if any
						.replace(/\s*</g, '<') // remove any white spaces that are left at the beginning of the xml string
						.replace(/<!\[CDATA\[/g,'') //remove CDATA text
						.replace(/]]>/g,'') //remove CDATA text
						
	return (escapeEndLines) ? escapedXml.replace(/\r/g, "\\r").replace(/\n/g, "\\n") : escapedXml				 
}