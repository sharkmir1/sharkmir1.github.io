import styles from './textParse.module.css'


export const formatLabel = (str) => {

  // const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/
  // const boldRegex = /\*\*([^*]*)\*\*/
  // console.log("str: (type) ", typeof str, "(value) ", str)
  var parts = str.split( /\[(.*)\]\((.*)\)|\*\*(.*)\*\*/);
  console.log("parts: ", parts)
  parts = parts.filter(function( element ) {
    return element !== undefined;
  });

  console.log("parts: ", parts)

  for (var i = 0; i < parts.length; i += 1) {
    if (parts[i].charAt(0) === "*" && parts[i].charAt(parts[i].length-1) === "*") {
      // bold
      let strBetweenAstericks = parts[i].substring(1, parts[i].length-1)
      parts[i] = <b className={styles.emphasize} >{strBetweenAstericks}</b>
    } else if (parts[i].charAt(0) === "[") {
      // link
      console.log("i: ", i, "parts[i]: ", parts[i], "parts[i+1]: ", parts[i+1])
      parts[i] = <a className={styles.externalLink} href={parts[i+1].slice(0, -1)} target="_blank">{parts[i].substring(1)}</a>;
      parts[i+1] = ""
      i = i + 1
    }
  }

  return <div>{parts}</div>;
};
  